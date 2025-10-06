/**
 * Defines the structure for user sign-in and sign-up credentials.
 * This ensures that when passing data to the Firebase mutation functions,
 * the 'email' and 'password' fields are always present and correctly typed.
 */
export interface AuthCredentials {
  email: string;
  password: string;
}

/**
 * Optional: Defines the base structure for user data stored in Firestore,
 * extending the basic credentials if needed. We'll add more fields later.
 */
export interface UserProfile {
  uid: string;
  email: string;
  firstName?: string;
  lastName?: string;
  isVerified: boolean;
  isMentor?: boolean;
  // Add other profile fields here (e.g., mentorship level, photoUrl)
}

// Export the types for use in hooks and components
// export type { AuthCredentials, UserProfile };
// Note: Exporting directly with 'interface' or 'type' is generally cleaner.
