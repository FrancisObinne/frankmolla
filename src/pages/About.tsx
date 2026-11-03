// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Heart, Eye, Award } from "lucide-react";
// import frankAboutImage from "@/assets/frank_molla_about_me.jpg";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="bg-hero-gradient py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
//               About Rafikiz Mentorship
//             </h1>
//             <p className="text-xl text-primary-foreground/90">
//               Building bridges between experience and aspiration, one meaningful
//               connection at a time.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* NEW SECTION: Frank's Image before Story Section */}
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto px-4">
//           <img
//             src={frankAboutImage} // Use the imported image
//             alt="Frank Molla leading a discussion"
//             className="w-full h-80 object-cover rounded-lg shadow-xl border-4 border-primary/20"
//           />
//         </div>
//       </section>
//       {/* END NEW SECTION */}

//       {/* Story Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold text-text-heading mb-6">
//               {/* Our Story */}
//               Show Me You Know Me
//             </h2>
//             <div className="space-y-4 text-text-body">
//               <p>
//                 This is not just a website it’s a gathering place for those who
//                 lead with heart, build with trust, and grow through meaningful
//                 relationships
//               </p>
//               <p>
//                 {/* Rafikiz Mentorship  was founded with a simple yet powerful belief: that
//                 everyone deserves access to guidance from those who have walked
//                 the path before them. We recognized that while talent and
//                 ambition are abundant, meaningful mentorship opportunities are
//                 often out of reach. */}
//                 Whether you’re an entrepreneur navigating uncertainty, a leader
//                 seeking to humanize your influence, or a professional preparing
//                 for legacy and retirement, this space offers mentorship rooted
//                 in:
//               </p>
//               <p>
//                 {/* What started as a small initiative to connect professionals in
//                 our local community has grown into a thriving platform that
//                 serves thousands of mentors and mentees worldwide. We've
//                 witnessed countless success stories—from career pivots and
//                 startup launches to academic achievements and personal
//                 breakthroughs. */}
//               </p>
//               <p>
//                 {/* Today, Rafikiz Mentorship  stands as a testament to the power of human
//                 connection and the transformative impact of sharing knowledge,
//                 experience, and wisdom across generations and industries. */}
//               </p>
//               <ul>
//                 <li className="list-disc ml-6">
//                   Entrepreneurship with empathy
//                 </li>
//                 <li className="list-disc ml-6">
//                   Leadership that dignifies, not performs
//                 </li>
//                 <li className="list-disc ml-6">
//                   Career growth anchored in clarity and presence
//                 </li>
//                 <li className="list-disc ml-6">
//                   Relationship building as a form of infrastructure
//                 </li>
//                 <li className="list-disc ml-6">
//                   Negotiation as relational design
//                 </li>
//                 <li className="list-disc ml-6">Sales as service</li>
//                 <li className="list-disc ml-6">
//                   Financial wisdom for a retirement that honors your journey
//                 </li>
//               </ul>
//               <p>
//                 Here, mentorship isn’t a transaction it’s a conversation. A
//                 pause. A prompt. A path.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-muted">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12">
//             Our Core Values
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 icon: Heart,
//                 title: "Mission",
//                 description:
//                   "To democratize access to quality mentorship, empowering individuals to reach their full potential through meaningful guidance and support.",
//               },
//               {
//                 icon: Eye,
//                 title: "Vision",
//                 description:
//                   "A world where everyone has access to the mentorship they need to thrive, creating a ripple effect of knowledge-sharing and growth.",
//               },
//               {
//                 icon: Award,
//                 title: "Values",
//                 description:
//                   "Integrity, empathy, inclusivity, excellence, and commitment to fostering genuine connections that transform lives.",
//               },
//             ].map((value, index) => (
//               <Card
//                 key={index}
//                 className="border-border hover:border-primary/50 transition-all animate-slide-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <CardContent className="pt-6 text-center">
//                   <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <value.icon className="text-secondary" size={28} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-text-heading mb-3">
//                     {value.title}
//                   </h3>
//                   <p className="text-text-body">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-text-heading mb-6">
//               Our Commitment
//             </h2>
//             <p className="text-text-body text-lg mb-8">
//               At Rafikiz Mentorship, we're more than just a platform—we're a community
//               dedicated to fostering growth, learning, and meaningful
//               relationships. Every day, our team works tirelessly to ensure that
//               our mentors and mentees have the best possible experience.
//             </p>
//             <p className="text-text-body text-lg">
//               We believe in the power of human connection to change lives, and
//               we're honored to play a part in your journey.
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;

// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Heart, Eye, Award, Camera, Sparkles, CheckCircle2 } from "lucide-react";
// import frankAboutImage from "@/assets/frank_molla_about_me.jpg";

// // New distinct gallery assets for About.tsx (avoiding Home.tsx assets)
// import gallery6 from "@/assets/gallery_6.jpg";
// import gallery8 from "@/assets/gallery_8.jpg";
// import gallery9 from "@/assets/gallery_9.jpg";
// import gallery10 from "@/assets/gallery_10.jpg";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
//       <Navigation />

//       {/* --- HERO SECTION --- */}
//       <section className="relative pt-28 pb-16 md:py-24 bg-gradient-to-b from-white via-slate-50/60 to-[#FAFAFA] overflow-hidden border-b border-slate-200/80">
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full pointer-events-none -z-0" />
        
//         <div className="container relative mx-auto px-6 z-10">
//           <div className="max-w-3xl mx-auto text-center space-y-6">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase shadow-sm">
//               <Sparkles size={14} className="animate-pulse" />
//               <span>Our Foundation & Purpose</span>
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
//               About Rafikiz Mentorship
//             </h1>
            
//             <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
//               Building bridges between experience and aspiration, one meaningful connection at a time.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURED LEADERSHIP SHOWCASE --- */}
//       <section className="py-12 md:py-16 bg-[#FAFAFA]">
//         <div className="container mx-auto px-6">
//           <div className="relative group overflow-hidden rounded-[2.8rem] shadow-xl border-4 border-white bg-slate-50 p-3 max-w-5xl mx-auto">
//             <div className="relative w-full h-[360px] sm:h-[480px] bg-slate-100 rounded-[2.2rem] overflow-hidden flex items-center justify-center">
//               <img
//                 src={frankAboutImage}
//                 alt="Frank Molla leading a discussion"
//                 loading="eager"
//                 decoding="async"
//                 className="w-full h-full object-contain rounded-[1.8rem] filter brightness-[0.98] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.01]"
//               />
//             </div>
//             <div className="pt-4 pb-2 px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-sm">
//               <span className="font-semibold text-slate-900">Leadership & Visionary Engagement</span>
//               <span className="inline-flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                 <CheckCircle2 size={14} /> Meaningful Dialogue
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- STORY SECTION --- */}
//       <section className="py-20 bg-white border-y border-slate-200/80">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto space-y-8">
//             <div className="space-y-3">
//               <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
//                 The Core Philosophy
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//                 Show Me You Know Me
//               </h2>
//             </div>

//             <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-normal">
//               <p className="text-xl font-medium text-slate-800 leading-snug italic border-l-4 border-primary pl-4">
//                 This is not just a website—it’s a gathering place for those who lead with heart, build with trust, and grow through meaningful relationships.
//               </p>
              
//               <p>
//                 Whether you’re an entrepreneur navigating uncertainty, a leader seeking to humanize your influence, or a professional preparing for legacy and retirement, this space offers mentorship rooted in:
//               </p>

//               <div className="grid sm:grid-cols-2 gap-4 pt-2">
//                 {[
//                   "Entrepreneurship with empathy",
//                   "Leadership that dignifies, not performs",
//                   "Career growth anchored in clarity and presence",
//                   "Relationship building as a form of infrastructure",
//                   "Negotiation as relational design",
//                   "Sales as service",
//                   "Financial wisdom for a retirement that honors your journey",
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
//                     <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
//                     <span className="text-slate-700 text-base font-medium">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <p className="pt-4 text-slate-800 font-semibold text-xl">
//                 Here, mentorship isn’t a transaction—it’s a conversation. A pause. A prompt. A path.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- ABOUT PHOTO GALLERY (gallery_6, gallery_8, gallery_9, gallery_10) --- */}
//       <section className="py-24 bg-slate-100/70 relative overflow-hidden">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//             <div className="space-y-3">
//               <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
//                 <Camera size={14} />
//                 <span>Impact & Moments</span>
//               </div>
//               <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
//                 Snapshots of Connection & Guidance
//               </h3>
//             </div>
//             <p className="text-slate-600 max-w-md text-base leading-relaxed">
//               Real interactions, collaborative dialogues, and impactful moments captured across our mentorship initiatives.
//             </p>
//           </div>

