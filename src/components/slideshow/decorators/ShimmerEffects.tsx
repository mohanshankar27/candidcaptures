
import { motion } from 'framer-motion';

const ShimmerEffects = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)] opacity-0"
        animate={{ 
          opacity: [0, 0.4, 0],
          scale: [0.7, 1.3, 0.7],
          rotate: [0, 15, 0]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 12,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-orange-200/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.2, 0],
          y: [10, -10, 10]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 8,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </>
  );
};

export default ShimmerEffects;
