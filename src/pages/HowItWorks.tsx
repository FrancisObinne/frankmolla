// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { UserPlus, Search, MessageCircle, TrendingUp, CheckCircle } from "lucide-react";
// import { Link } from "react-router-dom";

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: UserPlus,
//       title: "Sign Up",
//       description: "Create your profile in minutes. Tell us about your goals, interests, and what you're looking for in a mentor or mentee.",
//       color: "bg-primary/10 text-primary"
//     },
//     {
//       icon: Search,
//       title: "Get Matched",
//       description: "Our intelligent matching system connects you with mentors or mentees who align with your goals, experience, and aspirations.",
//       color: "bg-secondary/10 text-secondary"
//     },
//     {
//       icon: MessageCircle,
//       title: "Connect & Meet",
//       description: "Start your mentorship journey with an introductory session. Set goals, establish expectations, and build rapport.",
//       color: "bg-accent/10 text-accent"
//     },
//     {
//       icon: TrendingUp,
//       title: "Grow Together",
//       description: "Engage in regular mentorship sessions. Track progress, overcome challenges, and celebrate achievements along the way.",
//       color: "bg-primary/10 text-primary"
//     }
//   ];

//   const benefits = {
//     mentees: [
//       "Gain insights from experienced professionals",
//       "Accelerate your career or personal growth",
//       "Build confidence and develop new skills",
//       "Expand your professional network",
//       "Receive personalized guidance and support"
//     ],
//     mentors: [
//       "Give back and make a meaningful impact",
//       "Develop leadership and coaching skills",
//       "Gain fresh perspectives and insights",
//       "Build lasting professional relationships",
//       "Contribute to the next generation's success"
//     ]
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="bg-hero-gradient py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
//               How Rafikiz Mentorship  Works
//             </h1>
//             <p className="text-xl text-primary-foreground/90">
//               Your journey to meaningful mentorship starts here. Four simple steps to transform your future.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Steps Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             {steps.map((step, index) => (
//               <div key={index} className="flex flex-col md:flex-row gap-6 mb-12 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <div className="flex-shrink-0">
//                   <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center`}>
//                     <step.icon size={28} />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-2">
//                     <span className="text-text-light font-semibold">Step {index + 1}</span>
//                     <h3 className="text-2xl font-bold text-text-heading">{step.title}</h3>
//                   </div>
//                   <p className="text-text-body text-lg">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20 bg-muted">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12">
//             Benefits for Everyone
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {/* Mentees Benefits */}
//             <Card className="border-border">
//               <CardContent className="pt-6">
//                 <h3 className="text-2xl font-bold text-primary mb-6">For Mentees</h3>
//                 <ul className="space-y-3">
//                   {benefits.mentees.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
//                       <span className="text-text-body">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Mentors Benefits */}
//             <Card className="border-border">
//               <CardContent className="pt-6">
//                 <h3 className="text-2xl font-bold text-secondary mb-6">For Mentors</h3>
//                 <ul className="space-y-3">
//                   {benefits.mentors.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
//                       <span className="text-text-body">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-text-body text-lg mb-8 max-w-2xl mx-auto">
//             Join thousands of professionals already benefiting from meaningful mentorship connections.
//           </p>
//           <Link to="/signup">
//             <Button size="lg" variant="default">
//               Start Your Journey Today
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default HowItWorks;

// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { UserPlus, Search, MessageCircle, TrendingUp, CheckCircle, Sparkles, ArrowRight, Camera } from "lucide-react";
// import { Link } from "react-router-dom";

