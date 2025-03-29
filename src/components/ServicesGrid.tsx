
import React, { useState, useEffect } from 'react';
import { Service } from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Map service names to appropriate images
const serviceImages = {
  'Concept shoot': "/lovable-uploads/0da1d025-7654-4fe8-928f-c4b58b4f6a2c.png", // Updated to the new concept shoot image
  'Corporate & Short Videos': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'Corporate Headshots': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'E-Commerce & Catalogues': "/lovable-uploads/3346c7fa-c327-4873-a6e2-35da082a7f6e.png",
  'Event Photography': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Family Portraits': "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  'Fashion Photography': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Food Photography': "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png",
  'Makeup shoot': "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
  'Maternity Photography': "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
  'Matrimonial Portfolios': "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
  'Naming Ceremony': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'New Born Baby Shoot': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'Product Photography': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
  'Product shoot': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Special Services': "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  'Toddler & Children': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Wedding Photography': "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png"
};

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
        service => serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png"
      );
      
      const newPreloadedImages = new Set(preloadedImages);
      
      // Create image preloading promises
      const imagePromises = imagesToPreload.map((src) => {
        if (!preloadedImages.has(src)) {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              newPreloadedImages.add(src);
              resolve(null);
            };
            img.onerror = () => resolve(null);
          });
        }
        return Promise.resolve();
      });
      
      await Promise.all(imagePromises);
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
        const isClicked = clickedService && clickedService.name === service.name;
        const imageSrc = serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png";
        
        return (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, // Faster animation
              delay: index * 0.05, // Reduced delay between items
              ease: [0.25, 0.1, 0.25, 1] // Smoother easing
            }}
            whileHover={{ scale: isClicked ? 1 : isHighlighted(index) ? 1.02 : 1.05 }}
            className={cn(
              "p-1", 
              hoveredIndex === index ? "z-20" : isHighlighted(index) ? "z-10" : "z-0",
              isClicked ? "pointer-events-none" : ""
            )}
          >
            <Card 
              className={cn(
                "cursor-pointer overflow-hidden",
                "bg-white border-0",
                "rounded-xl",
                "transition-all duration-300", // Faster transition
                hoveredIndex === index 
                  ? "shadow-[0_15px_30px_rgba(0,0,0,0.15)]" 
                  : isHighlighted(index) 
                    ? "shadow-[0_10px_20px_rgba(0,0,0,0.1)]" 
                    : "shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]",
                isClicked ? "opacity-70" : ""
              )}
              onClick={() => !isClicked && handleServiceClick(service)}
              onMouseEnter={() => !isClicked && setHoveredIndex(index)}
              onMouseLeave={() => !isClicked && setHoveredIndex(null)}
            >
              <div className="p-2 bg-white">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <motion.div 
                    className="w-full h-full"
                    whileHover={{ scale: isClicked ? 1 : 1.08 }}
                    transition={{ duration: 0.4 }} // Faster hover effect
                  >
                    <img 
                      src={imageSrc}
                      alt={service.name}
                      className={cn(
                        "w-full h-full object-cover",
                        isClicked ? "blur-sm" : ""
                      )}
                      loading={index < 8 ? "eager" : "lazy"} // Load first 8 images eagerly
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
                  
                  {isClicked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <div className="h-8 w-8 rounded-full border-4 border-orange-600 border-t-transparent animate-spin mx-auto"></div>
                        <p className="text-primary font-medium text-sm mt-2">Loading...</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="py-3 px-2 relative">
                  <div className={cn(
                    "text-base font-medium text-center font-serif italic",
                    "text-primary transition-all duration-300",
                    "relative",
                    hoveredIndex === index ? "text-orange-600" : ""
                  )}>
                    {service.name}
                    {service.external && (
                      <ExternalLink className="w-3.5 h-3.5 ml-1 inline-block opacity-60" />
                    )}
                    {hoveredIndex === index && !isClicked && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex ml-2"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                      </motion.span>
                    )}
                  </div>
                  
                  {/* Animated underline effect */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-orange-400 to-orange-200 mt-1 mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index || isHighlighted(index) ? "70%" : "20%" }}
                    transition={{ duration: 0.2 }} // Faster animation
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
