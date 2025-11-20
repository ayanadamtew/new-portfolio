import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neonPurple/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Let's <span className="text-neonPink">Connect</span>
        </motion.h2>

        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-slate-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-slate-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                rows="5" 
                placeholder="What's on your mind?" 
                className="w-full bg-slate-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none transition-all"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-neonBlue to-neonPurple py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-neon hover:shadow-none transition-all"
            >
              Send Message <Send size={20} />
            </motion.button>
          </form>
        </div>

        <div className="mt-12 text-center">
            <p className="text-gray-500">
                Jimma, Ethiopia • <a href="mailto:ayanadamtew@gmail.com" className="text-neonBlue hover:underline">ayanadamtew@gmail.com</a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;