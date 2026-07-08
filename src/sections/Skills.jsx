import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import { Code, Database, Wrench, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C', 'C++', 'Assembly', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Database & Data',
      icon: Database,
      skills: ['SQL', 'MySQL', 'Data Analysis', 'Database Design']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Microsoft Access']
    },
    {
      title: 'Creative & Automation',
      icon: Palette,
      skills: ['Design', 'Video Editing', 'AI Tools', 'n8n', 'Chatbots']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">Skills and technologies I master</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"
                  >
                    <Icon className="w-6 h-6 text-gradient" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                >
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ y: -5, boxShadow: '0 0 20px rgba(108, 99, 255, 0.4)' }}
                      className="glass-light p-4 rounded-xl text-center group"
                    >
                      <p className="font-semibold text-white group-hover:text-secondary transition">{skill}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-light p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Zap className="text-secondary" />
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Problem Solving', 'Critical Thinking', 'Communication', 'Teamwork', 'Leadership', 'Time Management', 'Adaptability', 'Fast Learner'].map((comp, idx) => (
              <motion.div
                key={comp}
                whileHover={{ scale: 1.05 }}
                className="badge justify-center text-center"
              >
                {comp}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
