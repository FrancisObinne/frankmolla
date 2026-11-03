// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { UserPlus, Users } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useNavigate } from "react-router-dom";
// import { ApplicationSchema, ApplicationFormValues } from "@/schemas/signup";
// import { useSignUp } from "@/hooks/useAuthMutations";

// import { Checkbox } from "@/components/ui/checkbox";
// import { RadioGroup } from "@/components/ui/radio-group";
// import { RadioGroupItem } from "@/components/ui/radio-group";
// import { Loader2 } from "lucide-react";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// const AREAS_OF_INTEREST = [
//   "Leading Self (emotional regulation, decision-making, personal clarity)",
//   "Leading Teams (culture-building, feedback, conflict resolution)",
//   "Leadership Mindset (confidence, humility, strategic presence)",
//   "Sales & Influence (client engagement, storytelling, trust-building)",
//   "Negotiation & Agreements (conflict navigation, dignified deal-making)",
//   "Career Growth & Transitions (promotion, reinvention, legacy)",
//   "Strategic Communication (executive presence, clarity under pressure)",
//   "Relationship Building (mentorship, networks, nourishing partnerships)",
//   "Adaptive Strategy (leading through uncertainty, systems thinking)",
// ] as const;

// const SignUp = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const initialType = searchParams.get("type") || "mentee";
//   const [userType, setUserType] = useState<"mentor" | "mentee">(
//     initialType as "mentor" | "mentee"
//   );
//   const { mutate: signUp, isPending: isSubmitting } = useSignUp();
//   const { toast } = useToast();

//   const form = useForm<ApplicationFormValues>({
//     resolver: zodResolver(ApplicationSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//       roleTitle: "",
//       organization: "",
//       regionOfOperation: "",
//       yearsInLeadership: 0,
//       areasOfInterest: [],
//       otherArea: "",
//       currentChallenge: "",
//       feelingStretched: "",
//       supportNeeded: "",
//       mentorshipFormat: undefined,
//       cadence: undefined,
//       delivery: undefined,
//     },
//   });

//   const onSubmit = (values: ApplicationFormValues) => {
//     console.log("--- onSubmit CALLED ---");
//     const payload = {
//       fullName: values.fullName,
//       email: values.email,
//       roleTitle: values.roleTitle,
//       organization: values.organization,
//       regionOfoperation: values.regionOfOperation,
//       yearsInleadership: values.yearsInLeadership,
//       areasOfinterest: values.areasOfInterest,
//       otherArea: values.otherArea,
//       currentChallenge: values.currentChallenge,
//       feelingStretched: values.feelingStretched,
//       supportNeeded: values.supportNeeded,
//       mentorshipFormat: values.mentorshipFormat,
//       cadence: values.cadence,
//       delivery: values.delivery,
//     };
//     signUp(payload, {
//       onSuccess: () => {
//         toast({
//           title: "Application Submitted!",
//           description:
//             "Thank you for your interest in becoming a mentee. We'll review your application and get back to you soon..",
//         });

//         form.reset();
//         navigate("/");
//       },
//       onError: (error) => {
//         toast({
//           title: "Submission Failed",
//           description: error.message || "Please try again later.",
//           variant: "destructive",
//         });
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />

//       {/* Hero Section */}
// <section className="bg-hero-gradient py-16">
// <div className="container mx-auto px-4">
//   <div className="max-w-3xl mx-auto text-center animate-fade-in">
//     <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
//       Join FrankMolla
//     </h1>
//     <p className="text-xl text-primary-foreground/90">
//       Start your mentorship journey today. Connect, learn, and grow.
//     </p>
//   </div>
// </div>
// </section>

