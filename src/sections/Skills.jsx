import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Smartphone, Terminal } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const skillsData = [
  { name: "React & Redux", icon: <Code2 />, color: "text-blue-400" },
  { name: "Node.js & Express", icon: <Server />, color: "text-green-400" },
  { name: "MongoDB", icon: <Database />, color: "text-green-600" },
  { name: "Tailwind CSS", icon: <Layout />, color: "text-cyan-400" },
  { name: "Mobile App Dev", icon: <Smartphone />, color: "text-purple-400" },
  { name: "Data Structures", icon: <Terminal />, color: "text-yellow-400" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Technical <span className="text-neonPurple">Arsenal</span>
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-4 text-center group cursor-pointer hover:border-neonBlue/50 transition-colors"
            >
              <div className={`text-4xl ${skill.color} drop-shadow-lg`}>
                {skill.icon}
              </div>
              <p className="font-semibold text-gray-300 group-hover:text-white">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Text */}
        <div className="mt-16 text-center">
            <p className="text-gray-400">
                Also proficient in: <span className="text-white">Java, Python, HTML5, CSS3, Git/GitHub, REST APIs</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;