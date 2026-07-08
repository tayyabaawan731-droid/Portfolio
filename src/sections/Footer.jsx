import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'GitHub', href: 'https://github.com/tayyabaawan731-droid' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative glass-dark border-t border-primary/10 mt-20 py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">TA</h3>
            <p className="text-gray-400">CS Student | Developer | Tech Enthusiast</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-secondary transition-colors block"
                >
                  → {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 tayyabaawan731@gmail.com</p>
              <p>📱 +92 322 5728731</p>
              <p>📍 Pakistan</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <span>Crafted with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              <Heart className="w-5 h-5 text-accent fill-accent" />
            </motion.div>
            <span>by Tayyaba Awan</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {currentYear} Tayyaba Awan. All rights reserved. | Built with React + Tailwind + Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
