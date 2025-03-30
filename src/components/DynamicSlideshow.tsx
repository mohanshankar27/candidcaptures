
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from './gallery/GalleryData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DynamicSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Automatically advance the slideshow when autoplay is enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    // Pause autoplay briefly when manually changing slides
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    // Pause autoplay briefly when manually changing slides
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSignificantSwipe = Math.abs(distance) > 50;
    
    if (isSignificantSwipe) {
      if (distance > 0) {
        // Swiped left, go to next slide
        nextSlide();
      } else {
        // Swiped right, go to previous slide
        prevSlide();
      }
    }
    
    // Reset touch positions
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Guard clause for empty gallery
  if (galleryImages.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-slate-100 rounded-lg">
        <p className="text-slate-500">No images available in the gallery</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-arjulian">
            Photo Gallery
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-akaya">
            Explore our collection of stunning photography
          </p>
        </div>
        
        <div 
          className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl h-[500px] md:h-[600px] bg-black"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slideshow Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Slideshow Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full"
            >
              <img 
                src={galleryImages[currentIndex].url} 
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover object-center"
                loading={currentIndex <= 2 ? "eager" : "lazy"}
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{galleryImages[currentIndex].alt}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-white/80">{currentIndex + 1} of {galleryImages.length}</p>
                  <div className="flex space-x-1">
                    {galleryImages.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsAutoPlaying(false);
                          setTimeout(() => setIsAutoPlaying(true), 8000);
                        }}
                        className={`w-2 h-2 rounded-full ${
                          currentIndex === index ? 'bg-orange-400' : 'bg-white/40'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DynamicSlideshow;
