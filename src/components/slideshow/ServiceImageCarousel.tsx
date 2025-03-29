
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLocation } from 'react-router-dom';

interface ServiceThumbnail {
  name: string;
  image: string;
}

interface ServiceImageCarouselProps {
  serviceThumbnails: ServiceThumbnail[];
  onServiceClick: (serviceName: string) => void;
}

const ServiceImageCarousel: React.FC<ServiceImageCarouselProps> = ({ 
  serviceThumbnails, 
  onServiceClick 
}) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const location = useLocation();
  
  // Don't render this component if we're on the services page
  if (location.pathname === '/services') {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mb-16"
    >
      <Carousel 
        opts={{ 
          loop: true,
          align: "start"
        }}
        className="w-full"
      >
        <CarouselContent>
          {serviceThumbnails.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-2 h-full"
              >
                <Card 
                  className="overflow-hidden group cursor-pointer transition-all duration-500 bg-white shadow-xl h-full border-none"
                  onClick={() => onServiceClick(service.name)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7 }}
                      className="w-full h-full"
                    >
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 space-x-2">
          <CarouselPrevious className="relative inset-0 translate-y-0 bg-orange-100 hover:bg-orange-200 text-orange-600" />
          <CarouselNext className="relative inset-0 translate-y-0 bg-orange-100 hover:bg-orange-200 text-orange-600" />
        </div>
      </Carousel>
    </motion.div>
  );
};

export default ServiceImageCarousel;
