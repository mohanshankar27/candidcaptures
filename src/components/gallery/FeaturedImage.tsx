
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
    <div className="mb-6 w-full overflow-hidden rounded-lg border-2 border-orange-400">
      <AspectRatio ratio={isFashionService ? 3/4 : 16/9} className={isFashionService ? 'max-w-[160px] mx-auto' : ''}>
        <img 
          src={imageSrc} 
          alt={altText}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={onClick}
        />
      </AspectRatio>
    </div>
  );
};

export default FeaturedImage;
