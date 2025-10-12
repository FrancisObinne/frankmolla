// // src/hooks/useContactFormMutation.ts

// import { useMutation } from "@tanstack/react-query";
// import { db } from "@/firebase/config";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// interface ContactMessage {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const submitMessage = async (data: ContactMessage) => {
//   const mailRef = collection(db, "mail"); // Matches the collection in your security rules

//   await addDoc(mailRef, {
//     ...data,
//     // The 'mail' collection is structured to be consumed by the Firebase Extension
//     // "Trigger Email" which expects 'to' and 'message' fields, but we'll use
//     // a simple structure here that your own Cloud Function/backend can read.
//     to: "obinne.francis@gmail.com", // Example: where the notification should go
//     // Add processing status for backend tracking
//     delivery: {
//       state: "PENDING",
//       attempts: 0,
//     },
//     createdAt: serverTimestamp(),
//   });
// };

// export const useContactFormMutation = () => {
//   return useMutation({
//     mutationFn: submitMessage,
//   });
// };

// import { useMutation } from "@tanstack/react-query";
// import { db } from "@/firebase/config";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// interface ContactMessage {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// // Target email for the admin to receive the contact form submission
// const ADMIN_EMAIL = "obinne.francis@gmail.com";

// const submitMessage = async (data: ContactMessage) => {
//   const mailRef = collection(db, "mail");

//   // --- Construct the email payload for the "Trigger Email" extension ---
//   const emailPayload = {
//     // 1. Recipient: The email address that should receive the message (the admin)
//     to: ADMIN_EMAIL,

//     // 2. Subject: A clear indicator that this is a contact message
//     subject: `New Contact Form Submission: ${data.subject}`,

//     // 3. Structured Body (HTML is great for formatting)
//     html: `
//       <h2>New Contact Message Received</h2>
//       <p><strong>From:</strong> ${data.name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Subject:</strong> ${data.subject}</p>
//       <hr>
//       <h3>Message:</h3>
//       <div style="border-left: 3px solid #ccc; padding-left: 10px; margin-top: 10px;">
//         ${data.message.replace(/\n/g, "<br>")}
//       </div>
//       <p style="margin-top: 20px; font-size: 0.8em; color: #777;">
//         Submitted via the FrankMolla Contact Page.
//       </p>
//     `,

//     // Optional: Add the original form data for logging/backend processing
//     formData: {
//       name: data.name,
//       email: data.email,
//       userSubject: data.subject, // Renamed to avoid confusion with the email subject
//       userMessage: data.message,
//     },

//     // Add server timestamp for accurate tracking
//     createdAt: serverTimestamp(),

//     // Optional: ReplyTo header, so the admin can just hit 'Reply'
//     replyTo: data.email,
//   };
//   // -----------------------------------------------------------------------

//   await addDoc(mailRef, emailPayload);
// };

// export const useContactFormMutation = () => {
//   return useMutation({
//     mutationFn: submitMessage,
//   });
// };

// import { useMutation } from "@tanstack/react-query";
// import { db } from "@/firebase/config";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// interface ContactMessage {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// // Target email for the admin to receive the contact form submission
// const ADMIN_EMAIL = "obinne.francis@gmail.com";

// const submitMessage = async (data: ContactMessage) => {
//   const mailRef = collection(db, "mail");

//   // --- Construct the email payload for the "Trigger Email" extension ---
//   // The extension looks for 'to', 'subject', and 'html'/'text'
//   const emailPayload = {
//     // 1. Recipient: Admin email
//     to: ADMIN_EMAIL,

//     // 2. Subject: Clear subject line
//     subject: `New Contact Form Submission: ${data.subject}`,

//     // 3. Structured Body (Use HTML to clearly separate fields)
//     html: `
//       <h2>New Contact Message Received</h2>
//       <p><strong>From:</strong> ${data.name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Subject:</strong> ${data.subject}</p>
//       <hr>
//       <h3>Message:</h3>
//       <div style="border-left: 3px solid #ccc; padding-left: 10px; margin-top: 10px;">
//         ${data.message.replace(/\n/g, "<br>")}
//       </div>
//       <p style="margin-top: 20px; font-size: 0.8em; color: #777;">
//         Submitted via the Contact Page.
//       </p>
//     `,

//     // 4. Optional: ReplyTo header, so the admin can just hit 'Reply'
//     replyTo: data.email,

//     // 5. Server timestamp for tracking
//     createdAt: serverTimestamp(),
//   };
//   // -----------------------------------------------------------------------

//   await addDoc(mailRef, emailPayload);
// };

// export const useContactFormMutation = () => {
//   return useMutation({
//     mutationFn: submitMessage,
//   });
// };

import { useMutation } from "@tanstack/react-query";
import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Target email for the admin to receive the contact form submission
const ADMIN_EMAIL = "obinne.francis@gmail.com";

const submitMessage = async (data: ContactMessage) => {
  const mailCollection = collection(db, "mail");

  // --- 1. Email to the Admin (Contains the user's inquiry) ---
  const adminEmailData = {
    to: ADMIN_EMAIL,
    // Using the nested 'message' object for consistency with useSignUp
    message: {
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Message Received</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <hr>
        <h3>Message:</h3>
        <div style="border-left: 3px solid #ccc; padding-left: 10px; margin-top: 10px;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
        <p style="margin-top: 20px; font-size: 0.8em; color: #777;">
          Submitted via the Contact Page.
        </p>
      `,
      replyTo: data.email, // Allows admin to reply directly to the user
    },
    // Server timestamp for tracking
    createdAt: serverTimestamp(),
  };

  // --- 2. Email to the Applicant (Confirmation of receipt) ---
  const applicantEmailData = {
    to: data.email,
    // Using the nested 'message' object for consistency with useSignUp
    message: {
      subject: `We've Received Your Message - FrankMolla Support`,
      html: `
        <p>Hi ${data.name},</p>
        <p>Thank you for contacting FrankMolla. This is an automatic confirmation that we have successfully received your message regarding: <strong>${data.subject}</strong>.</p>
        <p>Our support team aims to review and respond to all inquiries within 24 hours (Monday - Friday). We appreciate your patience!</p>
        <p>Best regards,</p>
        <p>The FrankMolla Team</p>
      `,
    },
    createdAt: serverTimestamp(),
  };

  // 3. Send both emails concurrently
  await Promise.all([
    addDoc(mailCollection, adminEmailData),
    addDoc(mailCollection, applicantEmailData),
  ]);
};

export const useContactFormMutation = () => {
  return useMutation({
    mutationFn: submitMessage,
  });
};
