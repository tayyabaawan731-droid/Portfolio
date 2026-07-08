import { motion } from 'framer-motion';

const SkillBadge = ({ skill, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-effect p-4 rounded-lg text-center cursor-pointer group"
    >
      {Icon && <Icon className="w-8 h-8 mx-auto mb-2 text-secondary group-hover:text-accent transition" />}
      <p className="font-poppins font-semibold text-sm">{skill}</p>
    </motion.div>
  );
};

export default SkillBadge;
