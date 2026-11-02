

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

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Sparkles, Quote, CheckCircle2, Camera, ShieldCheck, Compass, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-mentorship-2.jpg";
import mentor_2 from "@/assets/mentor_2.jpg";
import frankImage from "@/assets/frank_molla_mid_section.jpg";

// Newly uploaded gallery images for Home (gallery_1 to gallery_6)
import gallery1 from "@/assets/gallery_1.jpg";
import gallery2 from "@/assets/gallery_2.jpg";
import gallery3 from "@/assets/gallery_3.jpg";
import gallery4 from "@/assets/gallery_4.jpg";
import gallery5 from "@/assets/gallery_5.jpg";
import gallery6 from "@/assets/gallery_6.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION: Modern Light Split Layout --- */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-[#FAFAFA]">
        {/* Soft Ambient Light Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none -z-0" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-blue-400/10 blur-[130px] rounded-full pointer-events-none -z-0" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-400/10 blur-[140px] rounded-full pointer-events-none -z-0" />

        {/* Subtle Light Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-0" />

        <div className="container relative mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase shadow-sm animate-fade-in">
              <Sparkles size={15} className="text-primary animate-pulse" />
              <span>Elevate Your Potential</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              A Mentorship Sanctuary for the <span className="text-primary italic">Quietly Bold</span>
            </h1>
            
            {/* Body */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              Connect with world-class mentors who transform ambition into excellence through structured, meaningful guidance.
            </p>

            {/* CTA Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/signup?type=mentee">
                <Button size="lg" className="h-16 px-10 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-full border border-primary/20 group">
                  Connect to Rafiki
                  <ArrowRight className="ml-3 group-hover:translate-x-1.5 transition-transform duration-300" size={22} />
                </Button>
              </Link>
            </div>

            {/* Quick Micro-Trust Badges */}
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

          {/* Hero Image Holder */}
          <div className="lg:col-span-5 relative group px-2 sm:px-0">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 via-blue-400/20 to-indigo-300/20 rounded-[2.8rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img
                src={heroImage}
                alt="Mentorship"
                className="w-full h-[420px] sm:h-[520px] lg:h-[580px] object-cover object-top filter brightness-[0.98] contrast-[1.02] rounded-[2rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Verified Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:block group-hover:translate-y-[-4px] transition-transform duration-300">
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

      {/* --- WHY CHOOSE SECTION: Modern Light Bento Grid --- */}
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
                className="group border border-slate-200/80 bg-slate-50/60 hover:bg-white transition-all duration-500 rounded-[2.2rem] shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1"
              >
                <CardContent className="p-10 flex flex-col h-full justify-between">
                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${feature.badgeColor} border flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
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

      {/* --- FEATURED WIDE IMAGE SECTION: Panoramic Light Frame --- */}
      <section className="py-24 bg-[#FAFAFA] relative">
        <div className="container mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3rem] shadow-xl border-4 border-white bg-white">
            <img
              src={frankImage}
              alt="Community interaction"
              className="w-full h-[480px] sm:h-[550px] object-cover object-top filter brightness-[0.95] rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-10 left-8 sm:left-12 right-8 sm:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/90 px-3.5 py-1.5 rounded-full border border-white/40 shadow-sm backdrop-blur-md">
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

      {/* --- GALLERY SECTION (Custom Rounded Image Edges) --- */}
      <section className="py-28 bg-slate-100/70 border-t border-slate-200/80 relative overflow-hidden">
        {/* Light Glow background effects */}
        <div className="absolute top-1/3 left-1/5 w-[550px] h-[550px] bg-primary/5 blur-[170px] rounded-full pointer-events-none" />

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

          {/* Clean 3-Column Uniform Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: gallery1, title: "Transforming Ambition into Action", tag: "Live Workshop" },
              { img: gallery2, title: "Meaningful Dialogues & Insight", tag: "Engagement" },
              { img: gallery3, title: "One-on-One Dedicated Guidance", tag: "Mentorship" },
              { img: gallery4, title: "Focused Breakthroughs & Clarity", tag: "Milestones" },
              { img: gallery5, title: "Community & Shared Growth", tag: "Community" },
              { img: gallery6, title: "Building Legacies That Last", tag: "Legacy" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white border border-slate-200/90 rounded-[2.4rem] p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative w-full h-[280px] bg-slate-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-2 border border-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Caption / Details */}
                <div className="pt-5 px-3 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {item.tag}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOUNDER PROFILE SECTION: Editorial Light Spotlight --- */}
      <section className="py-28 bg-white border-t border-slate-200/80">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Founder Image */}
            <div className="md:col-span-5 relative flex justify-center">
              <div className="relative p-3 bg-slate-50 border border-slate-200 shadow-xl rounded-[2.8rem]">
                <img
                  src={mentor_2}
                  alt="Founder"
                  className="w-full h-auto aspect-[4/5] object-cover object-top rounded-[2.2rem]"
                />
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-primary p-5 sm:p-6 rounded-3xl shadow-xl border-[6px] border-white">
                  <Quote className="text-white fill-current" size={32} />
                </div>
              </div>
            </div>

            {/* Profile Content */}
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

      {/* --- CTA SECTION: Clean Soft Light Gradient Finish --- */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />

        <div className="container relative mx-auto px-6 text-center z-10">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to grow or share your expertise, Rafikiz Mentorship is here to connect you with the right people.
          </p>
          
          <Link to="/signup">
            <Button size="lg" variant="default" className="h-16 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 border border-primary/50 group">
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
