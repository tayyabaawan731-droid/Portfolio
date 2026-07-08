import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectCard = ({ project, index, featured }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Content */}
      <div className="relative glass-light p-6 rounded-2xl h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-gradient transition">
                {project.title}
              </h3>
              {featured && <Star className="w-5 h-5 text-secondary fill-secondary" />}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 hover:border-primary/60 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, x: 3 }}
            className="flex items-center gap-2 text-secondary hover:text-accent transition-colors font-medium"
          >
            <Github size={18} />
            View Code
          </motion.a>
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, x: 3 }}
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors font-medium ml-auto"
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
