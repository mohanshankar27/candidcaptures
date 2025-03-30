
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from './gallery/GalleryData';
import { ChevronLeft, ChevronRight, Cube } from 'lucide-react';
import StyleProvider from './gallery/StyleProvider';
import ElementorStyles from './slideshow/ElementorStyles';
import GalleryAnimationStyles from './slideshow/gallery/GalleryAnimationStyles';

const DynamicSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideshowRef = useRef<HTMLDivElement>(null);
  
  // Effect to add and manage 3D transform on mousemove
  useEffect(() => {
    const slideshowElement = slideshowRef.current;
    
    if (!slideshowElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!slideshowElement) return;
      
      const { left, top, width, height } = slideshowElement.getBoundingClientRect();
      const mouseX = (e.clientX - left) / width - 0.5;
      const mouseY = (e.clientY - top) / height - 0.5;
      
      // Apply subtle 3D rotation based on mouse position
      slideshowElement.style.transform = `
        perspective(1000px) 
        rotateY(${mouseX * 5}deg) 
        rotateX(${-mouseY * 5}deg)
      `;
    };
    
    // Reset transform on mouse leave
    const handleMouseLeave = () => {
      if (!slideshowElement) return;
      slideshowElement.style.transform = `
        perspective(1000px) 
        rotateY(0deg) 
        rotateX(0deg)
      `;
    };
    
    slideshowElement.addEventListener('mousemove', handleMouseMove);
    slideshowElement.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      slideshowElement.removeEventListener('mousemove', handleMouseMove);
      slideshowElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
    <StyleProvider>
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-arjulian relative inline-block">
              <span className="relative z-10">Photo Gallery</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"></div>
              <Cube className="absolute -right-8 -top-4 text-orange-300/30 animate-float" size={24} />
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-akaya">
              Explore our collection of stunning photography
            </p>
          </div>
          
          <div 
            ref={slideshowRef}
            id="glimpse"
            className="transform-style-3d relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl h-[500px] md:h-[600px] bg-black"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              transition: 'transform 0.3s ease-out',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* 3D Decorative Elements */}
            <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
              <div className="absolute top-1/4 left-1/4 w-0.5 h-20 bg-gradient-to-b from-amber-400 to-transparent rotate-45"></div>
              <div className="absolute bottom-1/3 right-1/4 w-0.5 h-28 bg-gradient-to-b from-amber-400 to-transparent -rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-amber-300/20 animate-[spin_240s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-amber-400/30 animate-[spin_180s_linear_infinite_reverse]"></div>
            </div>
            
            {/* Slideshow Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/30 shadow-lg"
              aria-label="Previous slide"
              style={{ transform: 'translateY(-50%) translateZ(20px)' }}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/30 shadow-lg"
              aria-label="Next slide"
              style={{ transform: 'translateY(-50%) translateZ(20px)' }}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Slideshow Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1, rotateY: -5 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 5 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full transform-style-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src={galleryImages[currentIndex].url} 
                  alt={galleryImages[currentIndex].alt}
                  className="w-full h-full object-cover object-center"
                  loading={currentIndex <= 2 ? "eager" : "lazy"}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(0px)'
                  }}
                />
                
                {/* Image Reflection Effect */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[40%] opacity-30 transform-style-3d"
                  style={{ 
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
                    transform: 'rotateX(180deg) translateY(40%) translateZ(-0.01px)', 
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
                  }}
                ></div>
                
                {/* Caption */}
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white transform-style-3d"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-shadow-lg">{galleryImages[currentIndex].alt}</h3>
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
                            currentIndex === index 
                              ? 'bg-orange-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]' 
                              : 'bg-white/40'
                          } transition-all duration-300`}
                          aria-label={`Go to slide ${index + 1}`}
                          style={{ transform: 'translateZ(5px)' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <ElementorStyles />
        <GalleryAnimationStyles />
      </section>
    </StyleProvider>
  );
};

export default DynamicSlideshow;
