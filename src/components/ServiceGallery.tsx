
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Service } from '@/data/services';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ServiceGalleryProps {
  service: Service;
  images: string[];
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ service, images }) => {
  // Limit to 6 images
  const limitedImages = images.slice(0, 6);
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  
  useEffect(() => {
    let slideshowInterval: NodeJS.Timeout | null = null;
    
    if (isSlideshow && enlargedImageIndex !== null) {
      slideshowInterval = setInterval(() => {
        setEnlargedImageIndex((prevIndex) => {
          if (prevIndex === null) return null;
          return (prevIndex + 1) % limitedImages.length;
        });
      }, 3000); // Change image every 3 seconds
    }
    
    return () => {
      if (slideshowInterval) clearInterval(slideshowInterval);
    };
  }, [isSlideshow, enlargedImageIndex, limitedImages.length]);
  
  const handleImageClick = (index: number) => {
    setEnlargedImageIndex(index);
    setIsSlideshow(true);
  };
  
  const handleClose = () => {
    setEnlargedImageIndex(null);
    setIsSlideshow(false);
  };
  
  const navigateImage = (direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (enlargedImageIndex === null) return;
    
    if (direction === 'prev') {
      setEnlargedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex - 1 + limitedImages.length) % limitedImages.length;
      });
    } else {
      setEnlargedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex + 1) % limitedImages.length;
      });
    }
  };
  
  return (
    <div className="p-4 md:p-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">
        <span>{service.name}</span>
      </h2>
      
      {/* Featured hero image - with natural aspect ratio */}
      <div className="mb-6 w-full overflow-hidden rounded-lg border-2 border-orange-400">
        <img 
          src={limitedImages[0]} 
          alt={`${service.name} featured`}
          className="w-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => handleImageClick(0)}
        />
      </div>
      
      <div className="mb-6">
        <p className="text-lg mb-6">{service.description}</p>
        
        {service.benefits && (
          <Card className="mb-8 bg-secondary/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">What's Included</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
      
      <h3 className="text-xl font-medium mb-3">{service.name} Showcase</h3>
      
      {/* Gallery grid with natural aspect ratio preserving */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
        {limitedImages.slice(1).map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg cursor-pointer bg-muted border-2 border-orange-300"
            onClick={() => handleImageClick(index + 1)}
          >
            <img 
              src={image} 
              alt={`${service.name} ${index + 1}`} 
              className="w-full h-auto object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
      
      {service.pricing && (
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-2">Pricing</h3>
          <p className="bg-secondary/30 p-4 rounded-md inline-block border-l-4 border-orange-400">{service.pricing}</p>
        </div>
      )}

      {/* Image slideshow dialog - preserving original aspect ratio */}
      {enlargedImageIndex !== null && (
        <Dialog open={enlargedImageIndex !== null} onOpenChange={handleClose}>
          <DialogContent className="max-w-5xl p-0 border-4 border-orange-400 bg-black" onClick={e => e.stopPropagation()}>
            <div className="relative w-full h-[80vh] flex items-center justify-center">
              <img 
                src={limitedImages[enlargedImageIndex]} 
                alt="Enlarged view" 
                className="max-w-full max-h-full object-contain"
              />
              
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={handleClose}
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => navigateImage('prev', e)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => navigateImage('next', e)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {limitedImages.map((_, index) => (
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

export default ServiceGallery;
