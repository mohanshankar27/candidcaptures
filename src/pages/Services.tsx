import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/components/ui/resizable';
import ServiceSidebar from '@/components/ServiceSidebar';
import MobileServiceMenu from '@/components/MobileServiceMenu';
import servicesList, { Service } from '@/data/servicesList';
import { List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServicesLoading from '@/components/ServicesLoading';
import { preloadCriticalImages, deferNonCriticalJS } from '@/utils/performance';
import { criticalImages } from '@/components/slideshow/serviceImages';
import PricePackages from '@/components/PricePackages';

const ServiceContent = lazy(() => import('@/components/ServiceContent'));
const ServicesFAQ = lazy(() => import('@/components/ServicesFAQ'));

const SimpleLoadingState = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const Services = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<Service>(servicesList[0]);
  const [viewMode, setViewMode] = useState<'detailed'>('detailed');
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    
    preloadCriticalImages(criticalImages);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      const loadTime = performance.now() - startTime;
      if (process.env.NODE_ENV === 'development') {
        console.info(`Services initial render: ${loadTime.toFixed(0)}ms`);
      }
    }, 200);
    
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    
    deferNonCriticalJS(() => {
      setContentLoaded(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      const serviceName = location.state.selectedService;
      const matchingService = servicesList.find(service => service.name === serviceName);
      
      if (matchingService) {
        setSelectedService(matchingService);
      }
    }
  }, [location.state]);

  const handleServiceClick = (service: Service) => {
    if (service.external && service.href) {
      window.open(service.href, '_blank', 'noopener,noreferrer');
      return;
    }
    
    setSelectedService(service);
    
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      
      <div className="flex-1 pt-16 pb-8 w-full">
        <div className="w-full mx-0 px-0">
          <div className="flex justify-between items-center mb-3 px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003c72]">
              {selectedService.name}
            </h1>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="ml-auto"
                aria-label="View details"
              >
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {isLoading ? (
            <ServicesLoading />
          ) : (
            <>
              <div className="px-4 animate-fade-in">
                <MobileServiceMenu 
                  services={servicesList} 
                  selectedService={selectedService} 
                  onServiceClick={handleServiceClick} 
                />
              </div>
              
              <div className="hidden md:block w-full animate-fade-in">
                <ResizablePanelGroup 
                  direction="horizontal" 
                  className="min-h-[calc(100vh-200px)] w-full overflow-hidden"
                >
                  <ServiceSidebar 
                    services={servicesList} 
                    selectedService={selectedService} 
                    onServiceClick={handleServiceClick} 
                  />
                  
                  <ResizableHandle withHandle />
                  
                  <ResizablePanel defaultSize={75} minSize={60}>
                    <div className="h-full overflow-y-auto px-4">
                      <Suspense fallback={<SimpleLoadingState />}>
                        <ServiceContent service={selectedService} />
                      </Suspense>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
              
              <div className="md:hidden mt-4 px-4 animate-fade-in">
                <Suspense fallback={<SimpleLoadingState />}>
                  <ServiceContent service={selectedService} />
                </Suspense>
              </div>
            </>
          )}
          
          {!isLoading && (
            <div className="px-4 mt-8 animate-fade-in">
              <PricePackages />
            </div>
          )}
          
          {!isLoading && contentLoaded && (
            <div className="px-4 mt-8 mb-8 animate-fade-in">
              <Suspense fallback={<SimpleLoadingState />}>
                <ServicesFAQ />
              </Suspense>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