// // Distinct gallery images for HowItWorks.tsx (avoiding Home.tsx & About.tsx assets)
// import gallery11 from "@/assets/gallery_11.jpg";
// import gallery12 from "@/assets/gallery_12.jpg";
// import gallery13 from "@/assets/gallery_13.jpg";
// import gallery14 from "@/assets/gallery_14.jpg";
// import gallery15 from "@/assets/gallery_15.jpg";

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: UserPlus,
//       title: "Sign Up",
//       description: "Create your profile in minutes. Tell us about your goals, interests, and what you're looking for in a mentor or mentee.",
//       badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
//       img: gallery11,
//       tag: "Step 1: Onboarding"
//     },
//     {
//       icon: Search,
//       title: "Get Matched",
//       description: "Our intelligent matching system connects you with mentors or mentees who align with your goals, experience, and aspirations.",
//       badgeColor: "bg-primary/10 text-primary border-primary/20",
//       img: gallery12,
//       tag: "Step 2: Matching"
//     },
//     {
//       icon: MessageCircle,
//       title: "Connect & Meet",
//       description: "Start your mentorship journey with an introductory session. Set goals, establish expectations, and build rapport.",
//       badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
//       img: gallery13,
//       tag: "Step 3: Engagement"
//     },
//     {
//       icon: TrendingUp,
//       title: "Grow Together",
//       description: "Engage in regular mentorship sessions. Track progress, overcome challenges, and celebrate achievements along the way.",
//       badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
//       img: gallery14,
//       tag: "Step 4: Milestones"
//     }
//   ];

//   const benefits = {
//     mentees: [
//       "Gain insights from experienced professionals",
//       "Accelerate your career or personal growth",
//       "Build confidence and develop new skills",
//       "Expand your professional network",
//       "Receive personalized guidance and support"
//     ],
//     mentors: [
//       "Give back and make a meaningful impact",
//       "Develop leadership and coaching skills",
//       "Gain fresh perspectives and insights",
//       "Build lasting professional relationships",
//       "Contribute to the next generation's success"
//     ]
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
//       <Navigation />
      
//       {/* --- HERO SECTION --- */}
//       <section className="relative pt-28 pb-16 md:py-24 bg-gradient-to-b from-white via-slate-50/60 to-[#FAFAFA] overflow-hidden border-b border-slate-200/80">
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full pointer-events-none -z-0" />
        
//         <div className="container relative mx-auto px-6 z-10">
//           <div className="max-w-3xl mx-auto text-center space-y-6">
//             <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase shadow-sm">
//               <Sparkles size={15} className="text-primary animate-pulse" />
//               <span>Structured Guidance Pathway</span>
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
//               How Rafikiz Mentorship Works
//             </h1>
            
//             <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
//               Your journey to meaningful mentorship starts here. Four simple steps to transform your future.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- STEPS SECTION (With Side-by-Side Optimized Images) --- */}
//       <section className="py-24 bg-white border-b border-slate-200/80">
//         <div className="container mx-auto px-6">
//           <div className="max-w-5xl mx-auto space-y-16">
//             {steps.map((step, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <div 
//                   key={index} 
//                   className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${isEven ? "" : "lg:flex-row-reverse"}`}
//                 >
//                   {/* Step Text Info */}
//                   <div className="flex-1 space-y-5 text-center lg:text-left">
//                     <div className="inline-flex items-center gap-3">
//                       <div className={`w-12 h-12 rounded-2xl ${step.badgeColor} border flex items-center justify-center shadow-sm shrink-0`}>
//                         <step.icon size={24} />
//                       </div>
//                       <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
//                         {step.tag}
//                       </span>
//                     </div>

//                     <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
//                       {step.title}
//                     </h3>
                    
//                     <p className="text-slate-600 text-lg leading-relaxed font-normal">
//                       {step.description}
//                     </p>
//                   </div>

