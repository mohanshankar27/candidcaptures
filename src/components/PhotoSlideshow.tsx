
import { memo, useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import servicesList from '@/data/servicesList';

// Import refactored components
import SlideshowHeader from './slideshow/SlideshowHeader';
import ServiceImageCarousel from './slideshow/ServiceImageCarousel';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import serviceImages from './slideshow/serviceImages';
import ServicesGrid from './ServicesGrid'; // Direct import instead of dynamic import
import Gallery from './Gallery'; // Import Gallery for Featured Work

// Create service thumbnails with proper image mapping
const serviceThumbnails = servicesList.map(service => ({
  name: service.name,
  image: serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png"
}));

const PhotoSlideshow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  
  // Check if we're on the services page
  const isServicesPage = location.pathname === '/services';
  
  // Delayed rendering for non-critical components
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay to prioritize critical content
    
    return () => clearTimeout(timer);
  }, []);
  
  const navigateToServices = useCallback((serviceName: string) => {
    const matchingService = servicesList.find(service => service.name === serviceName);
    
    if (matchingService) {
      console.log(`Navigating to service: ${serviceName}`);
      // Navigate to services page and pass the selected service name through state
      navigate('/services', { state: { selectedService: serviceName } });
    }
  }, [navigate]);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Don't render this component on the services page
  if (isServicesPage) {
    return null;
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements - only render when visible */}
      {isVisible && <BackgroundDecorators />}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <SlideshowHeader />
        
        {/* Featured Services Carousel - always render to show immediately */}
        <ServiceImageCarousel 
          serviceThumbnails={serviceThumbnails.slice(0, 6)} // Limit initial load to 6 items
          onServiceClick={navigateToServices}
        />
        
        {/* Featured Work section - moved here from separate section */}
        <div className="mt-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Work
          </motion.h2>
          
          <Gallery />
        </div>
        
        {/* Services Grid - only render when visible and not on services page */}
        {isVisible && (
          <div className="mt-16">          
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full max-w-7xl mx-auto"
            >
              <ServicesGrid 
                services={servicesList} 
                onServiceClick={(service) => navigateToServices(service.name)} 
              />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(PhotoSlideshow);
