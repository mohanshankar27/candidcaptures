
import { motion } from 'framer-motion';

const LightRays = () => {
  return (
    <>
      {/* Window-style light ray with minimal movement */}
      <motion.div 
        className="absolute top-0 left-1/3 w-0.5 h-40 bg-gradient-to-b from-amber-300/30 via-orange-300/20 to-transparent skew-x-12"
        animate={{ 
          opacity: [0.3, 0.32, 0.3],
        }}
        transition={{ 
          duration: 35,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-20 right-1/4 w-0.5 h-32 bg-gradient-to-b from-amber-300/25 via-orange-200/20 to-transparent -skew-x-12"
        animate={{ 
          opacity: [0.25, 0.27, 0.25],
        }}
        transition={{ 
          duration: 38,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      {/* Window-style central light ray with minimal movement */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-1 h-96 bg-gradient-to-b from-amber-300/50 via-orange-300/40 to-transparent"
        animate={{ 
          opacity: [0.4, 0.43, 0.4],
        }}
        transition={{ 
          duration: 40,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-60 left-2/3 w-0.5 h-24 bg-gradient-to-b from-amber-200/40 via-orange-200/30 to-transparent skew-x-6"
        animate={{ 
          opacity: [0.3, 0.32, 0.3],
        }}
        transition={{ 
          duration: 42,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      {/* Window-style additional light beams with minimal movement */}
      <motion.div 
        className="absolute top-1/3 right-1/3 w-0.5 h-60 bg-gradient-to-b from-amber-200/25 via-orange-300/15 to-transparent -skew-x-3"
        animate={{ 
          opacity: [0.2, 0.22, 0.2],
        }}
        transition={{ 
          duration: 45,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-0.5 h-40 bg-gradient-to-t from-amber-300/30 via-orange-200/25 to-transparent skew-x-3"
        animate={{ 
          opacity: [0.25, 0.27, 0.25],
        }}
        transition={{ 
          duration: 43,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      />
    </>
  );
};

export default LightRays;
