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

import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Award, Sparkles, CheckCircle2, ArrowRight, Compass, MessageCircle, TrendingUp } from "lucide-react";

import gallery12 from "@/assets/gallery_12.jpg";
import gallery13 from "@/assets/gallery_13.jpg";
import gallery14 from "@/assets/gallery_14.jpg";
import gallery15 from "@/assets/gallery_15.jpg";
import gallery18 from "@/assets/gallery_18.jpg";
import gallery19 from "@/assets/gallery_19.jpg";

const aboutPhotoItems: { image?: string; illustration?: boolean; tag: string; title: string }[] = [
  { image: gallery12, tag: "Reflection", title: "A space to explore what’s next" },
  { image: gallery13, tag: "Perspective", title: "Fresh insight, shared openly" },
  { image: gallery14, tag: "Guidance", title: "Turning questions into direction" },
  { image: gallery15, tag: "Learning", title: "Growing through meaningful exchange" },
  { image: gallery18, tag: "Progress", title: "Small steps, lasting momentum" },
  { image: gallery19, tag: "Growth", title: "A new perspective for the journey" },
  { illustration: true, tag: "Possibility", title: "Moving ambition into action" },
];

const photoGridLayouts = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

const aboutPhotoGrid = aboutPhotoItems.map((photo, index) => ({ ...photo, layout: photoGridLayouts[index] }));

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />

      {/* --- ABOUT HERO SECTION --- */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center pt-28 pb-16 md:py-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
        {/* Abstract mentorship artwork: connected paths and warm points of light */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <defs>
              <linearGradient id="about-hero-base" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#111827" />
                <stop offset="52%" stopColor="#29234b" />
                <stop offset="100%" stopColor="#4a203f" />
              </linearGradient>
              <radialGradient id="about-hero-glow">
                <stop offset="0%" stopColor="#fb7185" stopOpacity=".48" />
                <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="about-hero-lavender">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity=".38" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="about-hero-line" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#fb7185" stopOpacity="0" />
                <stop offset="50%" stopColor="#fda4af" stopOpacity=".55" />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity=".08" />
              </linearGradient>
            </defs>
            <rect width="1600" height="900" fill="url(#about-hero-base)" />
            <ellipse cx="280" cy="150" rx="520" ry="430" fill="url(#about-hero-lavender)" />
            <ellipse cx="1350" cy="710" rx="560" ry="480" fill="url(#about-hero-glow)" />
            <g fill="none" stroke="url(#about-hero-line)" strokeWidth="2">
              <path d="M-80 660 C240 540 310 760 600 600 S980 320 1260 460 1480 550 1700 280" />
              <path d="M-60 730 C220 610 380 840 650 670 S1010 410 1250 540 1480 650 1690 380" opacity=".6" />
              <path d="M120 240 C390 350 470 160 730 290 S1070 570 1320 350 1500 260 1660 390" opacity=".48" />
            </g>
            <g fill="#fda4af">
              <circle cx="275" cy="573" r="7" /><circle cx="600" cy="600" r="6" />
              <circle cx="955" cy="363" r="7" /><circle cx="1260" cy="460" r="6" />
            </g>
            <g fill="#c4b5fd">
              <circle cx="730" cy="290" r="6" /><circle cx="1320" cy="350" r="7" />
            </g>
            <g fill="none" stroke="#ffffff" strokeOpacity=".08">
              <circle cx="1320" cy="350" r="48" /><circle cx="1320" cy="350" r="86" />
              <circle cx="275" cy="573" r="42" /><circle cx="275" cy="573" r="76" />
            </g>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/20 to-slate-950/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(2,6,23,0.34)_100%)]" />
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

      {/* --- COMMUNITY PHOTO GRID --- */}
      <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50 py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-36 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[110px]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-9 max-w-3xl space-y-4 text-center sm:mb-12">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
              The people behind the progress
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              A community built through connection.
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
              Mentorship is personal. Every conversation brings a different perspective, a generous exchange of experience, and room for new possibilities.
            </p>
          </div>

          <div role="group" aria-label="Rafikiz mentorship community photo grid" className="grid grid-flow-dense grid-cols-2 auto-rows-[132px] gap-3 sm:auto-rows-[180px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[190px] lg:gap-5">
            {aboutPhotoGrid.map((photo, index) => (
              <figure key={photo.title} className={`group relative isolate overflow-hidden rounded-2xl bg-slate-200 shadow-sm sm:rounded-[1.75rem] ${photo.layout}`}>
                {photo.illustration ? (
                  <svg
                    viewBox="0 0 800 400"
                    role="img"
                    aria-label="Illustration of a mentor and learner sharing ideas"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out sm:group-hover:scale-[1.03]"
                  >
                    <defs>
                      <linearGradient id="mentorship-bg" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#fff7f2" />
                        <stop offset="100%" stopColor="#f1e8ff" />
                      </linearGradient>
                      <linearGradient id="mentorship-path" x1="0" x2="1">
                        <stop offset="0%" stopColor="#fb7185" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="400" fill="url(#mentorship-bg)" />
                    <circle cx="690" cy="78" r="115" fill="#fbcfe8" opacity=".55" />
                    <circle cx="92" cy="350" r="150" fill="#ddd6fe" opacity=".65" />
                    <path d="M140 292 C270 160 415 348 650 170" fill="none" stroke="url(#mentorship-path)" strokeWidth="7" strokeDasharray="2 18" strokeLinecap="round" opacity=".6" />
                    <rect x="300" y="54" width="230" height="94" rx="24" fill="white" opacity=".92" />
                    <path d="M344 89h138M344 112h94" stroke="#c4b5fd" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="468" cy="112" r="7" fill="#fb7185" />
                    <path d="M436 210c0-40 28-70 64-70s64 30 64 70v46H436z" fill="#7c3aed" />
                    <circle cx="500" cy="130" r="34" fill="#d99a78" />
                    <path d="M464 125c4-36 67-50 77-2-20-10-48-14-77 2" fill="#312e81" />
                    <path d="M470 224l-25 84h105l-21-84" fill="#a78bfa" />
                    <path d="M535 207l37 25-24 30-36-26" fill="#d99a78" />
                    <circle cx="259" cy="235" r="31" fill="#b97858" />
                    <path d="M218 316v-40c0-30 19-51 42-51s42 21 42 51v40z" fill="#fb7185" />
                    <path d="M229 231c2-32 55-42 68-4-19-9-44-8-68 4" fill="#3f2c2a" />
                    <path d="M290 271l39-25 17 23-40 29" fill="#b97858" />
                    <rect x="358" y="208" width="78" height="9" rx="4.5" fill="#fda4af" opacity=".8" />
                    <path d="M150 270c12-48 48-55 57-9-24-13-39 8-57 9" fill="#34d399" />
                    <path d="M171 274v45m-16-24 16 10 16-16" fill="none" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
                    <path d="M646 235c10-42 43-48 51-8-21-11-34 7-51 8" fill="#34d399" />
                    <path d="M662 239v48m-14-25 14 9 14-14" fill="none" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                ) : (
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out sm:group-hover:scale-[1.04]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/5 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5 lg:p-6">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-rose-200 sm:text-[10px] sm:tracking-[0.2em]">{photo.tag}</span>
                  <h3 className="mt-1 text-xs font-bold leading-snug sm:mt-1.5 sm:text-base lg:text-lg">{photo.title}</h3>
                </figcaption>
                <span aria-hidden="true" className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-slate-950/25 text-[9px] font-semibold tabular-nums text-white backdrop-blur-sm sm:right-4 sm:top-4 sm:h-8 sm:w-8 sm:text-[10px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figure>
            ))}
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

      {/* --- OUR THEORY OF CHANGE --- */}
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[110px]" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
              How growth takes shape
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              A meaningful conversation can change what comes next.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
              We believe the best mentorship connects honest perspective with practical action. Progress grows one thoughtful step at a time.
            </p>
          </div>

          <div className="relative mx-auto mt-12 grid max-w-5xl gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">
            <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-rose-200 via-primary/40 to-violet-200 md:block" />
            {[
              {
                step: "01",
                icon: Compass,
                title: "Find your direction",
                description: "Name the goals, questions, and decisions that matter most to you right now.",
                accent: "bg-rose-50 text-rose-600 ring-rose-100",
              },
              {
                step: "02",
                icon: MessageCircle,
                title: "Learn through connection",
                description: "Talk with someone who listens closely and offers a perspective shaped by experience.",
                accent: "bg-violet-50 text-violet-600 ring-violet-100",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Turn insight into action",
                description: "Leave with a clearer next step, build momentum, and carry what you learn forward.",
                accent: "bg-emerald-50 text-emerald-600 ring-emerald-100",
              },
            ].map((step) => (
              <article key={step.step} className="relative rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${step.accent}`}>
                    <step.icon size={25} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.18em] text-slate-400">{step.step}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{step.description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium leading-relaxed text-slate-500">
            Every journey is different. The goal is to make sure no one has to figure out the next step alone.
          </p>
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

      {/* --- ABOUT PAGE CALL TO ACTION --- */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-primary/20 blur-[100px]" />
        <div className="container mx-auto px-4 text-center sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-rose-200 sm:text-xs">Your story is still unfolding</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            The next meaningful connection could start here.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
            Bring your goals, questions, and ambition. We’ll help you take the first step toward guidance that moves you forward.
          </p>
          <Link to="/signup?type=mentee" className="mt-7 inline-flex w-full justify-center sm:mt-9 sm:w-auto">
            <Button size="lg" className="h-12 w-full rounded-full bg-primary px-8 font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary/90 sm:w-auto">
              Begin your mentorship journey
              <ArrowRight className="ml-2" size={19} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
