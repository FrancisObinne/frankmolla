

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Sparkles, Quote, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-mentorship-2.jpg";
import mentor_2 from "@/assets/mentor_2.jpg";
import frankImage from "@/assets/frank_molla_mid_section.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] selection:bg-primary/20">
      <Navigation />

      {/* --- HERO SECTION: Modern Split Layout --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-0">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 hidden lg:block -skew-x-12 translate-x-20" />
        
        <div className="container relative mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              <Sparkles size={16} />
              <span>Elevate Your Potential</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              A Mentorship Sanctuary for the <span className="text-primary italic">Quietly Bold</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Connect with world-class mentors who transform ambition into excellence through structured, meaningful guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/signup?type=mentee">
                <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all rounded-full">
                  Find a Mentor
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/signup?type=mentor">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2 rounded-full hover:bg-white transition-all shadow-sm">
                  Become a Mentor
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative group animate-float px-4 md:px-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-[2.5rem] blur-3xl opacity-50" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={heroImage}
                alt="Mentorship"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Card - Mobile Hidden */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Verified Mentors</p>
                  <p className="text-xs text-slate-500">100% Manual Vetting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SECTION: Bento Grid Style --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20 text-center lg:text-left">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 italic">The Rafikiz Difference</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Why Choose Rafikiz Mentorship?
            </h3>
            <p className="text-slate-500 text-lg mt-6">
              We're committed to creating meaningful connections that foster growth, learning, and success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Mentors",
                description: "Connect with experienced professionals who are passionate about sharing their knowledge.",
                color: "bg-blue-500",
              },
              {
                icon: Target,
                title: "Personalized Matching",
                description: "Our intelligent matching system pairs you with mentors who align with your exact goals.",
                color: "bg-primary",
              },
              {
                icon: Sparkles,
                title: "Proven Results",
                description: "Join thousands of mentees who have achieved their goals through our structured program.",
                color: "bg-purple-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group border-none shadow-none bg-slate-50 hover:bg-slate-900 transition-all duration-500 rounded-[2rem]"
              >
                <CardContent className="p-10">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED WIDE IMAGE SECTION --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
            <img
              src={frankImage}
              alt="Community interaction"
              className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all" />
            <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-6">
              <h4 className="text-3xl md:text-5xl font-bold text-white max-w-md">Building the future, together.</h4>
              <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOUNDER PROFILE SECTION: Editorial Layout --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Founder Image */}
            <div className="md:col-span-5 relative flex justify-center">
              <div className="relative p-3 bg-white shadow-2xl rounded-[2.5rem]">
                <img
                  src={mentor_2}
                  alt="Founder"
                  className="w-full h-auto aspect-[4/5] object-cover rounded-[2rem]"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-3xl shadow-xl border-[6px] border-slate-50">
                  <Quote className="text-white fill-current" size={32} />
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="md:col-span-7 space-y-6 lg:pl-10">
              <div className="space-y-2">
                <p className="text-primary font-bold tracking-widest uppercase text-xs">Visionary & Founder</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Meet Rafikiz Mentorship</h2>
              </div>
              
              <div className="relative">
                <p className="text-2xl md:text-3xl text-slate-800 leading-snug font-medium italic">
                  "Every great journey starts with a guide. We believe a single connection can unlock extraordinary potential."
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Rafikiz Mentorship is a renowned advocate for structured personal development. Having navigated the challenges of a competitive landscape, this platform was founded to democratize access to world-class guidance.
                </p>
                <p>
                  His vision is a space where the <strong className="text-slate-900">'Quietly Bold'</strong>—those with ambition but perhaps lacking a clear path—can find the mentorship required to realize their full destiny.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-xl font-bold text-slate-900">— Rafikiz Mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION: Bold Gradient --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        {/* Animated Orbs for depth */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary opacity-20 blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary opacity-20 blur-[100px]" />

        <div className="container relative mx-auto px-6 text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to grow or share your expertise, Rafikiz Mentorship is here to connect you with the right people.
          </p>
          
          <Link to="/signup">
            <Button size="lg" variant="default" className="h-16 px-12 text-xl rounded-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all shadow-2xl shadow-primary/30 group">
              Get Started Today
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
