
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
    <div className="mt-10 flex flex-col items-center">
      <div className="flex items-center justify-center space-x-6 mb-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1, x: -5 }}
          onClick={onPrev}
          className="bg-white/90 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm hover:bg-white transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1, x: 5 }}
          onClick={onNext}
          className="bg-white/90 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm hover:bg-white transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
      
      {totalSlides > 0 && (
        <div className="flex items-center justify-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0.4,
                width: activeIndex === index ? '24px' : '8px'
              }}
              transition={{ duration: 0.3 }}
              className={`h-2 rounded-full bg-orange-400`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SlideshowControls;
