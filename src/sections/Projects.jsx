import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Monitoring System',
      description: 'Advanced C++ console application featuring real-time weather data management, prediction alerts, and file I/O operations with comprehensive error handling.',
      tech: ['C++', 'OOP', 'STL', 'File I/O'],
      github: 'https://github.com/tayyabaawan731-droid/Weather-Mointring-System',
      featured: true
    },
    {
      title: 'Online Food Ordering Platform',
      description: 'Full-featured ordering system built with OOP principles, featuring menu management, order processing, automatic billing, and customer database.',
      tech: ['C++', 'OOP', 'Data Structures'],
      github: 'https://github.com/tayyabaawan731-droid/Online-Food-Ordering-System',
      featured: true
    },
    {
      title: 'Ice Cream Management System',
      description: 'Comprehensive database application with customer management, order tracking, inventory control, and automated PDF report generation.',
      tech: ['MS Access', 'SQL', 'Database Design'],
      github: 'https://github.com/tayyabaawan731-droid/Ice-Cream-Ordering-System'
    },
    {
      title: 'Blood Donation Portal',
      description: 'Responsive website connecting donors with recipients. Features donor registration, search functionality, and user-friendly interface.',
      tech: ['HTML', 'CSS', 'Responsive Design'],
      github: 'https://github.com/tayyabaawan731-droid/blood-donation-website',
      live: 'https://tayyabaawan731-droid.github.io/blood-donation-website'
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my best work and expertise</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
