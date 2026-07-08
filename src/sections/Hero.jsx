import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Computer Science Student',
    'Software Developer',
    'Python Programmer',
    'C++ Developer',
    'SQL Learner',
    'Future AI Engineer',
    'Tech Enthusiast',
  ];

  useEffect(() => {
    const currentRole = roles[textIndex];
    const speed = isDeleting ? 50 : 100;

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

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-poppins text-lg mb-4"
          >
            Hi 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-poppins font-bold mb-4 leading-tight"
          >
            I'm{' '}
            <span className="gradient-text glow-text">Tayyaba Awan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-20 mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-inter">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg mb-8 max-w-lg"
          >
            Motivated CS student with 3.7 CGPA, passionate about building impactful software solutions and exploring AI, databases, and automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="button-primary text-center"
            >
              View Projects
            </a>
            <a
              href="mailto:tayyabaawan731@gmail.com"
              className="button-secondary text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative w-64 h-64 glass-effect rounded-2xl flex items-center justify-center"
          >
            <div className="text-6xl">💻</div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-lg animate-bounce-slow" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToSection}
      >
        <ChevronDown className="text-secondary" size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