//                   {/* Step Image Box (Optimized with object-contain & rounded borders) */}
//                   <div className="w-full lg:w-[480px] shrink-0">
//                     <div className="relative group bg-slate-50 border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//                       <div className="relative w-full h-[260px] sm:h-[300px] bg-white rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
//                         <img
//                           src={step.img}
//                           alt={step.title}
//                           loading="lazy"
//                           decoding="async"
//                           className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURED EXPERIENCE GALLERY SECTION --- */}
//       <section className="py-24 bg-slate-100/70 border-b border-slate-200/80 relative overflow-hidden">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
//             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
//               <Camera size={14} />
//               <span>Real Engagements</span>
//             </div>
//             <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
//               Mentorship in Action
//             </h3>
//             <p className="text-slate-600 text-base leading-relaxed">
//               Experience the atmosphere of structured learning, active networking, and authentic connection.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-5 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
//               <div className="relative w-full h-[320px] sm:h-[420px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-3 border border-slate-100">
//                 <img
//                   src={gallery15}
//                   alt="Mentorship in action"
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//               <div className="pt-5 px-3 pb-2 text-center">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
//                   Continuous Support
//                 </span>
//                 <h4 className="text-2xl font-bold text-slate-900 mt-3">
//                   Empowering Long-Term Success
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- BENEFITS SECTION --- */}
//       <section className="py-24 bg-white border-b border-slate-200/80">
//         <div className="container mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
//             <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
//               Value Proposition
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Benefits for Everyone
//             </h2>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {/* Mentees Benefits */}
//             <Card className="border border-slate-200/80 bg-slate-50/60 hover:bg-white transition-all duration-300 rounded-[2.2rem] shadow-sm hover:shadow-xl">
//               <CardContent className="p-8 sm:p-10">
//                 <h3 className="text-2xl font-extrabold text-primary mb-6 tracking-tight">For Mentees</h3>
//                 <ul className="space-y-4">
//                   {benefits.mentees.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
//                       <span className="text-slate-700 text-base font-medium">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Mentors Benefits */}
//             <Card className="border border-slate-200/80 bg-slate-50/60 hover:bg-white transition-all duration-300 rounded-[2.2rem] shadow-sm hover:shadow-xl">
//               <CardContent className="p-8 sm:p-10">
//                 <h3 className="text-2xl font-extrabold text-indigo-600 mb-6 tracking-tight">For Mentors</h3>
//                 <ul className="space-y-4">
//                   {benefits.mentors.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckCircle className="text-indigo-600 shrink-0 mt-1" size={20} />
//                       <span className="text-slate-700 text-base font-medium">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* --- CTA SECTION --- */}
//       <section className="py-28 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
//         <div className="container relative mx-auto px-6 text-center z-10">
//           <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
//             Ready to Get Started?
//           </h2>
//           <p className="text-slate-300 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
//             Join thousands of professionals already benefiting from meaningful mentorship connections.
//           </p>
//           <Link to="/signup">
//             <Button size="lg" variant="default" className="h-16 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 border border-primary/50 group">
//               Start Your Journey Today
//               <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default HowItWorks;

// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { UserPlus, Search, MessageCircle, TrendingUp, CheckCircle, Sparkles, ArrowRight, Camera } from "lucide-react";
// import { Link } from "react-router-dom";

// // Hero background image & dedicated step assets for HowItWorks.tsx (avoiding Home & About assets)
// import heroBg from "@/assets/gallery_1.jpg";
// import gallery11 from "@/assets/gallery_11.jpg";
// import gallery12 from "@/assets/gallery_12.jpg";
// import gallery13 from "@/assets/gallery_13.jpg";
// import gallery14 from "@/assets/gallery_14.jpg";

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: UserPlus,
//       title: "Sign Up",
//       description: "Create your profile in minutes. Tell us about your goals, interests, and what you're looking for in a mentor or mentee.",
//       color: "bg-blue-50 text-blue-600 border-blue-200",
//       image: gallery11,
//       badge: "Step 1"
//     },
//     {
//       icon: Search,
//       title: "Get Matched",
//       description: "Our intelligent matching system connects you with mentors or mentees who align with your goals, experience, and aspirations.",
//       color: "bg-primary/10 text-primary border-primary/20",
//       image: gallery12,
//       badge: "Step 2"
//     },
//     {
//       icon: MessageCircle,
//       title: "Connect & Meet",
//       description: "Start your mentorship journey with an introductory session. Set goals, establish expectations, and build rapport.",
//       color: "bg-purple-50 text-purple-600 border-purple-200",
//       image: gallery13,
//       badge: "Step 3"
//     },
//     {
//       icon: TrendingUp,
//       title: "Grow Together",
//       description: "Engage in regular mentorship sessions. Track progress, overcome challenges, and celebrate achievements along the way.",
//       color: "bg-emerald-50 text-emerald-600 border-emerald-200",
//       image: gallery14,
//       badge: "Step 4"
//     }
//   ];

