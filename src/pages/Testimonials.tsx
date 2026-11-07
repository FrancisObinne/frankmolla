// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Star, Quote } from "lucide-react";
// import { Link } from "react-router-dom";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Software Engineer",
//       program: "Career Development",
//       image: "SJ",
//       quote: "Rafikiz Mentorship connected me with an amazing mentor who helped me transition from junior to senior engineer in just 18 months. The guidance I received was invaluable.",
//       rating: 5
//     },
//     {
//       name: "Michael Chen",
//       role: "Startup Founder",
//       program: "Entrepreneurship",
//       image: "MC",
//       quote: "My mentor's experience in scaling startups gave me the confidence and strategy I needed. We secured our Series A funding within a year of starting mentorship.",
//       rating: 5
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Graduate Student",
//       program: "Academic Mentorship",
//       image: "ER",
//       quote: "The academic guidance I received helped me get accepted into my dream PhD program. My mentor's insights on research and applications were game-changing.",
//       rating: 5
//     },
//     {
//       name: "David Thompson",
//       role: "Graphic Designer",
//       program: "Creative Skills",
//       image: "DT",
//       quote: "Working with a mentor who's been in the industry for 15 years transformed my approach to design. My portfolio improved dramatically, and I landed my dream job.",
//       rating: 5
//     },
//     {
//       name: "Jessica Williams",
//       role: "Marketing Manager",
//       program: "Personal Growth",
//       image: "JW",
//       quote: "The personal development mentorship helped me overcome imposter syndrome and develop the leadership skills I needed to advance in my career.",
//       rating: 5
//     },
//     {
//       name: "Alex Kumar",
//       role: "Product Manager",
//       program: "Career Development",
//       image: "AK",
//       quote: "My mentor helped me navigate a challenging career transition. Their experience and guidance made all the difference in landing a senior PM role at a top tech company.",
//       rating: 5
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
//               Success Stories
//             </h1>
//             <p className="text-xl text-primary-foreground/90">
//               Real people, real results. Discover how mentorship has transformed careers and lives.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-background border-b border-border">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
//             {[
//               { number: "10,000+", label: "Active Members" },
//               { number: "5,000+", label: "Successful Matches" },
//               { number: "95%", label: "Satisfaction Rate" },
//               { number: "50+", label: "Industries Covered" }
//             ].map((stat, index) => (
//               <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-text-body text-sm md:text-base">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Grid */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card 
//                 key={index} 
//                 className="border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <CardContent className="pt-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
//                       <span className="text-primary font-semibold">{testimonial.image}</span>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-text-heading">{testimonial.name}</h3>
//                       <p className="text-sm text-text-light">{testimonial.role}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex gap-1 mb-3">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="text-accent fill-accent" size={16} />
//                     ))}
//                   </div>
                  
//                   <Quote className="text-muted-foreground mb-2" size={20} />
//                   <p className="text-text-body mb-4 italic">
//                     "{testimonial.quote}"
//                   </p>
                  
