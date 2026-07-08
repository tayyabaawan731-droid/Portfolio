import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedText className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            About Me
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a BS Computer Science student at National University of Pakistan, currently in my 5th semester with a CGPA of 3.7/4.0. My passion lies in creating elegant software solutions that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm deeply interested in multiple domains including Artificial Intelligence, Database Management Systems, Cybersecurity, Automation, and Web Development. I love diving into programming problems and transforming ideas into practical, impactful projects.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond academics, I'm committed to continuous learning and staying updated with the latest technologies. I believe in the power of collaboration and enjoy working in team environments where innovation thrives.
            </p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="font-poppins font-bold text-2xl gradient-text mb-2">3.7</h3>
              <p className="text-gray-300">Current CGPA</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="font-poppins font-bold text-2xl gradient-text mb-2">5th Semester</h3>
              <p className="text-gray-300">BS Computer Science</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="font-poppins font-bold text-2xl gradient-text mb-2">NUP</h3>
              <p className="text-gray-300">National University of Pakistan</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="font-poppins font-bold text-2xl gradient-text mb-2">827/1200</h3>
              <p className="text-gray-300">Intermediate Score (BISE)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
