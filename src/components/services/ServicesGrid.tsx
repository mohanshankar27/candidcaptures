
import React, { useState, useEffect } from 'react';
import { Service } from '@/data/servicesList';
import ServiceCard from './ServiceCard';
import { getServiceImage } from './serviceImages';
import { preloadImages } from './ImagePreloader';

interface ServicesGridProps {
  services: Service[];
  onServiceClick: (service: Service) => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onServiceClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedService, setClickedService] = useState<Service | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  // Preload critical images for faster display
  useEffect(() => {
    const preloadInitialImages = async () => {
      // Only preload the first 8 images to speed up initial load
      const imagesToPreload = services.slice(0, 8).map(
        service => getServiceImage(service.name)
      );
      
      const newPreloadedImages = await preloadImages(imagesToPreload, preloadedImages);
      setPreloadedImages(newPreloadedImages);
    };
    
    preloadInitialImages();
  }, [services]);

  // Function to determine if a service should be highlighted based on hover
  const isHighlighted = (index: number): boolean => {
    if (hoveredIndex === null) return false;
    
    // Calculate the row number for the hovered service
    const hoveredRow = Math.floor(hoveredIndex / 4);
    
    // Calculate the start index for that row
    const rowStartIndex = hoveredRow * 4;
    
    // Check if the current service is in the same row as the hovered service
    return index >= rowStartIndex && index < rowStartIndex + 4;
  };

  const handleServiceClick = (service: Service) => {
    // Set the clicked service to show loading effect
    setClickedService(service);
    
    // Use a much shorter delay for better user experience
    setTimeout(() => {
      onServiceClick(service);
      setClickedService(null);
    }, 300); // Reduced from 3000ms to 300ms for faster response
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
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
    </div>
  );
};

export default ServicesGrid;
