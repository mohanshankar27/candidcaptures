
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Service } from '@/data/servicesList';
import ServiceGallery from '@/components/ServiceGallery';
import ArtistsCelebritiesGallery from '@/components/ArtistsCelebritiesGallery';
import { getServiceGallery } from '@/components/slideshow/serviceImages';

// Lazy-load components that aren't needed immediately
const WeddingSlideshow = React.lazy(() => import('@/components/WeddingSlideshow'));

interface ServiceContentProps {
  service: Service;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  const isWeddingService = service.name === 'Wedding Photography';
  const isCorporateHeadshots = service.name === 'Corporate Headshots';
  const [shouldLoadSlideshow, setShouldLoadSlideshow] = useState(false);
  
  // Get images for this service from our centralized image management
  const serviceImageArray = getServiceGallery(service.name);
  
  // Delay loading of wedding slideshow component
  useEffect(() => {
    if (isWeddingService) {
      const timer = setTimeout(() => {
        setShouldLoadSlideshow(true);
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

  // Use our ServiceGallery component for all other regular services
  return (
    <>
      <ServiceGallery service={service} images={serviceImageArray} />
      {isWeddingService && shouldLoadSlideshow && (
        <React.Suspense fallback={<div className="w-full h-40 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>}>
          <WeddingSlideshow />
        </React.Suspense>
      )}
    </>
  );
};

export default ServiceContent;
