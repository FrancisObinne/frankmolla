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

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Rocket, GraduationCap, Palette, Heart, Link as LinkIcon, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState("All programs");

  const programs = [
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Navigate your career path with guidance from industry professionals. Get advice on career transitions, promotions, and professional growth.",
      areas: ["Career planning", "Interview preparation", "Skill development", "Leadership coaching"],
      category: "Career",
      badgeColor: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: Rocket,
      title: "Entrepreneurship",
      description: "Launch and grow your business with mentors who have been there. Learn from successful entrepreneurs about strategy, funding, and scaling.",
      areas: ["Business planning", "Fundraising", "Product development", "Market strategy"],
      category: "Business",
      badgeColor: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: GraduationCap,
      title: "Academic Mentorship",
      description: "Excel in your academic journey with guidance from experienced educators and professionals in your field of study.",
      areas: ["Study strategies", "Research guidance", "Career planning", "Graduate school prep"],
      category: "Learning",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      icon: Palette,
      title: "Creative Skills",
      description: "Develop your creative talents with mentorship from established artists, designers, and creative professionals.",
      areas: ["Portfolio development", "Creative techniques", "Industry insights", "Freelancing advice"],
      category: "Creative skills",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description: "Build confidence, develop emotional intelligence, and achieve work-life balance with personal development mentors.",
      areas: ["Self-confidence", "Communication skills", "Work-life balance", "Goal setting"],
      category: "Personal growth",
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      icon: LinkIcon,
      title: "Networking & Connections",
      description: "Learn how to build and leverage professional networks effectively to advance your career and personal goals.",
      areas: ["Professional networking", "Personal branding", "Relationship building", "LinkedIn strategies"],
      category: "Connections",
      badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-200"
    }
  ];
  const categories = ["All programs", ...programs.map(({ category }) => category)];
  const visiblePrograms = activeCategory === "All programs"
    ? programs
    : programs.filter(({ category }) => category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 md:py-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <defs>
              <linearGradient id="programs-hero-base" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#101827" />
                <stop offset="48%" stopColor="#29234b" />
                <stop offset="100%" stopColor="#46213e" />
              </linearGradient>
              <radialGradient id="programs-hero-glow">
                <stop offset="0%" stopColor="#fb7185" stopOpacity=".45" />
                <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="programs-hero-violet">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity=".42" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="programs-hero-path" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#fb7185" stopOpacity="0" />
                <stop offset="48%" stopColor="#fda4af" stopOpacity=".62" />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity=".12" />
              </linearGradient>
            </defs>
            <rect width="1600" height="900" fill="url(#programs-hero-base)" />
            <ellipse cx="290" cy="190" rx="500" ry="400" fill="url(#programs-hero-violet)" />
            <ellipse cx="1370" cy="690" rx="570" ry="460" fill="url(#programs-hero-glow)" />
            <path d="M-80 690 C180 580 320 790 560 620 S900 370 1120 510 1430 640 1680 280" fill="none" stroke="url(#programs-hero-path)" strokeWidth="3" />
            <path d="M-70 770 C230 640 360 850 650 680 S1000 450 1230 580 1470 720 1680 410" fill="none" stroke="url(#programs-hero-path)" strokeWidth="2" opacity=".65" />
            <g fill="#fda4af"><circle cx="290" cy="605" r="8" /><circle cx="560" cy="620" r="7" /><circle cx="1120" cy="510" r="8" /></g>
            <g fill="#c4b5fd"><circle cx="850" cy="424" r="7" /><circle cx="1430" cy="510" r="7" /></g>
            <g fill="none" stroke="#fff" strokeOpacity=".12">
              <circle cx="290" cy="605" r="42" /><circle cx="290" cy="605" r="78" />
              <circle cx="1120" cy="510" r="48" /><circle cx="1120" cy="510" r="88" />
            </g>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-slate-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_8%,rgba(2,6,23,0.38)_100%)]" />
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

          <div className="mx-auto mb-8 max-w-5xl rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 sm:mb-10 sm:rounded-[1.6rem] sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
              <div className="sm:min-w-[190px]">
                <p className="text-sm font-bold text-slate-900 sm:text-base">What would you like to focus on?</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">Choose a goal to find a relevant pathway.</p>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter mentorship programs by focus area">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-3.5 sm:text-sm ${activeCategory === category ? "border-primary bg-primary text-white shadow-sm" : "border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary"}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <p className="sr-only" aria-live="polite">Showing {visiblePrograms.length} {activeCategory === "All programs" ? "available" : activeCategory.toLowerCase()} mentorship {visiblePrograms.length === 1 ? "program" : "programs"}.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {visiblePrograms.map((program) => (
              <Card 
                key={program.title}
                className="group border border-slate-200/90 bg-slate-50/70 hover:bg-white transition-all duration-300 rounded-[1.8rem] sm:rounded-[2.2rem] p-2 shadow-sm hover:shadow-xl hover:border-primary/40 flex flex-col justify-between"
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full justify-between space-y-6">
                  <div>
                    {/* Program pathway infographic */}
                    <div
                      role="img"
                      aria-label={`${program.title} pathway graphic: ${program.areas.slice(0, 3).join(", ")}`}
                      className="relative mb-6 flex h-[180px] w-full flex-col justify-between overflow-hidden rounded-[1.4rem] border border-white bg-gradient-to-br from-white via-rose-50/70 to-violet-50/90 p-4 shadow-inner sm:h-[200px] sm:p-5"
                    >
                      <div aria-hidden="true" className="absolute -right-8 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                      <div aria-hidden="true" className="absolute -bottom-16 -left-8 h-36 w-36 rounded-full bg-violet-200/50 blur-2xl" />
                      <svg aria-hidden="true" viewBox="0 0 400 180" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-40">
                        <path d="M-20 140 C80 40 125 180 220 85 S340 35 430 70" fill="none" stroke="#c084fc" strokeWidth="2" strokeDasharray="4 8" />
                        <circle cx="80" cy="105" r="5" fill="#fb7185" />
                        <circle cx="220" cy="85" r="5" fill="#8b5cf6" />
                        <circle cx="340" cy="55" r="5" fill="#34d399" />
                      </svg>
                      <div className="relative flex items-center justify-between gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">Mentorship pathway</span>
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl border shadow-sm ${program.badgeColor}`}>
                          <program.icon size={18} aria-hidden="true" />
                        </span>
                      </div>
                      <div className="relative flex items-end justify-between gap-2">
                        {program.areas.slice(0, 3).map((area, areaIndex) => (
                          <div key={area} className={`min-w-0 flex-1 rounded-xl border border-white/90 bg-white/85 px-2 py-2.5 text-center shadow-sm backdrop-blur-sm sm:px-2.5 ${areaIndex === 1 ? "-translate-y-2" : ""}`}>
                            <span className="mx-auto mb-1.5 block h-1.5 w-1.5 rounded-full bg-primary/70" />
                            <span className="block truncate text-[9px] font-semibold text-slate-700 sm:text-[10px]">{area}</span>
                          </div>
                        ))}
                      </div>
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
