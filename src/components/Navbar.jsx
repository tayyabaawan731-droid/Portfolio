import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 glass-effect border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-poppins font-bold gradient-text"
          >
            TA
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ color: '#00E5FF' }}
                onClick={() => scrollToSection(item)}
                className="font-poppins font-medium hover:text-secondary transition"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 border-t border-white/10"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 px-4 hover:text-secondary transition"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
