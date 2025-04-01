
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import servicesList, { Service } from '@/data/services';
import { useIsMobile } from '@/hooks/use-mobile';
import RunningScrawl from '@/components/gallery/RunningScrawl';
import ServicesHeader from '@/components/services/ServicesHeader';
import ServicesContentWrapper from '@/components/services/ServicesContentWrapper';

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

  // Simple loading fallback component
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

  if (isPageLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <SimpleFallback />
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
          <ServicesHeader
            viewMode={viewMode}
            selectedServiceName={selectedService.name}
            toggleViewMode={toggleViewMode}
            backToGrid={backToGrid}
            isMobile={isMobile}
          />
          
          <ServicesContentWrapper
            viewMode={viewMode}
            services={servicesList}
            selectedService={selectedService}
            onServiceClick={handleServiceClick}
            isMobile={isMobile}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
