import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { auth, db } from "@/firebase/config";
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Lock } from "lucide-react";
import { PasswordResetForm } from "@/components/PasswordResetForm";
// import { PasswordResetForm } from "./PasswordResetForm";

// For the password reset email input
// const resetSchema = z.object({
//   resetEmail: z.string().email("Invalid email address"), // <--- CHANGED NAME
// });

// type ResetFormValues = z.infer<typeof resetSchema>;

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const AdminLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isResettingPassword, setIsResettingPassword] = useState(false); // New state for reset dialog
  const [showForgotPassword, setShowForgotPassword] = useState(false); // New state for showing reset form
  // NEW STATE: Keep the email value from the login form
  const [emailToReset, setEmailToReset] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // New form for password reset email input
  // const resetForm = useForm<ResetFormValues>({
  //   resolver: zodResolver(resetSchema),
  //   defaultValues: {
  //     resetEmail: "",
  //   },
  // });

  // Function to handle password reset
  // const handlePasswordReset = async (values: ResetFormValues) => {
  //   setIsResettingPassword(true);
  //   try {
  //     // 1. Check if the user is an Admin before sending the reset email
  //     // This is a security step to prevent sending password reset emails
  //     // to non-admin users if the Admin email is known.

  //     // IMPORTANT: This check relies on the user's role document in Firestore.
  //     // We must query by email to find the UID first, which requires Cloud Functions/Security Rules
  //     // OR you can keep it simple and just send the email and rely on Firebase Auth,
  //     // which is usually the standard pattern.

  //     // Since the admin's email is likely known/private, we'll use the simplest and most common approach:
  //     // rely on Firebase Auth's built-in email sender which works in conjunction with the Trigger Email extension.

  //     // The Firebase Auth 'sendPasswordResetEmail' automatically triggers the
  //     // 'Trigger Email' extension if it's installed and configured correctly
  //     // to handle the 'Password Reset' email template.

  //     await sendPasswordResetEmail(auth, values.resetEmail);

  //     toast({
  //       title: "Password Reset Email Sent",
  //       description:
  //         "If an admin account exists for that email, a password reset link has been sent. Check your inbox.",
  //     });

  //     // Optionally hide the reset form after success
  //     setShowForgotPassword(false);
  //     resetForm.reset();
  //   } catch (error: any) {
  //     console.error("Password Reset Error:", error.code, error.message);
  //     let errorMessage =
  //       "Failed to send password reset email. Please try again.";
  //     if (error.code === "auth/user-not-found") {
  //       // We generally use a generic message here to avoid revealing if an email is in use.
  //       errorMessage =
  //         "If an admin account exists for that email, a password reset link has been sent. Check your inbox.";
  //     } else if (error.code) {
  //       errorMessage = error.message;
  //     }

  //     toast({
  //       title: "Password Reset Failed",
  //       description: errorMessage,
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsResettingPassword(false);
  //   }
  // };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // 1. Firebase Sign-In
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;

      if (!user) {
        throw new Error("Authentication failed: No user object");
      } // 2. Check if user has admin role using Firestore

      // Role information is stored in a document named by the user's UID
      const roleDocRef = doc(db, "user_roles", user.uid);
      const roleDoc = await getDoc(roleDocRef); // Check if document exists and if the 'role' field is 'admin'

      const isAdmin = roleDoc.exists() && roleDoc.data()?.role === "admin";

      if (!isAdmin) {
        // Log out the user immediately if they are not an admin
        await signOut(auth);
        throw new Error("Unauthorized: Admin access required");
      }

      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });

      navigate("/admin/dashboard");
    } catch (error: any) {
      console.error("Login Error:", error.code, error.message);
      let errorMessage = "An unknown error occurred.";
      if (error.code) {
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          errorMessage = "Invalid email or password.";
        } else if (error.code === "auth/too-many-requests") {
          errorMessage = "Too many login attempts. Try again later.";
        } else if (error.message.includes("Unauthorized")) {
          errorMessage = error.message; // Keep the specific admin error message
        } else {
          errorMessage = error.message;
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Lock className="h-12 w-12 text-primary" />
          </div>
          {/* <CardTitle className="text-2xl text-center">Admin Login</CardTitle> */}
          <CardTitle className="text-2xl text-center">
            {showForgotPassword ? "Reset Password" : "Admin Login"}
          </CardTitle>
          {/* <CardDescription className="text-center">
            Enter your credentials to access the admin dashboard
          </CardDescription> */}
          <CardDescription className="text-center">
            {showForgotPassword
              ? "Enter your admin email to receive a password reset link."
              : "Enter your credentials to access the admin dashboard"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {showForgotPassword ? (
            // ⬅️ RENDER THE ISOLATED COMPONENT (PasswordResetForm)
            <PasswordResetForm
              onBackToLogin={() => setShowForgotPassword(false)}
              initialEmail={emailToReset}
            />
          ) : (
            // Admin Login Form
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* 1. Email Field for Login */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email" // Explicitly setting type is good practice
                          placeholder="admin@frankmolla.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 2. Password Field for Login */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 3. Forgot Password Link */}
                <div className="text-right">
                  <Button
                    type="button"
                    variant="link"
                    className="h-auto p-0 text-sm"
                    onClick={() => {
                      // Capture the current email value to pre-fill the reset form
                      setEmailToReset(form.getValues("email") ?? "");
                      // Switch view
                      setShowForgotPassword(true);
                    }}
                  >
                    Forgot Password?
                  </Button>
                </div>

                {/* 4. Sign In Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>
          )}
          {/* <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="admin@frankmolla.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form> */}
          {/* {showForgotPassword ? (
            // Password Reset Form
            <Form {...resetForm}>
              <form
                onSubmit={resetForm.handleSubmit(handlePasswordReset)}
                className="space-y-4"
              >
                <FormField
                  control={resetForm.control}
                  name="resetEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="admin@frankmolla.com"
                          disabled={isResettingPassword}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isResettingPassword}
                >
                  {isResettingPassword ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending link...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="link"
                  className="w-full"
                  onClick={() => setShowForgotPassword(false)}
                >
                  Back to Login
                </Button>
              </form>
            </Form>
          ) : (
            // Admin Login Form
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="admin@frankmolla.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-right">
                  <Button
                    type="button"
                    variant="link"
                    className="h-auto p-0 text-sm"
                    onClick={() => {
                      resetForm.reset();
                      const emailValue = form.watch("email") ?? ""; // ⬅️ The fix is here
                      resetForm.setValue("resetEmail", emailValue);
                      setShowForgotPassword(true);
                    }}
                  >
                    Forgot Password?
                  </Button>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>
          )} */}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
