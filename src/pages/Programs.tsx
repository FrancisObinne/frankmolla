// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Briefcase, Rocket, GraduationCap, Palette, Heart, Link as LinkIcon } from "lucide-react";
// import { Link } from "react-router-dom";

// const Programs = () => {
//   const programs = [
//     {
//       icon: Briefcase,
//       title: "Career Development",
//       description: "Navigate your career path with guidance from industry professionals. Get advice on career transitions, promotions, and professional growth.",
//       areas: ["Career planning", "Interview preparation", "Skill development", "Leadership coaching"]
//     },
//     {
//       icon: Rocket,
//       title: "Entrepreneurship",
//       description: "Launch and grow your business with mentors who have been there. Learn from successful entrepreneurs about strategy, funding, and scaling.",
//       areas: ["Business planning", "Fundraising", "Product development", "Market strategy"]
//     },
//     {
//       icon: GraduationCap,
//       title: "Academic Mentorship",
//       description: "Excel in your academic journey with guidance from experienced educators and professionals in your field of study.",
//       areas: ["Study strategies", "Research guidance", "Career planning", "Graduate school prep"]
//     },
//     {
//       icon: Palette,
//       title: "Creative Skills",
//       description: "Develop your creative talents with mentorship from established artists, designers, and creative professionals.",
//       areas: ["Portfolio development", "Creative techniques", "Industry insights", "Freelancing advice"]
//     },
//     {
//       icon: Heart,
//       title: "Personal Growth",
//       description: "Build confidence, develop emotional intelligence, and achieve work-life balance with personal development mentors.",
//       areas: ["Self-confidence", "Communication skills", "Work-life balance", "Goal setting"]
//     },
//     {
//       icon: LinkIcon,
//       title: "Networking & Connections",
//       description: "Learn how to build and leverage professional networks effectively to advance your career and personal goals.",
//       areas: ["Professional networking", "Personal branding", "Relationship building", "LinkedIn strategies"]
//     }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="bg-hero-gradient py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
//               Mentorship Programs
//             </h1>
//             <p className="text-xl text-primary-foreground/90">
//               Find the perfect mentorship program tailored to your goals and aspirations.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Programs Grid */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {programs.map((program, index) => (
//               <Card 
//                 key={index} 
//                 className="border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <CardContent className="pt-6">
//                   <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
//                     <program.icon className="text-primary" size={28} />
//                   </div>
//                   <h3 className="text-xl font-bold text-text-heading mb-3">
//                     {program.title}
//                   </h3>
//                   <p className="text-text-body mb-4">
//                     {program.description}
//                   </p>
//                   <div className="border-t border-border pt-4">
//                     <p className="text-sm font-semibold text-text-heading mb-2">Key Areas:</p>
//                     <ul className="space-y-1">
//                       {program.areas.map((area, idx) => (
//                         <li key={idx} className="text-sm text-text-body flex items-center gap-2">
//                           <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
//                           {area}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20 bg-muted">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-8">
//               What You'll Gain
//             </h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {[
//                 {
//                   title: "Personalized Guidance",
//                   description: "Receive one-on-one attention tailored to your unique goals and challenges."
//                 },
//                 {
//                   title: "Industry Insights",
//                   description: "Learn from mentors with real-world experience in your field of interest."
//                 },
//                 {
//                   title: "Skill Development",
//                   description: "Build practical skills and knowledge that accelerate your growth."
//                 },
//                 {
//                   title: "Network Expansion",
//                   description: "Connect with professionals and build relationships that open doors."
//                 }
//               ].map((benefit, index) => (
//                 <Card key={index} className="border-border">
//                   <CardContent className="pt-6">
//                     <h3 className="text-lg font-semibold text-text-heading mb-2">
//                       {benefit.title}
//                     </h3>
//                     <p className="text-text-body">
//                       {benefit.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
//             Find Your Perfect Program
//           </h2>
//           <p className="text-text-body text-lg mb-8 max-w-2xl mx-auto">
//             No matter where you are in your journey, we have a mentorship program designed to help you succeed.
//           </p>
//           <Link to="/signup">
//             <Button size="lg" variant="default">
//               Get Started Now
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Programs;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Rocket, GraduationCap, Palette, Heart, Link as LinkIcon, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

