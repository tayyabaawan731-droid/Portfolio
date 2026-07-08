import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';

const Competencies = () => {
  const competencies = [
    'Communication',
    'Presentation Skills',
    'Problem Solving',
    'Critical Thinking',
    'Leadership',
    'Teamwork',
    'Time Management',
    'Adaptability',
    'Fast Learner'
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-6xl mx-auto">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Core Competencies
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {competencies.map((comp, index) => (
            <motion.div
              key={comp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-4 rounded-lg text-center cursor-pointer"
            >
              <p className="font-poppins font-semibold text-sm">{comp}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
