import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Users } from "lucide-react";

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "mentee";
  const [userType, setUserType] = useState<"mentor" | "mentee">(initialType as "mentor" | "mentee");
  const { toast } = useToast();

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
                onClick={() => setUserType("mentee")}
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
                onClick={() => setUserType("mentor")}
                className="h-auto py-6 flex flex-col items-center gap-2"
              >
                <Users size={24} />
                <div>
                  <div className="font-semibold">Become a Mentor</div>
                  <div className="text-xs opacity-80">I want to help others</div>
                </div>
              </Button>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>
                  {userType === "mentee" ? "Mentee Application" : "Mentor Application"}
                </CardTitle>
                <CardDescription>
                  {userType === "mentee" 
                    ? "Tell us about yourself and what you're looking for in a mentor."
                    : "Share your experience and how you'd like to help others grow."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Area of Interest</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="career">Career Development</SelectItem>
                        <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                        <SelectItem value="academic">Academic Mentorship</SelectItem>
                        <SelectItem value="creative">Creative Skills</SelectItem>
                        <SelectItem value="personal">Personal Growth</SelectItem>
                        <SelectItem value="networking">Networking & Connections</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {userType === "mentor" && (
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input id="experience" type="number" min="1" required />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="background">
                      {userType === "mentee" ? "Tell us about your goals" : "Share your expertise"}
                    </Label>
                    <Textarea 
                      id="background" 
                      rows={4}
                      placeholder={userType === "mentee" 
                        ? "What are you hoping to achieve? What challenges are you facing?"
                        : "What's your professional background? What areas can you mentor in?"}
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
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
