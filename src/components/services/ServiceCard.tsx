
import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isEventPhotography = service.name === 'Event Photography';
  const isMobile = useIsMobile();
  
  // Reduce animation intensity on mobile
  const scaleAmount = isMobile ? 1.03 : 1.05;
  const highlightScaleAmount = isMobile ? 1.01 : 1.02;

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: { 
      scale: isClicked ? 1 : isHighlighted(index) ? highlightScaleAmount : scaleAmount,
      transition: { 
        duration: 0.2,
        ease: "easeOut" 
      }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.div
      key={service.name}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap={isClicked ? undefined : "tap"}
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
            ? "shadow-[0_10px_25px_rgba(0,0,0,0.12)]" 
            : isHighlighted(index) 
              ? "shadow-[0_8px_15px_rgba(0,0,0,0.08)]" 
              : "shadow-[0_5px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]",
          isClicked ? "opacity-70" : "",
          isEventPhotography ? "ring-1 ring-amber-300" : ""
        )}
        onClick={() => !isClicked && onServiceClick(service)}
        onMouseEnter={() => !isMobile && !isClicked && setHoveredIndex(index)}
        onMouseLeave={() => !isMobile && !isClicked && setHoveredIndex(null)}
        onTouchStart={() => isMobile && !isClicked && setHoveredIndex(index)}
        onTouchEnd={() => isMobile && !isClicked && setHoveredIndex(null)}
      >
        <div className="p-2 bg-white">
          <div className="relative overflow-hidden rounded-lg">
            <motion.div 
              className="w-full h-full aspect-video"
              whileHover={{ scale: isClicked ? 1 : isMobile ? 1.03 : 1.08 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={imageSrc}
                alt={service.name}
                className={cn(
                  "w-full h-full object-cover",
                  isClicked ? "blur-sm" : ""
                )}
                loading={index < 8 ? "eager" : "lazy"}
              />
            </motion.div>
            
            {/* Overlay on mobile touch */}
            {isMobile && hoveredIndex === index && !isClicked && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                className="absolute inset-0 bg-amber-300 pointer-events-none"
              />
            )}
            
            {isClicked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="h-8 w-8 rounded-full border-4 border-amber-500 border-t-transparent animate-spin mx-auto"></div>
                  <p className="text-primary font-medium text-sm mt-2 font-arjulian">Loading...</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="py-3 px-1 relative">
            <div className={cn(
              "text-sm sm:text-base font-medium text-center font-arjulian",
              "text-primary transition-all duration-300",
              "relative",
              hoveredIndex === index ? "text-amber-600" : ""
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
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                </motion.span>
              )}
            </div>
            
            <motion.div 
              className="h-0.5 bg-gradient-to-r from-amber-400 to-amber-200 mt-1 mx-auto"
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
