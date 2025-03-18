
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
        <span className="text-sm">{selectedService.name}</span>
        <Menu className="h-4 w-4" />
      </Button>
      
      {isMenuOpen && (
        <div className="mt-1 border rounded-md shadow-md bg-background max-h-[50vh] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-0.5 p-1">
            {services.map((service) => (
              <button
                key={service.name}
                className={`px-1.5 py-1 text-left rounded hover:bg-muted transition-colors text-xs ${
                  selectedService.name === service.name ? 'bg-muted font-medium' : ''
                }`}
                onClick={() => handleServiceClick(service)}
              >
                <span className="truncate">{service.name}</span>
                {service.external && <ExternalLink className="w-2.5 h-2.5 ml-1 inline-block" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileServiceMenu;
