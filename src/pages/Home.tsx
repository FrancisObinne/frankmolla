

// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, Users, Target, Sparkles, Quote, CheckCircle2 } from "lucide-react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import heroImage from "@/assets/hero-mentorship-2.jpg";
// import mentor_2 from "@/assets/mentor_2.jpg";
// import frankImage from "@/assets/frank_molla_mid_section.jpg";

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAFAFA] selection:bg-primary/20">
//       <Navigation />

//       {/* --- HERO SECTION: Modern Split Layout --- */}
//       <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-0">
//         {/* Background Accents */}
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 hidden lg:block -skew-x-12 translate-x-20" />
        
//         <div className="container relative mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
//           <div className="space-y-8 animate-fade-in text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
//               <Sparkles size={16} />
//               <span>Elevate Your Potential</span>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
//               A Mentorship Sanctuary for the <span className="text-primary italic">Quietly Bold</span>
//             </h1>
            
//             <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0">
//               Connect with world-class mentors who transform ambition into excellence through structured, meaningful guidance.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
//               <Link to="/signup?type=mentee">
//                 <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all rounded-full">
//                   Find a Mentor
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
//                 </Button>
//               </Link>
//               <Link to="/signup?type=mentor">
//                 <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2 rounded-full hover:bg-white transition-all shadow-sm">
//                   Become a Mentor
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           <div className="relative group animate-float px-4 md:px-0">
//             <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-[2.5rem] blur-3xl opacity-50" />
//             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
//               <img
//                 src={heroImage}
//                 alt="Mentorship"
//                 className="w-full h-[400px] md:h-[600px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//             </div>
            
//             {/* Floating Stats Card - Mobile Hidden */}
//             <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-100 hidden md:block">
//               <div className="flex items-center gap-4">
//                 <div className="bg-green-100 p-2 rounded-full text-green-600">
//                   <CheckCircle2 size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Verified Mentors</p>
//                   <p className="text-xs text-slate-500">100% Manual Vetting</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- WHY CHOOSE SECTION: Bento Grid Style --- */}
//       <section className="py-24 bg-white relative overflow-hidden">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl mb-20 text-center lg:text-left">
//             <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 italic">The Rafikiz Difference</h2>
//             <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
//               Why Choose Rafikiz Mentorship?
//             </h3>
//             <p className="text-slate-500 text-lg mt-6">
//               We're committed to creating meaningful connections that foster growth, learning, and success.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Users,
//                 title: "Expert Mentors",
//                 description: "Connect with experienced professionals who are passionate about sharing their knowledge.",
//                 color: "bg-blue-500",
//               },
//               {
//                 icon: Target,
//                 title: "Personalized Matching",
//                 description: "Our intelligent matching system pairs you with mentors who align with your exact goals.",
//                 color: "bg-primary",
//               },
//               {
//                 icon: Sparkles,
//                 title: "Proven Results",
//                 description: "Join thousands of mentees who have achieved their goals through our structured program.",
//                 color: "bg-purple-500",
//               },
//             ].map((feature, index) => (
//               <Card
//                 key={index}
//                 className="group border-none shadow-none bg-slate-50 hover:bg-slate-900 transition-all duration-500 rounded-[2rem]"
//               >
//                 <CardContent className="p-10">
//                   <div className={`w-16 h-16 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
//                     <feature.icon size={32} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors mb-4">
//                     {feature.title}
//                   </h3>
//                   <p className="text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURED WIDE IMAGE SECTION --- */}
//       <section className="pb-24 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
//             <img
//               src={frankImage}
//               alt="Community interaction"
//               className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all" />
//             <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-6">
//               <h4 className="text-3xl md:text-5xl font-bold text-white max-w-md">Building the future, together.</h4>
//               <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/30" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FOUNDER PROFILE SECTION: Editorial Layout --- */}
//       <section className="py-24 bg-slate-50 border-y border-slate-200">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <div className="grid md:grid-cols-12 gap-12 items-center">
            
//             {/* Founder Image */}
//             <div className="md:col-span-5 relative flex justify-center">
//               <div className="relative p-3 bg-white shadow-2xl rounded-[2.5rem]">
//                 <img
//                   src={mentor_2}
//                   alt="Founder"
//                   className="w-full h-auto aspect-[4/5] object-cover rounded-[2rem]"
//                 />
//                 <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-3xl shadow-xl border-[6px] border-slate-50">
//                   <Quote className="text-white fill-current" size={32} />
//                 </div>
//               </div>
//             </div>

//             {/* Profile Content */}
//             <div className="md:col-span-7 space-y-6 lg:pl-10">
//               <div className="space-y-2">
//                 <p className="text-primary font-bold tracking-widest uppercase text-xs">Visionary & Founder</p>
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Meet Rafikiz Mentorship</h2>
//               </div>
              
//               <div className="relative">
//                 <p className="text-2xl md:text-3xl text-slate-800 leading-snug font-medium italic">
//                   "Every great journey starts with a guide. We believe a single connection can unlock extraordinary potential."
//                 </p>
//               </div>

//               <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
//                 <p>
//                   Rafikiz Mentorship is a renowned advocate for structured personal development. Having navigated the challenges of a competitive landscape, this platform was founded to democratize access to world-class guidance.
//                 </p>
//                 <p>
//                   His vision is a space where the <strong className="text-slate-900">'Quietly Bold'</strong>—those with ambition but perhaps lacking a clear path—can find the mentorship required to realize their full destiny.
//                 </p>
//               </div>

//               <div className="pt-6 border-t border-slate-200">
//                 <p className="text-xl font-bold text-slate-900">— Rafikiz Mentorship</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CTA SECTION: Bold Gradient --- */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-slate-900" />
//         {/* Animated Orbs for depth */}
//         <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary opacity-20 blur-[100px]" />
//         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary opacity-20 blur-[100px]" />

//         <div className="container relative mx-auto px-6 text-center z-10">
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
//             Whether you're looking to grow or share your expertise, Rafikiz Mentorship is here to connect you with the right people.
//           </p>
          
//           <Link to="/signup">
//             <Button size="lg" variant="default" className="h-16 px-12 text-xl rounded-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all shadow-2xl shadow-primary/30 group">
//               Get Started Today
//               <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, Users, Target, Sparkles, Quote, CheckCircle2, Camera, ShieldCheck, Compass, Zap } from "lucide-react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import heroImage from "@/assets/hero-mentorship-2.jpg";
// import mentor_2 from "@/assets/mentor_2.jpg";
// import frankImage from "@/assets/frank_molla_mid_section.jpg";

// // Newly uploaded gallery images for Home (gallery_1 to gallery_6)
// import gallery1 from "@/assets/gallery_1.jpg";
// import gallery2 from "@/assets/gallery_2.jpg";
// import gallery3 from "@/assets/gallery_3.jpg";
// import gallery4 from "@/assets/gallery_4.jpg";
// import gallery5 from "@/assets/gallery_5.jpg";
// // import gallery6 from "@/assets/gallery_6.jpg";
// import gallery7 from "@/assets/gallery_7.jpg";

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
//       <Navigation />

