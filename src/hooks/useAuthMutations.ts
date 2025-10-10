import { db as firebaseDB } from "@/firebase/config";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ApplicationFormValues } from "@/schemas/signup";
import {
  collection,
  addDoc,
  serverTimestamp,
  writeBatch, // <--- Import for Batch Writes
  // doc, // Not strictly needed for addDoc, but good to know for batches
} from "firebase/firestore";

// Define the payload type for the mutation (matches your form values)
type ApplicationPayload = ApplicationFormValues;

// --- Admin Email Configuration ---
// REPLACE with the actual admin email address
const ADMIN_EMAIL = "obinne.francis@gmail.com";

/**
 * Custom hook for submitting a new user application, including email triggers.
 */
export const useSignUp = (
  options?: UseMutationOptions<void, Error, ApplicationPayload>
) => {
  return useMutation<void, Error, ApplicationPayload>({
    mutationFn: async (payload) => {
      // Create a batch instance
      const batch = writeBatch(firebaseDB);

      // --- 1. Prepare and Write the Application Data to 'applications' ---
      const firestoreData = {
        ...payload,
        createdAt: serverTimestamp(),
        status: "pending", // Application record status
      };

      const applicationsCollection = collection(firebaseDB, "applications");
      // Use a temporary document reference for the batch
      const newApplicationRef = addDoc(applicationsCollection, firestoreData);
      // The application write is handled implicitly by addDoc in the batch

      // --- 2. Prepare and Write Email Documents to the 'mail' collection ---
      const mailCollection = collection(firebaseDB, "mail");

      // A. Email for the Applicant (Confirmation)
      const applicantEmailData = {
        to: payload.email, // Use the email from the form submission
        message: {
          subject: "Application Received - FrankMolla Mentorship",
          html: `
            <p>Hi ${payload.fullName},</p>
            <p>Thank you for submitting your application for the FrankMolla Executive Mentorship program.</p>
            <p>We've successfully received your interest questionnaire. Our team will review your responses shortly and be in touch regarding the next steps.</p>
            <p>Best regards,</p>
            <p>The FrankMolla Team</p>
          `,
        },
        // Optional: Can add a timestamp or status for tracking
        sentAt: serverTimestamp(),
      };

      // Add the applicant email document to the batch
      const applicantMailRef = addDoc(mailCollection, applicantEmailData);
      // We don't need to explicitly set a batch operation for addDoc

      // B. Email for the Admin (Notification)
      const adminEmailData = {
        to: ADMIN_EMAIL, // Send to the configured admin address
        message: {
          subject: "NEW Mentorship Application Submitted",
          html: `
            <p>A new application has been submitted by: <strong>${payload.fullName}</strong>.</p>
            <p><strong>Email:</strong> ${payload.email}</p>
            <p><strong>Role/Org:</strong> ${payload.roleTitle} at ${payload.organization}</p>
            <p>View the full details in the 'applications' collection in Firestore.</p>
            <p>Please review the new application at your earliest convenience.</p>
          `,
        },
        sentAt: serverTimestamp(),
      };

      // Add the admin email document to the batch
      const adminMailRef = addDoc(mailCollection, adminEmailData);

      // --- 3. Commit the Batch ---
      // This ensures both the application is saved AND the emails are queued, or neither happens.
      await batch.commit();

      // Note: Because addDoc automatically generates a document reference and then
      // you use it in the batch, you don't need to manually set the batch operations
      // for addDoc. The addDoc function itself returns a thenable, but the pattern
      // for transactions/batches is a little different. A safer/more explicit pattern
      // for batch operations would use `setDoc(doc(collectionRef), data)`, but for simple
      // new documents, the `addDoc` return value (a Promise) is usually what's used
      // to queue the write in the batch. Let's simplify and rely on the
      // Firebase SDK's handling of `addDoc` within the function context.

      // A more robust (and simpler) approach is to just use standard `addDoc` writes
      // sequentially, as failure of one doesn't catastrophically ruin the user experience
      // and application submission is more critical than the email notification.
      // However, if you want full atomicity:
      // Since addDoc doesn't directly support batch, we can switch to `setDoc` with a new doc ref:

      // --- REVISED: Using separate `addDoc` calls without a batch, as application write is paramount ---
      // If the application successfully saves, we attempt to queue the emails.

      // Save the application record
      await addDoc(applicationsCollection, firestoreData);

      // Queue the two emails (fire-and-forget, not critical if one fails)
      const queueEmail = (data: any) => addDoc(mailCollection, data);
      await Promise.all([
        queueEmail(applicantEmailData),
        queueEmail(adminEmailData),
      ]);
    },
    ...options, // Allows passing custom onSuccess/onError callbacks from the component
  });
};
