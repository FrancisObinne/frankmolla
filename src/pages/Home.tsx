import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Sparkles, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-mentorship-2.jpg";
import mentor_2 from "@/assets/mentor_2.jpg";
import frankImage from "@/assets/frank_molla_mid_section.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Mentorship"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              A Mentorship Sanctuary for the Quietly Bold
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Connect with experienced mentors who will guide you on your
              journey to personal and professional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup?type=mentee">
                <Button size="lg" variant="secondary" className="group">
                  Find a Mentor
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </Link>
              <Link to="/signup?type=mentor">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Become a Mentor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why FrankMolla Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              Why Choose FrankMolla?
            </h2>
            <p className="text-text-body max-w-2xl mx-auto">
              We're committed to creating meaningful connections that foster
              growth, learning, and success.
            </p>
          </div>

          {/* NEW SECTION: Frank's Image after Why FrankMolla Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <img
            src={frankImage} // Use the imported image
            alt="Frank Molla inspiring others"
            className="w-full h-80 object-cover rounded-lg shadow-xl border-4 border-primary/20"
          />
        </div>
      </section>
      {/* END NEW SECTION */}

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Mentors",
                description:
                  "Connect with experienced professionals who are passionate about sharing their knowledge and helping you succeed.",
              },
              {
                icon: Target,
                title: "Personalized Matching",
                description:
                  "Our intelligent matching system pairs you with mentors who align with your goals and aspirations.",
              },
              {
                icon: Sparkles,
                title: "Proven Results",
                description:
                  "Join thousands of mentees who have achieved their goals through our structured mentorship program.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-heading mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-body">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> 

      {/* Frank Moll Profile Section - NEW SECTION */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image on the left */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative p-1 bg-primary/20 rounded-full">
                <img
                  src={mentor_2} // Placeholder for Frank's image
                  alt="Frank Moll, Founder of FrankMolla"
                  className="w-48 h-48 object-cover rounded-full border-4 border-background shadow-lg"
                />
                <div className="absolute bottom-0 right-0 p-2 bg-primary rounded-full border-4 border-muted">
                  <Quote className="text-primary-foreground" size={20} />
                </div>
              </div>
            </div>

            {/* Profile Text on the right */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                A Note from the Founder
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
                Meet Frank Molla
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-text-body mb-3 sm:mb-4 italic leading-relaxed px-3 sm:px-0 text-center sm:text-left">
                "Every great journey starts with a guide. FrankMolla is built on
                the belief that a single, meaningful connection can unlock
                extraordinary potential."
              </p>

              <p className="text-sm sm:text-base md:text-lg text-text-body mb-3 sm:mb-4 leading-relaxed px-3 sm:px-0 text-justify sm:text-left">
                Frank Molla is a renowned entrepreneur and lifelong advocate for
                structured personal development. Having navigated the challenges
                of a competitive landscape, he founded FrankMolla to democratize
                access to world-class mentorship. His vision is a platform where
                the 'Quietly Bold'—those with ambition but perhaps lacking a
                clear path—can find the guidance to realize their full
                potential.
              </p>

              <p className="text-text-body font-semibold">
                — Frank Molla, Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Frank Moll Profile Section */}

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-text-body mb-8 max-w-2xl mx-auto">
            Whether you're looking to grow or share your expertise, FrankMolla
            is here to connect you with the right people.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="default" className="group">
              Get Started Today
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
