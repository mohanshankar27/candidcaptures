
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

interface PackageImageCarouselProps {
  images: string[];
  altPrefix?: string;
}

const PackageImageCarousel: React.FC<PackageImageCarouselProps> = ({ 
  images, 
  altPrefix = "Package image" 
}) => {
  return (
    <div className="mb-10 relative">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="overflow-hidden rounded-xl h-52 md:h-64 lg:h-72 shadow-md hover:shadow-lg transition-all duration-300">
                  <img 
                    src={image} 
                    alt={`${altPrefix} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
          <CarouselNext className="bg-white shadow-md hover:bg-slate-50" />
        </div>
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
          <CarouselPrevious className="bg-white shadow-md hover:bg-slate-50" />
        </div>
      </Carousel>
    </div>
  );
};

export default PackageImageCarousel;
