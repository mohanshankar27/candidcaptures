
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardFlipProps {
  isFlipped: boolean;
  onFlip: () => void;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

const CardFlip = ({
  isFlipped,
  onFlip,
  frontContent,
  backContent,
  className
}: CardFlipProps) => {
  return (
    <div
      className={cn(
        "flip-card cursor-pointer perspective-1000 transition-transform duration-500 bg-transparent overflow-visible",
        isFlipped ? "is-flipped" : "",
        className
      )}
      onClick={onFlip}
    >
      {/* Card Inner Container - this handles the 3D rotation */}
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
        
        {/* Front of Card */}
        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-2xl border border-white/20">
          {frontContent}
        </div>
        
        {/* Back of Card */}
        <div className="flip-card-back absolute w-full h-full backface-hidden rounded-lg overflow-hidden bg-white shadow-2xl transform-rotate-y-180">
          {backContent}
        </div>
      </div>

      {/* CSS for 3D transform is added through a Style component */}
    </div>
  );
};

export default CardFlip;
