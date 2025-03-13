
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {services.map((service) => (
        <Card 
          key={service.name}
          className={cn(
            "cursor-pointer hover:shadow-md transition-all border overflow-hidden h-32",
            "hover:border-primary/50 group"
          )}
          onClick={() => onServiceClick(service)}
        >
          <CardContent className="p-3 md:p-4 flex flex-col items-center justify-center h-full text-center">
            <div className="mb-2 text-primary group-hover:scale-110 transition-transform duration-200">
              {service.icon}
            </div>
            <div className="text-sm font-medium line-clamp-2">
              {service.name}
            </div>
            {service.external && (
              <ExternalLink className="w-3 h-3 ml-1 opacity-60 mt-1" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
