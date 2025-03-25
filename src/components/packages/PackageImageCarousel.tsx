
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { isImageCritical } from '@/components/slideshow/serviceImages';

interface PackageImageCarouselProps {
  images: string[];
  altPrefix?: string;
}

const PackageImageCarousel: React.FC<PackageImageCarouselProps> = ({ 
  images, 
  altPrefix = "Package image" 
}) => {
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null);

  const openImageView = (index: number) => {
    setEnlargedImageIndex(index);
  };

  const closeImageView = () => {
    setEnlargedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (enlargedImageIndex === null) return;
    
    if (direction === 'prev') {
      setEnlargedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex - 1 + images.length) % images.length;
      });
    } else {
      setEnlargedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex + 1) % images.length;
      });
    }
  };

  return (
    <div className="mb-10 relative">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => {
            const isCritical = isImageCritical(image);
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div 
                    className="overflow-hidden rounded-xl h-52 md:h-64 lg:h-72 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => openImageView(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${altPrefix} ${index + 1}`}
                      loading={isCritical || index < 2 ? "eager" : "lazy"}
                      decoding={isCritical || index < 2 ? "sync" : "async"}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
          <CarouselNext className="bg-white shadow-md hover:bg-slate-50" />
        </div>
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
          <CarouselPrevious className="bg-white shadow-md hover:bg-slate-50" />
        </div>
      </Carousel>

      {/* Enlarged Image View - Only render when needed */}
      {enlargedImageIndex !== null && (
        <Dialog open={enlargedImageIndex !== null} onOpenChange={closeImageView}>
          <DialogContent className="max-w-5xl p-0 border-4 border-orange-400 bg-black" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[80vh]">
              <img 
                src={images[enlargedImageIndex]} 
                alt={`${altPrefix} ${enlargedImageIndex + 1}`} 
                className="w-full h-full object-contain"
              />
              
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeImageView}
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === enlargedImageIndex ? 'bg-orange-400' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PackageImageCarousel;
