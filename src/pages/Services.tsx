
import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import servicesList, { Service } from '@/data/services';
import { useIsMobile } from '@/hooks/use-mobile';
import { AnimatePresence } from 'framer-motion';
import RunningScrawl from '@/components/gallery/RunningScrawl';
import ServicesLoading from '@/components/services/ServicesLoading';
import ServicesHeader from '@/components/services/ServicesHeader';
import ServicesGridView from '@/components/services/ServicesGridView';
import ServicesDetailedView from '@/components/services/ServicesDetailedView';

const Services = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<Service>(servicesList[0]);
  const [viewMode, setViewMode] = useState<'detailed' | 'grid'>('grid');
  const [isPageLoading, setIsPageLoading] = useState(true);
  const isMobile = useIsMobile();

  // Simulate faster initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 200); // Faster loading transition
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Changed from 'smooth' for faster navigation feel
    });
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
    
    // Scroll to top when changing services - using auto instead of smooth for faster perception
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'detailed' ? 'grid' : 'detailed');
  };

  const backToGrid = () => {
    setViewMode('grid');
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  if (isPageLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ServicesLoading />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      
      {/* Messaging banner */}
      <RunningScrawl message="Premium Photography Services • Book Now for Special Offers • Free Consultation Available" />
      
      <div className="flex-1 pt-12 pb-8 w-full">
        <div className="w-full mx-0 px-0">
          <AnimatePresence mode="wait">
            <ServicesHeader 
              viewMode={viewMode}
              selectedService={selectedService}
              isMobile={isMobile}
              backToGrid={backToGrid}
              toggleViewMode={toggleViewMode}
            />
          </AnimatePresence>
          
          <Suspense fallback={<ServicesLoading />}>
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <ServicesGridView 
                  services={servicesList} 
                  onServiceClick={handleServiceClick} 
                />
              ) : (
                <ServicesDetailedView
                  services={servicesList}
                  selectedService={selectedService}
                  onServiceClick={handleServiceClick}
                  isMobile={isMobile}
                />
              )}
            </AnimatePresence>
          </Suspense>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
