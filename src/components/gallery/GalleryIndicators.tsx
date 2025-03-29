
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
    <div className="flex justify-center gap-2 mb-6">
      {images.map((_, index) => (
        <button
          key={index}
          className="group focus:outline-none"
          onClick={() => setCurrent(index)}
          aria-label={`Go to slide ${index + 1}`}
        >
          <div className="relative h-2 w-6 overflow-hidden rounded-full bg-orange-100">
            <motion.div
              className="absolute inset-0 origin-left bg-gradient-to-r from-orange-400 to-orange-500"
              initial={false}
              animate={{
                scaleX: current === index ? 1 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
              }}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default GalleryIndicators;
