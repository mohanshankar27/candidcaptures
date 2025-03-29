
import { motion } from 'framer-motion';

const ShimmerEffects = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
      
      {/* Middle highlight effect - enhanced luminosity */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-orange-200/20 to-amber-300/40 blur-3xl"
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 8,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-orange-200/10 to-transparent"
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          y: [-5, 5, -5]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 10,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default ShimmerEffects;
