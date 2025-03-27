
import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import servicesList from '@/data/servicesList';
import { isImageCritical } from "@/components/slideshow/serviceImages";
import serviceImages from './slideshow/serviceImages';

const Gallery = () => {
  // Group services into 3 boxes (approx equal distribution)
  const groupedServices = Array.from({ length: 3 }, (_, index) => {
    const start = Math.floor((servicesList.length * index) / 3);
    const end = Math.floor((servicesList.length * (index + 1)) / 3);
    return servicesList.slice(start, end);
  });

  const [selectedBoxIndex, setSelectedBoxIndex] = useState<number | null>(null);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [morphInterval, setMorphInterval] = useState<NodeJS.Timeout | null>(null);
  
  // Auto-rotate between service groups
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroupIndex(prev => (prev + 1) % 3);
    }, 5000); // Switch every 5 seconds
    
    setMorphInterval(interval);
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);
  
  // Pause rotation when a box is selected
  useEffect(() => {
    if (selectedBoxIndex !== null && morphInterval) {
      clearInterval(morphInterval);
      setMorphInterval(null);
    } else if (selectedBoxIndex === null && !morphInterval) {
      const interval = setInterval(() => {
        setCurrentGroupIndex(prev => (prev + 1) % 3);
      }, 5000);
      setMorphInterval(interval);
    }
    
    return () => {
      if (morphInterval) clearInterval(morphInterval);
    };
  }, [selectedBoxIndex, morphInterval]);
  
  // Reset image loading state when services change
  useEffect(() => {
    // Create a flat array of all services to track loading
    const allServicesCount = groupedServices.flat().length;
    setImagesLoaded(new Array(allServicesCount).fill(false));
  }, []);
  
  const openImageModal = (boxIndex: number, serviceIndex: number) => {
    setSelectedBoxIndex(boxIndex);
    const flatIndex = serviceIndex;
    setSelectedImageIndex(flatIndex);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
    // Wait a bit before resuming auto-rotation
    setTimeout(() => {
      setSelectedBoxIndex(null);
    }, 500);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedBoxIndex === null || selectedImageIndex === null) return;
    
    const currentGroupServices = groupedServices[selectedBoxIndex];
    
    if (direction === "prev") {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex - 1 + currentGroupServices.length) % currentGroupServices.length;
      });
    } else {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex + 1) % currentGroupServices.length;
      });
    }
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // Determine if modal should display content
  const showModalContent = selectedImageIndex !== null && selectedBoxIndex !== null;
  
  // Get current service for modal
  const getSelectedService = useCallback(() => {
    if (selectedBoxIndex === null || selectedImageIndex === null) return null;
    return groupedServices[selectedBoxIndex][selectedImageIndex];
  }, [selectedBoxIndex, selectedImageIndex, groupedServices]);

  const selectedService = getSelectedService();

  // Variants for animation
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-12">
        <AnimatePresence mode="wait">
          {[0, 1, 2].map((boxIndex) => (
            <motion.div
              key={`box-${boxIndex}-group-${currentGroupIndex}`}
              className="flex-1 aspect-[4/3] bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={boxVariants}
              layoutId={`gallery-box-${boxIndex}`}
            >
              <div className="grid grid-cols-2 gap-2 p-4 h-full">
                {groupedServices[boxIndex].map((service, serviceIndex) => {
                  const serviceImage = serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png";
                  const isCritical = isImageCritical(serviceImage);
                  const globalIndex = serviceIndex;
                  
                  return (
                    <div
                      key={`${service.name}-${serviceIndex}`}
                      className="relative overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105"
                      onClick={() => openImageModal(boxIndex, serviceIndex)}
                    >
                      <div className="aspect-square">
                        <img
                          src={serviceImage}
                          alt={service.name}
                          loading={isCritical || serviceIndex < 2 ? "eager" : "lazy"}
                          decoding={isCritical || serviceIndex < 2 ? "sync" : "async"}
                          onLoad={() => handleImageLoad(globalIndex)}
                          className="w-full h-full object-cover"
                          width="150"
                          height="150"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-75" />
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <p className="text-white text-xs md:text-sm font-medium truncate">{service.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {showModalContent && selectedService && (
        <Dialog open={showModalContent} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-5xl p-0 border-4 border-orange-400 bg-black" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[80vh]">
              <img 
                src={serviceImages[selectedService.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png"} 
                alt={selectedService.name} 
                className="w-full h-full object-contain"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-50" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-xl md:text-2xl font-serif italic mb-2">{selectedService.name}</h3>
                <p className="text-sm md:text-base opacity-90">{selectedService.description}</p>
              </div>
              
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeImageModal}
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage("next")}
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

export default Gallery;
