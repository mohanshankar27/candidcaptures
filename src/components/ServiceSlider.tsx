
import { useState } from 'react';
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
    name: "PhotoShoot",
    image: "/lovable-uploads/b977d3f5-fd63-468d-ac7f-09766c3ab6c1.png",
    description: "Creative photography sessions tailored to your unique vision"
  },
  {
    id: 3,
    name: "Image Editing",
    image: "/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png",
    description: "Expert retouching and enhancement to perfect your photographs"
  },
  {
    id: 4,
    name: "Automation Photography",
    image: "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
    description: "Streamlined photo capture and processing for high-volume needs"
  }
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  // Get current service data
  const currentService = serviceItems[currentIndex];

  // Handle next slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceItems.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceItems.length) % serviceItems.length);
  };

  // Handle service selection
  const handleServiceClick = () => {
    const serviceName = currentService.name;
    navigate('/services', { state: { selectedService: serviceName } });
  };

  // Animation variants - optimized for faster transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

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
                  x: { type: "spring", stiffness: 400, damping: 30 },
                  opacity: { duration: 0.15 }
                }}
                className="absolute inset-0"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image section */}
                  <div className="w-full md:w-3/5 h-64 md:h-full relative overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
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
