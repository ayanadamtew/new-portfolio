import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { fadeInUp } from "../utils/animations";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative h-[350px] w-full overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-neonPurple transition-colors duration-300 shadow-lg hover:shadow-neon"
    >
      {/* Image Background */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
      />

      {/* Gradient Overlay (Always visible slightly, fully visible on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        
        <div className="mb-2 flex items-center gap-2">
          <Folder className="text-neonBlue w-5 h-5" />
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>

        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-3">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-md bg-neonPurple/10 text-neonPurple border border-neonPurple/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          <a 
            href="#" 
            className="flex items-center gap-1 text-sm font-medium text-white hover:text-neonBlue transition-colors"
            title="View Code"
          >
            <Github size={18} /> Code
          </a>
          <a 
            href="#" 
            className="flex items-center gap-1 text-sm font-medium text-white hover:text-neonPink transition-colors"
            title="Live Demo"
          >
            <ExternalLink size={18} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;