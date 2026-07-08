import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Computer Science Student',
    'Full Stack Developer',
    'Python Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    const currentRole = roles[textIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, textIndex, isDeleting, roles]);

  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-20 px-4 flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="badge flex items-center gap-2">
              <Sparkles size={16} />
              Welcome to my portfolio
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">Tayyaba Awan</span>
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="min-h-20">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-secondary ml-1"
              >
                |
              </motion.span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Passionate CS student with a 3.7 CGPA, specializing in full-stack development, algorithms, and building innovative solutions. Let's create something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108, 99, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 group"
            >
              Explore My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto"
          >
            {[
              { label: 'Projects', value: '4+' },
              { label: 'CGPA', value: '3.7' },
              { label: 'Skills', value: '20+' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-light p-4 rounded-xl text-center"
              >
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToSection}
      >
        <ChevronDown className="text-secondary" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
