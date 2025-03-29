
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

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
    image: "/lovable-uploads/0da1d025-7654-4fe8-928f-c4b58b4f6a2c.png", 
    description: "Creative cultural and themed photography celebrating Indian traditions and art"
  },
  {
    id: 3,
    name: "Creative Makeup",
    image: "/lovable-uploads/507c487a-ec87-4401-ace4-4b27d7bcd2e0.png",
    description: "Artistic and elaborate makeup concepts for unique and striking visuals"
  },
  {
    id: 4,
    name: "Cultural Photography",
    image: "/lovable-uploads/fb019637-e8cb-4a43-9303-075fd194e2b8.png",
    description: "Authentic and vibrant photography capturing traditional cultural elements"
  }
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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

  const currentService = serviceItems[currentIndex];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceItems.length) % serviceItems.length);
  };

  const handleServiceClick = () => {
    const serviceName = currentService.name;
    navigate('/services', { state: { selectedService: serviceName } });
  };

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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="services" className="py-8 md:py-16 relative bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-akaya">
            Premium Photography Services
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
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
                  <div className="w-full md:w-3/5 h-48 sm:h-64 md:h-full relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={currentService.image}
                      alt={currentService.name}
                      className="w-full h-full object-cover md:object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 font-akaya">{currentService.name}</h3>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/5 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                    <p className="text-gray-700 mb-4 md:mb-8 text-sm md:text-base">{currentService.description}</p>
                    <Button 
                      onClick={handleServiceClick}
                      className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm md:text-base"
                    >
                      Explore This Service
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <button 
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-1 md:p-2 rounded-full z-10 hover:bg-white/50 transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft size={isMobile ? 20 : 24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-1 md:p-2 rounded-full z-10 hover:bg-white/50 transition-colors"
              aria-label="Next service"
            >
              <ChevronRight size={isMobile ? 20 : 24} />
            </button>
            
            <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {serviceItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
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
