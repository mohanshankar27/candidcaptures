
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Service } from '@/data/servicesList';
import ServiceGallery from '@/components/ServiceGallery';
import ArtistsCelebritiesGallery from '@/components/ArtistsCelebritiesGallery';
import { getServiceGallery } from '@/components/slideshow/serviceImages';
import CorporateHeadshotsFAQ from '@/components/CorporateHeadshotsFAQ';
import WeddingSlideshow from '@/components/WeddingSlideshow'; // Import directly instead of lazy-loading

interface ServiceContentProps {
  service: Service;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  const isWeddingService = service.name === 'Wedding Photography';
  const isCorporateHeadshots = service.name === 'Corporate Headshots';
  const [shouldShowSlideshow, setShouldShowSlideshow] = useState(false);
  
  // Get images for this service from our centralized image management
  const serviceImageArray = getServiceGallery(service.name);
  
  // Delay showing of wedding slideshow component for better performance
  useEffect(() => {
    if (isWeddingService) {
      const timer = setTimeout(() => {
        setShouldShowSlideshow(true);
      }, 500); // Delay loading by 500ms
      
      return () => clearTimeout(timer);
    }
  }, [isWeddingService]);

  if (service.external) {
    return (
      <div className="p-6 h-full flex flex-col items-center justify-center">
        <div className="mb-6 w-full overflow-hidden rounded-lg border-2 border-[#ea384c]">
          <img 
            src={serviceImageArray[0]} 
            alt={service.name}
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
            width="800" 
            height="600"
          />
        </div>
        <p className="text-center mb-4">{service.description}</p>
        <a 
          href={service.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          View Gallery <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  // Check if this is the special Artists / Celebrities service
  if (service.name === 'Artists / Celebrities') {
    return <ArtistsCelebritiesGallery service={service} />;
  }

  return (
    <>
      <ServiceGallery service={service} images={serviceImageArray} />
      {isWeddingService && shouldShowSlideshow && (
        <WeddingSlideshow autoplay={true} interval={3000} />
      )}
      
      {isCorporateHeadshots && (
        <div className="mt-12">
          <CorporateHeadshotsFAQ />
        </div>
      )}
    </>
  );
};

export default ServiceContent;
