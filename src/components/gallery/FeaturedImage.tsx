
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
        <div className="w-full h-[400px] flex justify-center items-center bg-white">
          <img 
            src={imageSrc} 
            alt={altText}
            className="max-w-full max-h-[400px] object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={onClick}
          />
        </div>
      ) : (
        <AspectRatio ratio={16/9}>
          <img 
            src={imageSrc} 
            alt={altText}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={onClick}
          />
        </AspectRatio>
      )}
    </div>
  );
};

export default FeaturedImage;
