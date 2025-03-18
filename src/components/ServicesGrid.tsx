
import React from 'react';
import { Service } from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServicesGridProps {
  services: Service[];
  onServiceClick: (service: Service) => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
      {services.map((service, index) => (
        <Card 
          key={service.name}
          className={cn(
            "cursor-pointer transition-all overflow-hidden h-24",
            "border border-primary/10 hover:border-primary/30",
            "bg-gradient-to-br from-secondary/50 to-background",
            "hover:shadow-lg hover:shadow-primary/5 group",
            "animate-fadeIn",
            // Stagger the animations slightly for a cascading effect
            `transition-delay-${Math.min(index * 100, 700)}`
          )}
          onClick={() => onServiceClick(service)}
        >
          <CardContent className="p-3 flex items-center justify-center h-full">
            <div className="text-base font-bold text-center font-serif italic text-[#003c72] group-hover:scale-105 transition-transform">
              {service.name}
              {service.external && (
                <ExternalLink className="w-3.5 h-3.5 ml-1 inline-block opacity-60" />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
