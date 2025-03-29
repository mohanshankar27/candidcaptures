
import React from 'react';
import { motion } from 'framer-motion';

interface GalleryThumbnailsProps {
  images: { url: string; alt: string }[];
  current: number;
  setCurrent: (index: number) => void;
}

const GalleryThumbnails = ({ 
  images, 
  current, 
  setCurrent 
}: GalleryThumbnailsProps) => {
  return (
    <div className="flex justify-center gap-3 overflow-x-auto pb-8 max-w-4xl mx-auto">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`relative w-24 h-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all ${
            current === index 
              ? "ring-2 ring-orange-400 ring-offset-2 scale-110 z-10" 
              : "opacity-70 hover:opacity-100 filter grayscale hover:grayscale-0"
          }`}
          onClick={() => setCurrent(index)}
          whileHover={{ scale: current === index ? 1.1 : 1.08, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 17,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 opacity-50" />
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {current === index && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent"
              layoutId="activeThumbnail"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 p-1 text-white text-[10px] text-center font-medium ${
              current === index ? "opacity-100" : "opacity-0 group-hover:opacity-80"
            }`}
            initial={{ y: 10 }}
            animate={{ y: current === index ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            {index + 1}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryThumbnails;
