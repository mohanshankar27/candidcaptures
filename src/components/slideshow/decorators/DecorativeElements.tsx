
import { motion } from 'framer-motion';

const DecorativeElements = () => {
  return (
    <>
      <motion.div 
        className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-amber-400/70 via-orange-300/60 to-transparent rotate-45"
        animate={{ 
          height: [70, 90, 70], 
          opacity: [0.7, 0.9, 0.7],
          rotateZ: [45, 50, 45]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-amber-400/70 via-orange-300/60 to-transparent -rotate-45"
        animate={{ 
          height: [120, 140, 120], 
          opacity: [0.7, 0.9, 0.7],
          rotateZ: [-45, -50, -45]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity, 
          repeatType: "mirror",
          delay: 0.5,
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      {/* Premium central circular element with sophisticated effects */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-orange-300/50 backdrop-blur-sm"
        animate={{ 
          scale: [0.9, 1.1, 0.9],
          opacity: [0.5, 0.8, 0.5],
          rotate: [0, 180, 360],
          borderColor: ["rgba(251, 191, 36, 0.5)", "rgba(251, 146, 60, 0.6)", "rgba(251, 191, 36, 0.5)"]
        }}
        transition={{ 
          scale: { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          borderColor: { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
        }}
      ></motion.div>
      
      {/* Premium outer ring with reverse rotation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-orange-200/30 backdrop-blur-sm"
        animate={{ 
          scale: [0.95, 1.05, 0.95],
          opacity: [0.3, 0.5, 0.3],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      {/* Inner decorative circle with pulsing effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-amber-300/40 backdrop-blur-sm"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
      ></motion.div>
    </>
  );
};

export default DecorativeElements;
