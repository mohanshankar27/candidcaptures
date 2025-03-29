
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

  // Handle card flip
  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  if (!isClient) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 md:gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex-[0_0_280px] sm:flex-[0_0_320px] md:flex-[0_0_380px] relative"
              style={{ perspective: '1000px' }}
            >
              <CardFlip
                isFlipped={flippedIndex === index}
                onFlip={() => handleCardFlip(index)}
                className="h-[400px]"
                frontContent={
                  <CardFront 
                    imageUrl={image.url} 
                    imageAlt={image.alt} 
                    title={image.alt}
                  />
                }
                backContent={
                  <CardBack 
                    title={image.alt} 
                    onViewInGallery={() => {}}
                  />
                }
              />
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
