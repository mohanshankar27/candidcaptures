
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { galleryImages } from './gallery/GalleryData';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

const PhotoSlideshow = () => {
  const [isClient, setIsClient] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    dragFree: true,
    skipSnaps: true,
    speed: 15, // Slower speed for smoother transitions
  });
  
  useEffect(() => {
    setIsClient(true);
    
    // Auto-slide functionality
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext({ animation: { duration: 1500 } });
    }, 5000);
    
    return () => clearInterval(autoplay);
  }, [emblaApi]);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0] // Custom easing for smooth animation
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
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 md:gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex-[0_0_280px] sm:flex-[0_0_320px] md:flex-[0_0_380px] relative"
                  >
                    <div className={cn(
                      "overflow-hidden rounded-lg cursor-pointer relative group h-[300px]",
                      "transition-all duration-500 hover:shadow-xl"
                    )}>
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-white text-center p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-xl font-bold">{image.alt}</h3>
                          <div className="w-12 h-0.5 bg-orange-400 mx-auto my-2"></div>
                          <p className="text-sm opacity-90">View Details</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={() => emblaApi?.scrollPrev({ animation: { duration: 1200 } })}
                className="h-10 w-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 border-none flex items-center justify-center transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button 
                onClick={() => emblaApi?.scrollNext({ animation: { duration: 1200 } })}
                className="h-10 w-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 border-none flex items-center justify-center transition-all duration-300"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PhotoSlideshow;
