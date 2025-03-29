
import { motion } from 'framer-motion';

const GlowElements = () => {
  return (
    <>
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200 to-orange-400/70 blur-3xl"
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 0.8, rotate: 5 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100 to-orange-300/50 blur-3xl"
        initial={{ opacity: 0, rotate: 5 }}
        animate={{ opacity: 0.7, rotate: -5 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-40 right-1/3 w-60 h-60 rounded-full bg-gradient-to-r from-orange-300 to-orange-400/80 blur-3xl"
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ opacity: 0.9, rotate: 3 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 1.1 }}
      ></motion.div>
    </>
  );
};

export default GlowElements;
