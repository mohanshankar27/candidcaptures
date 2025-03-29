
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import servicesList from '@/data/servicesList';

// Import refactored components
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import { getServiceImage } from './services/serviceImages';
import ServicesGrid from './services/ServicesGrid';

const PhotoSlideshow = () => {
  const navigate = useNavigate();
  
  const navigateToServices = (serviceName: string) => {
    const matchingService = servicesList.find(service => service.name === serviceName);
    
    if (matchingService) {
      console.log(`Navigating to service: ${serviceName}`);
      // Navigate to services page and pass the selected service name through state
      navigate('/services', { state: { selectedService: serviceName } });
    }
  };

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
      {/* Background decorative elements */}
      <BackgroundDecorators />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Services Grid */}
        <div className="mt-8">          
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
      </div>
    </section>
  );
};

export default memo(PhotoSlideshow);