//           {/* Optimized Bento Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
//             {/* Gallery item 6 */}
//             <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//               <div className="relative w-full h-[300px] sm:h-[360px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                 <img
//                   src={gallery6}
//                   alt="Mentorship Session"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//               <div className="pt-4 px-3 pb-2">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                   Collaborative Learning
//                 </span>
//                 <h4 className="text-xl font-bold text-slate-900 mt-2">Personalized Strategic Guidance</h4>
//               </div>
//             </div>

//             {/* Gallery item 8 */}
//             <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//               <div className="relative w-full h-[300px] sm:h-[360px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                 <img
//                   src={gallery8}
//                   alt="Leadership Dialogue"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//               <div className="pt-4 px-3 pb-2">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                   Leadership Dialogue
//                 </span>
//                 <h4 className="text-xl font-bold text-slate-900 mt-2">Empowering Growth & Vision</h4>
//               </div>
//             </div>

//             {/* Gallery item 9 */}
//             <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//               <div className="relative w-full h-[300px] sm:h-[340px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                 <img
//                   src={gallery9}
//                   alt="Interactive Exchange"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//               <div className="pt-4 px-3 pb-2">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                   Community Pulse
//                 </span>
//                 <h4 className="text-xl font-bold text-slate-900 mt-2">Shared Wisdom & Network</h4>
//               </div>
//             </div>

//             {/* Gallery item 10 */}
//             <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//               <div className="relative w-full h-[300px] sm:h-[340px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                 <img
//                   src={gallery10}
//                   alt="Career Milestones"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//               <div className="pt-4 px-3 pb-2">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                   Impact
//                 </span>
//                 <h4 className="text-xl font-bold text-slate-900 mt-2">Sustained Mentorship Outcomes</h4>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* --- VALUES SECTION --- */}
//       <section className="py-24 bg-white border-t border-slate-200/80">
//         <div className="container mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
//             <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
//               Guiding Principles
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Our Core Values
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 icon: Heart,
//                 title: "Mission",
//                 description:
//                   "To democratize access to quality mentorship, empowering individuals to reach their full potential through meaningful guidance and support.",
//                 badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
//               },
//               {
//                 icon: Eye,
//                 title: "Vision",
//                 description:
//                   "A world where everyone has access to the mentorship they need to thrive, creating a ripple effect of knowledge-sharing and growth.",
//                 badgeColor: "bg-primary/10 text-primary border-primary/20",
//               },
//               {
//                 icon: Award,
//                 title: "Values",
//                 description:
//                   "Integrity, empathy, inclusivity, excellence, and commitment to fostering genuine connections that transform lives.",
//                 badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
//               },
//             ].map((value, index) => (
//               <Card
//                 key={index}
//                 className="border border-slate-200/80 bg-slate-50/60 hover:bg-white transition-all duration-300 rounded-[2.2rem] shadow-sm hover:shadow-xl hover:border-slate-300"
//               >
//                 <CardContent className="p-8 text-center flex flex-col items-center">
//                   <div className={`w-16 h-16 rounded-2xl ${value.badgeColor} border flex items-center justify-center mb-6 shadow-sm`}>
//                     <value.icon size={28} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
//                     {value.title}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed font-normal">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- COMMITMENT SECTION --- */}
//       <section className="py-24 bg-[#FAFAFA] border-t border-slate-200/80">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Our Commitment
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed font-normal">
//               At Rafikiz Mentorship, we're more than just a platform—we're a community
//               dedicated to fostering growth, learning, and meaningful
//               relationships. Every day, our team works tirelessly to ensure that
//               our mentors and mentees have the best possible experience.
//             </p>
//             <p className="text-slate-600 text-lg leading-relaxed font-normal">
//               We believe in the power of human connection to change lives, and
//               we're honored to play a part in your journey.
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;

// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Heart, Eye, Award, Camera, Sparkles, CheckCircle2 } from "lucide-react";
// import frankAboutImage from "@/assets/frank_molla_about_me.jpg";

