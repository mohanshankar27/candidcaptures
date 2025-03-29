
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface FeaturedImageProps {
  imageSrc: string;
  altText: string;
  isFashionService: boolean;
  onClick: () => void;
}

const FeaturedImage: React.FC<FeaturedImageProps> = ({ 
  imageSrc, 
  altText, 
  isFashionService, 
  onClick 
}) => {
  return (
    <div className="mb-6 w-full overflow-hidden rounded-lg">
      {isFashionService ? (
        <div className="w-full flex justify-center items-center bg-white rounded-lg p-4">
          <img 
            src={imageSrc} 
            alt={altText}
            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer rounded-lg"
            onClick={onClick}
          />
        </div>
      ) : (
        <AspectRatio ratio={16/9}>
          <img 
            src={imageSrc} 
            alt={altText}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer rounded-lg"
            onClick={onClick}
          />
        </AspectRatio>
      )}
    </div>
  );
};

export default FeaturedImage;
