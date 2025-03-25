
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SlideshowHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <motion.span 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="inline-flex items-center gap-1 px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4"
      >
        <Sparkles className="w-4 h-4 animate-pulse" />
        EXQUISITE COLLECTION
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-4xl md:text-5xl font-serif italic font-bold mb-6 text-primary"
      >
        Our Photography Collection
      </motion.h2>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "5rem" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mb-6"
      ></motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-gray-600 text-lg font-serif italic"
      >
        Each image tells a story, each moment captured becomes eternal
      </motion.p>
    </motion.div>
  );
};

export default SlideshowHeader;
