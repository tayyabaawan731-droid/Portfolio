import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 0 50px rgba(168, 85, 247, 0.4)' }}
      className="glass-effect p-6 rounded-xl overflow-hidden group cursor-pointer"
    >
      <div className="relative mb-4 h-40 bg-gradient-to-br from-primary to-accent rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center">
            <p className="font-poppins text-sm font-semibold">Project Preview</p>
          </div>
        </div>
      </div>
      <h3 className="font-poppins font-bold text-lg mb-2 group-hover:text-secondary transition">
        {project.title}
      </h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs bg-primary/20 text-secondary px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-accent transition"
          >
            <Github size={18} />
            <span className="text-sm">Code</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-accent transition"
          >
            <ExternalLink size={18} />
            <span className="text-sm">Live</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
