
import { motion } from 'framer-motion';
import GlowElements from './decorators/GlowElements';
import DecorativeElements from './decorators/DecorativeElements';
import ShimmerEffects from './decorators/ShimmerEffects';
import LightRays from './decorators/LightRays';

const BackgroundDecorators = () => {
  return (
    <motion.div 
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 2.5, 
        ease: "easeOut", 
        delay: 0.3 
      }}
    >
      {/* Subtle, stable background visual elements */}
      <ShimmerEffects />
      <GlowElements />
      <LightRays />
      <DecorativeElements />
    </motion.div>
  );
};

export default BackgroundDecorators;
