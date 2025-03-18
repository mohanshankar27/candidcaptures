
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
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1">
      {services.map((service) => (
        <Card 
          key={service.name}
          className={cn(
            "cursor-pointer transition-all overflow-hidden h-16", // Increased height from h-14 to h-16
            "border border-primary/10 hover:border-primary/30",
            "bg-gradient-to-br from-secondary/50 to-background",
            "hover:shadow-lg hover:shadow-primary/5 group"
          )}
          onClick={() => onServiceClick(service)}
        >
          <CardContent className="p-2 flex items-center h-full">
            <div className="text-sm font-medium line-clamp-1 leading-tight"> {/* Changed from text-xs to text-sm */}
              {service.name}
              {service.external && (
                <ExternalLink className="w-3 h-3 ml-1 inline-block opacity-60" /> /* Increased from w-2.5 h-2.5 to w-3 h-3 */
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
