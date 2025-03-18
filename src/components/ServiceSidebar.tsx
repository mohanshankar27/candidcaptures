
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
        <div className="p-1.5 font-medium text-xs border-b">Our Services</div>
        <div className="divide-y">
          {services.map((service) => (
            <button
              key={service.name}
              className={`flex items-center justify-between w-full p-1.5 text-left text-xs hover:bg-muted transition-colors ${
                selectedService.name === service.name ? 'bg-muted font-medium' : ''
              }`}
              onClick={() => onServiceClick(service)}
            >
              <div className="flex items-center gap-1 truncate">
                {service.icon}
                <span className="truncate">{service.name}</span>
              </div>
              {service.external ? (
                <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-2.5 h-2.5 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    </ResizablePanel>
  );
};

export default ServiceSidebar;
