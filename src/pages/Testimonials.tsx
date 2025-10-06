import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      program: "Career Development",
      image: "SJ",
      quote: "FrankMolla connected me with an amazing mentor who helped me transition from junior to senior engineer in just 18 months. The guidance I received was invaluable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      program: "Entrepreneurship",
      image: "MC",
      quote: "My mentor's experience in scaling startups gave me the confidence and strategy I needed. We secured our Series A funding within a year of starting mentorship.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Graduate Student",
      program: "Academic Mentorship",
      image: "ER",
      quote: "The academic guidance I received helped me get accepted into my dream PhD program. My mentor's insights on research and applications were game-changing.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Graphic Designer",
      program: "Creative Skills",
      image: "DT",
      quote: "Working with a mentor who's been in the industry for 15 years transformed my approach to design. My portfolio improved dramatically, and I landed my dream job.",
      rating: 5
    },
    {
      name: "Jessica Williams",
      role: "Marketing Manager",
      program: "Personal Growth",
      image: "JW",
      quote: "The personal development mentorship helped me overcome imposter syndrome and develop the leadership skills I needed to advance in my career.",
      rating: 5
    },
    {
      name: "Alex Kumar",
      role: "Product Manager",
      program: "Career Development",
      image: "AK",
      quote: "My mentor helped me navigate a challenging career transition. Their experience and guidance made all the difference in landing a senior PM role at a top tech company.",
      rating: 5
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
              Success Stories
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Real people, real results. Discover how mentorship has transformed careers and lives.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { number: "10,000+", label: "Active Members" },
              { number: "5,000+", label: "Successful Matches" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "50+", label: "Industries Covered" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-body text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.image}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-heading">{testimonial.name}</h3>
                      <p className="text-sm text-text-light">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                  
                  <Quote className="text-muted-foreground mb-2" size={20} />
                  <p className="text-text-body mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-semibold text-primary">
                      {testimonial.program}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-text-body text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through meaningful mentorship.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="default">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
