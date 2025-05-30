
import React, { useState } from 'react';
import { Menu, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Service } from '@/data/services';
import { motion, AnimatePresence } from 'framer-motion';

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
    // Scroll to top when selecting a service
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="md:hidden mb-4 shadow-sm w-full rounded-lg overflow-hidden">
      <div className="text-center py-3 mb-3 bg-gradient-to-r from-amber-100/50 to-amber-50/30 backdrop-blur-sm border-b border-amber-100/40">
        <span className="text-3xl font-bold font-arjulian text-[#003c72]">Our Services</span>
      </div>
      <motion.div
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Button 
          variant="outline"
          className="flex items-center justify-between w-full p-4 rounded-none border-x-0 shadow-sm touch-action-manipulation bg-white/90 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-xl font-bold font-arjulian text-[#003c72]">{selectedService.name}</span>
          {isMenuOpen ? 
            <ChevronUp className="h-5 w-5 text-primary" /> : 
            <ChevronDown className="h-5 w-5 text-primary" />
          }
        </Button>
      </motion.div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border rounded-md shadow-md bg-white max-h-[60vh] overflow-y-auto w-full">
              <div className="grid grid-cols-2 gap-0 w-full">
                {services.map((service) => (
                  <motion.button
                    key={service.name}
                    whileTap={{ scale: 0.97, backgroundColor: 'rgba(251,191,36,0.08)' }}
                    className={`px-4 py-3.5 text-left border-b hover:bg-amber-50/50 transition-colors text-base font-arjulian touch-action-manipulation ${
                      selectedService.name === service.name ? 'font-bold text-[#003c72] bg-amber-50/80' : 'font-medium'
                    }`}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="truncate">{service.name}</span>
                      {service.external && <ExternalLink className="w-3.5 h-3.5 inline-block" />}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileServiceMenu;