//       {/* --- HERO SECTION: Modern Light Split Layout --- */}
//       <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-[#FAFAFA]">
//         {/* Soft Ambient Light Glows */}
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none -z-0" />
//         <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-blue-400/10 blur-[130px] rounded-full pointer-events-none -z-0" />
//         <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-400/10 blur-[140px] rounded-full pointer-events-none -z-0" />

//         {/* Subtle Light Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-0" />

//         <div className="container relative mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
//           <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
//             {/* Pill Badge */}
//             <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase shadow-sm animate-fade-in">
//               <Sparkles size={15} className="text-primary animate-pulse" />
//               <span>Elevate Your Potential</span>
//             </div>
            
//             {/* Headline */}
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
//               A Mentorship Sanctuary for the <span className="text-primary italic">Quietly Bold</span>
//             </h1>
            
//             {/* Body */}
//             <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
//               Connect with world-class mentors who transform ambition into excellence through structured, meaningful guidance.
//             </p>

//             {/* CTA Action */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
//               <Link to="/signup?type=mentee">
//                 <Button size="lg" className="h-16 px-10 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-full border border-primary/20 group">
//                   Connect to Rafiki
//                   <ArrowRight className="ml-3 group-hover:translate-x-1.5 transition-transform duration-300" size={22} />
//                 </Button>
//               </Link>
//             </div>

//             {/* Quick Micro-Trust Badges */}
//             <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-500 border-t border-slate-200/80">
//               <div className="flex items-center gap-2">
//                 <ShieldCheck size={16} className="text-primary" />
//                 <span>Verified Professionals</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Compass size={16} className="text-primary" />
//                 <span>Tailored Matching</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Zap size={16} className="text-primary" />
//                 <span>Measurable Growth</span>
//               </div>
//             </div>
//           </div>

//           {/* Hero Image Holder */}
//           <div className="lg:col-span-5 relative group px-2 sm:px-0">
//             <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 via-blue-400/20 to-indigo-300/20 rounded-[2.8rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
//             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
//               <img
//                 src={heroImage}
//                 alt="Mentorship"
//                 className="w-full h-[420px] sm:h-[520px] lg:h-[580px] object-cover object-top filter brightness-[0.98] contrast-[1.02] rounded-[2rem]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
//             </div>
            
//             {/* Floating Verified Badge */}
//             <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:block group-hover:translate-y-[-4px] transition-transform duration-300">
//               <div className="flex items-center gap-4">
//                 <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-emerald-600">
//                   <CheckCircle2 size={26} />
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900 tracking-wide">Verified Mentors</p>
//                   <p className="text-xs text-slate-500 mt-0.5">100% Manual Vetting</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- WHY CHOOSE SECTION: Modern Light Bento Grid --- */}
//       <section className="py-28 relative bg-white border-y border-slate-200/80">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl mb-20 text-center lg:text-left">
//             <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3 italic">The Rafikiz Difference</h2>
//             <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
//               Why Choose Rafikiz Mentorship?
//             </h3>
//             <p className="text-slate-500 text-lg mt-5 leading-relaxed">
//               We're committed to creating meaningful connections that foster growth, learning, and success.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Users,
//                 title: "Expert Mentors",
//                 description: "Connect with experienced professionals who are passionate about sharing their knowledge.",
//                 badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
//               },
//               {
//                 icon: Target,
//                 title: "Personalized Matching",
//                 description: "Our intelligent matching system pairs you with mentors who align with your exact goals.",
//                 badgeColor: "bg-primary/10 text-primary border-primary/20",
//               },
//               {
//                 icon: Sparkles,
//                 title: "Proven Results",
//                 description: "Join thousands of mentees who have achieved their goals through our structured program.",
//                 badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
//               },
//             ].map((feature, index) => (
//               <Card
//                 key={index}
//                 className="group border border-slate-200/80 bg-slate-50/60 hover:bg-white transition-all duration-500 rounded-[2.2rem] shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1"
//               >
//                 <CardContent className="p-10 flex flex-col h-full justify-between">
//                   <div>
//                     <div className={`w-16 h-16 rounded-2xl ${feature.badgeColor} border flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
//                       <feature.icon size={32} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
//                       {feature.title}
//                     </h3>
//                     <p className="text-slate-600 leading-relaxed text-base font-normal">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURED WIDE IMAGE SECTION: Panoramic Light Frame --- */}
//       <section className="py-24 bg-[#FAFAFA] relative">
//         <div className="container mx-auto px-6">
//           <div className="relative group overflow-hidden rounded-[3rem] shadow-xl border-4 border-white bg-white">
//             <img
//               src={frankImage}
//               alt="Community interaction"
//               className="w-full h-[480px] sm:h-[550px] object-cover object-top filter brightness-[0.95] rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none" />
            
//             <div className="absolute bottom-10 left-8 sm:left-12 right-8 sm:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
//               <div className="space-y-2">
//                 <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/90 px-3.5 py-1.5 rounded-full border border-white/40 shadow-sm backdrop-blur-md">
//                   Community Pulse
//                 </span>
//                 <h4 className="text-3xl sm:text-5xl font-extrabold text-white max-w-xl tracking-tight leading-tight">
//                   Building the future, together.
//                 </h4>
//               </div>
//               <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/40" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- GALLERY SECTION (Custom Rounded Image Edges) --- */}
//       <section className="py-28 bg-slate-100/70 border-t border-slate-200/80 relative overflow-hidden">
//         {/* Light Glow background effects */}
//         <div className="absolute top-1/3 left-1/5 w-[550px] h-[550px] bg-primary/5 blur-[170px] rounded-full pointer-events-none" />

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//             <div className="space-y-3">
//               <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
//                 <Camera size={14} />
//                 <span>Visual Sanctuary</span>
//               </div>
//               <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
//                 Inside the Rafikiz Experience
//               </h3>
//             </div>
//             <p className="text-slate-600 max-w-md text-base leading-relaxed">
//               Real moments of breakthroughs, collaborative mentoring sessions, and profound connections captured live.
//             </p>
//           </div>

//           {/* Clean 3-Column Uniform Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { img: gallery1, title: "Transforming Ambition into Action", tag: "Live Workshop" },
//               { img: gallery2, title: "Meaningful Dialogues & Insight", tag: "Engagement" },
//               { img: gallery3, title: "One-on-One Dedicated Guidance", tag: "Mentorship" },
//               { img: gallery4, title: "Focused Breakthroughs & Clarity", tag: "Milestones" },
//               { img: gallery5, title: "Community & Shared Growth", tag: "Community" },
//               // { img: gallery6, title: "Building Legacies That Last", tag: "Legacy" },
//             { img: gallery7, title: "Building Legacies That Last", tag: "Legacy" },
//             ].map((item, idx) => (
//               <div 
//                 key={idx} 
//                 className="group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
//               >
//                 {/* Image Container */}
//                 <div className="relative w-full h-[280px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.03]"
//                   />
//                 </div>

