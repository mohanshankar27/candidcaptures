
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
    <ResizablePanel defaultSize={25} minSize={20} maxSize={30} className="border-r-0">
      <div className="h-full overflow-y-auto border-r shadow-sm bg-white/80">
        <div className="p-3 font-extrabold text-base border-b bg-white sticky top-0 text-primary">
          <span className="font-serif italic">Our Services</span>
        </div>
        <div className="divide-y">
          {services.map((service) => (
            <button
              key={service.name}
              className={`flex items-center justify-between w-full p-3 text-left text-sm hover:bg-muted transition-colors ${
                selectedService.name === service.name ? 'bg-[#003c72] font-bold text-white' : 'font-medium'
              }`}
              onClick={() => onServiceClick(service)}
            >
              <div className="truncate">
                <span>{service.name}</span>
              </div>
              {service.external ? (
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    </ResizablePanel>
  );
};

export default ServiceSidebar;
