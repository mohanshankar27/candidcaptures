
import { memo, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import servicesList from '@/data/servicesList';

// Import refactored components
import SlideshowHeader from './slideshow/SlideshowHeader';
import ServiceImageCarousel from './slideshow/ServiceImageCarousel';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import serviceImages from './slideshow/serviceImages';
import ServicesGrid from './ServicesGrid';

// Create service thumbnails with proper image mapping
const serviceThumbnails = servicesList.map(service => ({
  name: service.name,
  image: serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png"
}));

const PhotoSlideshow = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
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
        
        {/* Services Grid - only render when visible */}
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
