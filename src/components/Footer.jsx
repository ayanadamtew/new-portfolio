import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-10 pb-6 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        
        {/* Social Icons */}
        <div className="flex gap-8 mb-8">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-white hover:scale-110 transition-all"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-neonBlue hover:scale-110 transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:ayanadamtew@gmail.com" 
            className="text-gray-400 hover:text-neonPink hover:scale-110 transition-all"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Branding */}
        <p className="text-gray-500 text-sm text-center">
          Designed & Built by <span className="text-neonPurple font-semibold">Ayana Damtew</span>
        </p>
        <p className="text-gray-600 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Scroll to Top Button */}
        <Link 
          to="hero" 
          smooth={true} 
          duration={800} 
          className="absolute right-6 bottom-6 p-3 bg-slate-800 rounded-full text-white hover:bg-neonBlue hover:shadow-neon transition-all cursor-pointer hidden md:block"
        >
          <ChevronUp size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;