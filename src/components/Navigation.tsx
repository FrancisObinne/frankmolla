// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import brandIcon from "@/assets/brand-icon.png";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { to: "/about", label: "About Us" },
//     { to: "/how-it-works", label: "How It Works" },
//     { to: "/programs", label: "Programs" },
//     { to: "/testimonials", label: "Success Stories" },
//     { to: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <img
//               src={brandIcon}
//               alt="FrankMolla Logo"
//               // 3. Add Tailwind classes for sizing (e.g., h-8 or w-32)
//               className="h-8 w-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="text-text-body hover:text-primary transition-colors font-medium"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link to="/signup">
//               <Button variant="default">Get Started</Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-foreground"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 animate-fade-in">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 onClick={() => setIsOpen(false)}
//                 className="block py-2 text-text-body hover:text-primary transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link to="/signup" onClick={() => setIsOpen(false)}>
//               <Button variant="default" className="w-full mt-4">
//                 Get Started
//               </Button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import brandIcon from "@/assets/brand-icon.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/about", label: "About Us" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/programs", label: "Programs" },
    { to: "/testimonials", label: "Success Stories" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* --- FIXED NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 shrink-0">
              <img
                src={brandIcon}
                alt="FrankMolla Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-slate-700 hover:text-primary transition-colors font-semibold text-sm tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/signup">
                <Button className="h-11 px-6 text-sm font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 border border-primary/30 transition-all">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-slate-800 p-2 rounded-xl focus:outline-none bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isOpen && (
            <div className="md:hidden py-6 border-t border-slate-100 bg-white rounded-b-3xl shadow-xl animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-3 px-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-4 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors font-semibold text-base"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-12 text-base font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
