
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceContent from '@/components/ServiceContent';
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/components/ui/resizable';
import ServiceSidebar from '@/components/ServiceSidebar';
import MobileServiceMenu from '@/components/MobileServiceMenu';
import servicesList from '@/data/servicesList';
import { Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServicesGrid from '@/components/ServicesGrid';
import PricePackages from '@/components/PricePackages';

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesList[0]);
  const [viewMode, setViewMode] = useState<'detailed' | 'grid'>('grid');

  const handleServiceClick = (service) => {
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
        <div className="w-full mx-0 px-0"> {/* Full width container */}
          <div className="flex justify-between items-center mb-3 px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
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
          
          {viewMode === 'grid' ? (
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-primary/5 mx-4">
              <ServicesGrid services={servicesList} onServiceClick={handleServiceClick} />
            </div>
          ) : (
            <>
              <div className="px-4">
                <MobileServiceMenu 
                  services={servicesList} 
                  selectedService={selectedService} 
                  onServiceClick={handleServiceClick} 
                />
              </div>
              
              <div className="hidden md:block w-full">
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
              
              <div className="md:hidden mt-4 px-4">
                <ServiceContent service={selectedService} />
              </div>
            </>
          )}
          
          {/* Price Packages section */}
          <div className="px-4 mt-8">
            <PricePackages />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
