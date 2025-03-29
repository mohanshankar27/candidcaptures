
import { motion } from 'framer-motion';

const ShimmerEffects = () => {
  return (
    <>
      {/* Premium ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-amber-100/5 to-transparent opacity-40"></div>
      
      {/* Enhanced middle highlight effect with luxurious glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-200/20 via-amber-300/40 to-orange-200/20 blur-3xl"
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10,
          ease: "easeInOut",
        }}
      />
      
      {/* Premium shimmer layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-amber-100/10 via-orange-200/5 to-transparent"
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          y: [-5, 5, -5]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 12,
          ease: "easeInOut",
        }}
      />
      
      {/* Dynamic light reflection effect */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-y-12 blur-md"
        animate={{ 
          opacity: [0, 0.3, 0],
          x: ["-20%", "20%", "-20%"]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 8,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle gold dust effect */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/5 via-transparent to-transparent opacity-50"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 15,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default ShimmerEffects;