//                 {/* Caption / Details */}
//                 <div className="pt-5 px-3 pb-3">
//                   <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                     {item.tag}
//                   </span>
//                   <h4 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-primary transition-colors">
//                     {item.title}
//                   </h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FOUNDER PROFILE SECTION: Editorial Light Spotlight --- */}
//       <section className="py-28 bg-white border-t border-slate-200/80">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
//             {/* Founder Image */}
//             <div className="md:col-span-5 relative flex justify-center">
//               <div className="relative p-3 bg-slate-50 border border-slate-200 shadow-xl rounded-[2.8rem]">
//                 <img
//                   src={mentor_2}
//                   alt="Founder"
//                   className="w-full h-auto aspect-[4/5] object-cover object-top rounded-[2.2rem]"
//                 />
//                 <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-primary p-5 sm:p-6 rounded-3xl shadow-xl border-[6px] border-white">
//                   <Quote className="text-white fill-current" size={32} />
//                 </div>
//               </div>
//             </div>

//             {/* Profile Content */}
//             <div className="md:col-span-7 space-y-6 lg:pl-6">
//               <div className="space-y-2">
//                 <p className="text-primary font-bold tracking-widest uppercase text-xs">Visionary & Founder</p>
//                 <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Meet Rafikiz Mentorship</h2>
//               </div>
              
//               <div className="relative pl-6 border-l-2 border-primary">
//                 <p className="text-2xl sm:text-3xl text-slate-800 leading-snug font-medium italic">
//                   "Every great journey starts with a guide. We believe a single connection can unlock extraordinary potential."
//                 </p>
//               </div>

//               <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-normal">
//                 <p>
//                   Rafikiz Mentorship is a renowned advocate for structured personal development. Having navigated the challenges of a competitive landscape, this platform was founded to democratize access to world-class guidance.
//                 </p>
//                 <p>
//                   His vision is a space where the <strong className="text-slate-900">'Quietly Bold'</strong>—those with ambition but perhaps lacking a clear path—can find the mentorship required to realize their full destiny.
//                 </p>
//               </div>

//               <div className="pt-6 border-t border-slate-200">
//                 <p className="text-xl font-bold text-slate-900">— Rafikiz Mentorship</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CTA SECTION: Clean Soft Light Gradient Finish --- */}
//       <section className="py-28 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
//         <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />

//         <div className="container relative mx-auto px-6 text-center z-10">
//           <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="text-slate-300 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
//             Whether you're looking to grow or share your expertise, Rafikiz Mentorship is here to connect you with the right people.
//           </p>
          
//           <Link to="/signup">
//             <Button size="lg" variant="default" className="h-16 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 border border-primary/50 group">
//               Get Started Today
//               <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;


// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, Users, Target, Sparkles, Quote, CheckCircle2, Camera, ShieldCheck, Compass, Zap } from "lucide-react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import heroImage from "@/assets/hero-mentorship-2.jpg";
// import mentor_2 from "@/assets/mentor_2.jpg";
// import frankImage from "@/assets/frank_molla_mid_section.jpg";

// // Newly uploaded gallery images for Home (gallery_1 to gallery_6)
// import gallery1 from "@/assets/gallery_1.jpg";
// import gallery2 from "@/assets/gallery_2.jpg";
// import gallery3 from "@/assets/gallery_3.jpg";
// import gallery4 from "@/assets/gallery_4.jpg";
// import gallery5 from "@/assets/gallery_5.jpg";
// import gallery7 from "@/assets/gallery_7.jpg";

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
//       <Navigation />

//       {/* --- HERO SECTION: Optimized Split Layout --- */}
//       <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-[#FAFAFA]">
//         {/* Soft Ambient Light Glows - Reduced blur radius to save mobile GPU memory */}
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full pointer-events-none -z-0" />
//         <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-400/10 blur-3xl rounded-full pointer-events-none -z-0" />

//         <div className="container relative mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
//           <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
//             {/* Pill Badge */}
//             <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase shadow-sm">
//               <Sparkles size={15} className="text-primary animate-pulse" />
//               <span>Elevate Your Potential</span>
//             </div>
            
//             {/* Headline */}
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
//               A Mentorship Sanctuary for the <span className="text-primary italic">Quietly Bold</span>
//             </h1>
            
//             {/* Body */}
//             <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
//               Connect with world-class mentors who transform ambition into excellence through structured, meaningful guidance.
//             </p>

//             {/* CTA Action */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
//               <Link to="/signup?type=mentee">
//                 <Button size="lg" className="h-16 px-10 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 rounded-full border border-primary/20 group">
//                   Connect to Rafiki
//                   <ArrowRight className="ml-3 group-hover:translate-x-1.5 transition-transform duration-300" size={22} />
//                 </Button>
//               </Link>
//             </div>

//             {/* Quick Micro-Trust Badges */}
//             <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-500 border-t border-slate-200/80">
//               <div className="flex items-center gap-2">
//                 <ShieldCheck size={16} className="text-primary" />
//                 <span>Verified Professionals</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Compass size={16} className="text-primary" />
//                 <span>Tailored Matching</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Zap size={16} className="text-primary" />
//                 <span>Measurable Growth</span>
//               </div>
//             </div>
//           </div>

//           {/* Hero Image Holder */}
//           <div className="lg:col-span-5 relative group px-2 sm:px-0">
//             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
//               <img
//                 src={heroImage}
//                 alt="Mentorship"
//                 loading="eager"
//                 decoding="async"
//                 className="w-full h-[420px] sm:h-[520px] lg:h-[580px] object-cover object-top filter brightness-[0.98] contrast-[1.02] rounded-[2rem]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
//             </div>
            
//             {/* Floating Verified Badge */}
//             <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
//               <div className="flex items-center gap-4">
//                 <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-emerald-600">
//                   <CheckCircle2 size={26} />
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900 tracking-wide">Verified Mentors</p>
//                   <p className="text-xs text-slate-500 mt-0.5">100% Manual Vetting</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- WHY CHOOSE SECTION --- */}
//       <section className="py-28 relative bg-white border-y border-slate-200/80">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl mb-20 text-center lg:text-left">
//             <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3 italic">The Rafikiz Difference</h2>
//             <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
//               Why Choose Rafikiz Mentorship?
//             </h3>
//             <p className="text-slate-500 text-lg mt-5 leading-relaxed">
//               We're committed to creating meaningful connections that foster growth, learning, and success.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Users,
//                 title: "Expert Mentors",
//                 description: "Connect with experienced professionals who are passionate about sharing their knowledge.",
//                 badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
//               },
//               {
//                 icon: Target,
//                 title: "Personalized Matching",
//                 description: "Our intelligent matching system pairs you with mentors who align with your exact goals.",
//                 badgeColor: "bg-primary/10 text-primary border-primary/20",
//               },
//               {
//                 icon: Sparkles,
//                 title: "Proven Results",
//                 description: "Join thousands of mentees who have achieved their goals through our structured program.",
//                 badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
//               },
//             ].map((feature, index) => (
//               <Card
//                 key={index}
//                 className="group border border-slate-200/80 bg-slate-50/60 hover:bg-white transition-all duration-300 rounded-[2.2rem] shadow-sm hover:shadow-xl hover:border-slate-300"
//               >
//                 <CardContent className="p-10 flex flex-col h-full justify-between">
//                   <div>
//                     <div className={`w-16 h-16 rounded-2xl ${feature.badgeColor} border flex items-center justify-center mb-8 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
//                       <feature.icon size={32} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
//                       {feature.title}
//                     </h3>
//                     <p className="text-slate-600 leading-relaxed text-base font-normal">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURED WIDE IMAGE SECTION --- */}
//       <section className="py-24 bg-[#FAFAFA] relative">
//         <div className="container mx-auto px-6">
//           <div className="relative group overflow-hidden rounded-[3rem] shadow-xl border-4 border-white bg-white">
//             <img
//               src={frankImage}
//               alt="Community interaction"
//               loading="lazy"
//               decoding="async"
//               className="w-full h-[480px] sm:h-[550px] object-cover object-top filter brightness-[0.95] rounded-[2.8rem]"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none" />
            
