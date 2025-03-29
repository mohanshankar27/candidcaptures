
import { motion } from 'framer-motion';

const DecorativeElements = () => {
  return (
    <>
      <motion.div 
        className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-amber-400/60 via-orange-300/50 to-transparent rotate-45"
        animate={{ 
          opacity: [0.6, 0.63, 0.6],
        }}
        transition={{ 
          duration: 28,
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-amber-400/60 via-orange-300/50 to-transparent -rotate-45"
        animate={{ 
          opacity: [0.6, 0.63, 0.6],
        }}
        transition={{ 
          duration: 32,
          repeat: Infinity, 
          repeatType: "mirror",
          delay: 0.5,
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      {/* Window-style circular elements with minimal movement */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-orange-300/40 backdrop-blur-sm"
        animate={{ 
          scale: [0.99, 1.01, 0.99],
          opacity: [0.4, 0.42, 0.4],
          rotate: [0, 360],
          borderColor: ["rgba(251, 191, 36, 0.4)", "rgba(251, 146, 60, 0.42)", "rgba(251, 191, 36, 0.4)"]
        }}
        transition={{ 
          scale: { duration: 40, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 40, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 240, repeat: Infinity, ease: "linear" },
          borderColor: { duration: 35, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
        }}
      ></motion.div>
      
      {/* Window-style outer ring with minimal movement */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-orange-200/25 backdrop-blur-sm"
        animate={{ 
          scale: [0.99, 1.01, 0.99],
          opacity: [0.25, 0.27, 0.25],
          rotate: [360, 0]
        }}
        transition={{ 
          scale: { duration: 38, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 38, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 200, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
      
      {/* Window-style inner circle with minimal movement */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-amber-300/30 backdrop-blur-sm"
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.3, 0.32, 0.3],
          rotate: [0, -360]
        }}
        transition={{ 
          scale: { duration: 36, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 36, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 180, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
      
      {/* Window-style smaller inner circle with minimal movement */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-amber-400/40 backdrop-blur-sm"
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.4, 0.43, 0.4],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          scale: { duration: 32, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 32, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
    </>
  );
};

export default DecorativeElements;
