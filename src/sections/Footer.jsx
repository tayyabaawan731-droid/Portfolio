import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative glass-effect border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-gray-300">Made with</span>
          <Heart className="w-5 h-5 text-accent fill-accent animate-pulse" />
          <span className="text-gray-300">by Tayyaba Awan</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {currentYear} Tayyaba Awan. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