//             <div className="absolute bottom-10 left-8 sm:left-12 right-8 sm:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
//               <div className="space-y-2">
//                 <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/90 px-3.5 py-1.5 rounded-full border border-white/40 shadow-sm">
//                   Community Pulse
//                 </span>
//                 <h4 className="text-3xl sm:text-5xl font-extrabold text-white max-w-xl tracking-tight leading-tight">
//                   Building the future, together.
//                 </h4>
//               </div>
//               <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/40" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- GALLERY SECTION (Lazy Loaded & Async Decoded) --- */}
//       <section className="py-28 bg-slate-100/70 border-t border-slate-200/80 relative overflow-hidden">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//             <div className="space-y-3">
//               <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
//                 <Camera size={14} />
//                 <span>Visual Sanctuary</span>
//               </div>
//               <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
//                 Inside the Rafikiz Experience
//               </h3>
//             </div>
//             <p className="text-slate-600 max-w-md text-base leading-relaxed">
//               Real moments of breakthroughs, collaborative mentoring sessions, and profound connections captured live.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { img: gallery1, title: "Transforming Ambition into Action", tag: "Live Workshop" },
//               { img: gallery2, title: "Meaningful Dialogues & Insight", tag: "Engagement" },
//               { img: gallery3, title: "One-on-One Dedicated Guidance", tag: "Mentorship" },
//               { img: gallery4, title: "Focused Breakthroughs & Clarity", tag: "Milestones" },
//               { img: gallery5, title: "Community & Shared Growth", tag: "Community" },
//               { img: gallery7, title: "Building Legacies That Last", tag: "Legacy" },
//             ].map((item, idx) => (
//               <div 
//                 key={idx} 
//                 className="group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300"
//               >
//                 {/* Image Container with native lazy loading */}
//                 <div className="relative w-full h-[280px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     loading="lazy"
//                     decoding="async"
//                     className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-300 group-hover:scale-[1.02]"
//                   />
//                 </div>

//                 {/* Caption / Details */}
//                 <div className="pt-5 px-3 pb-3">
//                   <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                     {item.tag}
//                   </span>
//                   <h4 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-primary transition-colors">
//                     {item.title}
//                   </h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FOUNDER PROFILE SECTION --- */}
//       <section className="py-28 bg-white border-t border-slate-200/80">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
//             {/* Founder Image */}
//             <div className="md:col-span-5 relative flex justify-center">
//               <div className="relative p-3 bg-slate-50 border border-slate-200 shadow-xl rounded-[2.8rem]">
//                 <img
//                   src={mentor_2}
//                   alt="Founder"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-auto aspect-[4/5] object-cover object-top rounded-[2.2rem]"
//                 />
//                 <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-primary p-5 sm:p-6 rounded-3xl shadow-xl border-[6px] border-white">
//                   <Quote className="text-white fill-current" size={32} />
//                 </div>
//               </div>
//             </div>

//             {/* Profile Content */}
//             <div className="md:col-span-7 space-y-6 lg:pl-6">
//               <div className="space-y-2">
//                 <p className="text-primary font-bold tracking-widest uppercase text-xs">Visionary & Founder</p>
//                 <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Meet Rafikiz Mentorship</h2>
//               </div>
              
//               <div className="relative pl-6 border-l-2 border-primary">
//                 <p className="text-2xl sm:text-3xl text-slate-800 leading-snug font-medium italic">
//                   "Every great journey starts with a guide. We believe a single connection can unlock extraordinary potential."
//                 </p>
//               </div>

//               <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-normal">
//                 <p>
//                   Rafikiz Mentorship is a renowned advocate for structured personal development. Having navigated the challenges of a competitive landscape, this platform was founded to democratize access to world-class guidance.
//                 </p>
//                 <p>
//                   His vision is a space where the <strong className="text-slate-900">'Quietly Bold'</strong>—those with ambition but perhaps lacking a clear path—can find the mentorship required to realize their full destiny.
//                 </p>
//               </div>

//               <div className="pt-6 border-t border-slate-200">
//                 <p className="text-xl font-bold text-slate-900">— Rafikiz Mentorship</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CTA SECTION --- */}
//       <section className="py-28 relative overflow-hidden bg-slate-900 text-white">
//         <div className="container relative mx-auto px-6 text-center z-10">
//           <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="text-slate-300 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
//             Whether you're looking to grow or share your expertise, Rafikiz Mentorship is here to connect you with the right people.
//           </p>
          
//           <Link to="/signup">
//             <Button size="lg" variant="default" className="h-16 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 border border-primary/50 group">
//               Get Started Today
//               <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ChevronLeft, ChevronRight, Users, Target, Sparkles, Quote, CheckCircle2, Camera, ShieldCheck, Compass, Zap, Palette, Code2, Briefcase, Megaphone, BarChart3, Lightbulb, Rocket, GraduationCap, Star, Pause, Play, MessageCircle, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-mentorship-2.jpg";
import mentor_2 from "@/assets/mentor_2.jpg";
import frankImage from "@/assets/frank_molla_mid_section.jpg";

// Gallery images used in the experience carousel.
import gallery1 from "@/assets/gallery_1.jpg";
import gallery2 from "@/assets/gallery_2.jpg";
import gallery3 from "@/assets/gallery_3.jpg";
import gallery4 from "@/assets/gallery_4.jpg";
import gallery5 from "@/assets/gallery_5.jpg";
import gallery6 from "@/assets/gallery_6.jpg";
import gallery7 from "@/assets/gallery_7.jpg";
import gallery8 from "@/assets/gallery_8.jpg";
import gallery9 from "@/assets/gallery_9.jpg";
import gallery10 from "@/assets/gallery_10.jpg";
import gallery11 from "@/assets/gallery_11.jpg";
import gallery12 from "@/assets/gallery_12.jpg";
import gallery13 from "@/assets/gallery_13.jpg";
import gallery14 from "@/assets/gallery_14.jpg";
import gallery15 from "@/assets/gallery_15.jpg";
import gallery16 from "@/assets/gallery_16.jpg";
import gallery17 from "@/assets/gallery_17.jpg";
import gallery18 from "@/assets/gallery_18.jpg";
import gallery19 from "@/assets/gallery_19.jpg";
import gallery20 from "@/assets/gallery_20.jpg";

