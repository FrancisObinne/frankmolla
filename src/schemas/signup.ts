// import { z } from "zod";

// const formSchema = z.object({
//   fullName: z
//     .string()
//     .min(2, "Full name must be at least 2 characters")
//     .max(100),
//   email: z.string().email("Invalid email address").max(255),
//   roleTitle: z.string().min(2, "Role/Title is required").max(100),
//   organization: z.string().min(2, "Organization is required").max(100),
//   regionOfOperation: z.string().min(2, "Region is required").max(100),
//   yearsInLeadership: z.number().min(0, "Must be 0 or greater").max(100),
//   areasOfInterest: z.array(z.string()).min(1, "Select at least one area"),
//   otherArea: z.string().max(200).optional(),
//   currentChallenge: z.string().max(1000).optional(),
//   feelingStretched: z.string().max(1000).optional(),
//   supportNeeded: z.string().max(1000).optional(),
//   mentorshipFormat: z.enum(["one-on-one", "small-group", "hybrid"], {
//     required_error: "Please select a mentorship format",
//   }),
//   cadence: z.enum(["weekly", "bi-weekly", "monthly"], {
//     required_error: "Please select a cadence",
//   }),
//   delivery: z.enum(["virtual", "in-person", "flexible"], {
//     required_error: "Please select a delivery method",
//   }),
// });

// type FormValues = z.infer<typeof formSchema>;
// export type ApplicationFormValues = FormValues;
// export { formSchema as ApplicationSchema };

// // --- 1. Base Auth Schema (for login/password fields) ---
// // export const AuthSchema = z.object({
// //   email: z.string().email({ message: "Invalid email address." }),
// //   password: z
// //     .string()
// //     .min(8, { message: "Password must be at least 8 characters." }),
// // });

// // // --- 2. Application Schema (for form fields) ---

// // // Define the possible types for Zod
// // export const UserTypeSchema = z.union([
// //   z.literal("mentor"),
// //   z.literal("mentee"),
// // ]);

// // // Base fields for both Mentors and Mentees
// // const BaseApplicationSchema = z.object({
// //   delivery: z.string(),
// //   // .min(20, { message: "Please share more details (minimum 20 characters)." }),
// //   cadence: z.string(),
// //   // .min(20, { message: "Please share more details (minimum 20 characters)." }),
// //   mentorshipFormat: z.string(),
// //   // .min(20, { message: "Please share more details (minimum 20 characters)." }),
// //   supportNeeded: z.string(),
// //   // .min(20, { message: "Please share more details (minimum 20 characters)." }),
// //   feelingStretched: z.string(),
// //   // .min(20, { message: "Please share more details (minimum 20 characters)." }),
// //   currentChallenge: z.string(),
// //   // .min(20, { message: "Please share more details (minimum 20 characters)." }),
// //   otherArea: z.string().optional(),
// //   areasOfInterest: z
// //     .array(z.string())
// //     .min(1, { message: "Please select at least one area of interest." }),
// //   fullName: z.string().min(2, { message: "Full name is required." }),
// //   roleTitle: z.string().min(2, { message: "Role/Title is required." }),
// //   organization: z.string().min(2, { message: "Organization is required." }),
// //   regionOfOperation: z
// //     .string()
// //     .min(2, { message: "Region of operation is required." }),
// //   email: z.string().email({ message: "Invalid email address." }),
// //   experience: z.number().min(1, { message: "experience is required." }),
// //   yearsInLeadership: z
// //     .number()
// //     .min(0, { message: "Years in leadership must be 0 or more." }),
// //   program: z.enum(
// //     [
// //       "career",
// //       "entrepreneurship",
// //       "academic",
// //       "creative",
// //       "personal",
// //       "networking",
// //     ],
// //     { required_error: "Please select an area of interest." }
// //   ),
// //   background: z
// //     .string()
// //     .min(50, { message: "Please share more details (minimum 50 characters)." }),
// //   userType: UserTypeSchema,
// // });

// // // Final Schema with Conditional Logic for Mentors
// // export const ApplicationSchema = BaseApplicationSchema.superRefine(
// //   (data, ctx) => {
// //     // If the user is a mentor, enforce the 'experience' field
// //     if (data.userType === "mentor") {
// //       // We'll use a number field for experience in the final implementation
// //       if (typeof data.experience !== "number" || data.experience < 1) {
// //         ctx.addIssue({
// //           code: z.ZodIssueCode.custom,
// //           message: "Mentors must have at least 1 year of experience.",
// //           path: ["experience"],
// //         });
// //       }
// //     }
// //   }
// // ).and(
// //   z.object({
// //     // Define 'experience' as optional here, but enforce conditionally above
// //     experience: z.preprocess(
// //       (a) => (a === "" ? undefined : a), // Handle empty string from input
// //       z.number().optional()
// //     ),
// //   })
// // );

// // // The final type derived from the schema
// // export type ApplicationFormValues = z.infer<typeof ApplicationSchema>;

import { z } from "zod";

// We'll use your existing schema as the base for the Mentee
export const MenteeApplicationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100),
  email: z.string().email("Invalid email address").max(255),
  roleTitle: z.string().min(2, "Role/Title is required").max(100),
  organization: z.string().min(2, "Organization is required").max(100),
  regionOfOperation: z.string().min(2, "Region is required").max(100),
  yearsInLeadership: z.number().min(0, "Must be 0 or greater").max(100),
  areasOfInterest: z.array(z.string()).min(1, "Select at least one area"),
  otherArea: z.string().max(200).optional(),
  currentChallenge: z.string().max(1000).optional(),
  feelingStretched: z.string().max(1000).optional(),
  supportNeeded: z.string().max(1000).optional(),
  mentorshipFormat: z.enum(["one-on-one", "small-group", "hybrid"], {
    required_error: "Please select a mentorship format",
  }),
  cadence: z.enum(["weekly", "bi-weekly", "monthly"], {
    required_error: "Please select a cadence",
  }),
  delivery: z.enum(["virtual", "in-person", "flexible"], {
    required_error: "Please select a delivery method",
  }),
});

// Now, we create a new, separate schema specifically for Mentors
export const MentorApplicationSchema = z.object({
  // Common fields
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),

  // Mentor-specific fields
  linkedinProfile: z
    .string()
    .url({ message: "Please enter a valid LinkedIn profile URL." }),
  roleTitle: z.string().min(2, "Your current Role/Title is required."),
  organization: z.string().min(2, "Your current Organization is required."),
  yearsOfExperience: z
    .number()
    .min(1, "Please enter your total years of professional experience."),
  areasOfExpertise: z
    .array(z.string())
    .min(1, "Select at least one area of expertise."),
  mentoringPhilosophy: z
    .string()
    .min(
      50,
      "Please briefly describe your mentoring philosophy (min 50 characters)."
    ),
});

// Export TypeScript types for type safety in your components
export type MenteeFormValues = z.infer<typeof MenteeApplicationSchema>;
export type MentorFormValues = z.infer<typeof MentorApplicationSchema>;
