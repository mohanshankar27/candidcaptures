
import { motion } from 'framer-motion';

const DecorativeElements = () => {
  return (
    <>
      <motion.div 
        className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-orange-400/70 to-transparent rotate-45"
        initial={{ height: 0 }}
        animate={{ height: 80, rotateZ: [45, 55, 45] }}
        transition={{ 
          height: { duration: 1.5, delay: 1.2 },
          rotateZ: { duration: 8, repeat: Infinity, repeatType: "reverse" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-400/70 to-transparent -rotate-45"
        initial={{ height: 0 }}
        animate={{ height: 128, rotateZ: [-45, -55, -45] }}
        transition={{ 
          height: { duration: 1.5, delay: 1.4 },
          rotateZ: { duration: 9, repeat: Infinity, repeatType: "reverse" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-20 w-40 h-40 rounded-full border border-orange-300/40 backdrop-blur-sm"
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          rotate: [0, 360]
        }}
        transition={{ 
          scale: { duration: 1.5, delay: 1.6 },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-orange-300/20 backdrop-blur-sm"
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          rotate: [360, 0]
        }}
        transition={{ 
          scale: { duration: 1.5, delay: 1.8 },
          rotate: { duration: 50, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
    </>
  );
};

export default DecorativeElements;
