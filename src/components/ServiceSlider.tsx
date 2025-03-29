
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Camera, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { preloadCriticalImages } from '@/utils/performance/imageOptimizer';

interface ServiceItem {
  id: number;
  name: string;
  image: string;
  description: string;
  details: string;
}

const serviceItems: ServiceItem[] = [
  {
    id: 1,
    name: "Product Photography",
    image: "/lovable-uploads/e330db14-6a26-4ead-b79f-e9aed137fc84.png",
    description: "Professional studio setup for capturing high-quality product images",
    details: "Our product photography service uses professional lighting, backdrops, and techniques to showcase your products in the best light. We specialize in e-commerce, catalog, and packaging photography that drives sales and enhances your brand image."
  },
  {
    id: 2,
    name: "PhotoShoot",
    image: "/lovable-uploads/1f924edb-9819-4bbc-91ac-8bdb224ff48e.png",
    description: "Creative photography sessions tailored to your unique vision",
    details: "Our personalized photoshoot sessions are designed to capture your unique style and personality. Whether you need professional portraits, family photos, or creative concept shoots, our experienced photographers will bring your vision to life with stunning results."
  },
  {
    id: 3,
    name: "Image Editing",
    image: "/lovable-uploads/a97ae0b1-6394-488d-a9f4-d17321650970.png",
    description: "Expert retouching and enhancement to perfect your photographs",
    details: "Our expert editing team transforms good photos into exceptional ones. Services include color correction, skin retouching, background editing, and creative enhancements. We maintain natural looks while achieving professional polish for all your images."
  },
  {
    id: 4,
    name: "Automation Photography",
    image: "/lovable-uploads/28516f95-c696-478a-a1ca-2643222d0648.png",
    description: "Streamlined photo capture and processing for high-volume needs",
    details: "Our automated photography solutions are perfect for high-volume product shoots, corporate events, and large-scale projects. We implement efficient workflows and specialized equipment to deliver consistent, high-quality results with rapid turnaround times."
  }
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedService, setExpandedService] = useState<ServiceItem | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    preloadCriticalImages(serviceItems.map(service => service.image));
  }, []);

  const currentService = serviceItems[currentIndex];

  const nextSlide = () => {
    if (expandedService) return;
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceItems.length);
  };

  const prevSlide = () => {
    if (expandedService) return;
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceItems.length) % serviceItems.length);
  };

  const handleServiceClick = () => {
    if (expandedService) return;
    setIsLoading(true);
    
    const serviceName = currentService.name;
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/services', { state: { selectedService: serviceName } });
    }, 1500);
  };

  const handleExpandService = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (expandedService?.id === service.id) {
      setExpandedService(null);
    } else {
      setExpandedService(service);
      servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const closeExpandedView = () => {
    setExpandedService(null);
  };

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
    <section id="services" ref={servicesRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png')] bg-cover bg-center opacity-5 -z-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-3"
          >
            <Star className="text-yellow-400 h-6 w-6 mr-2" />
            <span className="text-primary/80 uppercase tracking-widest text-sm font-medium">Excellence in every frame</span>
            <Star className="text-yellow-400 h-6 w-6 ml-2" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary font-serif italic relative inline-block"
          >
            <span className="relative z-10">Premium Photography Services</span>
            <motion.span 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute left-0 -bottom-3 h-3 bg-orange-400/20 -z-10 rounded-full"
            ></motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover our range of professional photography services designed to capture your moments with precision and artistry
          </motion.p>
        </div>
        
        <AnimatePresence>
          {expandedService && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
              onClick={closeExpandedView}
            >
              <motion.div 
                className="relative w-full h-[90vh] max-w-[95vw]"
                onClick={(e) => e.stopPropagation()}
                layoutId={`service-image-${expandedService.id}`}
              >
                <img 
                  src={expandedService.image} 
                  alt={expandedService.name}
                  className="w-full h-full object-contain transform scale-100 image-rendering-crisp"
                  style={{ 
                    imageRendering: "crisp-edges" as const,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                  width="1200"
                  height="900"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
                <button 
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition-colors z-20"
                  onClick={closeExpandedView}
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {serviceItems.map((service, idx) => (
            <motion.div
              key={service.id}
              layoutId={`service-box-${service.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-96 border border-gray-100"
              onClick={(e) => handleExpandService(service, e)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-72 overflow-hidden relative">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  className="h-full w-full"
                >
                  <motion.img 
                    src={service.image} 
                    alt={service.name}
                    layoutId={`service-image-${service.id}`}
                    className="w-full h-full object-cover transition-transform duration-1000"
                    width="600"
                    height="450"
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                    style={{ imageRendering: "crisp-edges" as const }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center mb-1">
                    <Camera className="h-4 w-4 mr-2 text-orange-400" />
                    <h3 className="text-xl font-bold font-serif italic">{service.name}</h3>
                  </div>
                  <motion.div 
                    initial={{ width: "30%" }}
                    whileHover={{ width: "80%" }}
                    className="h-0.5 bg-orange-400 mb-2"
                  ></motion.div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-700 line-clamp-2 text-sm">{service.description}</p>
                <div className="mt-3 text-primary/80 font-medium text-xs">
                  <motion.span
                    initial={{ opacity: 0.7, x: 0 }}
                    whileHover={{ opacity: 1, x: 3 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    Click to view <ChevronRight className="h-3 w-3 ml-1" />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[640px] w-full flex items-center justify-center"
        >
          {isLoading && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-primary font-medium">Loading service...</p>
            </div>
          )}

          <div className="w-full max-w-6xl relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] bg-white">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden">
                    <motion.div 
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-10000 hover:scale-110 absolute inset-0"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.05 }}
                      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                      style={{ 
                        backgroundImage: `url(${currentService.image})`,
                        backgroundPosition: 'center',
                        imageRendering: "crisp-edges" as const
                      }}
                    ></motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 0.5 }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                  
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-serif italic">{currentService.name}</h3>
                      <motion.div 
                        className="h-1 bg-gradient-to-r from-orange-400 to-orange-300 mb-6 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "40%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      ></motion.div>
                      <p className="text-gray-700 mb-8 leading-relaxed">{currentService.details}</p>
                      <Button 
                        onClick={handleServiceClick}
                        className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg group overflow-hidden relative"
                      >
                        <span className="relative z-10 flex items-center">
                          Explore This Service
                          <motion.span
                            initial={{ x: -5, opacity: 0.5 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ 
                              repeat: Infinity,
                              repeatType: "mirror",
                              duration: 1
                            }}
                          >
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </motion.span>
                        </span>
                        <motion.span 
                          className="absolute inset-0 bg-orange-500 -z-0"
                          initial={{ x: "-100%", opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full z-10 hover:bg-white/50 transition-colors"
              aria-label="Previous service"
              disabled={!!expandedService}
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full z-10 hover:bg-white/50 transition-colors"
              aria-label="Next service"
              disabled={!!expandedService}
            >
              <ChevronRight size={28} />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
              {serviceItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (expandedService) return;
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={!!expandedService}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSlider;
