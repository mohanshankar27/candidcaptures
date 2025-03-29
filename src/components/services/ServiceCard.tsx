
import React, { useState } from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
  hoveredIndex: number | null;
  clickedService: Service | null;
  imageSrc: string;
  onServiceClick: (service: Service) => void;
  setHoveredIndex: (index: number | null) => void;
  isHighlighted: (index: number) => boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  hoveredIndex,
  clickedService,
  imageSrc,
  onServiceClick,
  setHoveredIndex,
  isHighlighted
}) => {
  const isClicked = clickedService && clickedService.name === service.name;

  return (
    <motion.div
      key={service.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
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
          "transition-all duration-300",
          hoveredIndex === index 
            ? "shadow-[0_15px_30px_rgba(0,0,0,0.15)]" 
            : isHighlighted(index) 
              ? "shadow-[0_10px_20px_rgba(0,0,0,0.1)]" 
              : "shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]",
          isClicked ? "opacity-70" : ""
        )}
        onClick={() => !isClicked && onServiceClick(service)}
        onMouseEnter={() => !isClicked && setHoveredIndex(index)}
        onMouseLeave={() => !isClicked && setHoveredIndex(null)}
      >
        <div className="p-2 bg-white">
          <div className="relative overflow-hidden rounded-lg">
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: isClicked ? 1 : 1.08 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={imageSrc}
                alt={service.name}
                className={cn(
                  "w-full h-auto object-cover",
                  isClicked ? "blur-sm" : ""
                )}
                loading={index < 8 ? "eager" : "lazy"}
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
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
