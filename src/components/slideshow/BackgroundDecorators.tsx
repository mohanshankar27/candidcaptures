
import { motion } from 'framer-motion';

const BackgroundDecorators = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-200 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, delay: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-orange-100 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-40 right-1/3 w-60 h-60 rounded-full bg-orange-300 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2, delay: 1.1 }}
      ></motion.div>
      
      {/* Premium decorative elements */}
      <motion.div 
        className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-orange-400/50 to-transparent rotate-45"
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-400/50 to-transparent -rotate-45"
        initial={{ height: 0 }}
        animate={{ height: 128 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-20 w-40 h-40 rounded-full border border-orange-300/20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 1.6 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-orange-300/10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      ></motion.div>
    </div>
  );
};

export default BackgroundDecorators;
