
import { motion } from 'framer-motion';

const ShimmerEffects = () => {
  return (
    <>
      {/* Window-style ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-amber-100/3 to-transparent opacity-40"></div>
      
      {/* Window-style middle highlight effect with minimal movement */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-200/15 via-amber-300/25 to-orange-200/15 blur-3xl"
        animate={{ 
          opacity: [0.2, 0.23, 0.2],
          scale: [0.98, 1.01, 0.98],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 45,
          ease: "easeInOut",
        }}
      />
      
      {/* Window-style shimmer layer with minimal movement */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-amber-100/8 via-orange-200/4 to-transparent"
        animate={{ 
          opacity: [0.1, 0.12, 0.1],
          y: [-1, 1, -1]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 40,
          ease: "easeInOut",
        }}
      />
      
      {/* Window-style light reflection effect with minimal movement */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-y-12 blur-md"
        animate={{ 
          opacity: [0, 0.15, 0],
          x: ["-3%", "3%", "-3%"]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 30,
          ease: "easeInOut",
        }}
      />
      
      {/* Window-style gold dust effect with minimal pulsing */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/3 via-transparent to-transparent opacity-50"
        animate={{ 
          opacity: [0.3, 0.32, 0.3],
          scale: [1, 1.005, 1]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 45,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default ShimmerEffects;
