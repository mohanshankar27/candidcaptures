
import { motion } from 'framer-motion';

const LightRays = () => {
  return (
    <>
      {/* Premium light ray effect with smoother animation */}
      <motion.div 
        className="absolute top-0 left-1/3 w-0.5 h-40 bg-gradient-to-b from-amber-300/40 via-orange-300/30 to-transparent skew-x-12"
        animate={{ 
          height: [160, 170, 160], 
          opacity: [0.4, 0.5, 0.4],
          rotateZ: [12, 12.5, 12]
        }}
        transition={{ 
          duration: 24,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-20 right-1/4 w-0.5 h-32 bg-gradient-to-b from-amber-300/30 via-orange-200/25 to-transparent -skew-x-12"
        animate={{ 
          height: [120, 130, 120], 
          opacity: [0.3, 0.4, 0.3],
          rotateZ: [-12, -12.5, -12]
        }}
        transition={{ 
          duration: 26,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      {/* Enhanced central light ray with premium glow and smoother transitions */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-1 h-96 bg-gradient-to-b from-amber-300/70 via-orange-300/50 to-transparent"
        animate={{ 
          height: [380, 400, 380], 
          opacity: [0.5, 0.6, 0.5],
          width: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-60 left-2/3 w-0.5 h-24 bg-gradient-to-b from-amber-200/50 via-orange-200/40 to-transparent skew-x-6"
        animate={{ 
          height: [100, 110, 100], 
          opacity: [0.4, 0.5, 0.4],
          rotateZ: [6, 6.5, 6]
        }}
        transition={{ 
          duration: 28,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      {/* Additional sophisticated light beams with smoother animation */}
      <motion.div 
        className="absolute top-1/3 right-1/3 w-0.5 h-60 bg-gradient-to-b from-amber-200/30 via-orange-300/20 to-transparent -skew-x-3"
        animate={{ 
          height: [200, 210, 200], 
          opacity: [0.3, 0.35, 0.3],
          rotateZ: [-3, -3.3, -3]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-0.5 h-40 bg-gradient-to-t from-amber-300/40 via-orange-200/30 to-transparent skew-x-3"
        animate={{ 
          height: [140, 150, 140], 
          opacity: [0.4, 0.45, 0.4],
          rotateZ: [3, 3.3, 3]
        }}
        transition={{ 
          duration: 27,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
    </>
  );
};

export default LightRays;