const experienceSlides = [
  { img: gallery1, title: "Transforming Ambition into Action", tag: "Mentorship" },
  { img: gallery2, title: "Meaningful Dialogues & Insight", tag: "Engagement" },
  { img: gallery3, title: "One-on-One Dedicated Guidance", tag: "Live Workshop" },
  { img: gallery4, title: "Focused Breakthroughs & Clarity", tag: "Milestones" },
  { img: gallery5, title: "Community & Shared Growth", tag: "Community" },
  { img: gallery6, title: "Small Steps, Lasting Progress", tag: "Progress" },
  { img: gallery7, title: "Building Legacies That Last", tag: "Legacy" },
  { img: gallery8, title: "Learning Through Connection", tag: "Learning" },
  { img: gallery9, title: "Ideas That Move Us Forward", tag: "Inspiration" },
  { img: gallery10, title: "Growing Together, Every Day", tag: "Growth" },
  { img: gallery11, title: "A Community of Possibility", tag: "Belonging" },
  { img: gallery12, title: "Confidence for the Next Chapter", tag: "Confidence" },
  { img: gallery13, title: "A Space to Find Your Direction", tag: "Direction" },
  { img: gallery14, title: "Turning Insight into Momentum", tag: "Momentum" },
  { img: gallery15, title: "Every Perspective Adds Value", tag: "Perspective" },
  { img: gallery17, title: "The Power of Shared Experience", tag: "Connection" },
  { img: gallery18, title: "Making Room for New Possibilities", tag: "Possibility" },
  { img: gallery19, title: "Rooted in Support, Ready to Grow", tag: "Support" },
  { img: gallery20, title: "Your Journey, Strengthened Together", tag: "Together" },
];

const mentorshipAreas = [
  { label: "Design", icon: Palette, color: "text-fuchsia-600 bg-fuchsia-50" },
  { label: "Engineering", icon: Code2, color: "text-blue-600 bg-blue-50" },
  { label: "Leadership", icon: Users, color: "text-violet-600 bg-violet-50" },
  { label: "Marketing", icon: Megaphone, color: "text-orange-600 bg-orange-50" },
  { label: "Product", icon: Lightbulb, color: "text-amber-600 bg-amber-50" },
  { label: "Data & Analytics", icon: BarChart3, color: "text-cyan-700 bg-cyan-50" },
  { label: "Career Growth", icon: Briefcase, color: "text-emerald-700 bg-emerald-50" },
  { label: "Entrepreneurship", icon: Rocket, color: "text-rose-600 bg-rose-50" },
  { label: "Learning", icon: GraduationCap, color: "text-indigo-600 bg-indigo-50" },
  { label: "Personal Growth", icon: Sparkles, color: "text-primary bg-primary/10" },
];

const homeTestimonials = [
  {
    quote: "Rafikiz Mentorship transformed my approach to leadership. Having a mentor who understood the nuances of my industry gave me the clarity I needed to scale my team and secure our next round of funding.",
    author: "Amina Bello",
    role: "Tech Founder & CEO",
    program: "Entrepreneurship Track",
  },
  {
    quote: "The guidance I received on career planning was invaluable. My mentor helped me navigate a complex job transition with confidence and poise. I landed my dream role within two months of joining.",
    author: "Chinedu Okafor",
    role: "Senior Software Engineer",
    program: "Career Development",
  },
  {
    quote: "Mentorship here isn't just about professional checkboxes—it's about human connection. The insights I gained helped me achieve a sustainable work-life balance while excelling in my creative career.",
    author: "Zainab Aliyu",
    role: "Product Designer & Illustrator",
    program: "Creative Skills",
  },
  {
    quote: "Personal growth is often overlooked in professional spaces. Rafikiz Mentorship created a safe sanctuary where I could build emotional intelligence and authentic confidence.",
    author: "Blessing Eze",
    role: "Marketing Specialist",
    program: "Personal Growth",
  },
];

const homeFaqs = [
  {
    question: "What is Rafikiz Mentorship?",
    answer: "Rafikiz Mentorship brings people seeking guidance together with experienced professionals who want to share what they know. The aim is thoughtful, personal support that helps you move forward.",
  },
  {
    question: "How do I get started?",
    answer: "Choose whether you are applying as a mentee or mentor, then complete the relevant signup questionnaire. Share your goals, interests, and experience so we can understand what you are looking for.",
  },
  {
    question: "What can I talk about with a mentor?",
    answer: "You can bring questions about career planning, leadership, skill development, a career transition, or personal growth. It helps to arrive with a goal or a challenge you would like to work through.",
  },
  {
    question: "What happens after I submit my application?",
    answer: "The Rafikiz team will review your application and be in touch soon. If you are applying as a mentee, include enough detail about your goals and interests to help us understand the guidance you need.",
  },
  {
    question: "How does a mentorship get started?",
    answer: "The first conversation is a chance to get to know one another, discuss your goals, and agree on what you would like to work toward. From there, you can build a regular rhythm that works for both of you.",
  },
  // {
  //   question: "Can I apply to become a mentor?",
  //   answer: "Yes. Choose the mentor application and tell us about your experience, areas of expertise, and how you would like to support others.",
  // },
];

const mentorshipJourney = [
  {
    step: "01",
    title: "Name what’s next",
    description: "Share your goals, questions, and the kind of support you need.",
    icon: Target,
  },
  {
    step: "02",
    title: "Connect with experience",
    description: "Learn with a mentor who can offer a fresh, informed perspective.",
    icon: MessageCircle,
  },
  {
    step: "03",
    title: "Turn insight into action",
    description: "Build skills, make decisions, and move forward with confidence.",
    icon: TrendingUp,
  },
];

const mentorshipMilestones = [
  {
    label: "Get clear",
    title: "Start with what matters to you.",
    description: "Name the goal, decision, or challenge you want to focus on first.",
    icon: Target,
  },
  {
    label: "Make a plan",
    title: "Turn your goal into a path.",
    description: "Use your mentor’s perspective to identify useful next steps and priorities.",
    icon: Compass,
  },
  {
    label: "Build skills",
    title: "Learn by putting ideas to work.",
    description: "Bring real questions and practice new approaches with experienced guidance.",
    icon: MessageCircle,
  },
  {
    label: "Keep growing",
    title: "Notice progress and adjust.",
    description: "Reflect on what is working, celebrate milestones, and choose what comes next.",
    icon: TrendingUp,
  },
];

