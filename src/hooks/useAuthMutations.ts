// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendEmailVerification,
//   updateProfile,
//   signOut,
// } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, db } from "../firebase/config";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { AuthCredentials } from "@/types/auth";
// import { ApplicationFormValues } from "../schemas/signup";

// const AUTH_QUERY_KEY = "authUser";

// interface SignUpMutationVariables
//   extends AuthCredentials,
//     Omit<ApplicationFormValues, "email" | "password"> {}

// export const useSignUp = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     // The mutationFn now accepts all fields needed for auth AND for Firestore
//     mutationFn: async (data: SignUpMutationVariables) => {
//       // 1. Authenticate the User
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       );
//       const user = userCredential.user;

//       if (user) {
//         // 2. Set Basic Profile
//         await updateProfile(user, {
//           displayName: data.fullName || "New User",
//         });

//         // 3. Store Application Data in Firestore
//         const userDataToStore = {
//           uid: user.uid,
//           fullName: data.fullName,
//           email: data.email,
//           userType: data.userType,
//           program: data.program,
//           background: data.background, // "Tell us about your goals" / "Share your expertise"
//           // Conditionally include years of experience only for mentors
//           ...(data.userType === "mentor" && {
//             yearsOfExperience: data.experience,
//             isMentorApproved: false, // Initial status for review
//           }),
//           emailVerified: user.emailVerified,
//           createdAt: new Date().toISOString(),
//         };

//         // Use the user's UID as the document ID in the 'users' collection
//         await setDoc(doc(db, "users", user.uid), userDataToStore);

//         // 4. Send Verification Email
//         await sendEmailVerification(user);
//       }
//       return userCredential;
//     },
//     onSuccess: (result) => {
//       queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] });
//       // The success toast and navigation will be handled in the component.
//     },
//     onError: (error) => {
//       console.error("Sign up failed:", error);
//       throw error; // Re-throw so the component can handle it
//     },
//   });
// };

// export const useSignIn = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ email, password }: AuthCredentials) =>
//       signInWithEmailAndPassword(auth, email, password),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] });
//     },
//   });
// };

// export const useSignOut = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: () => signOut(auth),
//     onSuccess: () => {
//       // Set the global state to null upon logout
//       queryClient.setQueryData([AUTH_QUERY_KEY], null);
//     },
//   });
// };

// Assuming you have a Firebase configuration file:
import { db as firebaseDB } from "@/firebase/config";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ApplicationFormValues } from "@/schemas/signup";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Define the payload type for the mutation (matches your form values)
type ApplicationPayload = ApplicationFormValues;

/**
 * Custom hook for submitting a new user application (no authentication, only Firestore write).
 * Renamed conceptually to clarify its role, but keeping the user's requested import name: useSignUp.
 */
export const useSignUp = (
  options?: UseMutationOptions<void, Error, ApplicationPayload>
) => {
  return useMutation<void, Error, ApplicationPayload>({
    mutationFn: async (payload) => {
      // 1. Prepare the data for Firestore.
      // We explicitly exclude any client-side ID field, letting Firestore generate it.
      // Also, we use serverTimestamp() for accurate, reliable creation time.
      const firestoreData = {
        ...payload,
        createdAt: serverTimestamp(),
        // Add a status flag relevant for application review process
        status: "pending",
      };

      // 2. Write the application data to the 'applications' collection in Firestore
      // The addDoc function automatically creates a new document with a unique ID.
      const applicationsCollection = collection(firebaseDB, "applications");

      await addDoc(applicationsCollection, firestoreData);
    },
    ...options, // Allows passing custom onSuccess/onError callbacks from the component
  });
};