//   const benefits = {
//     mentees: [
//       "Gain insights from experienced professionals",
//       "Accelerate your career or personal growth",
//       "Build confidence and develop new skills",
//       "Expand your professional network",
//       "Receive personalized guidance and support"
//     ],
//     mentors: [
//       "Give back and make a meaningful impact",
//       "Develop leadership and coaching skills",
//       "Gain fresh perspectives and insights",
//       "Build lasting professional relationships",
//       "Contribute to the next generation's success"
//     ]
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
//       <Navigation />
      
//       {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
//       <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center pt-28 pb-16 md:py-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src={heroBg}
//             alt="Mentorship process interaction"
//             loading="eager"
//             decoding="async"
//             className="w-full h-full object-cover object-top filter brightness-[0.35] contrast-[1.05]"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40" />
//         </div>

//         <div className="container relative mx-auto px-6 z-10">
//           <div className="max-w-3xl mx-auto text-center space-y-6">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase shadow-md">
//               <Sparkles size={14} className="animate-pulse text-primary" />
//               <span>Structured Pathway to Success</span>
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
//               How Rafikiz Mentorship Works
//             </h1>
            
//             <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
//               Your journey to meaningful mentorship starts here. Four simple steps to transform your future.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- VISUAL STEPS SECTION WITH OPTIMIZED CARDS & IMAGES --- */}
//       <section className="py-24 bg-white border-b border-slate-200/80">
//         <div className="container mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
//             <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
//               Step-by-Step Blueprint
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Your Roadmap to Growth
//             </h2>
//           </div>

//           <div className="max-w-5xl mx-auto space-y-12">
//             {steps.map((step, index) => (
//               <div 
//                 key={index} 
//                 className="group relative bg-slate-50/70 border border-slate-200/90 rounded-[2.4rem] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 grid md:grid-cols-12 gap-8 items-center"
//               >
//                 {/* Step Text Info */}
//                 <div className="md:col-span-7 space-y-4">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-12 h-12 rounded-2xl ${step.color} border flex items-center justify-center shadow-sm`}>
//                       <step.icon size={24} />
//                     </div>
//                     <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                       {step.badge}
//                     </span>
//                   </div>

//                   <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
//                     {step.title}
//                   </h3>

//                   <p className="text-slate-600 text-lg leading-relaxed font-normal">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* Step Image Box (Optimized with object-contain & Rounded Edges) */}
//                 <div className="md:col-span-5 relative w-full h-[220px] sm:h-[260px] bg-white rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-200/80 shadow-inner">
//                   <img
//                     src={step.image}
//                     alt={step.title}
//                     loading="lazy"
//                     decoding="async"
//                     className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.03]"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- BENEFITS SECTION --- */}
//       <section className="py-24 bg-slate-100/70 relative overflow-hidden">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
//             <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
//               Mutual Value
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Benefits for Everyone
//             </h2>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {/* Mentees Benefits */}
//             <Card className="border border-slate-200/90 bg-white rounded-[2.2rem] shadow-sm hover:shadow-md transition-shadow">
//               <CardContent className="p-8 sm:p-10">
//                 <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-6">
//                   <Camera size={14} />
//                   <span>For Mentees</span>
//                 </div>
//                 <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Accelerate Your Potential</h3>
//                 <ul className="space-y-4">
//                   {benefits.mentees.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
//                       <span className="text-slate-700 text-base font-medium">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Mentors Benefits */}
//             <Card className="border border-slate-200/90 bg-white rounded-[2.2rem] shadow-sm hover:shadow-md transition-shadow">
//               <CardContent className="p-8 sm:p-10">
//                 <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-6">
//                   <Camera size={14} />
//                   <span>For Mentors</span>
//                 </div>
//                 <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Expand Your Legacy</h3>
//                 <ul className="space-y-4">
//                   {benefits.mentors.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
//                       <span className="text-slate-700 text-base font-medium">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* --- CTA SECTION --- */}
//       <section className="py-28 relative overflow-hidden bg-slate-900 text-white">
//         <div className="container relative mx-auto px-6 text-center z-10">
//           <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
//             Ready to Get Started?
//           </h2>
//           <p className="text-slate-300 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
//             Join thousands of professionals already benefiting from meaningful mentorship connections.
//           </p>
//           <Link to="/signup">
//             <Button size="lg" variant="default" className="h-16 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 border border-primary/50 group">
//               Start Your Journey Today
//               <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default HowItWorks;

// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { UserPlus, Search, MessageCircle, TrendingUp, CheckCircle, Sparkles, ArrowRight, Camera } from "lucide-react";
// import { Link } from "react-router-dom";

// // Hero background image & dedicated step assets for HowItWorks.tsx
// import heroBg from "@/assets/gallery_1.jpg";
// import gallery11 from "@/assets/gallery_11.jpg";
// import gallery12 from "@/assets/gallery_12.jpg";
// import gallery13 from "@/assets/gallery_13.jpg";
// import gallery14 from "@/assets/gallery_14.jpg";

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: UserPlus,
//       title: "Sign Up",
//       description: "Create your profile in minutes. Tell us about your goals, interests, and what you're looking for in a mentor.",
//       color: "bg-blue-50 text-blue-600 border-blue-200",
//       image: gallery11,
//       badge: "Step 1"
//     },
//     {
//       icon: Search,
//       title: "Get Matched",
//       description: "Our intelligent matching system connects you with a mentor who aligns with your goals, experience, and aspirations.",
//       color: "bg-primary/10 text-primary border-primary/20",
//       image: gallery12,
//       badge: "Step 2"
//     },
//     {
//       icon: MessageCircle,
//       title: "Connect & Meet",
//       description: "Start your mentorship journey with an introductory session. Set goals, establish expectations, and build rapport.",
//       color: "bg-purple-50 text-purple-600 border-purple-200",
//       image: gallery13,
//       badge: "Step 3"
//     },
//     {
//       icon: TrendingUp,
//       title: "Grow Together",
//       description: "Engage in regular mentorship sessions. Track progress, overcome challenges, and celebrate achievements along the way.",
//       color: "bg-emerald-50 text-emerald-600 border-emerald-200",
//       image: gallery14,
//       badge: "Step 4"
//     }
//   ];

//   const benefits = {
//     mentees: [
//       "Gain insights from experienced professionals",
//       "Accelerate your career or personal growth",
//       "Build confidence and develop new skills",
//       "Expand your professional network",
//       "Receive personalized guidance and support"
//     ],
//     mentors: [
//       "Give back and make a meaningful impact",
//       "Develop leadership and coaching skills",
//       "Gain fresh perspectives and insights",
//       "Build lasting professional relationships",
//       "Contribute to the next generation's success"
//     ]
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
//       <Navigation />
      
//       {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
//       <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 md:py-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src={heroBg}
//             alt="Mentorship process interaction"
//             loading="eager"
//             decoding="async"
//             className="w-full h-full object-cover object-top filter brightness-[0.35] contrast-[1.05]"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40" />
//         </div>

//         <div className="container relative mx-auto px-4 sm:px-6 z-10">
//           <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
//             <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-md">
//               <Sparkles size={14} className="animate-pulse text-primary shrink-0" />
//               <span>Structured Pathway to Success</span>
//             </div>
            
//             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
//               How Rafikiz Mentorship Works
//             </h1>
            
