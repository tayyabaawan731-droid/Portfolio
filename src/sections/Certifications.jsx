import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    { title: 'N8N Chatbot Lab', issuer: 'Career Accelerator', icon: '🤖' },
    { title: 'English for Career Development', issuer: 'MOOC', icon: '📚' }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Certifications
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 0 50px rgba(168, 85, 247, 0.4)' }}
              className="glass-effect p-8 rounded-xl text-center cursor-pointer"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-poppins font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-secondary font-semibold">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
