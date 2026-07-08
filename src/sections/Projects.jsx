import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Monitoring System',
      description: 'Console-based C++ application for managing and monitoring weather data with prediction alerts and file handling capabilities.',
      tech: ['C++', 'OOP', 'STL', 'File Handling'],
      github: 'https://github.com/tayyabaawan731-droid/Weather-Mointring-System',
      live: null
    },
    {
      title: 'Online Food Ordering System',
      description: 'Console-based ordering application built with OOP concepts, featuring a food menu, order management, and automatic bill calculation.',
      tech: ['C++', 'OOP', 'Data Structures'],
      github: 'https://github.com/tayyabaawan731-droid/Online-Food-Ordering-System',
      live: null
    },
    {
      title: 'Ice Cream Ordering Management System',
      description: 'Comprehensive database application built in Microsoft Access with customer management, order processing, and automatic PDF report generation.',
      tech: ['Microsoft Access', 'SQL', 'Database Design'],
      github: 'https://github.com/tayyabaawan731-droid/Ice-Cream-Ordering-System',
      live: null
    },
    {
      title: 'Blood Donation Website',
      description: 'Responsive website connecting blood donors with recipients, featuring donor registration and search functionality with a clean, user-friendly interface.',
      tech: ['HTML', 'CSS', 'Responsive Design'],
      github: 'https://github.com/tayyabaawan731-droid/blood-donation-website',
      live: 'https://tayyabaawan731-droid.github.io/blood-donation-website'
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my work and expertise</p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
