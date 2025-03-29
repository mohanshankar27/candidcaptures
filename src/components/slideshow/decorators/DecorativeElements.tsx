
import { motion } from 'framer-motion';

const DecorativeElements = () => {
  return (
    <>
      <motion.div 
        className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-amber-400/70 via-orange-300/60 to-transparent rotate-45"
        animate={{ 
          height: [70, 75, 70], 
          opacity: [0.7, 0.75, 0.7],
          rotateZ: [45, 46, 45]
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-amber-400/70 via-orange-300/60 to-transparent -rotate-45"
        animate={{ 
          height: [120, 125, 120], 
          opacity: [0.7, 0.75, 0.7],
          rotateZ: [-45, -46, -45]
        }}
        transition={{ 
          duration: 24,
          repeat: Infinity, 
          repeatType: "mirror",
          delay: 0.5,
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      {/* Premium central circular element with sophisticated and smoother effects */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-orange-300/50 backdrop-blur-sm"
        animate={{ 
          scale: [0.97, 1.03, 0.97],
          opacity: [0.5, 0.6, 0.5],
          rotate: [0, 360],
          borderColor: ["rgba(251, 191, 36, 0.5)", "rgba(251, 146, 60, 0.55)", "rgba(251, 191, 36, 0.5)"]
        }}
        transition={{ 
          scale: { duration: 28, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 28, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 180, repeat: Infinity, ease: "linear" },
          borderColor: { duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
        }}
      ></motion.div>
      
      {/* Premium outer ring with reverse rotation and smoother animation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-orange-200/30 backdrop-blur-sm"
        animate={{ 
          scale: [0.97, 1.02, 0.97],
          opacity: [0.3, 0.35, 0.3],
          rotate: [360, 0]
        }}
        transition={{ 
          scale: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
      
      {/* Inner decorative circle with smoother pulsing effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-amber-300/40 backdrop-blur-sm"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.5, 0.4],
          rotate: [0, -360]
        }}
        transition={{ 
          scale: { duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 80, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
      
      {/* Additional smaller inner circle with smoother movement */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-amber-400/50 backdrop-blur-sm"
        animate={{ 
          scale: [1, 1.06, 1],
          opacity: [0.5, 0.65, 0.5],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          scale: { duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          opacity: { duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          rotate: { duration: 45, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
    </>
  );
};

export default DecorativeElements;
