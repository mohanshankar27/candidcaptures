
import React, { useState } from 'react';
import { Menu, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Service } from '@/data/servicesList';

interface MobileServiceMenuProps {
  services: Service[];
  selectedService: Service;
  onServiceClick: (service: Service) => void;
}

const MobileServiceMenu: React.FC<MobileServiceMenuProps> = ({ 
  services, 
  selectedService, 
  onServiceClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    onServiceClick(service);
    setIsMenuOpen(false);
  };

  return (
    <div className="md:hidden mb-4 shadow-sm w-full">
      <div className="text-center py-3 mb-3">
        <span className="text-2xl font-bold font-serif italic text-[#003c72]">Our Services</span>
      </div>
      <Button 
        variant="outline"
        className="flex items-center justify-between w-full p-3"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="text-lg font-bold font-serif italic text-[#003c72]">{selectedService.name}</span>
        <Menu className="h-5 w-5" />
      </Button>
      
      {isMenuOpen && (
        <div className="mt-1 border rounded-md shadow-md bg-background max-h-[60vh] overflow-y-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-full">
            {services.map((service) => (
              <button
                key={service.name}
                className={`px-4 py-3 text-left border-b hover:bg-muted transition-colors text-base ${
                  selectedService.name === service.name ? 'font-bold text-[#003c72]' : 'font-medium'
                }`}
                onClick={() => handleServiceClick(service)}
              >
                <span className="truncate font-serif italic">{service.name}</span>
                {service.external && <ExternalLink className="w-4 h-4 ml-1 inline-block" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileServiceMenu;
