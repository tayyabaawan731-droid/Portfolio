import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'National University of Pakistan',
      period: '2024 – Present',
      cgpa: '3.7 / 4.0',
      semester: '5th Semester',
      coursework: [
        'Programming Fundamentals',
        'Database Management',
        'Computer Architecture',
        'Digital Logic Design',
        'Information Security',
        'Discrete Structures'
      ]
    },
    {
      degree: 'Intermediate in Computer Science',
      institution: 'BISE Rawalpindi',
      period: '2024',
      score: '827 / 1200'
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <BookOpen className="text-secondary" />
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 text-lg">My academic journey and achievements</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-accent/50" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Timeline Content */}
                <motion.div
                  whileHover={{ boxShadow: '0 0 30px rgba(108, 99, 255, 0.3)' }}
                  className="glass-light p-6 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent">
                        {index === 0 ? (
                          <BookOpen className="w-6 h-6 text-white" />
                        ) : (
                          <Award className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-secondary font-semibold mb-3">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                      {edu.cgpa && (
                        <p className="text-primary font-semibold mb-3">CGPA: {edu.cgpa}</p>
                      )}
                      {edu.semester && (
                        <p className="text-secondary font-semibold mb-3">{edu.semester}</p>
                      )}
                      {edu.score && (
                        <p className="text-primary font-semibold">Score: {edu.score}</p>
                      )}
                    </div>
                  </div>

                  {/* Coursework */}
                  {edu.coursework && (
                    <motion.div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-gray-400 font-semibold mb-3 text-sm">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <motion.span
                            key={course}
                            whileHover={{ scale: 1.05 }}
                            className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/30"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Timeline Dot (hidden on mobile) */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/50"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
