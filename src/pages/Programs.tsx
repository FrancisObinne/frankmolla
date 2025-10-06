import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Rocket, GraduationCap, Palette, Heart, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Navigate your career path with guidance from industry professionals. Get advice on career transitions, promotions, and professional growth.",
      areas: ["Career planning", "Interview preparation", "Skill development", "Leadership coaching"]
    },
    {
      icon: Rocket,
      title: "Entrepreneurship",
      description: "Launch and grow your business with mentors who have been there. Learn from successful entrepreneurs about strategy, funding, and scaling.",
      areas: ["Business planning", "Fundraising", "Product development", "Market strategy"]
    },
    {
      icon: GraduationCap,
      title: "Academic Mentorship",
      description: "Excel in your academic journey with guidance from experienced educators and professionals in your field of study.",
      areas: ["Study strategies", "Research guidance", "Career planning", "Graduate school prep"]
    },
    {
      icon: Palette,
      title: "Creative Skills",
      description: "Develop your creative talents with mentorship from established artists, designers, and creative professionals.",
      areas: ["Portfolio development", "Creative techniques", "Industry insights", "Freelancing advice"]
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description: "Build confidence, develop emotional intelligence, and achieve work-life balance with personal development mentors.",
      areas: ["Self-confidence", "Communication skills", "Work-life balance", "Goal setting"]
    },
    {
      icon: LinkIcon,
      title: "Networking & Connections",
      description: "Learn how to build and leverage professional networks effectively to advance your career and personal goals.",
      areas: ["Professional networking", "Personal branding", "Relationship building", "LinkedIn strategies"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Mentorship Programs
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Find the perfect mentorship program tailored to your goals and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <program.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-text-heading mb-3">
                    {program.title}
                  </h3>
                  <p className="text-text-body mb-4">
                    {program.description}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-text-heading mb-2">Key Areas:</p>
                    <ul className="space-y-1">
                      {program.areas.map((area, idx) => (
                        <li key={idx} className="text-sm text-text-body flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-8">
              What You'll Gain
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Personalized Guidance",
                  description: "Receive one-on-one attention tailored to your unique goals and challenges."
                },
                {
                  title: "Industry Insights",
                  description: "Learn from mentors with real-world experience in your field of interest."
                },
                {
                  title: "Skill Development",
                  description: "Build practical skills and knowledge that accelerate your growth."
                },
                {
                  title: "Network Expansion",
                  description: "Connect with professionals and build relationships that open doors."
                }
              ].map((benefit, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-text-heading mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-text-body">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
            Find Your Perfect Program
          </h2>
          <p className="text-text-body text-lg mb-8 max-w-2xl mx-auto">
            No matter where you are in your journey, we have a mentorship program designed to help you succeed.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="default">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
