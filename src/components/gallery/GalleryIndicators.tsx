
import React from 'react';

interface GalleryIndicatorsProps {
  images: { url: string; alt: string }[];
  current: number;
  setCurrent: (index: number) => void;
}

const GalleryIndicators = ({ 
  images, 
  current, 
  setCurrent 
}: GalleryIndicatorsProps) => {
  return (
    <div className="flex justify-center mt-4 gap-2">
      {images.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all ${
            current === index ? "bg-orange-500 w-4" : "bg-gray-300"
          }`}
          onClick={() => setCurrent(index)}
        />
      ))}
    </div>
  );
};

export default GalleryIndicators;