//       {/* Sign Up Form */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-2xl mx-auto">
//             {/* User Type Selector */}
//             <div className="grid grid-cols-1 gap-4 mb-8">
//               <Button
//                 type="button"
//                 variant={userType === "mentee" ? "default" : "outline"}
//                 onClick={() => setUserType("mentee")}
//                 className="h-auto py-6 flex flex-col items-center gap-2"
//               >
//                 <UserPlus size={24} />
//                 <div>
//                   <div className="font-semibold">Find a Mentor</div>
//                   <div className="text-xs opacity-80">I want guidance</div>
//                 </div>
//               </Button>
//               <Button
//                 type="button"
//                 variant={userType === "mentor" ? "default" : "outline"}
//                 onClick={() => setUserType("mentor")}
//                 className="h-auto py-6 flex flex-col items-center gap-2"
//               >
//                 <Users size={24} />
//                 <div>
//                   <div className="font-semibold">Become a Mentor</div>
//                   <div className="text-xs opacity-80">
//                     I want to help others
//                   </div>
//                 </div>
//               </Button>
//             </div>

//             <Card className="border-border">
//               <CardHeader className="flex justify-center items-center flex-col space-y-1 text-center">
// <CardTitle>
//   {userType === "mentee"
//     ? "Executive Mentorship Interest Questionnaire"
//     : "Mentor Application"}
// </CardTitle>
// <CardDescription>
//   {userType === "mentee"
//     ? "Purpose: To help us understand which areas of growth and support matter most to you right now."
//     : "Share your experience and how you'd like to help others grow."}
// </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Form {...form}>
//                   <form
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="space-y-8"
//                   >
//                     {/* Section 1: Grounding Information */}
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-foreground">
//                         Section 1: Grounding Information
//                       </h3>

//                       <FormField
//                         control={form.control}
//                         name="fullName"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Full Name</FormLabel>
//                             <FormControl>
//                               <Input {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Email Address</FormLabel>
//                             <FormControl>
//                               <Input type="email" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="roleTitle"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Role / Title</FormLabel>
//                             <FormControl>
//                               <Input
//                                 {...field}
//                                 placeholder="e.g., Senior Manager"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="organization"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Organization</FormLabel>
//                             <FormControl>
//                               <Input
//                                 {...field}
//                                 placeholder="e.g., Tech Company Inc."
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="regionOfOperation"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Region of Operation</FormLabel>
//                             <FormControl>
//                               <Input
//                                 {...field}
//                                 placeholder="e.g., North America"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="yearsInLeadership"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Years in Leadership</FormLabel>
//                             <FormControl>
//                               <Input
//                                 type="number"
//                                 min="0"
//                                 {...field}
//                                 onChange={(e) =>
//                                   field.onChange(parseInt(e.target.value) || 0)
//                                 }
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>

//                     {/* Section 2: Areas of Mentorship Interest */}
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-foreground">
//                         Section 2: Areas of Mentorship Interest
//                       </h3>
//                       <p className="text-sm text-muted-foreground">
//                         Instructions: Please select the areas where you would
//                         value mentorship or deeper reflection. Choose all that
//                         apply.
//                       </p>

//                       <FormField
//                         control={form.control}
//                         name="areasOfInterest"
//                         render={() => (
//                           <FormItem>
//                             <div className="space-y-3">
//                               {AREAS_OF_INTEREST.map((area) => (
//                                 <FormField
//                                   key={area}
//                                   control={form.control}
//                                   name="areasOfInterest"
//                                   render={({ field }) => (
//                                     <FormItem className="flex items-start space-x-3 space-y-0">
//                                       <FormControl>
//                                         <Checkbox
//                                           checked={field.value?.includes(area)}
//                                           onCheckedChange={(checked) => {
//                                             return checked
//                                               ? field.onChange([
//                                                   ...field.value,
//                                                   area,
//                                                 ])
//                                               : field.onChange(
//                                                   field.value?.filter(
//                                                     (value) => value !== area
//                                                   )
//                                                 );
//                                           }}
//                                         />
//                                       </FormControl>
//                                       <FormLabel className="font-normal cursor-pointer">
//                                         {area}
//                                       </FormLabel>
//                                     </FormItem>
//                                   )}
//                                 />
//                               ))}
//                             </div>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="otherArea"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Other (please specify)</FormLabel>
//                             <FormControl>
//                               <Input
//                                 {...field}
//                                 placeholder="Specify any other area"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>

