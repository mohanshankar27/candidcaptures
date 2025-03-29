
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from './gallery/GalleryData';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import { Card, CardContent } from './ui/card';

const PhotoSlideshow = () => {
  const [isClient, setIsClient] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    dragFree: true,
    skipSnaps: true,
    duration: 50, // Slow transition for premium feel
  });
  
  // State to track which card is flipped
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    setIsClient(true);
    
    // Auto-slide functionality
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);
    
    // Update active index when carousel scrolls
    const onSelect = () => {
      if (emblaApi) setActiveIndex(emblaApi.selectedScrollSnap());
    };
    
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect(); // Initialize
    }
    
    return () => {
      clearInterval(autoplay);
      if (emblaApi) emblaApi.off('select', onSelect);
    };
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

  // Handle card flip - enhanced to match the Gallery component
  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="glimpse" className="py-24 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden">
      <BackgroundDecorators />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              Glimpse of Our Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Take a peek at some of our favorite moments captured through our lens
            </p>
          </motion.div>
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
              <div className="flex gap-5 md:gap-8">
                {galleryImages.map((image, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex-[0_0_280px] sm:flex-[0_0_320px] md:flex-[0_0_380px] relative"
                    style={{ perspective: '1000px' }}
                  >
                    <div
                      className={cn(
                        "flip-card cursor-pointer h-[400px] perspective-1000 transition-transform duration-500 bg-transparent overflow-visible",
                        flippedIndex === index ? "is-flipped" : ""
                      )}
                      onClick={() => handleCardFlip(index)}
                    >
                      {/* Card Inner Container - this handles the 3D rotation */}
                      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
                        
                        {/* Front of Card */}
                        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-2xl border border-white/20">
                          <img 
                            src={image.url} 
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-3000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                          
                          <motion.div 
                            className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                            whileHover={{ y: 0 }}
                          >
                            <h3 className="text-2xl font-semibold mb-2 text-shadow">{image.alt}</h3>
                            <div className="h-0.5 w-16 bg-orange-400 mb-3" />
                            <p className="text-sm text-white/90 max-w-md">
                              Tap to view details or swipe to explore more
                            </p>
                          </motion.div>
                        </div>
                        
                        {/* Back of Card */}
                        <div className="flip-card-back absolute w-full h-full backface-hidden rounded-lg overflow-hidden bg-white shadow-2xl transform-rotate-y-180">
                          <div className="p-8 flex flex-col justify-between h-full bg-gradient-to-br from-orange-50 to-white">
                            <div>
                              <h3 className="text-2xl font-bold text-primary mb-2">{image.alt}</h3>
                              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-300 to-orange-500 mb-3"></div>
                              <p className="text-slate-700 mb-4">
                                This captivating moment exemplifies our commitment to creative photography that tells a unique story.
                              </p>
                            </div>
                            <motion.button 
                              className="mt-auto w-full py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium shadow-lg"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              View in Gallery
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center mt-10 gap-6">
              <div className="flex items-center gap-2 mb-1">
                {galleryImages.map((_, idx) => (
                  <motion.div 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "w-6 bg-gradient-to-r from-orange-400 to-orange-500" : "w-1.5 bg-orange-200"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  />
                ))}
              </div>
              
              <div className="flex justify-center gap-5">
                <button 
                  onClick={() => emblaApi?.scrollPrev()}
                  className="h-12 w-12 rounded-full bg-white text-primary hover:bg-orange-50 border border-orange-100 shadow-md flex items-center justify-center transition-all duration-300 group"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
                <button 
                  onClick={() => emblaApi?.scrollNext()}
                  className="h-12 w-12 rounded-full bg-white text-primary hover:bg-orange-50 border border-orange-100 shadow-md flex items-center justify-center transition-all duration-300 group"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Add necessary CSS for 3D transform */}
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .transform-rotate-y-180 {
            transform: rotateY(180deg);
          }
          .is-flipped .flip-card-inner {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </section>
  );
};

export default PhotoSlideshow;
