import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import brandLogo from "../assets/brand-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={brandLogo}
              alt="FrankMolla Logo"
              // 3. Add Tailwind classes for sizing (e.g., h-8 or w-32)
              className="h-8 w-auto mb-2" // h-8 matches the size used in the navigation
            />
            <p className="text-text-body text-sm">
              Empowering growth through meaningful mentorship connections.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-heading mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-text-body hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-text-body hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-text-body hover:text-primary transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-text-body hover:text-primary transition-colors text-sm"
                >
                  Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-text-heading mb-4">Programs</h4>
            <ul className="space-y-2">
              <li className="text-text-body text-sm">Career Development</li>
              <li className="text-text-body text-sm">Entrepreneurship</li>
              <li className="text-text-body text-sm">Academic Mentorship</li>
              <li className="text-text-body text-sm">Creative Skills</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-heading mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-text-body hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link to="/signup" className="text-text-body hover:text-primary transition-colors text-sm">
                  Join as Mentor
                </Link>
              </li> */}
              <li>
                <Link
                  to="/signup"
                  className="text-text-body hover:text-primary transition-colors text-sm"
                >
                  Find a Mentor
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-text-light text-sm">
            © {new Date().getFullYear()} FrankMolla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