//                     {/* Section 3: Self-Reflection Prompts */}
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-foreground">
//                         Section 3: Self-Reflection Prompts
//                       </h3>
//                       <p className="text-sm text-muted-foreground">
//                         Optional: Answer any that resonate with you.
//                       </p>

//                       <FormField
//                         control={form.control}
//                         name="currentChallenge"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>
//                               What's one leadership challenge you're currently
//                               navigating?
//                             </FormLabel>
//                             <FormControl>
//                               <Textarea {...field} rows={3} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="feelingStretched"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>
//                               Where do you feel most stretched or uncertain in
//                               your role?
//                             </FormLabel>
//                             <FormControl>
//                               <Textarea {...field} rows={3} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="supportNeeded"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>
//                               What kind of support would feel nourishing right
//                               now?
//                             </FormLabel>
//                             <FormControl>
//                               <Textarea {...field} rows={3} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>

//                     {/* Section 4: Format Preferences */}
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-foreground">
//                         Section 4: Format Preferences
//                       </h3>

//                       <FormField
//                         control={form.control}
//                         name="mentorshipFormat"
//                         render={({ field }) => (
//                           <FormItem className="space-y-3">
//                             <FormLabel>Preferred mentorship format</FormLabel>
//                             <FormControl>
//                               <RadioGroup
//                                 onValueChange={field.onChange}
//                                 value={field.value}
//                                 className="flex flex-col space-y-1"
//                               >
//                                 <FormItem className="flex items-center space-x-3 space-y-0">
//                                   <FormControl>
//                                     <RadioGroupItem value="one-on-one" />
//                                   </FormControl>
//                                   <FormLabel className="font-normal cursor-pointer">
//                                     One-on-one
//                                   </FormLabel>
//                                 </FormItem>
//                                 <FormItem className="flex items-center space-x-3 space-y-0">
//                                   <FormControl>
//                                     <RadioGroupItem value="small-group" />
//                                   </FormControl>
//                                   <FormLabel className="font-normal cursor-pointer">
//                                     Small group
//                                   </FormLabel>
//                                 </FormItem>
//                                 <FormItem className="flex items-center space-x-3 space-y-0">
//                                   <FormControl>
//                                     <RadioGroupItem value="hybrid" />
//                                   </FormControl>
//                                   <FormLabel className="font-normal cursor-pointer">
//                                     Hybrid
//                                   </FormLabel>
//                                 </FormItem>
//                               </RadioGroup>
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="cadence"
//                         render={({ field }) => (
//                           <FormItem className="space-y-3">
//                             <FormLabel>Ideal cadence</FormLabel>
//                             <FormControl>
//                               <RadioGroup
//                                 onValueChange={field.onChange}
//                                 value={field.value}
//                                 className="flex flex-col space-y-1"
//                               >
//                                 <FormItem className="flex items-center space-x-3 space-y-0">
//                                   <FormControl>
//                                     <RadioGroupItem value="weekly" />
//                                   </FormControl>
//                                   <FormLabel className="font-normal cursor-pointer">
//                                     Weekly
//                                   </FormLabel>
//                                 </FormItem>
//                                 <FormItem className="flex items-center space-x-3 space-y-0">
//                                   <FormControl>
//                                     <RadioGroupItem value="bi-weekly" />
//                                   </FormControl>
//                                   <FormLabel className="font-normal cursor-pointer">
//                                     Bi-weekly
//                                   </FormLabel>
//                                 </FormItem>
//                                 <FormItem className="flex items-center space-x-3 space-y-0">
//                                   <FormControl>
//                                     <RadioGroupItem value="monthly" />
//                                   </FormControl>
//                                   <FormLabel className="font-normal cursor-pointer">
//                                     Monthly
//                                   </FormLabel>
//                                 </FormItem>
//                               </RadioGroup>
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="delivery"
//                         render={({ field }) => (
//                           <FormItem className="space-y-3">
//                             <FormLabel>Preferred delivery</FormLabel>
//                             <FormControl>
//                               <RadioGroup
//                                 onValueChange={field.onChange}
//                                 value={field.value}
//                                 className="flex flex-col space-y-1"
//                               >
//                                 <FormItem className="flex items-center space-x-3 space-y-0">
//                                   <FormControl>
//                                     <RadioGroupItem value="virtual" />
//                                   </FormControl>
//                                   <FormLabel className="font-normal cursor-pointer">
//                                     Virtual
//                                   </FormLabel>
//                                 </FormItem>
//                                 <FormItem className="flex items-center space-x-3 space-y-0">
//                                   <FormControl>
//                                     <RadioGroupItem value="in-person" />
//                                   </FormControl>
//                                   <FormLabel className="font-normal cursor-pointer">
//                                     In-person
//                                   </FormLabel>
//                                 </FormItem>
//                                 <FormItem className="flex items-center space-x-3 space-y-0">
//                                   <FormControl>
//                                     <RadioGroupItem value="flexible" />
//                                   </FormControl>
//                                   <FormLabel className="font-normal cursor-pointer">
//                                     Flexible
//                                   </FormLabel>
//                                 </FormItem>
//                               </RadioGroup>
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>

