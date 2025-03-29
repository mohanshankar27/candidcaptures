
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Service } from '@/data/services';

interface ExternalServiceContentProps {
  service: Service;
  serviceImageArray: string[];
}

const ExternalServiceContent: React.FC<ExternalServiceContentProps> = ({ 
  service, 
  serviceImageArray 
}) => {
  return (
    <div className="p-6 h-full flex flex-col items-center justify-center">
      <div className="mb-6 w-full overflow-hidden rounded-lg border-2 border-[#ea384c]">
        <img 
          src={serviceImageArray[0]} 
          alt={service.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
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
};

export default ExternalServiceContent;
