import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:tayyabaawan731@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/tayyabaawan731-droid',
      color: 'hover:text-secondary'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:tayyabaawan731@gmail.com',
      color: 'hover:text-accent'
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+923225728731',
      color: 'hover:text-secondary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">Let's connect and collaborate</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full glass-effect px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full glass-effect px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full glass-effect px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full glass-effect px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full button-primary"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-gray-400 text-sm mb-2">Email</p>
              <a
                href="mailto:tayyabaawan731@gmail.com"
                className="text-lg font-semibold text-secondary hover:text-accent transition"
              >
                tayyabaawan731@gmail.com
              </a>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-gray-400 text-sm mb-2">Phone</p>
              <a
                href="tel:+923225728731"
                className="text-lg font-semibold text-secondary hover:text-accent transition"
              >
                +92 322 5728731
              </a>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-gray-400 text-sm mb-2">Location</p>
              <p className="text-lg font-semibold text-secondary">Pakistan</p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`p-3 glass-effect rounded-lg text-white transition ${link.color}`}
                      title={link.label}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
