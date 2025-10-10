import * as admin from "firebase-admin";
import * as sgMail from "@sendgrid/mail";
import Mailchimp from "mailchimp-api-v3";

// Import v2 Firestore specific functions and the logger from the main firebase-functions module
import {
  onDocumentCreated,
  onDocumentUpdated,
} from "firebase-functions/v2/firestore";
import { logger } from "firebase-functions"; // Only import logger now, as config() is deprecated
import { defineSecret } from "firebase-functions/v2/secrets"; // Import defineSecret for Secret Manager

// Initialize Firebase Admin SDK (used for accessing Firestore)
admin.initializeApp();

// --- 1. ENVIRONMENT & SERVICE SETUP ---

// --- Define Secrets using Firebase Secret Manager ---
// These secrets need to be created and managed via the Firebase CLI
// e.g., `firebase functions:secrets:set SENDGRID_API_KEY`
// and then bound to the function during deployment.
const SENDGRID_API_KEY_SECRET = defineSecret("SENDGRID_API_KEY");
const MAILCHIMP_API_KEY_SECRET = defineSecret("MAILCHIMP_API_KEY");
const MAILCHIMP_LIST_ID_SECRET = defineSecret("MAILCHIMP_LIST_ID"); // Treat list ID as a secret for now

// --- Define Environment Variables ---
// These are set via `firebase functions:config:set` or `firebase functions:env:add`
// For v2, prefer `firebase functions:env:add ADMIN_EMAIL=admin@frankmolla.com`
// We'll use process.env to access them
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@frankmolla.com"; // Fallback for local testing
const SENDER_EMAIL = process.env.SENDER_EMAIL || "no-reply@frankmolla.com"; // Fallback for local testing

// Initialize SendGrid Service
// Access secrets via process.env after they are defined and bound to the function
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Initialize Mailchimp Service
let mailchimp: Mailchimp | undefined;
if (process.env.MAILCHIMP_API_KEY) {
  mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
}

// --- 2. FIRESTORE TRIGGER: NEW APPLICATION SUBMISSION (CREATE) ---

/**
 * Triggers when a new mentee document is created (via the public application form).
 *
 * This handles:
 * 1. Application Received Confirmation (Mentee)
 * 2. New Mentee Application Alert (Client/Admin)
 * 3. Marketing List Subscription (Mailchimp)
 */
export const onMenteeCreate = onDocumentCreated(
  {
    document: "artifacts/{appId}/public/data/mentees/{menteeId}",
    secrets: [
      SENDGRID_API_KEY_SECRET,
      MAILCHIMP_API_KEY_SECRET,
      MAILCHIMP_LIST_ID_SECRET,
    ], // Bind secrets here
  },
  async (event) => {
    // Access Secret Manager secrets via process.env
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

    if (!event.data) {
      logger.warn("No data associated with the onCreate event.");
      return null;
    }
    const mentee = event.data.data();
    if (!mentee) {
      logger.warn("Mentee data is undefined in onCreate event.");
      return null;
    }

    const menteeEmail = mentee.email;
    const menteeName = mentee.fullName || "Applicant";

    const emailPromises: Promise<any>[] = [];

    // --- A. Send Confirmation to Mentee ---
    const menteeConfirmationMsg = {
      to: menteeEmail,
      from: SENDER_EMAIL,
      subject:
        "Confirmation: Your Mentorship Application to FrankMolla has been received.",
      html: `
                <p>Hello ${menteeName},</p>
                <p>Thank you for submitting your application to the FrankMolla Mentorship Program. We have successfully received your submission.</p>
                <p>We will review your application shortly, typically within 5-7 business days. Please wait for a follow-up email regarding your status.</p>
                <p>Regards,<br>Frank Molla Team</p>
            `,
    };
    emailPromises.push(sgMail.send(menteeConfirmationMsg));

    // --- B. Send Alert to Client/Admin ---
    const adminAlertMsg = {
      to: ADMIN_EMAIL,
      from: SENDER_EMAIL,
      subject: `URGENT: New Mentee Application Submitted - ${menteeName}`,
      html: `
                <p>A new mentee application has been submitted by <strong>${menteeName}</strong> (Email: ${menteeEmail}).</p>
                <p>Area of Interest: ${mentee.areaOfInterest || "N/A"}</p>
                <p>Login to the Admin Dashboard to review the full profile and update their status.</p>
            `,
    };
    emailPromises.push(sgMail.send(adminAlertMsg));

    // --- C. Add to Mailchimp List ---
    if (mailchimp && MAILCHIMP_LIST_ID) {
      try {
        // Mailchimp requires the email to be lowercase and uses a hash for existence check
        await mailchimp.post(`/lists/${MAILCHIMP_LIST_ID}/members`, {
          email_address: menteeEmail,
          status: "pending", // Use 'pending' for double opt-in or 'subscribed'
          merge_fields: {
            FNAME: menteeName.split(" ")[0],
            LNAME: menteeName.split(" ").slice(1).join(" "),
            INTEREST: mentee.areaOfInterest || "None",
          },
        });
        logger.log(`Successfully added ${menteeEmail} to Mailchimp.`);
      } catch (error: any) {
        logger.error(
          "Mailchimp subscription failed:",
          error.response?.body || error.message || error
        );
      }
    }

    try {
      await Promise.all(emailPromises);
      logger.log(`Emails successfully sent for new mentee: ${menteeName}`);
    } catch (error: any) {
      logger.error(
        "SendGrid failed to send one or more emails:",
        error.response?.body || error.message || error
      );
    }
    return null;
  }
);

