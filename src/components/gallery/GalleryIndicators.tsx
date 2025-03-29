
import React from 'react';
import { motion } from 'framer-motion';

interface GalleryIndicatorsProps {
  images: { url: string; alt: string }[];
  current: number;
  setCurrent: (index: number) => void;
}

const GalleryIndicators = ({
  images,
  current,
  setCurrent,
}: GalleryIndicatorsProps) => {
  return (
    <div className="flex justify-center gap-3 mb-8">
      {images.map((_, index) => (
        <button
          key={index}
          className="group focus:outline-none"
          onClick={() => setCurrent(index)}
          aria-label={`Go to slide ${index + 1}`}
        >
          <div className="relative h-2.5 w-8 overflow-hidden rounded-full bg-gradient-to-r from-orange-100 to-orange-200 shadow-sm">
            <motion.div
              className="absolute inset-0 origin-left bg-gradient-to-r from-orange-400 to-orange-600"
              initial={false}
              animate={{
                scaleX: current === index ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1],
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default GalleryIndicators;
