
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GalleryImageGridProps {
  images: string[];
  serviceName: string;
  isFashionService: boolean;
  onImageClick: (index: number) => void;
}

const GalleryImageGrid: React.FC<GalleryImageGridProps> = ({
  images, 
  serviceName,
  isFashionService,
  onImageClick
}) => {
  return (
    <div className={`grid ${isFashionService ? 'grid-cols-2 sm:grid-cols-3 gap-6' : 'grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3'}`}>
      {images.map((image, index) => (
        <div 
          key={index} 
          className="overflow-hidden rounded-lg cursor-pointer bg-muted"
          onClick={() => onImageClick(index)}
        >
          {isFashionService ? (
            <div className="h-auto w-full flex items-center justify-center bg-white p-4 rounded-lg">
              <img 
                src={image} 
                alt={`${serviceName} ${index + 1}`} 
                className="w-auto h-auto max-h-[300px] object-contain transition-transform duration-300 hover:scale-110 rounded-lg"
                style={{ maxWidth: '100%' }}
              />
            </div>
          ) : (
            <AspectRatio ratio={1}>
              <img 
                src={image} 
                alt={`${serviceName} ${index + 1}`} 
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 rounded-lg"
              />
            </AspectRatio>
          )}
        </div>
      ))}
    </div>
  );
};

export default GalleryImageGrid;
