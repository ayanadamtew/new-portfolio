import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-neonPurple opacity-20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neonBlue opacity-20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-4 py-1 rounded-full border border-neonBlue/30 bg-neonBlue/10 text-neonBlue mb-4 text-sm font-semibold">
            🚀 Future Software Engineer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Ayana Damtew</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-400 mb-8 h-12">
            <Typewriter
              options={{
                strings: ["MERN Stack Developer", "Mobile App Developer", "UI/UX Enthusiast"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>

          <p className="text-gray-400 mb-8 max-w-lg text-lg">
            Transforming ideas into digital reality. A 4th-year Software Engineering student at Jimma University, passionate about building clean, futuristic, and user-friendly applications.
          </p>

          <div className="flex gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-neonBlue to-neonPurple text-white font-bold shadow-neon flex items-center gap-2"
            >
              View Work <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-3 rounded-full border border-gray-600 hover:border-neonPurple text-white font-bold transition-colors"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="mt-10 flex gap-6 text-gray-400">
            <a href="#" className="hover:text-neonBlue transition-colors"><Github size={28} /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={28} /></a>
            <a href="mailto:ayanadamtew@gmail.com" className="hover:text-neonPink transition-colors"><Mail size={28} /></a>
          </div>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden md:flex justify-center"
        >
          {/* Abstract Tech Visual (CSS Shapes) */}
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-neonBlue to-neonPurple rounded-3xl rotate-6 opacity-50 blur-xl animate-pulse" />
            <div className="absolute inset-0 bg-slate-900 rounded-3xl border border-white/10 z-10 flex items-center justify-center overflow-hidden">
               {/* Placeholder for your photo or code snippet image */}
               <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ayana Workspace" className="opacity-60 object-cover h-full w-full" />
               <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-neonBlue font-mono text-sm">const ayana = "Awesome";</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;