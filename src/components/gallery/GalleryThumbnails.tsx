
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
    <div className="flex justify-center gap-3 overflow-x-auto pb-6 max-w-4xl mx-auto">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`relative w-20 h-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg shadow-md transition-all ${
            current === index ? "ring-2 ring-orange-400 ring-offset-2" : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setCurrent(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {current === index && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-orange-400/30 to-transparent"
              layoutId="activeThumbnail"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryThumbnails;
