
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideshowControlsProps {
  onPrev: () => void;
  onNext: () => void;
  activeIndex?: number;
  totalSlides?: number;
}

const SlideshowControls = ({ 
  onPrev, 
  onNext,
  activeIndex = 0,
  totalSlides = 0
}: SlideshowControlsProps) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="flex items-center justify-center space-x-8 mb-7">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, x: -2 }}
          onClick={onPrev}
          className="bg-gradient-to-br from-amber-50 to-amber-100 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(251,191,36,0.15)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition-all duration-300 border border-amber-200/50"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, x: 2 }}
          onClick={onNext}
          className="bg-gradient-to-br from-amber-50 to-amber-100 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(251,191,36,0.15)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition-all duration-300 border border-amber-200/50"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
      
      {totalSlides > 0 && (
        <div className="flex items-center justify-center space-x-1.5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0.4,
                width: activeIndex === index ? '18px' : '5px',
                backgroundColor: activeIndex === index ? 'rgb(251 191 36)' : 'rgb(251 191 36 / 0.3)'
              }}
              transition={{ duration: 0.3 }}
              className={`h-1.5 rounded-full`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SlideshowControls;
