
import { motion } from 'framer-motion';

const LightRays = () => {
  return (
    <>
      <motion.div 
        className="absolute top-0 left-1/3 w-1 h-40 bg-gradient-to-b from-orange-300/40 to-transparent skew-x-12"
        animate={{ 
          height: [160, 200, 160], 
          opacity: [0.4, 0.7, 0.4],
          rotateZ: [12, 15, 12]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-20 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-300/30 to-transparent -skew-x-12"
        animate={{ 
          height: [120, 160, 120], 
          opacity: [0.3, 0.6, 0.3],
          rotateZ: [-12, -15, -12]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      {/* Middle ray with more prominence */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-0.5 h-60 bg-gradient-to-b from-amber-300/60 to-transparent"
        animate={{ 
          height: [200, 260, 200], 
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-60 left-2/3 w-0.5 h-24 bg-gradient-to-b from-orange-200/50 to-transparent skew-x-6"
        animate={{ 
          height: [100, 140, 100], 
          opacity: [0.4, 0.7, 0.4],
          rotateZ: [6, 9, 6]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
    </>
  );
};

export default LightRays;
