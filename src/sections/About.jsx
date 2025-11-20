import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
            <div>
                <h2 className="text-4xl font-bold mb-6">About <span className="text-neonPink">Me</span></h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    I am a <span className="text-white font-semibold">Fourth-year Software Engineering student</span> at Jimma Institute of Technology, Ethiopia.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    My journey began with a curiosity for how things work on the web. Today, I build full-stack applications and mobile solutions. When I'm not coding, you can find me playing football, enjoying video games, or exploring nature.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-lg text-center">
                        <h3 className="text-3xl font-bold text-neonBlue">10+</h3>
                        <p className="text-sm text-gray-400">Projects Completed</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg text-center">
                        <h3 className="text-3xl font-bold text-neonPurple">4th</h3>
                        <p className="text-sm text-gray-400">Year Student</p>
                    </div>
                </div>
            </div>
            
            <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Education Timeline</h3>
                {/* Timeline Item 1 */}
                <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-neonPink shadow-[0_0_10px_#ec4899]"></div>
                        <div className="w-0.5 h-full bg-gray-700 group-hover:bg-neonPink/50 transition-colors"></div>
                    </div>
                    <div className="pb-8">
                        <h4 className="text-xl font-semibold">Jimma University</h4>
                        <p className="text-sm text-neonBlue">2021 - Present</p>
                        <p className="text-gray-400 mt-2">B.Sc. in Software Engineering.</p>
                    </div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-neonPurple shadow-[0_0_10px_#a855f7]"></div>
                        <div className="w-0.5 h-full bg-gray-700"></div>
                    </div>
                    <div className="pb-8">
                        <h4 className="text-xl font-semibold">Web Development Journey</h4>
                        <p className="text-sm text-neonBlue">2022</p>
                        <p className="text-gray-400 mt-2">Started mastering the MERN Stack and Data Structures.</p>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;