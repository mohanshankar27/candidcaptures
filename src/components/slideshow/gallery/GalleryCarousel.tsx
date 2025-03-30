
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
  autoplay?: boolean;
}

const GalleryCarousel = ({ images, autoplay = true }: GalleryCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    containScroll: "keepSnaps",
    slidesToScroll: 1,
    skipSnaps: false,
  });
  
  // State to track which card is flipped
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const autoplayTimerRef = useRef<number | null>(null);
  
  // Preload critical images
  useEffect(() => {
    const preloadInitialImages = () => {
      // Only preload the first 2 images for faster initial render
      const imagePromises = images.slice(0, 2).map((image) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = image.url;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      });
      
      // Set a timeout to prevent blocking rendering
      const timeoutPromise = new Promise<void>(resolve => setTimeout(resolve, 1000));
      
      Promise.race([
        Promise.all(imagePromises),
        timeoutPromise
      ]).then(() => {
        setImagesLoaded(true);
      });
    };
    
    preloadInitialImages();
  }, [images]);
  
  // Function to handle auto-sliding with cleanup for timer
  const startAutoplay = useCallback(() => {
    if (!autoplay) return;
    
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
    
    if (!isInteracting && emblaApi) {
      autoplayTimerRef.current = window.setTimeout(() => {
        emblaApi.scrollNext();
      }, 5000); // Extended to 5 seconds per slide for better performance
    }
  }, [emblaApi, isInteracting, autoplay]);
  
  // Update active index when carousel scrolls
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    
    const current = emblaApi.selectedScrollSnap();
    setActiveIndex(current);
    startAutoplay();
  }, [emblaApi, startAutoplay]);
  
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
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full mx-auto elementor-main-swiper carousel-3d-container"
    >
      <div 
        className="overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] swiper-container carousel-3d-stage"
        ref={emblaRef}
        style={{ perspective: '2000px' }}
      >
        <div className="flex py-10 swiper-wrapper elementor-swiper-wrapper transform-style-3d">
          {images.map((image, index) => (
            <GallerySlide
              key={index}
              image={image}
              index={index}
              activeIndex={activeIndex}
              flippedIndex={flippedIndex}
              handleCardFlip={handleCardFlip}
              totalSlides={images.length}
              showFullSize={true}
              isLoaded={imagesLoaded || index < 2}
            />
          ))}
        </div>
      </div>
      
      <SlideshowControls
        onPrev={() => {
          emblaApi?.scrollPrev();
          setIsInteracting(true);
          setTimeout(() => setIsInteracting(false), 800);
        }}
        onNext={() => {
          emblaApi?.scrollNext();
          setIsInteracting(true);
          setTimeout(() => setIsInteracting(false), 800);
        }}
        activeIndex={activeIndex}
        totalSlides={images.length}
      />
      
      <GalleryAnimationStyles />
    </motion.div>
  );
};

export default GalleryCarousel;
