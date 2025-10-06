import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { ApplicationSchema, ApplicationFormValues } from "@/schemas/signup";
import { useSignUp } from "@/hooks/useAuthMutations";

// RHF-related shadcn imports
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "mentee";
  const navigate = useNavigate();
  const { toast } = useToast();
  const { mutate: signUp, isPending: isSubmitting } = useSignUp();

  // 1. Initialize RHF with Zod Resolver
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(ApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "", // Add a password field here, it's essential for Firebase Auth
      program: "career", // Set a default value for the Select
      background: "",
      userType: initialType as "mentor" | "mentee",
      experience: 1, // Default for optional field
    },
  });

  // 2. Watch the userType and update the form state
  const userType = form.watch("userType");

  // 3. Define the onSubmit function
  const onSubmit = (values: ApplicationFormValues) => {
    // Payload
    const payload = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      program: values.program,
      background: values.background,
      userType: values.userType,
      experience: values.experience,
    };
    // 1. Call the Firebase SignUp Mutation
    signUp(payload, {
      onSuccess: () => {
        // 2. Show Success Toast
        toast({
          title: "Application Submitted!",
          description: `Success! Please check your email to verify your account and complete your ${values.userType} profile.`,
        });

        form.reset();
        // navigate("/verify-email");

        // 3. Redirect to the home page
        navigate("/");

        // NOTE: In a professional app, you'd also save the rest of the application data
        // (firstName, program, background, userType) to Firestore in this onSuccess block.
      },
      onError: (error) => {
        // Handle Firebase errors (e.g., email already in use)
        toast({
          title: "Sign Up Failed",
          description: error.message.includes("email-already-in-use")
            ? "This email is already in use. Please log in or use a different email."
            : "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: `Thank you for your interest in becoming a ${userType}. We'll review your application and get back to you soon.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Join FrankMolla
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Start your mentorship journey today. Connect, learn, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* User Type Selector */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button
                type="button"
                variant={userType === "mentee" ? "default" : "outline"}
                // onClick={() => setUserType("mentee")}
                onClick={() =>
                  form.setValue("userType", "mentee", {
                    shouldValidate: true,
                  })
                }
                className="h-auto py-6 flex flex-col items-center gap-2"
              >
                <UserPlus size={24} />
                <div>
                  <div className="font-semibold">Find a Mentor</div>
                  <div className="text-xs opacity-80">I want guidance</div>
                </div>
              </Button>
              <Button
                type="button"
                variant={userType === "mentor" ? "default" : "outline"}
                // onClick={() => setUserType("mentor")}
                onClick={() =>
                  form.setValue("userType", "mentor", {
                    shouldValidate: true,
                  })
                }
                className="h-auto py-6 flex flex-col items-center gap-2"
              >
                <Users size={24} />
                <div>
                  <div className="font-semibold">Become a Mentor</div>
                  <div className="text-xs opacity-80">
                    I want to help others
                  </div>
                </div>
              </Button>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>
                  {userType === "mentee"
                    ? "Mentee Application"
                    : "Mentor Application"}
                </CardTitle>
                <CardDescription>
                  {userType === "mentee"
                    ? "Tell us about yourself and what you're looking for in a mentor."
                    : "Share your experience and how you'd like to help others grow."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* First Name Field */}
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel htmlFor="firstName">
                              First Name
                            </FormLabel>
                            <FormControl>
                              <Input id="firstName" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Last Name Field */}
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <FormControl>
                              <Input id="lastName" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel htmlFor="email">Email Address</FormLabel>
                          <FormControl>
                            <Input id="email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* NEW: Password Field (Crucial for Firebase Auth) */}
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <FormControl>
                            <Input id="password" type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Area of Interest (Select) Field */}
                    <FormField
                      control={form.control}
                      name="program"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel htmlFor="program">
                            Area of Interest
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {/* ... Your SelectItem values remain the same */}
                              <SelectItem value="career">
                                Career Development
                              </SelectItem>
                              <SelectItem value="entrepreneurship">
                                Entrepreneurship
                              </SelectItem>
                              <SelectItem value="academic">
                                Academic Mentorship
                              </SelectItem>
                              <SelectItem value="creative">
                                Creative Skills
                              </SelectItem>
                              <SelectItem value="personal">
                                Personal Growth
                              </SelectItem>
                              <SelectItem value="networking">
                                Networking & Connections
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Years of Experience Field (Mentor Conditional) */}
                    {userType === "mentor" && (
                      <FormField
                        control={form.control}
                        // The field value must be parsed to a number for Zod
                        name="experience"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel htmlFor="experience">
                              Years of Experience
                            </FormLabel>
                            <FormControl>
                              <Input
                                id="experience"
                                type="number"
                                min="1"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                } // RHF requires number for Zod
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {/* Background Textarea Field */}
                    <FormField
                      control={form.control}
                      name="background"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel htmlFor="background">
                            {userType === "mentee"
                              ? "Tell us about your goals"
                              : "Share your expertise"}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              id="background"
                              rows={4}
                              placeholder={
                                userType === "mentee" ? "..." : "..."
                              } // Your original placeholders
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
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignUp;
