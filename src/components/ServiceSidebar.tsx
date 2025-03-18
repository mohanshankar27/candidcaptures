
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
        <div className="p-2 font-semibold text-sm border-b">Our Services</div>
        <div className="divide-y">
          {services.map((service) => (
            <button
              key={service.name}
              className={`flex items-center justify-between w-full p-2 text-left text-sm hover:bg-muted transition-colors ${
                selectedService.name === service.name ? 'bg-muted font-medium' : ''
              }`}
              onClick={() => onServiceClick(service)}
            >
              <div className="flex items-center gap-1.5 truncate">
                {service.icon}
                <span className="truncate">{service.name}</span>
              </div>
              {service.external ? (
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    </ResizablePanel>
  );
};

export default ServiceSidebar;
