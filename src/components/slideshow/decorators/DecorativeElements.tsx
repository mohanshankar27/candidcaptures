
import { motion } from 'framer-motion';

const DecorativeElements = () => {
  return (
    <>
      <motion.div 
        className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-orange-400/70 to-transparent rotate-45"
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
        className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-400/70 to-transparent -rotate-45"
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
      
      {/* Enhanced middle circular element with highlight */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-orange-300/50 backdrop-blur-sm"
        animate={{ 
          scale: [0.9, 1.1, 0.9],
          opacity: [0.5, 0.8, 0.5],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-orange-300/20 backdrop-blur-sm"
        animate={{ 
          scale: [0.95, 1.05, 0.95],
          opacity: [0.5, 0.7, 0.5],
          rotate: [360, 180, 0]
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