// // New distinct gallery assets for About.tsx (avoiding Home.tsx assets)
// import gallery6 from "@/assets/gallery_6.jpg";
// import gallery8 from "@/assets/gallery_8.jpg";
// import gallery9 from "@/assets/gallery_9.jpg";
// import gallery10 from "@/assets/gallery_10.jpg";
// import gallery16 from "@/assets/gallery_16.jpg";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
//       <Navigation />

//       {/* --- HERO SECTION --- */}
//       <section className="relative pt-28 pb-16 md:py-24 bg-gradient-to-b from-white via-slate-50/60 to-[#FAFAFA] overflow-hidden border-b border-slate-200/80">
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full pointer-events-none -z-0" />
        
//         <div className="container relative mx-auto px-6 z-10">
//           <div className="max-w-3xl mx-auto text-center space-y-6">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase shadow-sm">
//               <Sparkles size={14} className="animate-pulse" />
//               <span>Our Foundation & Purpose</span>
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
//               About Rafikiz Mentorship
//             </h1>
            
//             <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
//               Building bridges between experience and aspiration, one meaningful connection at a time.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURED LEADERSHIP SHOWCASE (Fixed Desktop Width & Height Scaling) --- */}
//       <section className="py-12 md:py-20 bg-[#FAFAFA]">
//         <div className="container mx-auto px-6">
//           <div className="relative group overflow-hidden rounded-[2.8rem] shadow-xl border-4 border-white bg-slate-50 p-3 sm:p-4 max-w-6xl mx-auto">
//             {/* Dynamic height classes: scales from 360px on mobile up to 620px on desktop screens */}
//             <div className="relative w-full h-[360px] sm:h-[500px] md:h-[580px] lg:h-[620px] bg-slate-100 rounded-[2.2rem] overflow-hidden flex items-center justify-center">
//               <img
//                 src={gallery16}
//                 alt="Frank Molla leading a discussion"
//                 loading="eager"
//                 decoding="async"
//                 className="w-full h-full object-contain rounded-[1.8rem] filter brightness-[0.98] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.01]"
//               />
//             </div>
//             <div className="pt-4 pb-2 px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-sm">
//               <span className="font-semibold text-slate-900">Leadership & Visionary Engagement</span>
//               <span className="inline-flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                 <CheckCircle2 size={14} /> Meaningful Dialogue
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- STORY SECTION --- */}
//       <section className="py-20 bg-white border-y border-slate-200/80">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto space-y-8">
//             <div className="space-y-3">
//               <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
//                 The Core Philosophy
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//                 Show Me You Know Me
//               </h2>
//             </div>

//             <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-normal">
//               <p className="text-xl font-medium text-slate-800 leading-snug italic border-l-4 border-primary pl-4">
//                 This is not just a website—it’s a gathering place for those who lead with heart, build with trust, and grow through meaningful relationships.
//               </p>
              
//               <p>
//                 Whether you’re an entrepreneur navigating uncertainty, a leader seeking to humanize your influence, or a professional preparing for legacy and retirement, this space offers mentorship rooted in:
//               </p>

//               <div className="grid sm:grid-cols-2 gap-4 pt-2">
//                 {[
//                   "Entrepreneurship with empathy",
//                   "Leadership that dignifies, not performs",
//                   "Career growth anchored in clarity and presence",
//                   "Relationship building as a form of infrastructure",
//                   "Negotiation as relational design",
//                   "Sales as service",
//                   "Financial wisdom for a retirement that honors your journey",
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
//                     <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
//                     <span className="text-slate-700 text-base font-medium">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <p className="pt-4 text-slate-800 font-semibold text-xl">
//                 Here, mentorship isn’t a transaction—it’s a conversation. A pause. A prompt. A path.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- ABOUT PHOTO GALLERY --- */}
//       <section className="py-24 bg-slate-100/70 relative overflow-hidden">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//             <div className="space-y-3">
//               <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
//                 <Camera size={14} />
//                 <span>Impact & Moments</span>
//               </div>
//               <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
//                 Snapshots of Connection & Guidance
//               </h3>
//             </div>
//             <p className="text-slate-600 max-w-md text-base leading-relaxed">
//               Real interactions, collaborative dialogues, and impactful moments captured across our mentorship initiatives.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
//             <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//               <div className="relative w-full h-[300px] sm:h-[360px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                 <img
//                   src={gallery6}
//                   alt="Mentorship Session"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//               <div className="pt-4 px-3 pb-2">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                   Collaborative Learning
//                 </span>
//                 <h4 className="text-xl font-bold text-slate-900 mt-2">Personalized Strategic Guidance</h4>
//               </div>
//             </div>

