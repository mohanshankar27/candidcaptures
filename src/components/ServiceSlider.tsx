
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceItem {
  id: number;
  name: string;
  image: string;
  description: string;
}

const serviceItems: ServiceItem[] = [
  {
    id: 1,
    name: "Product Photography",
    image: "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
    description: "Professional studio setup for capturing high-quality product images"
  },
  {
    id: 2,
    name: "Concept Shoot",
    image: "/lovable-uploads/0da1d025-7654-4fe8-928f-c4b58b4f6a2c.png", // Updated to the new concept image
    description: "Creative cultural and themed photography celebrating Indian traditions and art"
  },
  {
    id: 3,
    name: "Creative Makeup",
    image: "/lovable-uploads/507c487a-ec87-4401-ace4-4b27d7bcd2e0.png", // Added new creative makeup image
    description: "Artistic and elaborate makeup concepts for unique and striking visuals"
  },
  {
    id: 4,
    name: "Cultural Photography",
    image: "/lovable-uploads/fb019637-e8cb-4a43-9303-075fd194e2b8.png", // Added new cultural photography image
    description: "Authentic and vibrant photography capturing traditional cultural elements"
  }
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const navigate = useNavigate();

  // Preload images for smoother transitions
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = serviceItems.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = item.image;
          img.onload = resolve;
        });
      });
      
      await Promise.all(imagePromises);
      setImagesPreloaded(true);
    };
    
    preloadImages();
  }, []);

  // Get current service data
  const currentService = serviceItems[currentIndex];

  // Handle next slide with optimized transition
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceItems.length);
  };

  // Handle previous slide with optimized transition
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceItems.length) % serviceItems.length);
  };

  // Handle service selection with immediate feedback
  const handleServiceClick = () => {
    const serviceName = currentService.name;
    // Provide immediate visual feedback before navigating
    navigate('/services', { state: { selectedService: serviceName } });
  };

  // Optimized animation variants with shorter durations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="services" className="py-16 relative bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-serif italic">
            Premium Photography Services
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="relative h-[500px] w-full flex items-center justify-center">
          <div className="w-full max-w-5xl relative overflow-hidden rounded-xl shadow-2xl bg-white">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 500, damping: 30 },
                  opacity: { duration: 0.1 }
                }}
                className="absolute inset-0"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image section with optimized loading */}
                  <div className="w-full md:w-3/5 h-64 md:h-full relative overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-105"
                      style={{ 
                        backgroundImage: `url(${currentService.image})`,
                        backgroundPosition: `${25 * currentIndex}% center`
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentService.name}</h3>
                    </div>
                  </div>
                  
                  {/* Text section */}
                  <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-center">
                    <p className="text-gray-700 mb-8">{currentService.description}</p>
                    <Button 
                      onClick={handleServiceClick}
                      className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      Explore This Service
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 rounded-full z-10 hover:bg-white/50 transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 rounded-full z-10 hover:bg-white/50 transition-colors"
              aria-label="Next service"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Indicator dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {serviceItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
