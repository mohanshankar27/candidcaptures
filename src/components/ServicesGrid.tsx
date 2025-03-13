
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {services.map((service) => (
        <Card 
          key={service.name}
          className={cn(
            "cursor-pointer transition-all overflow-hidden h-24",
            "border border-primary/10 hover:border-primary/30",
            "bg-gradient-to-br from-secondary/50 to-background",
            "hover:shadow-lg hover:shadow-primary/5 group"
          )}
          onClick={() => onServiceClick(service)}
        >
          <CardContent className="p-2 flex flex-col items-center justify-center h-full text-center">
            <div className="mb-1 text-primary group-hover:scale-110 transition-transform duration-200">
              {service.icon}
            </div>
            <div className="text-xs font-medium line-clamp-2 leading-tight">
              {service.name}
              {service.external && (
                <ExternalLink className="w-2.5 h-2.5 ml-1 inline-block opacity-60" />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
