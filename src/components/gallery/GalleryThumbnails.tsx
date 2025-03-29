
import React from 'react';

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
    <div className="flex justify-center gap-2 overflow-x-auto pb-4 max-w-4xl mx-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-20 h-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-all ${
            current === index ? "border-orange-500" : "border-transparent"
          }`}
          onClick={() => setCurrent(index)}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryThumbnails;
