
import { motion } from 'framer-motion';

const LightRays = () => {
  return (
    <>
      {/* Premium light ray effect */}
      <motion.div 
        className="absolute top-0 left-1/3 w-0.5 h-40 bg-gradient-to-b from-amber-300/40 via-orange-300/30 to-transparent skew-x-12"
        animate={{ 
          height: [160, 180, 160], 
          opacity: [0.4, 0.6, 0.4],
          rotateZ: [12, 13, 12]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: [0.43, 0.13, 0.23, 0.96] 
        }}
      />
      
      <motion.div 
        className="absolute top-20 right-1/4 w-0.5 h-32 bg-gradient-to-b from-amber-300/30 via-orange-200/25 to-transparent -skew-x-12"
        animate={{ 
          height: [120, 140, 120], 
          opacity: [0.3, 0.5, 0.3],
          rotateZ: [-12, -13, -12]
        }}
        transition={{ 
          duration: 24,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: [0.43, 0.13, 0.23, 0.96] 
        }}
      />
      
      {/* Enhanced central light ray with premium glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-1 h-96 bg-gradient-to-b from-amber-300/70 via-orange-300/50 to-transparent"
        animate={{ 
          height: [380, 420, 380], 
          opacity: [0.5, 0.7, 0.5],
          width: [1, 1.5, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: [0.43, 0.13, 0.23, 0.96] 
        }}
      />
      
      <motion.div 
        className="absolute top-60 left-2/3 w-0.5 h-24 bg-gradient-to-b from-amber-200/50 via-orange-200/40 to-transparent skew-x-6"
        animate={{ 
          height: [100, 120, 100], 
          opacity: [0.4, 0.6, 0.4],
          rotateZ: [6, 7, 6]
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: [0.43, 0.13, 0.23, 0.96] 
        }}
      />
      
      {/* Additional sophisticated light beams */}
      <motion.div 
        className="absolute top-1/3 right-1/3 w-0.5 h-60 bg-gradient-to-b from-amber-200/30 via-orange-300/20 to-transparent -skew-x-3"
        animate={{ 
          height: [200, 220, 200], 
          opacity: [0.3, 0.4, 0.3],
          rotateZ: [-3, -4, -3]
        }}
        transition={{ 
          duration: 26,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: [0.43, 0.13, 0.23, 0.96] 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-0.5 h-40 bg-gradient-to-t from-amber-300/40 via-orange-200/30 to-transparent skew-x-3"
        animate={{ 
          height: [140, 160, 140], 
          opacity: [0.4, 0.5, 0.4],
          rotateZ: [3, 4, 3]
        }}
        transition={{ 
          duration: 23,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: [0.43, 0.13, 0.23, 0.96] 
        }}
      />
    </>
  );
};

export default LightRays;
