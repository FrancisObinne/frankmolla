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
import { Mail, MessageSquare, HelpCircle, Loader2 } from "lucide-react";
import { useContactFormMutation } from "@/hooks/useContactFormMutation";

const Contact = () => {
  const { toast } = useToast();
  const { mutate, isPending } = useContactFormMutation();

  // ⭐️ 1. State Management for Form Fields
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
        // 3. Reset form on success
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
    // toast({
    //   title: "Message Sent!",
    //   description:
    //     "Thank you for reaching out. We'll get back to you within 24 hours.",
    // });
    // (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Have questions? We're here to help. Reach out and we'll respond as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "contact@frankmolla.com",
                  color: "text-primary",
                },
                {
                  icon: MessageSquare,
                  title: "Quick Response",
                  description: "We typically respond within 24 hours",
                  color: "text-secondary",
                },
                {
                  icon: HelpCircle,
                  title: "Support",
                  description: "Mon-Fri, 9AM-6PM EST",
                  color: "text-accent",
                },
              ].map((item, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="bg-muted w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className={item.color} size={24} />
                    </div>
                    <h3 className="font-semibold text-text-heading mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-body text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      {/* <Input id="name" required /> */}
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      {/* <Input id="email" type="email" required /> */}
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      {/* <Input id="subject" required /> */}
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      {/* <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us how we can help..."
                        required
                      /> */}
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* <Button type="submit" className="w-full">
                      Send Message
                    </Button> */}
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
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
                <h3 className="text-2xl font-bold text-text-heading">
                  Common Questions
                </h3>

                {[
                  // {
                  //   question: "How does matching work?",
                  //   answer:
                  //     "Our algorithm matches you based on goals, interests, experience, and availability to ensure the best mentorship fit.",
                  // },
                  {
                    question: "Is FrankMolla free?",
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
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-text-heading mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-text-body text-sm">{faq.answer}</p>
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
