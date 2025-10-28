import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Award } from "lucide-react";
import frankAboutImage from "@/assets/frank_molla_about_me.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About FrankMolla
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Building bridges between experience and aspiration, one meaningful
              connection at a time.
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Frank's Image before Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <img
            src={frankAboutImage} // Use the imported image
            alt="Frank Molla leading a discussion"
            className="w-full h-80 object-cover rounded-lg shadow-xl border-4 border-primary/20"
          />
        </div>
      </section>
      {/* END NEW SECTION */}

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-heading mb-6">
              {/* Our Story */}
              Show Me You Know Me
            </h2>
            <div className="space-y-4 text-text-body">
              <p>
                This is not just a website it’s a gathering place for those who
                lead with heart, build with trust, and grow through meaningful
                relationships
              </p>
              <p>
                {/* FrankMolla was founded with a simple yet powerful belief: that
                everyone deserves access to guidance from those who have walked
                the path before them. We recognized that while talent and
                ambition are abundant, meaningful mentorship opportunities are
                often out of reach. */}
                Whether you’re an entrepreneur navigating uncertainty, a leader
                seeking to humanize your influence, or a professional preparing
                for legacy and retirement, this space offers mentorship rooted
                in:
              </p>
              <p>
                {/* What started as a small initiative to connect professionals in
                our local community has grown into a thriving platform that
                serves thousands of mentors and mentees worldwide. We've
                witnessed countless success stories—from career pivots and
                startup launches to academic achievements and personal
                breakthroughs. */}
              </p>
              <p>
                {/* Today, FrankMolla stands as a testament to the power of human
                connection and the transformative impact of sharing knowledge,
                experience, and wisdom across generations and industries. */}
              </p>
              <ul>
                <li className="list-disc ml-6">
                  Entrepreneurship with empathy
                </li>
                <li className="list-disc ml-6">
                  Leadership that dignifies, not performs
                </li>
                <li className="list-disc ml-6">
                  Career growth anchored in clarity and presence
                </li>
                <li className="list-disc ml-6">
                  Relationship building as a form of infrastructure
                </li>
                <li className="list-disc ml-6">
                  Negotiation as relational design
                </li>
                <li className="list-disc ml-6">Sales as service</li>
                <li className="list-disc ml-6">
                  Financial wisdom for a retirement that honors your journey
                </li>
              </ul>
              <p>
                Here, mentorship isn’t a transaction it’s a conversation. A
                pause. A prompt. A path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Mission",
                description:
                  "To democratize access to quality mentorship, empowering individuals to reach their full potential through meaningful guidance and support.",
              },
              {
                icon: Eye,
                title: "Vision",
                description:
                  "A world where everyone has access to the mentorship they need to thrive, creating a ripple effect of knowledge-sharing and growth.",
              },
              {
                icon: Award,
                title: "Values",
                description:
                  "Integrity, empathy, inclusivity, excellence, and commitment to fostering genuine connections that transform lives.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-heading mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-body">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-heading mb-6">
              Our Commitment
            </h2>
            <p className="text-text-body text-lg mb-8">
              At FrankMolla, we're more than just a platform—we're a community
              dedicated to fostering growth, learning, and meaningful
              relationships. Every day, our team works tirelessly to ensure that
              our mentors and mentees have the best possible experience.
            </p>
            <p className="text-text-body text-lg">
              We believe in the power of human connection to change lives, and
              we're honored to play a part in your journey.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
