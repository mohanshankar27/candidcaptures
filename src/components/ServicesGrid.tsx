
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
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
      {services.map((service) => (
        <Card 
          key={service.name}
          className={cn(
            "cursor-pointer transition-all overflow-hidden h-20",
            "border border-primary/10 hover:border-primary/30",
            "bg-gradient-to-br from-secondary/50 to-background",
            "hover:shadow-lg hover:shadow-primary/5 group"
          )}
          onClick={() => onServiceClick(service)}
        >
          <CardContent className="p-3 flex items-center justify-center h-full">
            <div className="text-base font-medium text-center font-serif italic">
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
