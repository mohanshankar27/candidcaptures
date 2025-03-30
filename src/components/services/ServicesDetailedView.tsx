
import React from 'react';
import { lazy } from 'react';
import { motion } from 'framer-motion';
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/components/ui/resizable';
import ServiceSidebar from '@/components/ServiceSidebar';
import MobileServiceMenu from '@/components/MobileServiceMenu';
import { Service } from '@/data/services';

const ServiceContent = lazy(() => import('@/components/ServiceContent'));

interface ServicesDetailedViewProps {
  services: Service[];
  selectedService: Service;
  onServiceClick: (service: Service) => void;
  isMobile: boolean;
}

const ServicesDetailedView: React.FC<ServicesDetailedViewProps> = ({
  services,
  selectedService,
  onServiceClick,
  isMobile
}) => {
  return (
    <motion.div
      key="detailed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-3 sm:px-4 animate-fade-in">
        <MobileServiceMenu 
          services={services} 
          selectedService={selectedService} 
          onServiceClick={onServiceClick} 
        />
      </div>
      
      <div className="hidden md:block w-full animate-fade-in">
        <ResizablePanelGroup 
          direction="horizontal" 
          className="min-h-[calc(100vh-200px)] w-full overflow-hidden"
        >
          <ServiceSidebar 
            services={services} 
            selectedService={selectedService} 
            onServiceClick={onServiceClick} 
          />
          
          <ResizableHandle withHandle />
          
          <ResizablePanel defaultSize={75} minSize={60}>
            <div className="h-full overflow-y-auto px-4">
              <ServiceContent service={selectedService} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
      <div className="md:hidden mt-2 px-3 sm:px-4 animate-fade-in">
        <ServiceContent service={selectedService} />
      </div>
    </motion.div>
  );
};

export default ServicesDetailedView;
