
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GalleryControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const GalleryControls = ({ onPrev, onNext }: GalleryControlsProps) => {
  return (
    <>
      <motion.button 
        onClick={onPrev}
        className={cn(
          "absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-primary p-3 rounded-full z-10",
          "hover:bg-white shadow-lg transition-all duration-200 group",
          "focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
        )}
        whileHover={{ scale: 1.05, x: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button 
        onClick={onNext}
        className={cn(
          "absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-primary p-3 rounded-full z-10",
          "hover:bg-white shadow-lg transition-all duration-200 group",
          "focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
        )}
        whileHover={{ scale: 1.05, x: 2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </>
  );
};

export default GalleryControls;
