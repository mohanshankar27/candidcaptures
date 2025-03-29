
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { isImageCritical } from '@/components/slideshow/serviceImages';
import useEmblaCarousel from 'embla-carousel-react';

interface PackageImageCarouselProps {
  images: string[];
  altPrefix?: string;
  autoplayInterval?: number;
}

const PackageImageCarousel: React.FC<PackageImageCarouselProps> = ({ 
  images, 
  altPrefix = "Package image",
  autoplayInterval = 3000 // 3 seconds by default
}) => {
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [visibleImages, setVisibleImages] = useState<number[]>([0, 1, 2]); // Initially load only first 3 images
  const carouselRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Initialize image loading state
  useEffect(() => {
    setImagesLoaded(new Array(images.length).fill(false));
    
    // Setup intersection observer for carousel
    if (carouselRef.current && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // When carousel is visible, load all images
            setVisibleImages(Array.from({ length: images.length }, (_, i) => i));
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(carouselRef.current);
      return () => observer.disconnect();
    }
  }, [images.length]);

  // Set up autoplay
  useEffect(() => {
    if (emblaApi && autoplayInterval > 0) {
      const startAutoplay = () => {
        stopAutoplay();
        autoplayIntervalRef.current = setInterval(() => {
          if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext();
          } else {
            emblaApi.scrollTo(0); // Return to first slide if at the end
          }
        }, autoplayInterval);
      };

      const stopAutoplay = () => {
        if (autoplayIntervalRef.current) {
          clearInterval(autoplayIntervalRef.current);
        }
      };

      // Start autoplay
      startAutoplay();

      // Pause autoplay on hover or focus
      const handlePointerEnter = () => stopAutoplay();
      const handlePointerLeave = () => startAutoplay();
      
      const rootNode = emblaApi.rootNode();
      if (rootNode) {
        rootNode.addEventListener('pointerenter', handlePointerEnter);
        rootNode.addEventListener('pointerleave', handlePointerLeave);
      }

      // Clean up
      return () => {
        stopAutoplay();
        if (rootNode) {
          rootNode.removeEventListener('pointerenter', handlePointerEnter);
          rootNode.removeEventListener('pointerleave', handlePointerLeave);
        }
      };
    }
  }, [emblaApi, autoplayInterval]);

  const openImageView = useCallback((index: number) => {
    setEnlargedImageIndex(index);
  }, []);

  const closeImageView = useCallback(() => {
    setEnlargedImageIndex(null);
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (enlargedImageIndex === null) return;
    
    if (direction === 'prev') {
      setEnlargedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex - 1 + images.length) % images.length;
      });
    } else {
      setEnlargedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex + 1) % images.length;
      });
    }
  }, [enlargedImageIndex, images.length]);

  // Handle image loading
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // Determine if we should show the modal content
  const showModalContent = enlargedImageIndex !== null;
  
  // Generate srcset for responsive images
  const generateSrcSet = (src: string) => {
    if (!src || src.includes('unsplash.com')) return undefined;
    
    // Only generate srcset for local images
    if (src.startsWith('/')) {
      return `${src} 1x, ${src} 2x`;
    }
    
    return undefined;
  };

  return (
    <div className="mb-10 relative" ref={carouselRef}>
      <div ref={emblaRef} className="overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => {
              const isCritical = isImageCritical(image);
              const shouldLoad = visibleImages.includes(index);
              const imageStyles = 'w-full h-full object-cover transition-transform duration-500 hover:scale-110';
              
              return (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <div 
                      className="overflow-hidden rounded-xl h-[260px] md:h-[320px] lg:h-[360px] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer bg-slate-100"
                      onClick={() => openImageView(index)}
                    >
                      {shouldLoad ? (
                        <img 
                          src={image} 
                          alt={`${altPrefix} ${index + 1}`}
                          loading={isCritical || index < 2 ? "eager" : "lazy"}
                          decoding={isCritical || index < 2 ? "sync" : "async"}
                          onLoad={() => handleImageLoad(index)}
                          className={imageStyles}
                          width="800"
                          height="600"
                          srcSet={generateSrcSet(image)}
                          fetchPriority={isCritical || index < 2 ? "high" : "auto"}
                        />
                      ) : (
                        <div className={`${imageStyles} bg-slate-100 flex items-center justify-center`}>
                          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
            <CarouselNext className="bg-white shadow-md hover:bg-slate-50" />
          </div>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
            <CarouselPrevious className="bg-white shadow-md hover:bg-slate-50" />
          </div>
        </Carousel>
      </div>

      {/* Enlarged Image View - Only render when needed */}
      {showModalContent && (
        <Dialog open={enlargedImageIndex !== null} onOpenChange={closeImageView}>
          <DialogContent className="max-w-7xl p-0 border-none bg-black/90" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[90vh]">
              <img 
                src={images[enlargedImageIndex]} 
                alt={`${altPrefix} ${enlargedImageIndex + 1}`} 
                className="w-full h-full object-contain"
              />
              
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeImageView}
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PackageImageCarousel;
