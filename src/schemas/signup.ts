import { z } from "zod";

// --- 1. Base Auth Schema (for login/password fields) ---
export const AuthSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

// --- 2. Application Schema (for form fields) ---

// Define the possible types for Zod
export const UserTypeSchema = z.union([
  z.literal("mentor"),
  z.literal("mentee"),
]);

// Base fields for both Mentors and Mentees
const BaseApplicationSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  experience: z.number().min(1, { message: "experience is required." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }), // We'll add this later
  program: z.enum(
    [
      "career",
      "entrepreneurship",
      "academic",
      "creative",
      "personal",
      "networking",
    ],
    { required_error: "Please select an area of interest." }
  ),
  background: z
    .string()
    .min(50, { message: "Please share more details (minimum 50 characters)." }),
  userType: UserTypeSchema,
});

// Final Schema with Conditional Logic for Mentors
export const ApplicationSchema = BaseApplicationSchema.superRefine(
  (data, ctx) => {
    // If the user is a mentor, enforce the 'experience' field
    if (data.userType === "mentor") {
      // We'll use a number field for experience in the final implementation
      if (typeof data.experience !== "number" || data.experience < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Mentors must have at least 1 year of experience.",
          path: ["experience"],
        });
      }
    }
  }
).and(
  z.object({
    // Define 'experience' as optional here, but enforce conditionally above
    experience: z.preprocess(
      (a) => (a === "" ? undefined : a), // Handle empty string from input
      z.number().optional()
    ),
  })
);

// The final type derived from the schema
export type ApplicationFormValues = z.infer<typeof ApplicationSchema>;