//             <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
//               Your journey to meaningful mentorship starts here. Four simple steps to transform your future.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- VISUAL STEPS SECTION --- */}
//       <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
//             <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-primary/20">
//               Step-by-Step Blueprint
//             </span>
//             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Your Roadmap to Growth
//             </h2>
//           </div>

//           <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
//             {steps.map((step, index) => (
//               <div 
//                 key={index} 
//                 className="group relative bg-slate-50/70 border border-slate-200/90 rounded-[1.8rem] sm:rounded-[2.4rem] p-5 sm:p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 grid md:grid-cols-12 gap-6 sm:gap-8 items-center"
//               >
//                 {/* Step Text Info */}
//                 <div className="md:col-span-7 space-y-3 sm:space-y-4">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${step.color} border flex items-center justify-center shadow-sm shrink-0`}>
//                       <step.icon size={20} className="sm:w-6 sm:h-6" />
//                     </div>
//                     <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 sm:px-3 py-1 rounded-full border border-primary/20">
//                       {step.badge}
//                     </span>
//                   </div>

//                   <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
//                     {step.title}
//                   </h3>

//                   <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* Step Image Box */}
//                 <div className="md:col-span-5 relative w-full h-[200px] sm:h-[260px] bg-white rounded-[1.4rem] sm:rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-200/80 shadow-inner">
//                   <img
//                     src={step.image}
//                     alt={step.title}
//                     loading="lazy"
//                     decoding="async"
//                     className="w-full h-full object-contain rounded-[1rem] sm:rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.03]"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- BENEFITS SECTION --- */}
//       <section className="py-16 sm:py-24 bg-slate-100/70 relative overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6 relative z-10">
//           <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
//             <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-primary/20">
//               Mutual Value
//             </span>
//             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Benefits for Everyone
//             </h2>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
//             {/* Mentees Benefits */}
//             <Card className="border border-slate-200/90 bg-white rounded-[1.8rem] sm:rounded-[2.2rem] shadow-sm hover:shadow-md transition-shadow">
//               <CardContent className="p-6 sm:p-10">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
//                   <Camera size={14} />
//                   <span>For Mentees</span>
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">Accelerate Your Potential</h3>
//                 <ul className="space-y-3 sm:space-y-4">
//                   {benefits.mentees.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
//                       <span className="text-slate-700 text-sm sm:text-base font-medium">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Mentors Benefits */}
//             {/* <Card className="border border-slate-200/90 bg-white rounded-[1.8rem] sm:rounded-[2.2rem] shadow-sm hover:shadow-md transition-shadow">
//               <CardContent className="p-6 sm:p-10">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
//                   <Camera size={14} />
//                   <span>For Mentors</span>
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">Expand Your Legacy</h3>
//                 <ul className="space-y-3 sm:space-y-4">
//                   {benefits.mentors.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
//                       <span className="text-slate-700 text-sm sm:text-base font-medium">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card> */}
//           </div>
//         </div>
//       </section>

//       {/* --- CTA SECTION (Mobile Responsive Optimized Button) --- */}
//       <section className="py-20 sm:py-28 relative overflow-hidden bg-slate-900 text-white">
//         <div className="container relative mx-auto px-4 sm:px-6 text-center z-10">
//           <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
//             Ready to Get Started?
//           </h2>
//           <p className="text-slate-300 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
//             Join thousands of professionals already benefiting from meaningful mentorship connections.
//           </p>
//           <div className="flex justify-center w-full px-2">
//             <Link to="/signup" className="w-full sm:w-auto">
//               <Button size="lg" variant="default" className="h-14 sm:h-16 w-full sm:w-auto px-6 sm:px-12 text-base sm:text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 border border-primary/50 group flex items-center justify-center">
//                 <span>Start Your Journey Today</span>
//                 <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" size={20} />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default HowItWorks;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, MessageCircle, TrendingUp, CheckCircle, Sparkles, ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";

