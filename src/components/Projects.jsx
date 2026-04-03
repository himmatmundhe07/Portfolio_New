import { Layers, Globe, Gamepad2, Figma } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoryCard = ({ icon: Icon, colorClass, iconColorClass, title, description, path, index, techs, count }) => (
  <Link to={path} className="block h-full">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      variants={{
        hover: { y: -10 }
      }}
      className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 h-full flex flex-col shadow-xl"
    >
      {/* Shine/Wipe Effect */}
      <motion.div
        variants={{ hover: { x: "100%" } }}
        initial={{ x: "-100%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0 pointer-events-none"
      />

      {/* Colorful Glow Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-transparent group-hover:to-pink-500/10 transition-colors duration-500 ease-in-out"></div>

      {/* Glow Border Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition duration-500 pointer-events-none"></div>

      {/* Project Count Badge */}
      <div className="absolute top-6 right-6 z-20">
        <span className="text-[10px] font-bold text-white/80 bg-black/20 px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider backdrop-blur-sm group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-all shadow-sm">
          {count}
        </span>
      </div>

      <div className="p-6 h-full flex flex-col relative z-10">
        <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-6 ${iconColorClass} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner ring-1 ring-white/10`}>
          <Icon size={32} />
        </div>

        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-pink-200 transition-all drop-shadow-sm">
          {title}
        </h3>

        <p className="text-white/70 mb-6 flex-grow text-base md:text-lg leading-relaxed font-light group-hover:text-white/90 transition-colors">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {techs && techs.map((tech, i) => (
            <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 text-white/80 border border-white/10 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center text-sm font-bold text-purple-200 group-hover:text-white tracking-wide">
          <span>EXPLORE</span>
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  </Link>
);

const Projects = () => {
  const categories = [
    {
      title: "Functional Applications",
      description: "Full-stack applications and tools solving real-world problems. Includes news aggregators, weather dashboards, and communication apps.",
      icon: Layers,
      colorClass: "bg-purple-500/20",
      iconColorClass: "text-purple-200",
      path: "/projects/functional",
      techs: ["React", "Node.js", "RestAPI"],
      count: "3 Builds"
    },
    {
      title: "Website Replicas",
      description: "Pixel-perfect clones of popular platforms and E-commerce sites, showcasing UI/UX precision and frontend mastery.",
      icon: Globe,
      colorClass: "bg-purple-500/20",
      iconColorClass: "text-purple-200",
      path: "/projects/clones",
      techs: ["React", "HTML5", "CSS3"],
      count: "4 Clones"
    },
    {
      title: "Interactive Games",
      description: "Engaging browser-based games built with Canvas and modern web technologies. From retro arcade classics to memory challenges.",
      icon: Gamepad2,
      colorClass: "bg-purple-500/20",
      iconColorClass: "text-purple-200",
      path: "/projects/games",
      techs: ["Canvas", "JS Logic", "Physics"],
      count: "3 Games"
    },
    {
      title: "UI/UX & Figma",
      description: "Pixel-perfect Figma designs, mockups, and wireframes focused on modern aesthetics, accessibility, and user-centered composition.",
      icon: Figma,
      colorClass: "bg-purple-500/20",
      iconColorClass: "text-purple-200",
      path: "/projects/designs",
      techs: ["Figma", "Wireframing", "Prototyping"],
      count: "4 Designs"
    }
  ];

  return (
    <section id="projects" className="py-8 md:py-16 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4">My Portfolio</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore my work across different domains. Click on a category to see the detailed projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
