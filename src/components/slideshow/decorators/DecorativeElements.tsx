
import { motion } from 'framer-motion';

const DecorativeElements = () => {
  return (
    <>
      <motion.div 
        className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-orange-400/70 to-transparent rotate-45"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 80, opacity: 0.8, rotateZ: [45, 65, 45] }}
        transition={{ 
          height: { duration: 2.5, delay: 1.2, ease: "easeOut" },
          opacity: { duration: 2.5, delay: 1.2 },
          rotateZ: { duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-400/70 to-transparent -rotate-45"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 128, opacity: 0.8, rotateZ: [-45, -65, -45] }}
        transition={{ 
          height: { duration: 2.5, delay: 1.4, ease: "easeOut" },
          opacity: { duration: 2.5, delay: 1.4 },
          rotateZ: { duration: 13, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-20 w-40 h-40 rounded-full border border-orange-300/40 backdrop-blur-sm"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 0.6,
          rotate: [0, 360]
        }}
        transition={{ 
          scale: { duration: 2.5, delay: 1.6, ease: "easeOut" },
          opacity: { duration: 2.5, delay: 1.6 },
          rotate: { duration: 35, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-orange-300/20 backdrop-blur-sm"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 0.7,
          rotate: [360, 0]
        }}
        transition={{ 
          scale: { duration: 2.5, delay: 1.8, ease: "easeOut" },
          opacity: { duration: 2.5, delay: 1.8 },
          rotate: { duration: 45, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
    </>
  );
};

export default DecorativeElements;
