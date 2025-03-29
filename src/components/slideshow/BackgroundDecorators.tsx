
import { motion } from 'framer-motion';
import GlowElements from './decorators/GlowElements';
import DecorativeElements from './decorators/DecorativeElements';
import ShimmerEffects from './decorators/ShimmerEffects';
import LightRays from './decorators/LightRays';

const BackgroundDecorators = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
      {/* Premium visual elements, grouped by type */}
      <GlowElements />
      <DecorativeElements />
      <ShimmerEffects />
      <LightRays />
    </div>
  );
};

export default BackgroundDecorators;
