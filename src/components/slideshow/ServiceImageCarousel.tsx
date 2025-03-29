
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
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
                transition={{ duration: 0.2 }}
                className="p-2 h-full"
              >
                <Card 
                  className="overflow-hidden group cursor-pointer transition-all duration-300 bg-white shadow-xl h-full border-none"
                  onClick={() => onServiceClick(service.name)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                        loading="lazy" // Add lazy loading
                      />
                    </motion.div>
                  </div>
                  <CardContent className="p-4 bg-white">
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-primary font-serif italic text-xl font-medium mb-2 text-center">
                        {service.name}
                      </h3>
                      <motion.div 
                        className="h-0.5 w-12 bg-gradient-to-r from-orange-400 to-orange-300 mb-2"
                        whileHover={{ width: "4rem" }}
                      ></motion.div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs text-primary/70 font-medium hover:text-primary transition-colors"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
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
