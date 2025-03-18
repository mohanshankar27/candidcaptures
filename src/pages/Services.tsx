
import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/components/ui/resizable';
import ServiceSidebar from '@/components/ServiceSidebar';
import MobileServiceMenu from '@/components/MobileServiceMenu';
import servicesList, { Service } from '@/data/servicesList';
import { Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServicesLoading from '@/components/ServicesLoading';

// Lazy load components that aren't needed immediately
const ServiceContent = lazy(() => import('@/components/ServiceContent'));
const ServicesGrid = lazy(() => import('@/components/ServicesGrid'));
const PricePackages = lazy(() => import('@/components/PricePackages'));

const Services = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<Service>(servicesList[0]);
  const [viewMode, setViewMode] = useState<'detailed' | 'grid'>('grid');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mark as loaded shortly after mount - faster loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Reduced loading time from 1200ms to 600ms for a faster experience
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if location state contains a selected service
    if (location.state && location.state.selectedService) {
      const serviceName = location.state.selectedService;
      const matchingService = servicesList.find(service => service.name === serviceName);
      
      if (matchingService) {
        setSelectedService(matchingService);
        setViewMode('detailed'); // Switch to detailed view when a service is selected
      }
    }
  }, [location.state]);

  const handleServiceClick = (service: Service) => {
    if (service.external && service.href) {
      window.open(service.href, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedService(service);
    setViewMode('detailed');
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'detailed' ? 'grid' : 'detailed');
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      
      <div className="flex-1 pt-16 pb-8 w-full">
        <div className="w-full mx-0 px-0">
          <div className="flex justify-between items-center mb-3 px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003c72]">
              {viewMode === 'grid' ? 'Premium Services' : selectedService.name}
            </h1>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleViewMode}
                className="ml-auto"
                aria-label={viewMode === 'detailed' ? "Switch to grid view" : "Switch to detailed view"}
              >
                {viewMode === 'detailed' ? <Grid className="h-5 w-5" /> : <List className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
          <Suspense fallback={<ServicesLoading />}>
            {isLoading ? (
              <ServicesLoading />
            ) : viewMode === 'grid' ? (
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-primary/5 mx-4 animate-fade-in">
                <ServicesGrid services={servicesList} onServiceClick={handleServiceClick} />
              </div>
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
                        <ServiceContent service={selectedService} />
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
                
                <div className="md:hidden mt-4 px-4 animate-fade-in">
                  <ServiceContent service={selectedService} />
                </div>
              </>
            )}
            
            {/* Price Packages section */}
            {!isLoading && (
              <div className="px-4 mt-8 animate-fade-in">
                <PricePackages />
              </div>
            )}
          </Suspense>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
