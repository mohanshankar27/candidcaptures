
import React, { useState } from 'react';
import { Service } from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServicesGridProps {
  services: Service[];
  onServiceClick: (service: Service) => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onServiceClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
      {services.map((service, index) => (
        <Card 
          key={service.name}
          className={cn(
            "cursor-pointer transition-all overflow-hidden h-24",
            "border border-amber-100 hover:border-orange-200",
            "bg-gradient-to-br from-secondary/50 to-background",
            "group",
            "animate-fadeIn",
            // Apply highlight effect to the currently hovered service 
            // and services in the same row (group of 4)
            hoveredIndex === index 
              ? "shadow-lg shadow-orange-200 scale-105 z-10" 
              : isHighlighted(index) 
                ? "shadow-md shadow-orange-100 scale-[1.02] z-[5]" 
                : "hover:shadow-lg hover:shadow-orange-100",
            // Stagger the animations slightly for a cascading effect
            `transition-delay-${Math.min(index * 100, 700)}`
          )}
          onClick={() => onServiceClick(service)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardContent className="p-3 flex items-center justify-center h-full">
            <div className="text-base font-bold text-center font-serif italic text-orange-900 group-hover:scale-105 transition-transform">
              {service.name}
              {service.external && (
                <ExternalLink className="w-3.5 h-3.5 ml-1 inline-block opacity-60" />
              )}
              {hoveredIndex === index && (
                <Sparkles className="w-3.5 h-3.5 ml-1 inline-block text-orange-500 animate-pulse" />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
