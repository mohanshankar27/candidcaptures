
import React from 'react';
import WeddingSlideshow from '@/components/WeddingSlideshow';
import { Service } from '@/data/services';
import ServiceGallery from '@/components/ServiceGallery';
import ArtistsCelebritiesGallery from '@/components/ArtistsCelebritiesGallery';
import ExternalServiceContent from '@/components/services/ExternalServiceContent';
import EventServiceContent from '@/components/services/EventServiceContent';
import { getServiceImages } from '@/components/services/ServiceImageProvider';

interface ServiceContentProps {
  service: Service;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  const isWeddingService = service.name === 'Wedding Photography';
  const isEventService = service.name === 'Event Photography';
  
  const serviceImageArray = getServiceImages(service);
  
  // Handle external services
  if (service.external) {
    return <ExternalServiceContent service={service} serviceImageArray={serviceImageArray} />;
  }

  // Handle Artists / Celebrities service
  if (service.name === 'Artists / Celebrities') {
    return <ArtistsCelebritiesGallery service={service} />;
  }

  // Handle Event Photography
  if (isEventService) {
    return <EventServiceContent service={service} serviceImageArray={serviceImageArray} />;
  }

  // Handle regular services
  return (
    <>
      <ServiceGallery service={service} images={serviceImageArray} />
      {isWeddingService && <WeddingSlideshow />}
    </>
  );
};

export default ServiceContent;
