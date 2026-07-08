import AnimatedText from '../components/AnimatedText';
import SkillBadge from '../components/SkillBadge';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'C', 'C++', 'Assembly Language', 'HTML', 'CSS']
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['SQL', 'MySQL', 'Data Analysis']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Microsoft Access', 'Excel', 'PowerPoint']
    },
    {
      title: 'Design & Automation',
      icon: Palette,
      skills: ['Graphics Design', 'Video Editing', 'AI Image Generation', 'n8n', 'Chatbots']
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </AnimatedText>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-poppins font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, index) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
