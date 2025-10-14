// PasswordResetForm.tsx

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import { auth } from "@/firebase/config"; // Assuming 'auth' is exported correctly
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

// Define Props needed from the parent
interface PasswordResetFormProps {
  onBackToLogin: () => void;
  initialEmail: string;
}

const resetSchema = z.object({
  resetEmail: z.string().email("Invalid email address"),
});
type ResetFormValues = z.infer<typeof resetSchema>;

export const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  onBackToLogin,
  initialEmail,
}) => {
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const { toast } = useToast();

  // Use the form hook INSIDE this component to give it its own scope
  const resetForm = useForm<ResetFormValues>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      resetEmail: initialEmail || "", // Use initialEmail from props or default to ""
    },
  });

  const handlePasswordReset = async (values: ResetFormValues) => {
    setIsResettingPassword(true);
    // ... (Your existing handlePasswordReset logic goes here, using 'auth' and 'sendPasswordResetEmail')
    try {
      await sendPasswordResetEmail(auth, values.resetEmail);

      toast({
        title: "Request Sent",
        description:
          "If an admin account exists for that email, a password reset link has been sent. Check your inbox.",
      });

      onBackToLogin(); // Go back to login on success
      resetForm.reset({ resetEmail: "" }); // Clean up this form
    } catch (error: any) {
      // ... (Your existing error handling logic)
      console.error("Password Reset Error:", error.code, error.message);
      let errorMessage =
        "Failed to send password reset email. Please try again."; // Handle common Firebase error codes, but use a generic message for 'user-not-found' // to avoid revealing user existence (a security best practice).
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/invalid-email"
      ) {
        errorMessage =
          "If an admin account exists for that email, a password reset link has been sent. Check your inbox.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      // FAILURE TOAST
      toast({
        title: "Password Reset Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsResettingPassword(false);
    }
  };

  return (
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
                  disabled={isResettingPassword} // Still important!
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isResettingPassword}>
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
          onClick={onBackToLogin}
        >
          Back to Login
        </Button>
      </form>
    </Form>
  );
};