//             <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//               <div className="relative w-full h-[300px] sm:h-[360px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                 <img
//                   src={gallery8}
//                   alt="Leadership Dialogue"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//               <div className="pt-4 px-3 pb-2">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                   Leadership Dialogue
//                 </span>
//                 <h4 className="text-xl font-bold text-slate-900 mt-2">Empowering Growth & Vision</h4>
//               </div>
//             </div>

//             <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//               <div className="relative w-full h-[300px] sm:h-[340px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                 <img
//                   src={gallery9}
//                   alt="Interactive Exchange"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//               <div className="pt-4 px-3 pb-2">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                   Community Pulse
//                 </span>
//                 <h4 className="text-xl font-bold text-slate-900 mt-2">Shared Wisdom & Network</h4>
//               </div>
//             </div>

//             <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//               <div className="relative w-full h-[300px] sm:h-[340px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                 <img
//                   src={gallery10}
//                   alt="Career Milestones"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//               <div className="pt-4 px-3 pb-2">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                   Impact
//                 </span>
//                 <h4 className="text-xl font-bold text-slate-900 mt-2">Sustained Mentorship Outcomes</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- VALUES SECTION --- */}
//       <section className="py-24 bg-white border-t border-slate-200/80">
//         <div className="container mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
//             <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
//               Guiding Principles
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Our Core Values
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 icon: Heart,
//                 title: "Mission",
//                 description:
//                   "To democratize access to quality mentorship, empowering individuals to reach their full potential through meaningful guidance and support.",
//                 badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
//               },
//               {
//                 icon: Eye,
//                 title: "Vision",
//                 description:
//                   "A world where everyone has access to the mentorship they need to thrive, creating a ripple effect of knowledge-sharing and growth.",
//                 badgeColor: "bg-primary/10 text-primary border-primary/20",
//               },
//               {
//                 icon: Award,
//                 title: "Values",
//                 description:
//                   "Integrity, empathy, inclusivity, excellence, and commitment to fostering genuine connections that transform lives.",
//                 badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
//               },
//             ].map((value, index) => (
//               <Card
//                 key={index}
//                 className="border border-slate-200/80 bg-slate-50/60 hover:bg-white transition-all duration-300 rounded-[2.2rem] shadow-sm hover:shadow-xl hover:border-slate-300"
//               >
//                 <CardContent className="p-8 text-center flex flex-col items-center">
//                   <div className={`w-16 h-16 rounded-2xl ${value.badgeColor} border flex items-center justify-center mb-6 shadow-sm`}>
//                     <value.icon size={28} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
//                     {value.title}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed font-normal">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- COMMITMENT SECTION --- */}
//       <section className="py-24 bg-[#FAFAFA] border-t border-slate-200/80">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Our Commitment
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed font-normal">
//               At Rafikiz Mentorship, we're more than just a platform—we're a community
//               dedicated to fostering growth, learning, and meaningful
//               relationships. Every day, our team works tirelessly to ensure that
//               our mentors and mentees have the best possible experience.
//             </p>
//             <p className="text-slate-600 text-lg leading-relaxed font-normal">
//               We believe in the power of human connection to change lives, and
//               we're honored to play a part in your journey.
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Award, Camera, Sparkles, CheckCircle2 } from "lucide-react";
import frankAboutImage from "@/assets/frank_molla_about_me.jpg";

