
import { useState, useEffect, useRef } from 'react';
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
  const [api, setApi] = useState<any>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Don't render this component if we're on the services page
  if (location.pathname === '/services') {
    return null;
  }

  // Updated set of images to use
  const carouselImages = [
    "/lovable-uploads/a97ae0b1-6394-488d-a9f4-d17321650970.png", // Traditional deity costume
    "/lovable-uploads/e330db14-6a26-4ead-b79f-e9aed137fc84.png", // Food Photography
    "/lovable-uploads/1f924edb-9819-4bbc-91ac-8bdb224ff48e.png", // Fashion Photography
    "/lovable-uploads/28516f95-c696-478a-a1ca-2643222d0648.png", // Corporate event
    "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png", // Wedding Photography
    "/lovable-uploads/71dc637a-2ed8-42fe-b045-b78301739a30.png"  // Corporate headshots
  ];

  // Replace the service thumbnails' images with the new ones
  const updatedThumbnails = serviceThumbnails.map((service, index) => ({
    ...service,
    image: carouselImages[index % carouselImages.length]
  }));

  // Set up autoplay functionality
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      if (!isPaused) {
        api.scrollNext();
      }
    }, 3000); // 3 second interval
    
    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel 
        opts={{ 
          loop: true,
          align: "start"
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {updatedThumbnails.map((service, index) => (
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
