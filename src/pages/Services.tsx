
import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/components/ui/resizable';
import ServiceSidebar from '@/components/ServiceSidebar';
import MobileServiceMenu from '@/components/MobileServiceMenu';
import servicesList, { Service } from '@/data/services';
import { Grid, List, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleButton } from '@/components/ui/particle-button';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';
import RunningScrawl from '@/components/gallery/RunningScrawl';

// Preload these components to reduce loading perception
const ServiceContent = lazy(() => import('@/components/ServiceContent'));
const ServicesGrid = lazy(() => import('@/components/ServicesGrid'));

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
          <AnimatePresence mode="wait">
            <motion.div 
              key={viewMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center mb-3 px-4"
            >
              <div className="flex items-center gap-2">
                {isMobile && viewMode === 'detailed' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ParticleButton
                      variant="ghost"
                      size="icon"
                      onClick={backToGrid}
                      className="mr-1"
                      aria-label="Back to grid"
                      successDuration={500}
                    >
                      <ArrowLeft className="h-5 w-5 text-primary" />
                    </ParticleButton>
                  </motion.div>
                )}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003c72] font-arjulian">
                  {viewMode === 'grid' ? 'Premium Services' : selectedService.name}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <motion.div whileTap={{ scale: 0.9 }}>
                  <ParticleButton 
                    variant="outline" 
                    size="icon" 
                    onClick={toggleViewMode}
                    className="ml-auto shadow-sm"
                    aria-label={viewMode === 'detailed' ? "Switch to grid view" : "Switch to detailed view"}
                    successDuration={500}
                  >
                    {viewMode === 'detailed' ? <Grid className="h-5 w-5" /> : <List className="h-5 w-5" />}
                  </ParticleButton>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
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
                  <ServicesGrid services={servicesList} onServiceClick={handleServiceClick} />
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
                  
                  <div className="md:hidden mt-2 px-3 sm:px-4 animate-fade-in">
                    <ServiceContent service={selectedService} />
                  </div>
                </motion.div>
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