// New distinct gallery assets for About.tsx (avoiding Home.tsx assets)
import gallery6 from "@/assets/gallery_6.jpg";
import gallery8 from "@/assets/gallery_8.jpg";
import gallery9 from "@/assets/gallery_9.jpg";
import gallery10 from "@/assets/gallery_10.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION WITH FRANK ABOUT IMAGE BACKGROUND --- */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center pt-28 pb-16 md:py-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={frankAboutImage}
            alt="Frank Molla leading a discussion"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top filter brightness-[0.4] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40" />
        </div>

        {/* Hero Content Overlay */}
        <div className="container relative mx-auto px-6 z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase shadow-md">
              <Sparkles size={14} className="animate-pulse text-primary" />
              <span>Our Foundation & Purpose</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              About Rafikiz Mentorship
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              Building bridges between experience and aspiration, one meaningful connection at a time.
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-300 uppercase font-semibold tracking-wider">
              <CheckCircle2 size={16} className="text-primary" />
              <span>Leadership & Visionary Engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
                The Core Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Show Me You Know Me
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-normal">
              <p className="text-xl font-medium text-slate-800 leading-snug italic border-l-4 border-primary pl-4">
                This is not just a website—it’s a gathering place for those who lead with heart, build with trust, and grow through meaningful relationships.
              </p>
              
              <p>
                Whether you’re an entrepreneur navigating uncertainty, a leader seeking to humanize your influence, or a professional preparing for legacy and retirement, this space offers mentorship rooted in:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Entrepreneurship with empathy",
                  "Leadership that dignifies, not performs",
                  "Career growth anchored in clarity and presence",
                  "Relationship building as a form of infrastructure",
                  "Negotiation as relational design",
                  "Sales as service",
                  "Financial wisdom for a retirement that honors your journey",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="text-slate-700 text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="pt-4 text-slate-800 font-semibold text-xl">
                Here, mentorship isn’t a transaction—it’s a conversation. A pause. A prompt. A path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT PHOTO GALLERY --- */}
      <section className="py-24 bg-slate-100/70 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                <Camera size={14} />
                <span>Impact & Moments</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Snapshots of Connection & Guidance
              </h3>
            </div>
            <p className="text-slate-600 max-w-md text-base leading-relaxed">
              Real interactions, collaborative dialogues, and impactful moments captured across our mentorship initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
              <div className="relative w-full h-[300px] sm:h-[360px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
                <img
                  src={gallery6}
                  alt="Mentorship Session"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="pt-4 px-3 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Collaborative Learning
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-2">Personalized Strategic Guidance</h4>
              </div>
            </div>

            <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
              <div className="relative w-full h-[300px] sm:h-[360px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
                <img
                  src={gallery8}
                  alt="Leadership Dialogue"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="pt-4 px-3 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Leadership Dialogue
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-2">Empowering Growth & Vision</h4>
              </div>
            </div>

            <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
              <div className="relative w-full h-[300px] sm:h-[340px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
                <img
                  src={gallery9}
                  alt="Interactive Exchange"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="pt-4 px-3 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Community Pulse
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-2">Shared Wisdom & Network</h4>
              </div>
            </div>

            <div className="lg:col-span-6 group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
              <div className="relative w-full h-[300px] sm:h-[340px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
                <img
                  src={gallery10}
                  alt="Career Milestones"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="pt-4 px-3 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Impact
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-2">Sustained Mentorship Outcomes</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Mission",
                description:
                  "To democratize access to quality mentorship, empowering individuals to reach their full potential through meaningful guidance and support.",
                badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
              },
              {
                icon: Eye,
                title: "Vision",
                description:
                  "A world where everyone has access to the mentorship they need to thrive, creating a ripple effect of knowledge-sharing and growth.",
                badgeColor: "bg-primary/10 text-primary border-primary/20",
              },
              {
                icon: Award,
                title: "Values",
                description:
                  "Integrity, empathy, inclusivity, excellence, and commitment to fostering genuine connections that transform lives.",
                badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="border border-slate-200/80 bg-slate-50/60 hover:bg-white transition-all duration-300 rounded-[2.2rem] shadow-sm hover:shadow-xl hover:border-slate-300"
              >
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl ${value.badgeColor} border flex items-center justify-center mb-6 shadow-sm`}>
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-normal">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMMITMENT SECTION --- */}
      <section className="py-24 bg-[#FAFAFA] border-t border-slate-200/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Commitment
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              At Rafikiz Mentorship, we're more than just a platform—we're a community
              dedicated to fostering growth, learning, and meaningful
              relationships. Every day, our team works tirelessly to ensure that
              our mentors and mentees have the best possible experience.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
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
