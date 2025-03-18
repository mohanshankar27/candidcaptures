
import React, { useState } from 'react';
import { Service } from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// Map service names to appropriate images
const serviceImages = {
  'Concept shoot': "/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png",
  'Corporate & Short Videos': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'Corporate Headshots': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'E-Commerce & Catalogues': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
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
            "cursor-pointer transition-all overflow-hidden",
            "border border-amber-100 hover:border-orange-200",
            "bg-gradient-to-br from-secondary/50 to-background",
            "group",
            "animate-fadeIn",
            "relative",
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
          <div className="aspect-[4/3] relative overflow-hidden">
            <img 
              src={serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png"} 
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="text-base font-medium text-center font-serif italic text-white group-hover:scale-105 transition-transform bg-black/40 backdrop-blur-sm py-1.5 px-2 rounded">
              {service.name}
              {service.external && (
                <ExternalLink className="w-3.5 h-3.5 ml-1 inline-block opacity-60" />
              )}
              {hoveredIndex === index && (
                <Sparkles className="w-3.5 h-3.5 ml-1 inline-block text-orange-300 animate-pulse" />
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