const growthPathways = [
  {
    eyebrow: "Find direction",
    title: "Make your next career move",
    description: "Talk through a transition, prepare for a new role, or get clearer about where you want to go.",
    icon: Compass,
    tone: "bg-blue-50 text-blue-700 border-blue-100",
    glow: "bg-blue-100/70",
  },
  {
    eyebrow: "Build your craft",
    title: "Strengthen skills that matter",
    description: "Get thoughtful feedback as you develop your expertise, work on a project, or grow your confidence.",
    icon: Lightbulb,
    tone: "bg-amber-50 text-amber-700 border-amber-100",
    glow: "bg-amber-100/70",
  },
  {
    eyebrow: "Grow your impact",
    title: "Lead with more confidence",
    description: "Explore leadership challenges, communicate with intention, and build a path that fits your ambitions.",
    icon: Users,
    tone: "bg-rose-50 text-primary border-rose-100",
    glow: "bg-rose-100/80",
  },
];

const Home = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonialCarouselRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialsPaused, setTestimonialsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const goToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollTo({ left: index * carousel.clientWidth, behavior: "smooth" });
  };

  const goToTestimonial = (index: number) => {
    const carousel = testimonialCarouselRef.current;
    if (!carousel) return;
    carousel.scrollTo({ left: index * carousel.clientWidth, behavior: "smooth" });
    setActiveTestimonial(index);
  };

  useEffect(() => {
    if (testimonialsPaused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      const carousel = testimonialCarouselRef.current;
      if (!carousel) return;
      const nextIndex = (activeTestimonial + 1) % homeTestimonials.length;
      carousel.scrollTo({ left: nextIndex * carousel.clientWidth, behavior: "smooth" });
      setActiveTestimonial(nextIndex);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [activeTestimonial, testimonialsPaused, prefersReducedMotion]);

  const activeMilestoneData = mentorshipMilestones[activeMilestone];
  const ActiveMilestoneIcon = activeMilestoneData.icon;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION: Modern Light Split Layout --- */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-[radial-gradient(ellipse_at_12%_8%,rgba(224,0,34,0.13),transparent_38%),radial-gradient(ellipse_at_88%_18%,rgba(99,102,241,0.12),transparent_34%),linear-gradient(135deg,#fff7f8_0%,#ffffff_42%,#f1f5ff_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_45%,black_38%,transparent_100%)] pointer-events-none" />
        <div className="absolute -left-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="absolute -right-28 bottom-0 h-[24rem] w-[24rem] rounded-full bg-indigo-300/20 blur-[100px] pointer-events-none" />

        <div className="container relative mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase shadow-sm animate-fade-in">
              <Sparkles size={15} className="text-primary animate-pulse" />
              <span>Elevate Your Potential</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              A Mentorship Sanctuary for the <span className="text-primary italic">Quietly Bold</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              Connect with world-class mentors who transform ambition into excellence through structured, meaningful guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/signup?type=mentee">
                <Button size="lg" className="h-16 px-10 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 rounded-full border border-primary/25 group transition-all duration-300">
                  Connect to Rafiki
                  <ArrowRight className="ml-3 group-hover:translate-x-1.5 transition-transform duration-300" size={22} />
                </Button>
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-500 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                <span>Verified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass size={16} className="text-primary" />
                <span>Tailored Matching</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-primary" />
                <span>Measurable Growth</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group px-2 sm:px-0">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 via-blue-400/10 to-transparent rounded-[2.8rem] blur-2xl opacity-60" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img
                src={gallery16}
                alt="Mentorship"
                loading="eager"
                decoding="async"
                className="w-full h-[420px] sm:h-[520px] lg:h-[580px] object-cover object-top filter brightness-[0.98] contrast-[1.02] rounded-[2rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-emerald-600">
                  <CheckCircle2 size={26} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 tracking-wide">Verified Mentors</p>
                  <p className="text-xs text-slate-500 mt-0.5">100% Manual Vetting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MENTORSHIP AREAS: SELF-SLIDING ICON STRIP --- */}
      <section aria-label="Mentorship areas" className="overflow-hidden border-y border-slate-200/80 bg-white py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="mb-5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 sm:mb-7 sm:text-xs">
            Find guidance in the areas that move you forward
          </p>
          <div className="icon-marquee-viewport group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="icon-marquee-track flex w-max items-center gap-0 group-hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={copy === 1}>
                  {mentorshipAreas.map(({ label, icon: Icon, color }) => (
                    <div key={label} className="flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-4 shadow-sm transition-colors hover:border-primary/25 sm:gap-3 sm:py-2.5 sm:pl-2.5 sm:pr-5">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10 ${color}`}>
                        <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="whitespace-nowrap text-xs font-semibold text-slate-700 sm:text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SECTION --- */}
      <section className="py-28 relative bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20 text-center lg:text-left">
            <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3 italic">The Rafikiz Difference</h2>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Why Choose Rafikiz Mentorship?
            </h3>
            <p className="text-slate-500 text-lg mt-5 leading-relaxed">
              We're committed to creating meaningful connections that foster growth, learning, and success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Mentors",
                description: "Connect with experienced professionals who are passionate about sharing their knowledge.",
                badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
              },
              {
                icon: Target,
                title: "Personalized Matching",
                description: "Our intelligent matching system pairs you with mentors who align with your exact goals.",
                badgeColor: "bg-primary/10 text-primary border-primary/20",
              },
              {
                icon: Sparkles,
                title: "Proven Results",
                description: "Join thousands of mentees who have achieved their goals through our structured program.",
                badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group border border-slate-200/80 bg-slate-50/60 hover:bg-white transition-all duration-300 rounded-[2.2rem] shadow-sm hover:shadow-xl hover:border-slate-300"
              >
                <CardContent className="p-10 flex flex-col h-full justify-between">
                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${feature.badgeColor} border flex items-center justify-center mb-8 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <feature.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base font-normal">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED WIDE IMAGE SECTION --- */}
      <section className="py-24 bg-[#FAFAFA] relative">
        <div className="container mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3rem] shadow-xl border-4 border-white bg-white">
            <img
              src={frankImage}
              alt="Community interaction"
              loading="lazy"
              decoding="async"
              className="w-full h-[480px] sm:h-[550px] object-cover object-top filter brightness-[0.95] rounded-[2.8rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-10 left-8 sm:left-12 right-8 sm:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/90 px-3.5 py-1.5 rounded-full border border-white/40 shadow-sm">
                  Community Pulse
                </span>
                <h4 className="text-3xl sm:text-5xl font-extrabold text-white max-w-xl tracking-tight leading-tight">
                  Building the future, together.
                </h4>
              </div>
              <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/40" />
            </div>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC ASYMMETRICAL BENTO GALLERY (gallery_1 through gallery_5 & gallery_7) --- */}
      <section className="py-28 bg-slate-100/70 border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-[550px] h-[550px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                <Camera size={14} />
                <span>Visual Sanctuary</span>
              </div>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Inside the Rafikiz Experience
              </h3>
            </div>
            <p className="text-slate-600 max-w-md text-base leading-relaxed">
              Real moments of breakthroughs, collaborative mentoring sessions, and profound connections captured live.
            </p>
          </div>

          <div className="relative">
            <div
              ref={carouselRef}
              role="region"
              aria-label="Rafikiz experience gallery"
              aria-roledescription="carousel"
              onScroll={(event) => setActiveSlide(Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))}
              className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth rounded-[2rem] sm:rounded-[2.75rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {experienceSlides.map((slide, index) => (
                <article
                  key={slide.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${experienceSlides.length}`}
                  className="relative isolate flex min-w-full snap-start flex-col overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-900/15 sm:rounded-[2.75rem]"
                >
                  <div className="relative mx-auto aspect-square w-full max-w-[680px] overflow-hidden bg-slate-950">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="absolute inset-0 h-full w-full aspect-square object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
                      <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-xs">
                        {slide.tag}
                      </span>
                      <h4 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {slide.title}
                      </h4>
                    </div>
                    <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold tabular-nums text-white backdrop-blur-md sm:right-8 sm:top-8 sm:px-4 sm:py-2">
                      {String(index + 1).padStart(2, "0")} <span className="text-white/60">/ {String(experienceSlides.length).padStart(2, "0")}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              aria-label="Previous image"
              onClick={() => goToSlide((activeSlide - 1 + experienceSlides.length) % experienceSlides.length)}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-900 shadow-xl backdrop-blur transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-6 sm:h-14 sm:w-14"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => goToSlide((activeSlide + 1) % experienceSlides.length)}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-900 shadow-xl backdrop-blur transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-6 sm:h-14 sm:w-14"
            >
              <ChevronRight size={24} />
            </button>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-5 px-1 sm:mt-8 sm:px-2">
              <div className="flex items-center gap-2" aria-label="Choose a gallery image">
                {experienceSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`Go to image ${index + 1}: ${slide.title}`}
                    aria-current={activeSlide === index ? "true" : undefined}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${activeSlide === index ? "w-8 bg-primary" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
                  />
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                Swipe to explore <span className="mx-2 text-primary">·</span> {experienceSlides.length} moments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: SELF-SLIDING CAROUSEL --- */}
      <section className="border-t border-slate-200/80 bg-white py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-14">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
              Voices of transformation
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              A little guidance can change everything.
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
              Hear how thoughtful mentorship helps people find clarity, confidence, and their next step.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div
              ref={testimonialCarouselRef}
              role="region"
              aria-label="Mentee testimonials"
              aria-roledescription="carousel"
              aria-live="off"
              onScroll={(event) => setActiveTestimonial(Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))}
              className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth rounded-[2rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:rounded-[2.5rem]"
            >
              {homeTestimonials.map((testimonial, index) => (
                <article
                  key={testimonial.author}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${homeTestimonials.length}`}
                  className="min-w-full snap-start px-0.5"
                >
                  <div className="flex min-h-[470px] flex-col justify-between rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg shadow-slate-900/5 sm:min-h-[390px] sm:rounded-[2.5rem] sm:p-10 lg:p-12">
                    <div>
                      <div className="mb-6 flex items-center justify-between sm:mb-8">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary sm:h-14 sm:w-14">
                          <Quote size={25} aria-hidden="true" />
                        </span>
                        <div className="flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                          {Array.from({ length: 5 }, (_, starIndex) => (
                            <Star key={starIndex} size={16} fill="currentColor" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-lg font-medium italic leading-relaxed text-slate-800 sm:text-2xl sm:leading-relaxed">
                        “{testimonial.quote}”
                      </blockquote>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-end sm:justify-between sm:pt-6">
                      <div>
                        <p className="text-base font-extrabold text-slate-900 sm:text-lg">{testimonial.author}</p>
                        <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                      </div>
                      <span className="w-fit rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">
                        {testimonial.program}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-5 sm:mt-8 sm:flex-row">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => goToTestimonial((activeTestimonial - 1 + homeTestimonials.length) % homeTestimonials.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => goToTestimonial((activeTestimonial + 1) % homeTestimonials.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  type="button"
                  aria-label={testimonialsPaused ? "Play testimonials" : "Pause testimonials"}
                  aria-pressed={testimonialsPaused}
                  onClick={() => setTestimonialsPaused((paused) => !paused)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {testimonialsPaused ? <Play size={17} /> : <Pause size={17} />}
                </button>
              </div>

              <div className="flex items-center gap-2" aria-label="Choose a testimonial">
                {homeTestimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.author}
                    type="button"
                    aria-label={`Go to testimonial ${index + 1} by ${testimonial.author}`}
                    aria-current={activeTestimonial === index ? "true" : undefined}
                    onClick={() => goToTestimonial(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${activeTestimonial === index ? "w-8 bg-primary" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
                  />
                ))}
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {String(activeTestimonial + 1).padStart(2, "0")} <span className="mx-1 text-slate-300">/</span> {String(homeTestimonials.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="border-t border-slate-200/80 bg-slate-50 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-14">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
              Here to help
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
              A few quick answers to help you take the next step with confidence.
            </p>
          </div>

          <Accordion type="single" collapsible className="mx-auto max-w-3xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white px-5 shadow-sm sm:rounded-[2rem] sm:px-8">
            {homeFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border-slate-200 last:border-b-0">
                <AccordionTrigger className="gap-4 py-5 text-left text-sm font-bold leading-snug text-slate-900 hover:no-underline sm:py-6 sm:text-base [&>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600 sm:pb-6 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-8 text-center text-sm text-slate-500 sm:mt-10 sm:text-base">
            Ready to begin?{" "}
            <Link to="/signup?type=mentee" className="font-semibold text-primary underline-offset-4 hover:underline">
              Find your mentor
            </Link>
            {/* <span className="mx-2 text-slate-300">or</span>
            <Link to="/signup?type=mentor" className="font-semibold text-primary underline-offset-4 hover:underline">
              become a mentor
            </Link> */}
            .
          </p>
        </div>
      </section>

      {/* --- MENTORSHIP INFOGRAPHIC --- */}
      <section className="relative isolate overflow-hidden border-t border-slate-200/80 bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
              <Sparkles size={14} aria-hidden="true" />
              Guidance for what’s next
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:mt-6 sm:text-5xl">
              At your fingertips: <span className="text-primary">a mentor in your corner.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
              Starting a new career, building a venture, or learning in-demand skills? Connect with an experienced mentor for thoughtful advice and practical guidance shaped around your goals.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Bring your ambition. Find a clearer path forward, one conversation at a time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <Link to="/signup?type=mentee" className="w-full sm:w-auto">
                <Button size="lg" className="h-12 w-full rounded-full bg-primary px-7 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 sm:w-auto">
                  Start your journey
                  <ArrowRight className="ml-2" size={19} />
                </Button>
              </Link>
              <Link to="/how-it-works" className="inline-flex min-h-12 items-center justify-center px-3 text-sm font-semibold text-slate-600 transition hover:text-primary">
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-rose-100/70 to-slate-100 blur-xl sm:-inset-5" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-rose-50 via-white to-slate-100 p-5 shadow-2xl shadow-slate-900/10 sm:rounded-[2.5rem] sm:p-8 lg:p-9">
              <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">Your growth path</p>
                  <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">Make your next move</h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-white text-primary shadow-sm sm:h-14 sm:w-14">
                  <Compass size={25} aria-hidden="true" />
                </div>
              </div>

              <div className="relative space-y-3 sm:space-y-4">
                <div className="absolute bottom-10 left-[1.65rem] top-10 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:left-[1.9rem]" aria-hidden="true" />
                {mentorshipJourney.map(({ step, title, description, icon: Icon }) => (
                  <div key={step} className="relative flex items-start gap-3.5 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-sm backdrop-blur sm:gap-4 sm:p-5">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-rose-50 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Icon size={21} strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="text-[10px] font-bold tracking-[0.16em] text-primary">STEP {step}</span>
                        <h4 className="text-sm font-extrabold text-slate-900 sm:text-base">{title}</h4>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {["Career growth", "Leadership", "New skills", "Personal growth"].map((area) => (
                  <span key={area} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[10px] font-semibold text-slate-600 sm:text-xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE MENTORSHIP ROADMAP --- */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-48 left-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200 sm:text-xs">
              Your next chapter, in motion
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:mt-6 sm:text-5xl">
              Meaningful growth, <span className="text-rose-300">one step at a time.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
              Big goals feel more manageable when you have someone experienced to think them through with. Explore a path from finding focus to building skills and making steady progress.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              Slide through the milestones to see how mentorship can support the journey you want to take.
            </p>
            <Link to="/signup?type=mentee" className="mt-8 inline-flex w-full sm:mt-10 sm:w-auto">
              <Button size="lg" className="h-12 w-full rounded-full bg-primary px-7 font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary/90 sm:w-auto">
                Find your starting point
                <ArrowRight className="ml-2" size={19} />
              </Button>
            </Link>
          </div>

          <div className="mx-auto w-full max-w-2xl rounded-[2rem] border border-white/15 bg-white p-5 text-slate-900 shadow-2xl shadow-black/30 sm:rounded-[2.5rem] sm:p-8 lg:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 sm:pb-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">A flexible path, built around you</p>
                <h3 className="mt-1.5 text-xl font-extrabold tracking-tight sm:text-2xl">Your mentorship roadmap</h3>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold tabular-nums text-slate-600">
                {String(activeMilestone + 1).padStart(2, "0")} <span className="text-slate-400">/ {String(mentorshipMilestones.length).padStart(2, "0")}</span>
              </span>
            </div>

            <div key={activeMilestoneData.label} aria-live="polite" className="my-6 flex min-h-[160px] items-start gap-4 rounded-2xl bg-gradient-to-br from-rose-50 via-white to-slate-50 p-5 animate-fade-in motion-reduce:animate-none sm:my-7 sm:min-h-[170px] sm:gap-5 sm:rounded-3xl sm:p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 sm:h-14 sm:w-14">
                <ActiveMilestoneIcon size={24} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">Milestone {String(activeMilestone + 1).padStart(2, "0")}</p>
                <h4 className="mt-1.5 text-lg font-extrabold leading-snug text-slate-900 sm:text-2xl">{activeMilestoneData.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{activeMilestoneData.description}</p>
              </div>
            </div>

            <label htmlFor="mentorship-roadmap-slider" className="mb-3 block text-xs font-semibold text-slate-600 sm:text-sm">
              Drag to explore each milestone
            </label>
            <input
              id="mentorship-roadmap-slider"
              type="range"
              min={0}
              max={mentorshipMilestones.length - 1}
              step={1}
              value={activeMilestone}
              onChange={(event) => setActiveMilestone(Number(event.currentTarget.value))}
              aria-valuetext={`${activeMilestoneData.label}, step ${activeMilestone + 1} of ${mentorshipMilestones.length}`}
              style={{ "--range-progress": `${(activeMilestone / (mentorshipMilestones.length - 1)) * 100}%` } as CSSProperties}
              className="mentorship-range w-full touch-pan-y"
            />

            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-4 sm:gap-3">
              {mentorshipMilestones.map((milestone, index) => (
                <button
                  key={milestone.label}
                  type="button"
                  aria-pressed={activeMilestone === index}
                  onClick={() => setActiveMilestone(index)}
                  className={`min-h-12 rounded-xl border px-3 py-2 text-left text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-14 sm:rounded-2xl sm:px-3.5 ${activeMilestone === index ? "border-primary bg-primary text-white shadow-md shadow-primary/15" : "border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary"}`}
                >
                  <span className="mr-1.5 text-[10px] opacity-70">0{index + 1}</span>
                  {milestone.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CHOOSE YOUR GROWTH PATH --- */}
      <section className="border-y border-slate-200/80 bg-slate-50 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-14">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
              Start with what matters to you
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              What would you like to move forward?
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
              You don’t need to have it all figured out. Bring the question or ambition on your mind, and start there.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {growthPathways.map(({ eyebrow, title, description, icon: Icon, tone, glow }) => (
              <Card key={title} className="group relative isolate overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:rounded-[2rem]">
                <div className={`pointer-events-none absolute -right-10 -top-10 -z-10 h-36 w-36 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-90 ${glow}`} />
                <CardContent className="flex h-full min-h-[260px] flex-col p-6 sm:min-h-[290px] sm:p-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border sm:h-14 sm:w-14 ${tone}`}>
                    <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:mt-7 sm:text-xs">{eyebrow}</p>
                  <h3 className="mt-2 text-xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-9 flex flex-col items-center gap-3 text-center sm:mt-12">
            <p className="text-sm font-medium text-slate-600 sm:text-base">Wherever you want to grow, a meaningful first step starts with a conversation.</p>
            <Link to="/signup?type=mentee" className="mt-1 w-full sm:w-auto">
              <Button size="lg" className="h-12 w-full rounded-full bg-primary px-8 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 sm:w-auto">
                Start as a mentee
                <ArrowRight className="ml-2" size={19} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOUNDER PROFILE SECTION --- */}
      <section className="py-28 bg-white border-t border-slate-200/80">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="md:col-span-5 relative flex justify-center">
              <div className="relative p-3 bg-slate-50 border border-slate-200 shadow-xl rounded-[2.8rem]">
                <img
                  src={mentor_2}
                  alt="Founder"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto aspect-[4/5] object-cover object-top rounded-[2.2rem]"
                />
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-primary p-5 sm:p-6 rounded-3xl shadow-xl border-[6px] border-white">
                  <Quote className="text-white fill-current" size={32} />
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 lg:pl-6">
              <div className="space-y-2">
                <p className="text-primary font-bold tracking-widest uppercase text-xs">Visionary & Founder</p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Meet Rafikiz Mentorship</h2>
              </div>
              
              <div className="relative pl-6 border-l-2 border-primary">
                <p className="text-2xl sm:text-3xl text-slate-800 leading-snug font-medium italic">
                  "Every great journey starts with a guide. We believe a single connection can unlock extraordinary potential."
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-normal">
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

      {/* --- CTA SECTION --- */}
      <section className="py-28 relative overflow-hidden bg-slate-900 text-white">
        <div className="container relative mx-auto px-6 text-center z-10">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to grow or share your expertise, Rafikiz Mentorship is here to connect you with the right people.
          </p>
          
          <Link to="/signup">
            <Button size="lg" variant="default" className="h-16 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 border border-primary/50 group">
              Get Started Today
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
