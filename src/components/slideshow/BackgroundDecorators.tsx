
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
      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    >
      {/* Premium visual layers, stacked for depth and richness */}
      <ShimmerEffects />
      <GlowElements />
      <LightRays />
      <DecorativeElements />
    </motion.div>
  );
};

export default BackgroundDecorators;
