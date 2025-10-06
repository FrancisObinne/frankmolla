import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, MessageCircle, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your profile in minutes. Tell us about your goals, interests, and what you're looking for in a mentor or mentee.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Search,
      title: "Get Matched",
      description: "Our intelligent matching system connects you with mentors or mentees who align with your goals, experience, and aspirations.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: MessageCircle,
      title: "Connect & Meet",
      description: "Start your mentorship journey with an introductory session. Set goals, establish expectations, and build rapport.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: TrendingUp,
      title: "Grow Together",
      description: "Engage in regular mentorship sessions. Track progress, overcome challenges, and celebrate achievements along the way.",
      color: "bg-primary/10 text-primary"
    }
  ];

  const benefits = {
    mentees: [
      "Gain insights from experienced professionals",
      "Accelerate your career or personal growth",
      "Build confidence and develop new skills",
      "Expand your professional network",
      "Receive personalized guidance and support"
    ],
    mentors: [
      "Give back and make a meaningful impact",
      "Develop leadership and coaching skills",
      "Gain fresh perspectives and insights",
      "Build lasting professional relationships",
      "Contribute to the next generation's success"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              How FrankMolla Works
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Your journey to meaningful mentorship starts here. Four simple steps to transform your future.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 mb-12 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center`}>
                    <step.icon size={28} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-text-light font-semibold">Step {index + 1}</span>
                    <h3 className="text-2xl font-bold text-text-heading">{step.title}</h3>
                  </div>
                  <p className="text-text-body text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12">
            Benefits for Everyone
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mentees Benefits */}
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-6">For Mentees</h3>
                <ul className="space-y-3">
                  {benefits.mentees.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-text-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Mentors Benefits */}
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-secondary mb-6">For Mentors</h3>
                <ul className="space-y-3">
                  {benefits.mentors.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-text-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-text-body text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals already benefiting from meaningful mentorship connections.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="default">
              Start Your Journey Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
