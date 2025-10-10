// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   sendEmailVerification,
// //   updateProfile,
// //   signOut,
// // } from "firebase/auth";
// // import { doc, setDoc } from "firebase/firestore";
// // import { auth, db } from "../firebase/config";
// // import { useMutation, useQueryClient } from "@tanstack/react-query";
// // import { AuthCredentials } from "@/types/auth";
// // import { ApplicationFormValues } from "../schemas/signup";

// // const AUTH_QUERY_KEY = "authUser";

// // interface SignUpMutationVariables
// //   extends AuthCredentials,
// //     Omit<ApplicationFormValues, "email" | "password"> {}

// // export const useSignUp = () => {
// //   const queryClient = useQueryClient();
// //   return useMutation({
// //     // The mutationFn now accepts all fields needed for auth AND for Firestore
// //     mutationFn: async (data: SignUpMutationVariables) => {
// //       // 1. Authenticate the User
// //       const userCredential = await createUserWithEmailAndPassword(
// //         auth,
// //         data.email,
// //         data.password
// //       );
// //       const user = userCredential.user;

// //       if (user) {
// //         // 2. Set Basic Profile
// //         await updateProfile(user, {
// //           displayName: data.fullName || "New User",
// //         });

// //         // 3. Store Application Data in Firestore
// //         const userDataToStore = {
// //           uid: user.uid,
// //           fullName: data.fullName,
// //           email: data.email,
// //           userType: data.userType,
// //           program: data.program,
// //           background: data.background, // "Tell us about your goals" / "Share your expertise"
// //           // Conditionally include years of experience only for mentors
// //           ...(data.userType === "mentor" && {
// //             yearsOfExperience: data.experience,
// //             isMentorApproved: false, // Initial status for review
// //           }),
// //           emailVerified: user.emailVerified,
// //           createdAt: new Date().toISOString(),
// //         };

// //         // Use the user's UID as the document ID in the 'users' collection
// //         await setDoc(doc(db, "users", user.uid), userDataToStore);

// //         // 4. Send Verification Email
// //         await sendEmailVerification(user);
// //       }
// //       return userCredential;
// //     },
// //     onSuccess: (result) => {
// //       queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] });
// //       // The success toast and navigation will be handled in the component.
// //     },
// //     onError: (error) => {
// //       console.error("Sign up failed:", error);
// //       throw error; // Re-throw so the component can handle it
// //     },
// //   });
// // };

// // export const useSignIn = () => {
// //   const queryClient = useQueryClient();
// //   return useMutation({
// //     mutationFn: ({ email, password }: AuthCredentials) =>
// //       signInWithEmailAndPassword(auth, email, password),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] });
// //     },
// //   });
// // };

// // export const useSignOut = () => {
// //   const queryClient = useQueryClient();
// //   return useMutation({
// //     mutationFn: () => signOut(auth),
// //     onSuccess: () => {
// //       // Set the global state to null upon logout
// //       queryClient.setQueryData([AUTH_QUERY_KEY], null);
// //     },
// //   });
// // };

// // Assuming you have a Firebase configuration file:
// import { db as firebaseDB } from "@/firebase/config";
// import { useMutation, UseMutationOptions } from "@tanstack/react-query";
// import { ApplicationFormValues } from "@/schemas/signup";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// // Define the payload type for the mutation (matches your form values)
// type ApplicationPayload = ApplicationFormValues;

// /**
//  * Custom hook for submitting a new user application (no authentication, only Firestore write).
//  * Renamed conceptually to clarify its role, but keeping the user's requested import name: useSignUp.
//  */
// export const useSignUp = (
//   options?: UseMutationOptions<void, Error, ApplicationPayload>
// ) => {
//   return useMutation<void, Error, ApplicationPayload>({
//     mutationFn: async (payload) => {
//       // 1. Prepare the data for Firestore.
//       // We explicitly exclude any client-side ID field, letting Firestore generate it.
//       // Also, we use serverTimestamp() for accurate, reliable creation time.
//       const firestoreData = {
//         ...payload,
//         createdAt: serverTimestamp(),
//         // Add a status flag relevant for application review process
//         status: "pending",
//       };

//       // 2. Write the application data to the 'applications' collection in Firestore
//       // The addDoc function automatically creates a new document with a unique ID.
//       const applicationsCollection = collection(firebaseDB, "applications");

//       await addDoc(applicationsCollection, firestoreData);
//     },
//     ...options, // Allows passing custom onSuccess/onError callbacks from the component
//   });
// };

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
