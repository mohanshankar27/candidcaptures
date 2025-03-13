
import React from 'react';
import { ExternalLink } from 'lucide-react';
import WeddingSlideshow from '@/components/WeddingSlideshow';
import { Service } from '@/data/servicesList';

interface ServiceContentProps {
  service: Service;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  const isWeddingService = service.name === 'Wedding Photography';
  
  if (service.external) {
    return (
      <div className="p-6 h-full flex flex-col items-center justify-center">
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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        {service.icon}
        <span>{service.name}</span>
      </h2>
      <p className="mb-8">{service.description}</p>

      {isWeddingService && <WeddingSlideshow />}
      
      {service.benefits && (
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4">What's Included</h3>
          <ul className="list-disc pl-5 space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}
      
      {service.pricing && (
        <div>
          <h3 className="text-xl font-medium mb-2">Pricing</h3>
          <p className="bg-secondary/30 p-4 rounded-md inline-block">{service.pricing}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceContent;
