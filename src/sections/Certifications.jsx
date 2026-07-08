import { motion } from 'framer-motion';
import { Award, Zap } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'N8N Chatbot Lab',
      issuer: 'Career Accelerator',
      icon: '🤖',
      description: 'Advanced automation and chatbot development'
    },
    {
      title: 'English for Career Development',
      issuer: 'MOOC',
      icon: '📚',
      description: 'Professional communication and soft skills'
    }
  ];

  const skills = [
    'Communication', 'Presentation', 'Problem Solving',
    'Critical Thinking', 'Leadership', 'Teamwork',
    'Time Management', 'Adaptability', 'Fast Learner'
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Award className="text-secondary" />
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">Professional credentials and achievements</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certs.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
                className="glass-light p-8 rounded-2xl text-center group"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl mb-4 inline-block"
                >
                  {cert.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition">
                  {cert.title}
                </h3>
                <p className="text-secondary font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="section-divider mb-20" />

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Zap className="text-secondary" />
            <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">Essential skills and strengths</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="badge justify-center text-center group cursor-pointer"
              >
                <span className="group-hover:text-accent transition">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
