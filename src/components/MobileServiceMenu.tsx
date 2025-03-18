
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
    <div className="md:hidden mb-3">
      <Button 
        variant="outline"
        className="flex items-center justify-between w-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="text-base font-serif italic">{selectedService.name}</span>
        <Menu className="h-5 w-5" />
      </Button>
      
      {isMenuOpen && (
        <div className="mt-1 border rounded-md shadow-md bg-background max-h-[50vh] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-0.5 p-1">
            {services.map((service) => (
              <button
                key={service.name}
                className={`px-2 py-1.5 text-left rounded hover:bg-muted transition-colors text-sm ${
                  selectedService.name === service.name ? 'bg-muted font-medium' : ''
                }`}
                onClick={() => handleServiceClick(service)}
              >
                <span className="truncate">{service.name}</span>
                {service.external && <ExternalLink className="w-3.5 h-3.5 ml-1 inline-block" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileServiceMenu;
