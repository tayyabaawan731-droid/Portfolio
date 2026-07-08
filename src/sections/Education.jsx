import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';

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
        'Database Management Systems',
        'Computer Organization & Architecture',
        'Digital Logic Design',
        'Information Security',
        'Discrete Structures',
        'Application of ICT'
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-6xl mx-auto">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Education
          </h2>
        </AnimatedText>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-secondary font-semibold">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">{edu.period}</p>
                  {edu.cgpa && <p className="text-primary font-semibold">CGPA: {edu.cgpa}</p>}
                  {edu.semester && <p className="text-secondary font-semibold">{edu.semester}</p>}
                  {edu.score && <p className="text-primary font-semibold">Score: {edu.score}</p>}
                </div>
              </div>
              {edu.coursework && (
                <div>
                  <p className="text-gray-400 font-semibold mb-3">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-sm bg-primary/20 text-secondary px-3 py-1 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
