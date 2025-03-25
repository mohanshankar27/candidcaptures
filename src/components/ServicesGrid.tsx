import React, { useState } from 'react';
import { Service } from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import serviceImages from '@/components/slideshow/serviceImages';

interface ServicesGridProps {
  services: Service[];
  onServiceClick: (service: Service) => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onServiceClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedService, setClickedService] = useState<Service | null>(null);

  const isHighlighted = (index: number): boolean => {
    if (hoveredIndex === null) return false;
    
    const hoveredRow = Math.floor(hoveredIndex / 4);
    const rowStartIndex = hoveredRow * 4;
    
    return index >= rowStartIndex && index < rowStartIndex + 4;
  };

  const handleServiceClick = (service: Service) => {
    setClickedService(service);
    setTimeout(() => {
      onServiceClick(service);
      setClickedService(null);
    }, 3000);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
      {services.map((service, index) => {
        const isClicked = clickedService && clickedService.name === service.name;
        
        return (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.43, 0.13, 0.23, 0.96] 
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
                "transition-all duration-500",
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
                    transition={{ duration: 0.7 }}
                  >
                    <img 
                      src={serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png"} 
                      alt={service.name}
                      className={cn(
                        "w-full h-full object-cover",
                        isClicked ? "blur-sm" : ""
                      )}
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
                  
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-orange-400 to-orange-200 mt-1 mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index || isHighlighted(index) ? "70%" : "20%" }}
                    transition={{ duration: 0.3 }}
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