//                   <div className="pt-4 border-t border-border">
//                     <span className="text-xs font-semibold text-primary">
//                       {testimonial.program}
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-muted">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
//             Ready to Write Your Success Story?
//           </h2>
//           <p className="text-text-body text-lg mb-8 max-w-2xl mx-auto">
//             Join thousands of professionals who have transformed their careers through meaningful mentorship.
//           </p>
//           <Link to="/signup">
//             <Button size="lg" variant="default">
//               Start Your Journey
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Testimonials;

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [activeTopic, setActiveTopic] = useState("All stories");

  const testimonials = [
    {
      quote: "Rafikiz Mentorship transformed my approach to leadership. Having a mentor who understood the nuances of my industry gave me the clarity I needed to scale my team and secure our next round of funding.",
      author: "Amina Bello",
      role: "Tech Founder & CEO",
      program: "Entrepreneurship Track",
      rating: 5
    },
    {
      quote: "The guidance I received on career planning was invaluable. My mentor helped me navigate a complex job transition with confidence and poise. I landed my dream role within two months of joining.",
      author: "Chinedu Okafor",
      role: "Senior Software Engineer",
      program: "Career Development",
      rating: 5
    },
    {
      quote: "Mentorship here isn't just about professional checkboxes—it’s about human connection. The insights I gained helped me achieve a sustainable work-life balance while excelling in my creative career.",
      author: "Zainab Aliyu",
      role: "Product Designer & Illustrator",
      program: "Creative Skills",
      rating: 5
    },
    {
      quote: "As someone preparing for executive leadership, having a seasoned veteran to bounce ideas off of changed everything. The relational design framework I learned here is something I use every single day.",
      author: "David Adeleke",
      role: "Operations Director",
      program: "Networking & Connections",
      rating: 5
    },
    {
      quote: "The academic and research mentorship I experienced was phenomenal. My mentor provided structured study strategies and graduate school prep that made all the difference in my applications.",
      author: "Oluwaseun Adebayo",
      role: "Graduate Researcher",
      program: "Academic Mentorship",
      rating: 5
    },
    {
      quote: "Personal growth is often overlooked in professional spaces. Rafikiz Mentorship created a safe sanctuary where I could build emotional intelligence and authentic confidence.",
      author: "Blessing Eze",
      role: "Marketing Specialist",
      program: "Personal Growth",
      rating: 5
    }
  ];
  const topics = ["All stories", ...new Set(testimonials.map((item) => item.program))];
  const filteredStories = activeTopic === "All stories"
    ? testimonials
    : testimonials.filter((item) => item.program === activeTopic);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />
      
      {/* --- STORIES HERO SECTION --- */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 md:py-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <defs>
              <linearGradient id="stories-hero-base" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#101827" />
                <stop offset="50%" stopColor="#282349" />
                <stop offset="100%" stopColor="#45223e" />
              </linearGradient>
              <radialGradient id="stories-hero-glow">
                <stop offset="0%" stopColor="#fb7185" stopOpacity=".42" />
                <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="stories-hero-thread" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#fda4af" stopOpacity="0" />
                <stop offset="48%" stopColor="#fda4af" stopOpacity=".58" />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity=".1" />
              </linearGradient>
            </defs>
            <rect width="1600" height="900" fill="url(#stories-hero-base)" />
            <ellipse cx="1320" cy="220" rx="540" ry="420" fill="url(#stories-hero-glow)" />
            <path d="M-80 680 C210 550 340 790 600 620 S960 340 1190 500 1460 620 1690 300" fill="none" stroke="url(#stories-hero-thread)" strokeWidth="3" />
            <path d="M-60 760 C220 630 390 850 670 680 S1020 430 1270 590 1480 700 1690 420" fill="none" stroke="url(#stories-hero-thread)" strokeWidth="2" opacity=".7" />
            <g fill="#fda4af"><circle cx="285" cy="590" r="8" /><circle cx="600" cy="620" r="7" /><circle cx="1190" cy="500" r="8" /></g>
            <g fill="none" stroke="#fff" strokeOpacity=".12"><circle cx="285" cy="590" r="44" /><circle cx="285" cy="590" r="82" /><circle cx="1190" cy="500" r="50" /><circle cx="1190" cy="500" r="92" /></g>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-slate-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_8%,rgba(2,6,23,0.38)_100%)]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-md">
              <Sparkles size={14} className="animate-pulse text-primary shrink-0" />
              <span>Stories from our community</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Stories from people finding their next step.
            </h1>
            
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              A challenge feels different when you don’t have to work through it alone. Explore the experiences shared by our mentorship community.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEARCHABLE SUCCESS STORIES --- */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-8 max-w-5xl space-y-3 sm:mb-10">
            <span className="inline-flex text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">Community stories</span>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Find a story that feels familiar.</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">Search by a person, program, or challenge to explore how others have approached their next step.</p>
              </div>
              <p className="shrink-0 text-xs font-semibold text-slate-500 sm:text-sm" aria-live="polite">{filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"}</p>
            </div>
          </div>

          <div className="mx-auto mb-8 max-w-5xl rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 sm:mb-10 sm:rounded-[1.6rem] sm:p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Browse by mentorship topic</p>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter stories by mentorship topic">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  aria-pressed={activeTopic === topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`rounded-full border px-3 py-2 text-[11px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-3.5 sm:text-xs ${activeTopic === topic ? "border-primary bg-primary text-white shadow-sm" : "border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary"}`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 max-w-7xl mx-auto">
            {filteredStories.map((item) => (
              <Card 
                key={item.author}
                className="group relative border border-slate-200/90 bg-white transition-all duration-300 rounded-[1.6rem] sm:rounded-[2rem] shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 flex flex-col justify-between"
              >
                <CardContent className="flex h-full flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[10px]">{item.program}</span>
                      <Quote size={24} aria-hidden="true" className="shrink-0 text-primary/40" />
                    </div>
                    <blockquote className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
                      “{item.quote}”
                    </blockquote>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <div aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-violet-100 text-sm font-extrabold text-slate-700 ring-1 ring-white">
                      {item.author.split(" ").map((part) => part[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-extrabold text-slate-900">{item.author}</p>
                      <p className="mt-0.5 line-clamp-2 text-xs font-medium leading-relaxed text-slate-500">{item.role}</p>
                    </div>
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
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Join Rafikiz Mentorship today and connect with mentors who will champion your ambition.
          </p>
          <div className="flex justify-center w-full px-2">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button size="lg" variant="default" className="h-14 sm:h-16 w-full sm:w-auto px-6 sm:px-12 text-base sm:text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 border border-primary/50 group flex items-center justify-center">
                <span>Start Your Journey</span>
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

export default Testimonials;
