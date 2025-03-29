
import { motion } from 'framer-motion';

const LightRays = () => {
  return (
    <>
      {/* Premium light ray effect */}
      <motion.div 
        className="absolute top-0 left-1/3 w-0.5 h-40 bg-gradient-to-b from-amber-300/40 via-orange-300/30 to-transparent skew-x-12"
        animate={{ 
          height: [160, 200, 160], 
          opacity: [0.4, 0.7, 0.4],
          rotateZ: [12, 15, 12]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-20 right-1/4 w-0.5 h-32 bg-gradient-to-b from-amber-300/30 via-orange-200/25 to-transparent -skew-x-12"
        animate={{ 
          height: [120, 160, 120], 
          opacity: [0.3, 0.6, 0.3],
          rotateZ: [-12, -15, -12]
        }}
        transition={{ 
          duration: 14,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      {/* Enhanced central light ray with premium glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-1 h-80 bg-gradient-to-b from-amber-300/70 via-orange-300/50 to-transparent"
        animate={{ 
          height: [280, 340, 280], 
          opacity: [0.6, 0.9, 0.6],
          width: [1, 1.5, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-60 left-2/3 w-0.5 h-24 bg-gradient-to-b from-amber-200/50 via-orange-200/40 to-transparent skew-x-6"
        animate={{ 
          height: [100, 140, 100], 
          opacity: [0.4, 0.7, 0.4],
          rotateZ: [6, 9, 6]
        }}
        transition={{ 
          duration: 11,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      {/* Additional sophisticated light beams */}
      <motion.div 
        className="absolute top-1/3 right-1/3 w-0.5 h-60 bg-gradient-to-b from-amber-200/30 via-orange-300/20 to-transparent -skew-x-3"
        animate={{ 
          height: [200, 240, 200], 
          opacity: [0.3, 0.5, 0.3],
          rotateZ: [-3, -5, -3]
        }}
        transition={{ 
          duration: 16,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-0.5 h-40 bg-gradient-to-t from-amber-300/40 via-orange-200/30 to-transparent skew-x-3"
        animate={{ 
          height: [140, 180, 140], 
          opacity: [0.4, 0.6, 0.4],
          rotateZ: [3, 5, 3]
        }}
        transition={{ 
          duration: 13,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
    </>
  );
};

export default LightRays;
