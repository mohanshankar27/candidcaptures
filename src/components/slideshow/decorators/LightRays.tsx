
import { motion } from 'framer-motion';

const LightRays = () => {
  return (
    <>
      <motion.div 
        className="absolute top-0 left-1/3 w-1 h-40 bg-gradient-to-b from-orange-300/40 to-transparent skew-x-12"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: 180, 
          opacity: [0, 0.7, 0.3, 0.7],
          rotateZ: [12, 18, 12]
        }}
        transition={{ 
          height: { duration: 3, delay: 2.0, ease: "easeOut" },
          opacity: { duration: 8, repeat: Infinity, repeatType: "mirror", times: [0, 0.3, 0.6, 1] },
          rotateZ: { duration: 9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute top-20 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-300/30 to-transparent -skew-x-12"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: 150, 
          opacity: [0, 0.5, 0.2, 0.5],
          rotateZ: [-12, -20, -12]
        }}
        transition={{ 
          height: { duration: 3, delay: 2.2, ease: "easeOut" },
          opacity: { duration: 10, repeat: Infinity, repeatType: "mirror", times: [0, 0.3, 0.7, 1] },
          rotateZ: { duration: 11, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute top-60 left-2/3 w-0.5 h-24 bg-gradient-to-b from-orange-200/50 to-transparent skew-x-6"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: 120, 
          opacity: [0, 0.6, 0.2, 0.6],
          rotateZ: [6, 12, 6]
        }}
        transition={{ 
          height: { duration: 3, delay: 2.4, ease: "easeOut" },
          opacity: { duration: 12, repeat: Infinity, repeatType: "mirror", times: [0, 0.4, 0.7, 1] },
          rotateZ: { duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      />
    </>
  );
};

export default LightRays;
