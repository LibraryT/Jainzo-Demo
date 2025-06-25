import { motion } from 'framer-motion';

export function Button({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: [1, 1.03, 1],
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 2,
          ease: 'easeInOut',
        },
      }}
      className={`px-6 py-3 rounded-2xl text-white text-lg shadow-xl transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}