// Hero background image & dedicated step assets for HowItWorks.tsx
import heroBg from "@/assets/gallery_1.jpg";
import gallery11 from "@/assets/gallery_11.jpg";
import gallery12 from "@/assets/gallery_12.jpg";
import gallery13 from "@/assets/gallery_13.jpg";
import gallery14 from "@/assets/gallery_14.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your profile in minutes. Tell us about your goals, interests, and what you're looking for in a mentor or mentee.",
      color: "bg-blue-50 text-blue-600 border-blue-200",
      image: gallery11,
      badge: "Step 1"
    },
    {
      icon: Search,
      title: "Get Matched",
      description: "Our intelligent matching system connects you with mentors or mentees who align with your goals, experience, and aspirations.",
      color: "bg-primary/10 text-primary border-primary/20",
      image: gallery12,
      badge: "Step 2"
    },
    {
      icon: MessageCircle,
      title: "Connect & Meet",
      description: "Start your mentorship journey with an introductory session. Set goals, establish expectations, and build rapport.",
      color: "bg-purple-50 text-purple-600 border-purple-200",
      image: gallery13,
      badge: "Step 3"
    },
    {
      icon: TrendingUp,
      title: "Grow Together",
      description: "Engage in regular mentorship sessions. Track progress, overcome challenges, and celebrate achievements along the way.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      image: gallery14,
      badge: "Step 4"
    }
  ];

  const benefits = {
    mentees: [
      "Gain insights from experienced professionals",
      "Accelerate your career or personal growth",
      "Build confidence and develop new skills",
      "Expand your professional network",
      "Receive personalized guidance and support"
    ],
    mentors: [
      "Give back and make a meaningful impact",
      "Develop leadership and coaching skills",
      "Gain fresh perspectives and insights",
      "Build lasting professional relationships",
      "Contribute to the next generation's success"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />
      
      {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 md:py-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroBg}
            alt="Mentorship process interaction"
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
              <span>Structured Pathway to Success</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              How Rafikiz Mentorship Works
            </h1>
            
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              Your journey to meaningful mentorship starts here. Four simple steps to transform your future.
            </p>
          </div>
        </div>
      </section>

      {/* --- VISUAL STEPS SECTION --- */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-primary/20">
              Step-by-Step Blueprint
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Your Roadmap to Growth
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-50/70 border border-slate-200/90 rounded-[1.8rem] sm:rounded-[2.4rem] p-5 sm:p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 grid md:grid-cols-12 gap-6 sm:gap-8 items-center"
              >
                {/* Step Text Info */}
                <div className="md:col-span-7 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${step.color} border flex items-center justify-center shadow-sm shrink-0`}>
                      <step.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 sm:px-3 py-1 rounded-full border border-primary/20">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Step Image Box */}
                <div className="md:col-span-5 relative w-full h-[200px] sm:h-[260px] bg-white rounded-[1.4rem] sm:rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-200/80 shadow-inner">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain rounded-[1rem] sm:rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-16 sm:py-24 bg-slate-100/70 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-primary/20">
              Mutual Value
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Benefits for Everyone
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Mentees Benefits */}
            <Card className="border border-slate-200/90 bg-white rounded-[1.8rem] sm:rounded-[2.2rem] shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 sm:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
                  <Camera size={14} />
                  <span>For Mentees</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">Accelerate Your Potential</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {benefits.mentees.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-700 text-sm sm:text-base font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Mentors Benefits */}
            <Card className="border border-slate-200/90 bg-white rounded-[1.8rem] sm:rounded-[2.2rem] shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 sm:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
                  <Camera size={14} />
                  <span>For Mentors</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">Expand Your Legacy</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {benefits.mentors.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-700 text-sm sm:text-base font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-slate-900 text-white">
        <div className="container relative mx-auto px-4 sm:px-6 text-center z-10">
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals already benefiting from meaningful mentorship connections.
          </p>
          <div className="flex justify-center w-full px-2">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button size="lg" variant="default" className="h-14 sm:h-16 w-full sm:w-auto px-6 sm:px-12 text-base sm:text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 border border-primary/50 group flex items-center justify-center">
                <span>Start Your Journey Today</span>
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

export default HowItWorks;
