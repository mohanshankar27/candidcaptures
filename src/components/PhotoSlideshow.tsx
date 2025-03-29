
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
    duration: 50, // Use duration instead of speed for slower transitions
  });
  
  // State to track which card is flipped
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  
  useEffect(() => {
    setIsClient(true);
    
    // Auto-slide functionality
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
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

  // Handle card flip
  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
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
                    {/* 3D Card Flipper */}
                    <div 
                      className={cn(
                        "flip-card cursor-pointer h-[300px] perspective-1000 transition-transform duration-500 hover:shadow-xl",
                        flippedIndex === index ? "is-flipped" : ""
                      )}
                      onClick={() => handleCardFlip(index)}
                    >
                      {/* Card Inner Container - this handles the 3D rotation */}
                      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
                        
                        {/* Front of Card */}
                        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
                          <img 
                            src={image.url} 
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="text-white p-4 transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                              <p className="text-sm font-semibold">Click to view details</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Back of Card */}
                        <div className="flip-card-back absolute w-full h-full backface-hidden rounded-lg overflow-hidden bg-orange-50 shadow-lg transform-rotate-y-180">
                          <div className="p-6 flex flex-col justify-between h-full">
                            <div>
                              <h3 className="text-xl font-bold text-primary mb-2">{image.alt}</h3>
                              <div className="w-12 h-0.5 bg-orange-400 mb-3"></div>
                              <p className="text-slate-700 text-sm mb-4">
                                This captivating moment exemplifies our commitment to creative photography that tells a unique story.
                              </p>
                            </div>
                            <div className="mt-auto">
                              <button className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm transition-colors duration-300">
                                View Gallery
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={() => emblaApi?.scrollPrev()}
                className="h-10 w-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 border-none flex items-center justify-center transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button 
                onClick={() => emblaApi?.scrollNext()}
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

      {/* Add necessary CSS for 3D transform */}
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default PhotoSlideshow;
