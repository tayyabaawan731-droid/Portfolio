import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const mailtoLink = `mailto:tayyabaawan731@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tayyabaawan731@gmail.com',
      href: 'mailto:tayyabaawan731@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 322 5728731',
      href: 'tel:+923225728731'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/tayyabaawan731-droid' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
  ];

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">Have a question or want to collaborate? Reach out!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[
              { name: 'name', label: 'Full Name', type: 'text' },
              { name: 'email', label: 'Email Address', type: 'email' },
              { name: 'subject', label: 'Subject', type: 'text' }
            ].map((field) => (
              <motion.div
                key={field.name}
                whileHover={{ y: -2 }}
                className="space-y-2"
              >
                <label className="block text-sm font-semibold text-gray-300">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full glass-light px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              </motion.div>
            ))}

            <motion.div
              whileHover={{ y: -2 }}
              className="space-y-2"
            >
              <label className="block text-sm font-semibold text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full glass-light px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                placeholder="Your message here..."
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Details */}
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.href}
                  whileHover={{ x: 10 }}
                  className="glass-light p-6 rounded-2xl group flex items-start gap-4 transition-all"
                >
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-semibold mb-1">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-gradient transition">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-light p-6 rounded-2xl mt-8"
            >
              <p className="text-gray-400 text-sm font-semibold mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl text-secondary hover:text-accent transition-colors"
                      title={link.label}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
