
import React, { useState, useEffect } from 'react';
import { Service } from '@/data/services';
import FeaturedImage from './gallery/FeaturedImage';
import ServiceBenefits from './gallery/ServiceBenefits';
import GalleryImageGrid from './gallery/GalleryImageGrid';
import GallerySlideshow from './gallery/GallerySlideshow';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceGalleryProps {
  service: Service;
  images: string[];
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ service, images }) => {
  // Limit to 6 images
  const limitedImages = images.slice(0, 6);
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const isFashionService = service.name === 'Fashion Photography';
  const isMobile = useIsMobile();
  
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
    <div className={`p-2 ${isMobile ? 'px-2' : 'p-4 md:p-6'} h-full overflow-y-auto`}>
      <h2 className="text-2xl font-semibold mb-4 font-akaya text-center md:text-left text-primary">
        <span>{service.name}</span>
      </h2>
      
      {/* Featured hero image */}
      <FeaturedImage 
        imageSrc={limitedImages[0]} 
        altText={`${service.name} featured`}
        isFashionService={isFashionService}
        onClick={() => handleImageClick(0)}
      />
      
      {/* Service description and benefits */}
      <ServiceBenefits 
        description={service.description}
        benefits={service.benefits || []}
      />
      
      <h3 className="text-xl font-medium mb-3 font-akaya text-center md:text-left text-primary/90 mt-6">
        {service.name} Showcase
      </h3>
      
      {/* Gallery grid */}
      <GalleryImageGrid 
        images={limitedImages.slice(1)}
        serviceName={service.name}
        isFashionService={isFashionService}
        onImageClick={(index) => handleImageClick(index + 1)}
      />
      
      {service.pricing && (
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-2 font-akaya text-center md:text-left text-primary/90">Pricing</h3>
          <p className="bg-secondary/30 p-4 rounded-md inline-block border-l-4 border-orange-400">{service.pricing}</p>
        </div>
      )}

      {/* Image slideshow dialog */}
      {enlargedImageIndex !== null && (
        <GallerySlideshow
          isOpen={enlargedImageIndex !== null}
          onClose={handleClose}
          currentIndex={enlargedImageIndex}
          images={limitedImages}
          serviceName={service.name}
          onNavigate={navigateImage}
        />
      )}
    </div>
  );
};

export default ServiceGallery;
