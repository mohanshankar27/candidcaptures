
import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '@/data/services';
import MobileServiceMenu from '@/components/MobileServiceMenu';
import ServiceSidebar from '@/components/ServiceSidebar';
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/components/ui/resizable';

// Import components using lazy loading
const ServiceContent = lazy(() => import('@/components/ServiceContent'));
const ServicesGrid = lazy(() => import('@/components/services/ServicesGrid'));

// Simple loading fallback
const SimpleFallback = () => (
  <div className="animate-pulse flex flex-col space-y-4 p-4">
    <div className="h-6 bg-slate-200 rounded w-3/4"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-40 bg-slate-200 rounded"></div>
      ))}
    </div>
  </div>
);

interface ServicesContentWrapperProps {
  viewMode: 'detailed' | 'grid';
  services: Service[];
  selectedService: Service;
  onServiceClick: (service: Service) => void;
  isMobile: boolean;
}

const ServicesContentWrapper: React.FC<ServicesContentWrapperProps> = ({
  viewMode,
  services,
  selectedService,
  onServiceClick,
  isMobile
}) => {
  return (
    <Suspense fallback={<SimpleFallback />}>
      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-sm border border-amber-100/20 mx-3 sm:mx-4 animate-fade-in"
          >
            <ServicesGrid services={services} onServiceClick={onServiceClick} />
          </motion.div>
        ) : (
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
        )}
      </AnimatePresence>
    </Suspense>
  );
};

export default ServicesContentWrapper;
