import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg">Discover my journey and passion</p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              'I\'m a BS Computer Science student at National University of Pakistan, currently in my 5th semester with a stellar CGPA of 3.7/4.0. My journey in tech has been about turning complex problems into elegant solutions.',
              'I specialize in full-stack development, algorithms, and database design. My interests span across AI, cybersecurity, and automation. I\'m passionate about writing clean, efficient code and building applications that make a real impact.',
              'Beyond coding, I\'m a lifelong learner who stays updated with emerging technologies. I thrive in collaborative environments where innovation is celebrated and excellence is the standard.'
            ].map((text, idx) => (
              <motion.p
                key={idx}
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'CGPA', value: '3.7/4.0', icon: '🎯' },
              { title: 'Semester', value: '5th Semester', icon: '📚' },
              { title: 'University', value: 'National University of Pakistan', icon: '🏫' },
              { title: 'Intermediate', value: '827/1200 (BISE)', icon: '⭐' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="glass-light p-6 rounded-2xl group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{stat.icon}</span>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">{stat.title}</p>
                    <p className="text-xl font-semibold text-white group-hover:text-gradient">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
