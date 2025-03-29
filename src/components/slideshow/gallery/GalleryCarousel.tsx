
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
    dragFree: true,
    skipSnaps: true,
    duration: 100, // Even slower transitions for luxury feel
  });
  
  // State to track which card is flipped
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [progress, setProgress] = useState(0); // Track transition progress
  
  useEffect(() => {
    // Auto-slide functionality with longer interval for premium experience
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 8000); // Even longer pause to allow viewers to appreciate each image
    
    // Update active index when carousel scrolls
    const onSelect = () => {
      if (emblaApi) {
        const current = emblaApi.selectedScrollSnap();
        setDirection(current > prevIndex ? 'right' : 'left');
        setPrevIndex(current);
        setActiveIndex(current);
      }
    };
    
    // Track scroll progress for elegant transitions
    const onScroll = () => {
      if (!emblaApi) return;
      const progress = emblaApi.scrollProgress();
      setProgress(progress);
    };
    
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      emblaApi.on('scroll', onScroll);
      onSelect(); // Initialize
    }
    
    return () => {
      clearInterval(autoplay);
      if (emblaApi) {
        emblaApi.off('select', onSelect);
        emblaApi.off('scroll', onScroll);
      }
    };
  }, [emblaApi, prevIndex]);

  // Handle card flip
  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
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
