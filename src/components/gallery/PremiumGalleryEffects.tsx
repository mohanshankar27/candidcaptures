
import React from 'react';
import { motion } from 'framer-motion';

// This component adds luxury visual effects to the gallery section
const PremiumGalleryEffects: React.FC = () => {
  return (
    <>
      {/* Floating light particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300/20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, `-${Math.random() * 20 + 10}%`],
              opacity: [null, Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <motion.div
          className="absolute -inset-[10%] bg-gradient-radial from-amber-200/5 via-transparent to-transparent"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Bottom accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </>
  );
};

export default PremiumGalleryEffects;
