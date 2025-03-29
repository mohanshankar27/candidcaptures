
import { motion } from 'framer-motion';

const GlowElements = () => {
  return (
    <>
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/70 via-amber-300/50 to-orange-400/60 blur-3xl"
        animate={{ 
          opacity: [0.5, 0.55, 0.5],
          scale: [0.98, 1.01, 0.98],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100/70 via-amber-200/50 to-orange-300/40 blur-3xl"
        animate={{ 
          opacity: [0.4, 0.45, 0.4],
          scale: [0.98, 1.01, 0.98],
        }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          repeatType: "mirror",
          delay: 0.8,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute -bottom-40 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-orange-300/70 via-amber-400/60 to-orange-400/70 blur-3xl"
        animate={{ 
          opacity: [0.6, 0.65, 0.6],
          scale: [0.98, 1.01, 0.98],
        }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          repeatType: "mirror", 
          delay: 1.1,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      {/* Premium central glow effect with window-style transition */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-amber-300/25 via-orange-400/15 to-amber-200/25 blur-3xl"
        animate={{ 
          opacity: [0.3, 0.35, 0.3],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{ 
          duration: 45, 
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut"
        }}
      ></motion.div>
    </>
  );
};

export default GlowElements;
