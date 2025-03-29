
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback, useRef } from 'react';
import GallerySlide from './GallerySlide';
import SlideshowControls from '../../gallery/SlideshowControls';
import GalleryAnimationStyles from './GalleryAnimationStyles';

interface GalleryCarouselProps {
  images: {
    url: string;
    alt: string;
  }[];
}

const GalleryCarousel = ({ images }: GalleryCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    dragFree: false,
    skipSnaps: false,
    duration: 50,
    containScroll: "trimSnaps",
  });
  
  // State to track which card is flipped
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const autoplayTimerRef = useRef<number | null>(null);
  
  // Function to handle auto-sliding with cleanup for timer
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
    
    if (!isInteracting && emblaApi) {
      autoplayTimerRef.current = window.setTimeout(() => {
        emblaApi.scrollNext();
      }, 4000); // Set to 4 seconds per slide
    }
  }, [emblaApi, isInteracting]);
  
  // Update active index when carousel scrolls
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    
    const current = emblaApi.selectedScrollSnap();
    setPrevIndex(activeIndex);
    setActiveIndex(current);
    startAutoplay();
  }, [emblaApi, activeIndex, startAutoplay]);
  
  // Handle user interactions
  const onPointerDown = useCallback(() => {
    setIsInteracting(true);
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
  }, []);
  
  const onPointerUp = useCallback(() => {
    setIsInteracting(false);
    startAutoplay();
  }, [startAutoplay]);
  
  // Initialize embla carousel
  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);
    
    // Start autoplay initially
    startAutoplay();
    
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
      
      emblaApi.off('select', onSelect);
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
    };
  }, [emblaApi, onSelect, onPointerDown, onPointerUp, startAutoplay]);
  
  // Handle card flip
  const handleCardFlip = (index: number) => {
    // Pause autoplay when card is flipped
    setIsInteracting(true);
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
    
    setFlippedIndex(flippedIndex === index ? null : index);
    
    // Resume autoplay when card is unflipped
    if (flippedIndex === index) {
      setIsInteracting(false);
      startAutoplay();
    }
  };
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-6xl mx-auto elementor-main-swiper carousel-3d-container"
    >
      <div 
        className="overflow-hidden rounded-xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] swiper-container carousel-3d-stage"
        ref={emblaRef}
        style={{ perspective: '2000px' }}
      >
        <div className="flex gap-4 md:gap-6 py-10 swiper-wrapper elementor-swiper-wrapper transform-style-3d">
          {images.map((image, index) => (
            <GallerySlide
              key={index}
              image={image}
              index={index}
              activeIndex={activeIndex}
              flippedIndex={flippedIndex}
              handleCardFlip={handleCardFlip}
              totalSlides={images.length}
            />
          ))}
        </div>
      </div>
      
      <SlideshowControls
        onPrev={() => {
          emblaApi?.scrollPrev();
          setIsInteracting(true);
          setTimeout(() => setIsInteracting(false), 1000);
        }}
        onNext={() => {
          emblaApi?.scrollNext();
          setIsInteracting(true);
          setTimeout(() => setIsInteracting(false), 1000);
        }}
        activeIndex={activeIndex}
        totalSlides={images.length}
      />
      
      <GalleryAnimationStyles />
    </motion.div>
  );
};

export default GalleryCarousel;
