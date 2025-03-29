
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { galleryImages } from './gallery/GalleryData';
import { cn } from '@/lib/utils';

const PhotoSlideshow = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="glimpse" className="py-20 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Glimpse of Our Work
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Take a peek at some of our favorite moments captured through our lens
          </p>
        </div>
        
        {isClient && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-6xl mx-auto"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className={cn(
                      "overflow-hidden rounded-lg cursor-pointer relative group h-[300px]",
                      "transition-all duration-300 hover:shadow-xl"
                    )}>
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-bold">{image.alt}</h3>
                          <div className="w-12 h-0.5 bg-orange-400 mx-auto my-2"></div>
                          <p className="text-sm opacity-90">View Details</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 border-none" />
                <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 border-none" />
              </div>
            </Carousel>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PhotoSlideshow;