//                     <Button
//                       type="submit"
//                       className="w-full"
//                       size="lg"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting && (
//                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       )}
//                       Submit Application
//                     </Button>
//                   </form>
//                 </Form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default SignUp;

// import { useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";
// import { useSignUp } from "@/hooks/useAuthMutations";
// import { MentorFormValues, MenteeFormValues } from "@/schemas/signup";

// // Import your new, clean form components
// import { MenteeForm } from "@/components/forms/MenteeForm";
// import { MentorForm } from "@/components/forms/MentorForm";

// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { UserPlus, Users } from "lucide-react";

// const SignUp = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const initialType = searchParams.get("type") || "mentee";
//   const [userType, setUserType] = useState<"mentor" | "mentee">(
//     initialType === "mentor" ? "mentor" : "mentee"
//   );

//   const { mutate: signUp, isPending: isSubmitting } = useSignUp();

//   // This single handler works for BOTH forms
//   const handleApplicationSubmit = (
//     values: MenteeFormValues | MentorFormValues
//   ) => {
//     signUp(
//       { payload: values, type: userType }, // Pass the user type along with form data
//       {
//         onSuccess: () => {
//           toast({
//             title: "Application Submitted!",
//             description: `Thank you for your interest in becoming a ${userType}. We'll be in touch soon.`,
//           });
//           navigate("/");
//         },
//         onError: (error) => {
//           toast({
//             title: "Submission Failed",
//             description: error.message || "Please try again later.",
//             variant: "destructive",
//           });
//         },
//       }
//     );
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
//       <section className="bg-hero-gradient py-16">
//         {/* ... Hero Section ... */}
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
//               Join Rafikiz Mentorship
//             </h1>
//             <p className="text-xl text-primary-foreground/90">
//               Start your mentorship journey today. Connect, learn, and grow.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-2xl mx-auto">
//             {/* User Type Selector (no changes needed here) */}
//             {/* <div className="grid grid-cols-2 gap-4 mb-8"> */}
//             <div className="grid grid-cols-1 gap-4 mb-8">
//               <Button
//                 type="button"
//                 variant={userType === "mentee" ? "default" : "outline"}
//                 onClick={() => setUserType("mentee")}
//                 className="h-auto py-6 flex flex-col items-center gap-2"
//               >
//                 {" "}
//                 <UserPlus size={24} />{" "}
//                 <div>
//                   {" "}
//                   <div className="font-semibold">Connect to Rafiki</div>{" "}
//                   <div className="text-xs opacity-80">I want guidance</div>{" "}
//                 </div>{" "}
//               </Button>
//               {/* <Button
//                 type="button"
//                 variant={userType === "mentor" ? "default" : "outline"}
//                 onClick={() => setUserType("mentor")}
//                 className="h-auto py-6 flex flex-col items-center gap-2"
//               >
//                 {" "}
//                 <Users size={24} />{" "}
//                 <div>
//                   {" "}
//                   <div className="font-semibold">Become a Mentor</div>{" "}
//                   <div className="text-xs opacity-80">
//                     {" "}
//                     I want to help others{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </Button> */}
//             </div>

