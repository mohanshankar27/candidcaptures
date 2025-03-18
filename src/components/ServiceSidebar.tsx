
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
  const handleServiceClick = (service: Service) => {
    onServiceClick(service);
    // Scroll to top when selecting a service
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ResizablePanel defaultSize={25} minSize={20} maxSize={30} className="border-r-0">
      <div className="h-full overflow-y-auto border-r shadow-sm bg-white/80">
        <div className="p-3 font-bold text-xl border-b bg-white sticky top-0 text-center">
          <span className="font-akaya text-[#003c72] text-3xl">Our Services</span>
        </div>
        <div className="divide-y">
          {services.map((service) => (
            <button
              key={service.name}
              className={`flex items-center justify-between w-full p-3 text-left text-base hover:bg-muted transition-colors font-akaya ${
                selectedService.name === service.name ? 'font-bold text-[#003c72]' : 'font-medium'
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <div className="truncate">
                <span>{service.name}</span>
              </div>
              {service.external ? (
                <ExternalLink className="w-5 h-5 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    </ResizablePanel>
  );
};

export default ServiceSidebar;
