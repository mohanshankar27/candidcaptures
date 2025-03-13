
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceContent from '@/components/ServiceContent';
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/components/ui/resizable';
import ServiceSidebar from '@/components/ServiceSidebar';
import MobileServiceMenu from '@/components/MobileServiceMenu';
import servicesList from '@/data/servicesList';

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesList[0]);

  const handleServiceClick = (service) => {
    if (service.external && service.href) {
      window.open(service.href, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 md:hidden">Our Services</h1>
          
          <MobileServiceMenu 
            services={servicesList} 
            selectedService={selectedService} 
            onServiceClick={handleServiceClick} 
          />
          
          <div className="hidden md:block">
            <ResizablePanelGroup 
              direction="horizontal" 
              className="min-h-[calc(100vh-200px)] border rounded-lg overflow-hidden shadow-md"
            >
              <ServiceSidebar 
                services={servicesList} 
                selectedService={selectedService} 
                onServiceClick={handleServiceClick} 
              />
              
              <ResizableHandle withHandle />
              
              <ResizablePanel defaultSize={75} minSize={60}>
                <div className="h-full overflow-y-auto">
                  <ServiceContent service={selectedService} />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
          
          <div className="md:hidden mt-6">
            <ServiceContent service={selectedService} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
