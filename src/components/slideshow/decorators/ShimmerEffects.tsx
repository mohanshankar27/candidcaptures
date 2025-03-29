
import { motion } from 'framer-motion';

const ShimmerEffects = () => {
  return (
    <>
      {/* Premium ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-amber-100/5 to-transparent opacity-40"></div>
      
      {/* Enhanced middle highlight effect with smoother transitions */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-200/20 via-amber-300/40 to-orange-200/20 blur-3xl"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [0.95, 1.03, 0.95],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 30,
          ease: "easeInOut",
        }}
      />
      
      {/* Premium shimmer layer with gentler movement */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-amber-100/10 via-orange-200/5 to-transparent"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          y: [-3, 3, -3]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 28,
          ease: "easeInOut",
        }}
      />
      
      {/* Dynamic light reflection effect with smoother animation */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-y-12 blur-md"
        animate={{ 
          opacity: [0, 0.25, 0],
          x: ["-8%", "8%", "-8%"]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 18,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle gold dust effect with smoother pulsing */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/5 via-transparent to-transparent opacity-50"
        animate={{ 
          opacity: [0.3, 0.45, 0.3],
          scale: [1, 1.015, 1]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", 
          duration: 32,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default ShimmerEffects;
