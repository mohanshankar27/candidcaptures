
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
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
    align: "start",
    dragFree: false,
    skipSnaps: false,
    duration: 50, // Slower transitions for smooth movement
  });
  
  // State to track which card is flipped
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  
  useEffect(() => {
    // Auto-slide functionality with longer interval
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 8000); // Longer pause to allow viewers to appreciate each image
    
    // Update active index when carousel scrolls
    const onSelect = () => {
      if (emblaApi) {
        const current = emblaApi.selectedScrollSnap();
        setPrevIndex(activeIndex);
        setActiveIndex(current);
      }
    };
    
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect(); // Initialize
    }
    
    return () => {
      clearInterval(autoplay);
      if (emblaApi) {
        emblaApi.off('select', onSelect);
      }
    };
  }, [emblaApi, activeIndex]);

  // Handle card flip
  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className="overflow-hidden rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] swiper-container" ref={emblaRef}>
        <div className="flex gap-5 md:gap-8 py-8 swiper-wrapper">
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
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        activeIndex={activeIndex}
        totalSlides={images.length}
      />
      
      <GalleryAnimationStyles />
    </motion.div>
  );
};

export default GalleryCarousel;