// --- 3. FIRESTORE TRIGGER: STATUS CHANGE (UPDATE) ---

/**
 * Triggers when a mentee document is updated.
 *
 * This handles:
 * 1. Application Status Update (Acceptance)
 */
export const onMenteeUpdate = onDocumentUpdated(
  {
    document: "artifacts/{appId}/public/data/mentees/{menteeId}",
    secrets: [SENDGRID_API_KEY_SECRET], // Only SendGrid API key needed here
  },
  async (event) => {
    if (!event.data) {
      logger.warn("No data associated with the onUpdate event.");
      return null;
    }

    const menteeBefore = event.data.before.data();
    const menteeAfter = event.data.after.data();

    if (!menteeBefore || !menteeAfter) {
      logger.warn(
        "Before or After mentee data is undefined for onUpdate event."
      );
      return null;
    }

    // Check if the status was changed to 'Active' from something else
    const wasPending = menteeBefore.status !== "Active";
    const isNowActive = menteeAfter.status === "Active";

    if (wasPending && isNowActive) {
      const menteeEmail = menteeAfter.email;
      const menteeName = menteeAfter.fullName || "Mentee";

      // --- Send Acceptance Email to Mentee ---
      const acceptanceMsg = {
        to: menteeEmail,
        from: SENDER_EMAIL,
        subject:
          "Congratulations! You have been accepted into the FrankMolla Mentorship Program.",
        html: `
                    <p>Hello ${menteeName},</p>
                    <p>Great news! Your application has been approved. You are now an active member of the FrankMolla Mentorship Program.</p>
                    <p>Your next step is to log into the main portal and follow the onboarding steps (e.g., scheduling your first session or submitting the program fee).</p>
                    <p>We look forward to working with you!</p>
                    <p>Regards,<br>Frank Molla Team</p>
                `,
      };

      try {
        await sgMail.send(acceptanceMsg);
        logger.log(`Acceptance email successfully sent to ${menteeName}.`);
      } catch (error: any) {
        logger.error(
          "SendGrid failed to send acceptance email:",
          error.response?.body || error.message || error
        );
      }
    }

    return null;
  }
);

// --- 4. DEPLOYMENT INSTRUCTIONS ---

/**
 * To deploy these functions:
 * 1. Set the secret environment variables (if you haven't already):
 *    firebase functions:secrets:set SENDGRID_API_KEY
 *    firebase functions:secrets:set MAILCHIMP_API_KEY
 *    firebase functions:secrets:set MAILCHIMP_LIST_ID
 * 2. Set the regular environment variables:
 *    firebase functions:env:add ADMIN_EMAIL=admin@frankmolla.com SENDER_EMAIL=no-reply@frankmolla.com
 * 3. Run: firebase deploy --only functions
 *
 * NOTE: For local development, you might need to use a .env file or `firebase functions:shell`
 * with manually loaded secrets/env vars.
 */
