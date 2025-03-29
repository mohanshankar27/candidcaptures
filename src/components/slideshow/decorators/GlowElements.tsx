
import { motion } from 'framer-motion';

const GlowElements = () => {
  return (
    <>
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/80 via-amber-300/60 to-orange-400/70 blur-3xl"
        animate={{ 
          opacity: [0.5, 0.7, 0.5],
          scale: [0.97, 1.03, 0.97],
          rotateZ: [0, 2, 0]
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100/80 via-amber-200/60 to-orange-300/50 blur-3xl"
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [0.95, 1.02, 0.95],
          rotateZ: [0, -2, 0]
        }}
        transition={{ 
          duration: 28, 
          repeat: Infinity, 
          repeatType: "mirror",
          delay: 0.8,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute -bottom-40 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-orange-300/80 via-amber-400/70 to-orange-400/80 blur-3xl"
        animate={{ 
          opacity: [0.6, 0.75, 0.6],
          scale: [0.95, 1.03, 0.95],
          rotateZ: [0, 1.5, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          repeatType: "mirror", 
          delay: 1.1,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      {/* Premium central glow effect with smoother animation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-amber-300/30 via-orange-400/20 to-amber-200/30 blur-3xl"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [0.97, 1.08, 0.97],
          rotateZ: [0, 3, 0]
        }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut"
        }}
      ></motion.div>
    </>
  );
};

export default GlowElements;
