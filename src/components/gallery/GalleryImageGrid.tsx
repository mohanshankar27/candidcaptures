
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
  // Calculate image styling based on service type
  const imageObjectFit = isFashionService ? 'object-contain' : 'object-contain';
  const imageHeight = isFashionService ? 'h-auto max-h-[130px]' : '';
  
  return (
    <div className={`grid ${isFashionService ? 'grid-cols-3 sm:grid-cols-5 gap-4' : 'grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3'}`}>
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`overflow-hidden rounded-lg cursor-pointer bg-muted border-2 border-orange-300 ${imageHeight}`}
          onClick={() => onImageClick(index)}
        >
          {isFashionService ? (
            <AspectRatio ratio={3/4} className="max-w-[120px] mx-auto">
              <img 
                src={image} 
                alt={`${serviceName} ${index + 1}`} 
                className={`w-full h-full ${imageObjectFit} transition-transform duration-300 hover:scale-110`}
              />
            </AspectRatio>
          ) : (
            <img 
              src={image} 
              alt={`${serviceName} ${index + 1}`} 
              className={`w-full h-full ${imageObjectFit} transition-transform duration-300 hover:scale-110`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default GalleryImageGrid;