// Unused gallery assets for Programs.tsx (avoiding Home, About, and HowItWorks assets)
import heroBg from "@/assets/gallery_15.jpg";
import gallery16 from "@/assets/gallery_16.jpg";
import gallery17 from "@/assets/gallery_17.jpg";
import gallery18 from "@/assets/gallery_18.jpg";
import gallery19 from "@/assets/gallery_19.jpg";
import gallery20 from "@/assets/gallery_20.jpg";

const Programs = () => {
  const programs = [
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Navigate your career path with guidance from industry professionals. Get advice on career transitions, promotions, and professional growth.",
      areas: ["Career planning", "Interview preparation", "Skill development", "Leadership coaching"],
      image: gallery16,
      badgeColor: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: Rocket,
      title: "Entrepreneurship",
      description: "Launch and grow your business with mentors who have been there. Learn from successful entrepreneurs about strategy, funding, and scaling.",
      areas: ["Business planning", "Fundraising", "Product development", "Market strategy"],
      image: gallery17,
      badgeColor: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: GraduationCap,
      title: "Academic Mentorship",
      description: "Excel in your academic journey with guidance from experienced educators and professionals in your field of study.",
      areas: ["Study strategies", "Research guidance", "Career planning", "Graduate school prep"],
      image: gallery18,
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      icon: Palette,
      title: "Creative Skills",
      description: "Develop your creative talents with mentorship from established artists, designers, and creative professionals.",
      areas: ["Portfolio development", "Creative techniques", "Industry insights", "Freelancing advice"],
      image: gallery19,
      badgeColor: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description: "Build confidence, develop emotional intelligence, and achieve work-life balance with personal development mentors.",
      areas: ["Self-confidence", "Communication skills", "Work-life balance", "Goal setting"],
      image: gallery20,
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      icon: LinkIcon,
      title: "Networking & Connections",
      description: "Learn how to build and leverage professional networks effectively to advance your career and personal goals.",
      areas: ["Professional networking", "Personal branding", "Relationship building", "LinkedIn strategies"],
      image: heroBg,
      badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-200"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />
      
      {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 md:py-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroBg}
            alt="Mentorship Programs"
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
              <span>Tailored Tracks</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Mentorship Programs
            </h1>
            
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              Find the perfect mentorship program tailored to your goals and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* --- PROGRAMS GRID SECTION --- */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-primary/20">
              Specialized Pathways
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Our Programs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className="group border border-slate-200/90 bg-slate-50/70 hover:bg-white transition-all duration-300 rounded-[1.8rem] sm:rounded-[2.2rem] p-2 shadow-sm hover:shadow-xl hover:border-primary/40 flex flex-col justify-between"
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full justify-between space-y-6">
                  <div>
                    {/* Program Image Holder */}
                    <div className="relative w-full h-[180px] sm:h-[200px] bg-white rounded-[1.4rem] overflow-hidden flex items-center justify-center p-2 border border-slate-200/80 mb-6 shadow-inner">
                      <img
                        src={program.image}
                        alt={program.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain rounded-[1rem] transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${program.badgeColor} border flex items-center justify-center shadow-sm shrink-0`}>
                        <program.icon size={20} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                      {program.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-200/80 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Key Focus Areas:</p>
                    <ul className="space-y-2">
                      {program.areas.map((area, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                          <span className="font-medium">{area}</span>
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

      {/* --- BENEFITS / WHAT YOU'LL GAIN SECTION --- */}
      <section className="py-16 sm:py-24 bg-slate-100/70 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-primary/20">
              Tangible Outcomes
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What You'll Gain
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
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
              <Card key={index} className="border border-slate-200/90 bg-white rounded-[1.8rem] sm:rounded-[2.2rem] shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 sm:p-8 flex items-start gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-xl border border-primary/20 text-primary shrink-0 mt-1">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-slate-900 text-white">
        <div className="container relative mx-auto px-4 sm:px-6 text-center z-10">
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Find Your Perfect Program
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            No matter where you are in your journey, we have a mentorship program designed to help you succeed.
          </p>
          <div className="flex justify-center w-full px-2">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button size="lg" variant="default" className="h-14 sm:h-16 w-full sm:w-auto px-6 sm:px-12 text-base sm:text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 border border-primary/50 group flex items-center justify-center">
                <span>Get Started Now</span>
                <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
