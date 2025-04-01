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
  return <div className={`grid ${isFashionService ? 'grid-cols-2 sm:grid-cols-3 gap-6' : 'grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3'}`}>
      {images.map((image, index) => <div key={index} className="overflow-hidden rounded-lg cursor-pointer bg-muted" onClick={() => onImageClick(index)}>
          <AspectRatio ratio={1}>
            
          </AspectRatio>
        </div>)}
    </div>;
};
export default GalleryImageGrid;