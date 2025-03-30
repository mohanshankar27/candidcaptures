
import React, { useState, useEffect, useRef } from 'react';
import { Service } from '@/data/servicesList';
import ServiceCard from './ServiceCard';
import { getServiceImage } from './serviceImages';
import { preloadImages, preloadCriticalImages } from './ImagePreloader';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServicesGridProps {
  services: Service[];
  onServiceClick: (service: Service) => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onServiceClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedService, setClickedService] = useState<Service | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
  const isMobile = useIsMobile();
  const isInitialRender = useRef(true);

  // Preload critical images immediately for faster display
  useEffect(() => {
    if (isInitialRender.current) {
      // Get just the first few images for initial visible cards
      const initialVisibleImages = services.slice(0, isMobile ? 4 : 8).map(
        service => getServiceImage(service.name)
      );
      
      // Preload these critical images immediately via link tags
      preloadCriticalImages(initialVisibleImages);
      
      // Mark first render complete
      isInitialRender.current = false;
    }
  }, [services, isMobile]);
  
  // Preload remaining images with lower priority
  useEffect(() => {
    const preloadRemainingImages = async () => {
      // Preload remaining images after a short delay to prioritize initial render
      const timeoutId = setTimeout(async () => {
        const imagesToPreload = services.map(
          service => getServiceImage(service.name)
        );
        
        const newPreloadedImages = await preloadImages(imagesToPreload, preloadedImages);
        setPreloadedImages(newPreloadedImages);
      }, 1000); // Delay preloading non-critical images
      
      return () => clearTimeout(timeoutId);
    };
    
    preloadRemainingImages();
  }, [services, preloadedImages]);

  // Function to determine if a service should be highlighted based on hover
  const isHighlighted = (index: number): boolean => {
    if (hoveredIndex === null) return false;
    
    // Calculate the row number for the hovered service
    const cardsPerRow = isMobile ? 2 : 4;
    const hoveredRow = Math.floor(hoveredIndex / cardsPerRow);
    
    // Calculate the start index for that row
    const rowStartIndex = hoveredRow * cardsPerRow;
    
    // Check if the current service is in the same row as the hovered service
    return index >= rowStartIndex && index < rowStartIndex + cardsPerRow;
  };

  const handleServiceClick = (service: Service) => {
    // Set the clicked service to show loading effect
    setClickedService(service);
    
    // Use a much shorter delay for better user experience
    setTimeout(() => {
      onServiceClick(service);
      setClickedService(null);
    }, 150); // Reduced from 300ms to 150ms for faster response
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }} // Faster animation
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 w-full"
    >
      {services.map((service, index) => {
        const imageSrc = getServiceImage(service.name);
        
        return (
          <ServiceCard
            key={service.name}
            service={service}
            index={index}
            hoveredIndex={hoveredIndex}
            clickedService={clickedService}
            imageSrc={imageSrc}
            onServiceClick={handleServiceClick}
            setHoveredIndex={setHoveredIndex}
            isHighlighted={isHighlighted}
          />
        );
      })}
    </motion.div>
  );
};

export default ServicesGrid;
