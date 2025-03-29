
import { motion } from 'framer-motion';

const ShimmerEffects = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)] opacity-0"
        animate={{ 
          opacity: [0, 0.3, 0],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 10, 0]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "easeInOut"
        }}
      />
    </>
  );
};

export default ShimmerEffects;
