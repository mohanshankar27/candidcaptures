
import { motion } from 'framer-motion';

const LightRays = () => {
  return (
    <>
      <motion.div 
        className="absolute top-0 left-1/3 w-1 h-40 bg-gradient-to-b from-orange-300/40 to-transparent skew-x-12"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: 160, 
          opacity: 0.7,
          rotateZ: [12, 15, 12]
        }}
        transition={{ 
          height: { duration: 2, delay: 2.0 },
          opacity: { duration: 2, delay: 2.0 },
          rotateZ: { duration: 6, repeat: Infinity, repeatType: "reverse" }
        }}
      />
      <motion.div 
        className="absolute top-20 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-300/30 to-transparent -skew-x-12"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: 128, 
          opacity: 0.5,
          rotateZ: [-12, -15, -12]
        }}
        transition={{ 
          height: { duration: 2, delay: 2.2 },
          opacity: { duration: 2, delay: 2.2 },
          rotateZ: { duration: 7, repeat: Infinity, repeatType: "reverse" }
        }}
      />
    </>
  );
};

export default LightRays;