//             <Card className="border-border">
//               <CardHeader>
//                 {/* ...Your dynamic CardHeader... */}
//                 <CardTitle>
//                   {userType === "mentee"
//                     ? "Executive Mentorship Interest Questionnaire"
//                     : "Mentor Application"}
//                 </CardTitle>
//                 <CardDescription>
//                   {userType === "mentee"
//                     ? "Purpose: To help us understand which areas of growth and support matter most to you right now."
//                     : "Share your experience and how you'd like to help others grow."}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {/* --- THIS IS THE KEY CHANGE --- */}
//                 {userType === "mentee" ? (
//                   <MenteeForm
//                     onSubmit={handleApplicationSubmit}
//                     isSubmitting={isSubmitting}
//                   />
//                 ) : (
//                   <MentorForm
//                     onSubmit={handleApplicationSubmit}
//                     isSubmitting={isSubmitting}
//                   />
//                 )}
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default SignUp;

import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useSignUp } from "@/hooks/useAuthMutations";
import { MentorFormValues, MenteeFormValues } from "@/schemas/signup";

// Import form components
import { MenteeForm } from "@/components/forms/MenteeForm";
import { MentorForm } from "@/components/forms/MentorForm";

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
import { UserPlus, Sparkles } from "lucide-react";

// Unused gallery asset for SignUp Hero background
import heroBg from "@/assets/gallery_14.jpg";

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const initialType = searchParams.get("type") || "mentee";
  const [userType, setUserType] = useState<"mentor" | "mentee">(
    initialType === "mentor" ? "mentor" : "mentee"
  );

  const { mutate: signUp, isPending: isSubmitting } = useSignUp();

  // Handler for BOTH forms
  const handleApplicationSubmit = (
    values: MenteeFormValues | MentorFormValues
  ) => {
    signUp(
      { payload: values, type: userType },
      {
        onSuccess: () => {
          toast({
            title: "Application Submitted!",
            description: `Thank you for your interest in becoming a ${userType}. We'll be in touch soon.`,
          });
          navigate("/");
        },
        onError: (error) => {
          toast({
            title: "Submission Failed",
            description: error.message || "Please try again later.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
      <section className="relative min-h-[45vh] sm:min-h-[60vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 md:py-20 overflow-hidden border-b border-slate-200/80 bg-slate-900">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroBg}
            alt="Join Rafikiz Mentorship"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top filter brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-md">
              <Sparkles size={14} className="animate-pulse text-primary shrink-0" />
              <span>Begin Your Journey</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Join Rafikiz Mentorship
            </h1>
            
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              Start your mentorship journey today. Connect, learn, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            {/* User Type Selector */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <Button
                type="button"
                variant={userType === "mentee" ? "default" : "outline"}
                onClick={() => setUserType("mentee")}
                className={`h-auto py-5 sm:py-6 flex flex-col items-center gap-2 rounded-2xl border transition-all ${
                  userType === "mentee"
                    ? "bg-primary text-white shadow-lg shadow-primary/20 border-primary"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <UserPlus size={24} />
                <div className="text-center">
                  <div className="font-extrabold text-base sm:text-lg">Connect to Rafiki</div>
                  <div className="text-xs opacity-90 font-medium">I want guidance</div>
                </div>
              </Button>
            </div>

            {/* Application Card */}
            <Card className="border border-slate-200/90 bg-white rounded-[1.8rem] sm:rounded-[2.4rem] shadow-sm">
              <CardHeader className="p-6 sm:p-8 pb-4">
                <CardTitle className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {userType === "mentee"
                    ? "Executive Mentorship Interest Questionnaire"
                    : "Mentor Application"}
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1">
                  {userType === "mentee"
                    ? "Purpose: To help us understand which areas of growth and support matter most to you right now."
                    : "Share your experience and how you'd like to help others grow."}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 pt-2">
                {userType === "mentee" ? (
                  <MenteeForm
                    onSubmit={handleApplicationSubmit}
                    isSubmitting={isSubmitting}
                  />
                ) : (
                  <MentorForm
                    onSubmit={handleApplicationSubmit}
                    isSubmitting={isSubmitting}
                  />
                )}
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
