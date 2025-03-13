
import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { ResizablePanel } from '@/components/ui/resizable';
import { Service } from '@/data/servicesList';

interface ServiceSidebarProps {
  services: Service[];
  selectedService: Service;
  onServiceClick: (service: Service) => void;
}

const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ 
  services, 
  selectedService, 
  onServiceClick 
}) => {
  return (
    <ResizablePanel defaultSize={25} minSize={20} maxSize={30}>
      <div className="h-full overflow-y-auto border-r">
        <div className="p-4 font-semibold text-lg border-b">Our Services</div>
        <div className="divide-y">
          {services.map((service) => (
            <button
              key={service.name}
              className={`flex items-center justify-between w-full p-4 text-left hover:bg-muted transition-colors ${
                selectedService.name === service.name ? 'bg-muted font-medium' : ''
              }`}
              onClick={() => onServiceClick(service)}
            >
              <div className="flex items-center gap-2">
                {service.icon}
                <span>{service.name}</span>
              </div>
              {service.external ? (
                <ExternalLink className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>
      </div>
    </ResizablePanel>
  );
};

export default ServiceSidebar;
