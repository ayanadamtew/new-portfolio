import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import ProjectCard from "../components/ProjectCard";

// Project Data
const projectsData = [
  {
    title: "Jimma Coffee Express",
    desc: "A premium e-commerce platform connecting Jimma coffee farmers directly to the global market. Features real-time stock, secure payments, and shipping tracking.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AyuMovie",
    desc: "A cinematic discovery experience. Browse thousands of movies, watch trailers, and save favorites using the TMDB API with a custom dark-mode UI.",
    tags: ["React", "TMDB API", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Picshare",
    desc: "A modern social media application for photographers. Share high-res images, follow creators, and engage with a community of visual artists.",
    tags: ["MERN Stack", "Cloudinary", "JWT Auth"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "OBCS",
    desc: "Online Birth Certificate System designed to digitize civil registration. Reduces paperwork and streamlines the application process for citizens.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Foodator",
    desc: "Smart food delivery app. Features GPS tracking for drivers, restaurant menus, and a seamless ordering experience.",
    tags: ["Flutter", "Firebase", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ShoeGebeya",
    desc: "An e-commerce hub for footwear. Includes advanced filtering, cart management, and user reviews.",
    tags: ["React", "Redux", "Firebase"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-neonBlue">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that demonstrate my passion for solving real-world problems with code.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;