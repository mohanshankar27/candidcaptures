
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import CardFlip from '../gallery/CardFlip';
import CardFront from '../gallery/CardFront';
import CardBack from '../gallery/CardBack';
import SlideshowControls from '../gallery/SlideshowControls';

interface SlideshowGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
}

const SlideshowGallery = ({ images }: SlideshowGalleryProps) => {
  const [isClient, setIsClient] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    dragFree: true,
    skipSnaps: true,
    duration: 80, // Slower transitions for premium feel
  });
  
  // State to track which card is flipped
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    setIsClient(true);
    
    // Auto-slide functionality with longer interval for premium experience
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 7000); // Longer pause to allow viewers to appreciate each image
    
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

  // Handle card flip
  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className="overflow-hidden rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]" ref={emblaRef}>
        <div className="flex gap-5 md:gap-8 py-8">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.165, 0.84, 0.44, 1]
              }}
              className="flex-[0_0_280px] sm:flex-[0_0_320px] md:flex-[0_0_450px] relative mx-2"
              style={{ perspective: '1500px' }}
            >
              <CardFlip
                isFlipped={flippedIndex === index}
                onFlip={() => handleCardFlip(index)}
                className="h-[520px] w-full"
                frontContent={
                  <div className="relative w-full h-full overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <motion.img 
                      src={image.url} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-7000 group-hover:scale-110"
                      initial={{ scale: 1.05 }}
                      animate={{ scale: activeIndex === index ? 1 : 1.05 }}
                      transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: activeIndex === index ? 1 : 0.5, 
                          y: activeIndex === index ? 0 : 10
                        }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <h3 className="text-2xl font-serif italic font-light mb-2 tracking-wide">{image.alt}</h3>
                        <div className="h-0.5 w-16 bg-orange-400 mb-3"></div>
                        <p className="text-sm text-white/80 max-w-md font-light">
                          Explore the artistry behind every frame
                        </p>
                      </motion.div>
                    </div>
                  </div>
                }
                backContent={
                  <CardBack 
                    title={image.alt} 
                    description="This exclusive photography piece exemplifies our commitment to creative excellence and emotional storytelling through visual art."
                    onViewInGallery={() => {}}
                  />
                }
              />
              
              {activeIndex === index && (
                <motion.div 
                  layoutId="activeSlide"
                  className="absolute inset-0 border-2 border-white/50 rounded-xl pointer-events-none"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <SlideshowControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        activeIndex={activeIndex}
        totalSlides={images.length}
      />
    </motion.div>
  );
};

export default SlideshowGallery;
