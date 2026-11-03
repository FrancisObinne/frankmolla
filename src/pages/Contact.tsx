// import { useState } from "react";
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
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { Mail, MessageSquare, HelpCircle, Loader2 } from "lucide-react";
// import { useContactFormMutation } from "@/hooks/useContactFormMutation";

// const Contact = () => {
//   const { toast } = useToast();
//   const { mutate, isPending } = useContactFormMutation();

//   // ⭐️ 1. State Management for Form Fields
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     mutate(formData, {
//       onSuccess: () => {
//         toast({
//           title: "Message Sent! 🎉",
//           description:
//             "Thank you for reaching out. We'll get back to you within 24 hours.",
//         });
//         // 3. Reset form on success
//         setFormData({ name: "", email: "", subject: "", message: "" });
//       },
//       onError: (error) => {
//         console.error("Contact Form Submission Error:", error);
//         toast({
//           title: "Submission Failed",
//           description:
//             "There was an error sending your message. Please try again or email us directly.",
//           variant: "destructive",
//         });
//       },
//     });
//     // toast({
//     //   title: "Message Sent!",
//     //   description:
//     //     "Thank you for reaching out. We'll get back to you within 24 hours.",
//     // });
//     // (e.target as HTMLFormElement).reset();
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="bg-hero-gradient py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
//               Get in Touch
//             </h1>
//             <p className="text-xl text-primary-foreground/90">
//               Have questions? We're here to help. Reach out and we'll respond as
//               soon as possible.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-5xl mx-auto">
//             <div className="grid md:grid-cols-3 gap-6 mb-12">
//               {[
//                 {
//                   icon: Mail,
//                   title: "Email Us",
//                   description: "contact@rafikizmentorship.com",
//                   color: "text-primary",
//                 },
//                 {
//                   icon: MessageSquare,
//                   title: "Quick Response",
//                   description: "We typically respond within 24 hours",
//                   color: "text-secondary",
//                 },
//                 {
//                   icon: HelpCircle,
//                   title: "Support",
//                   description: "Mon-Fri, 9AM-6PM EST",
//                   color: "text-accent",
//                 },
//               ].map((item, index) => (
//                 <Card key={index} className="border-border text-center">
//                   <CardContent className="pt-6">
//                     <div className="bg-muted w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
//                       <item.icon className={item.color} size={24} />
//                     </div>
//                     <h3 className="font-semibold text-text-heading mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-text-body text-sm">{item.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Contact Form */}
//               <Card className="border-border">
//                 <CardHeader>
//                   <CardTitle>Send us a Message</CardTitle>
//                   <CardDescription>
//                     Fill out the form below and we'll get back to you soon.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Name</Label>
//                       {/* <Input id="name" required /> */}
//                       <Input
//                         id="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       {/* <Input id="email" type="email" required /> */}
//                       <Input
//                         id="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="subject">Subject</Label>
//                       {/* <Input id="subject" required /> */}
//                       <Input
//                         id="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="message">Message</Label>
//                       {/* <Textarea
//                         id="message"
//                         rows={5}
//                         placeholder="Tell us how we can help..."
//                         required
//                       /> */}
//                       <Textarea
//                         id="message"
//                         rows={5}
//                         placeholder="Tell us how we can help..."
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     {/* <Button type="submit" className="w-full">
//                       Send Message
//                     </Button> */}
//                     <Button
//                       type="submit"
//                       className="w-full"
//                       disabled={isPending}
//                     >
//                       {isPending ? (
//                         <>
//                           <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
//                           Sending...
//                         </>
//                       ) : (
//                         "Send Message"
//                       )}
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>

//               {/* FAQ Section */}
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold text-text-heading">
//                   Common Questions
//                 </h3>

//                 {[
//                   // {
//                   //   question: "How does matching work?",
//                   //   answer:
//                   //     "Our algorithm matches you based on goals, interests, experience, and availability to ensure the best mentorship fit.",
//                   // },
//                   {
//                     question: "Is Rafikiz Mentorship free?",
//                     answer:
//                       "We offer both free and premium membership options. Basic mentorship connections are always free.",
//                   },
//                   {
//                     question: "How long does mentorship last?",
//                     answer:
//                       "Most mentorship relationships last 3-6 months, but the duration is flexible based on your goals and needs.",
//                   },
//                   {
//                     question: "Can I be both a mentor and mentee?",
//                     answer:
//                       "Absolutely! Many of our members participate in both roles, learning in one area while sharing expertise in another.",
//                   },
//                 ].map((faq, index) => (
//                   <Card key={index} className="border-border">
//                     <CardContent className="pt-6">
//                       <h4 className="font-semibold text-text-heading mb-2">
//                         {faq.question}
//                       </h4>
//                       <p className="text-text-body text-sm">{faq.answer}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, HelpCircle, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { useContactFormMutation } from "@/hooks/useContactFormMutation";

// Unused gallery asset for Contact hero background
import heroBg from "@/assets/gallery_10.jpg";

const Contact = () => {
  const { toast } = useToast();
  const { mutate, isPending } = useContactFormMutation();

  // State Management for Form Fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        toast({
          title: "Message Sent! 🎉",
          description:
            "Thank you for reaching out. We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      onError: (error) => {
        console.error("Contact Form Submission Error:", error);
        toast({
          title: "Submission Failed",
          description:
            "There was an error sending your message. Please try again or email us directly.",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 md:py-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroBg}
            alt="Contact Us"
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
              <span>We're Here to Help</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Get in Touch
            </h1>
            
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              Have questions? Reach out and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Quick Info Cards Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "contact@rafikizmentorship.com",
                  color: "text-primary bg-primary/10 border-primary/20",
                },
                {
                  icon: MessageSquare,
                  title: "Quick Response",
                  description: "We typically respond within 24 hours",
                  color: "text-blue-600 bg-blue-50 border-blue-200",
                },
                {
                  icon: HelpCircle,
                  title: "Support",
                  description: "Mon-Fri, 9AM-6PM EST",
                  color: "text-purple-600 bg-purple-50 border-purple-200",
                },
              ].map((item, index) => (
                <Card key={index} className="border border-slate-200/90 bg-slate-50/70 rounded-[1.8rem] shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mx-auto mb-4 shadow-sm ${item.color}`}>
                      <item.icon size={24} />
                    </div>
                    <h3 className="font-extrabold text-slate-900 mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-medium">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form & FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Contact Form */}
              <Card className="border border-slate-200/90 bg-white rounded-[2.2rem] shadow-sm">
                <CardHeader className="p-6 sm:p-8 pb-4">
                  <CardTitle className="text-2xl font-extrabold text-slate-900">Send us a Message</CardTitle>
                  <CardDescription className="text-slate-600">
                    Fill out the form below and we'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-semibold">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-slate-200 bg-slate-50/50 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-semibold">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-slate-200 bg-slate-50/50 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-700 font-semibold">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-slate-200 bg-slate-50/50 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-semibold">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-slate-200 bg-slate-50/50 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full h-14 text-base font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Common Questions
                </h3>

                {[
                  {
                    question: "Is Rafikiz Mentorship free?",
                    answer:
                      "We offer both free and premium membership options. Basic mentorship connections are always free.",
                  },
                  {
                    question: "How long does mentorship last?",
                    answer:
                      "Most mentorship relationships last 3-6 months, but the duration is flexible based on your goals and needs.",
                  },
                  {
                    question: "Can I be both a mentor and mentee?",
                    answer:
                      "Absolutely! Many of our members participate in both roles, learning in one area while sharing expertise in another.",
                  },
                ].map((faq, index) => (
                  <Card key={index} className="border border-slate-200/90 bg-slate-50/70 rounded-[1.8rem] shadow-sm">
                    <CardContent className="p-6">
                      <h4 className="font-extrabold text-slate-900 mb-2 text-base">
                        {faq.question}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
