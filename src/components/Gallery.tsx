
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import GalleryImage from './gallery/GalleryImage';
import GalleryThumbnails from './gallery/GalleryThumbnails';
import GalleryIndicators from './gallery/GalleryIndicators';
import ImageModal from './gallery/ImageModal';
import { galleryImages } from './gallery/GalleryData';
import BackgroundDecorators from './slideshow/BackgroundDecorators';

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading to create better animation transitions
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const nextImage = () => {
    setCurrent((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const handleClickImage = () => {
    openModal(current);
  };

  const handleModalNavigate = (direction: "prev" | "next") => {
    if (modalImageIndex === null) return;
    
    if (direction === "prev") {
      setModalImageIndex((prev) => 
        prev === null ? 0 : (prev === 0 ? galleryImages.length - 1 : prev - 1)
      );
    } else {
      setModalImageIndex((prev) => 
        prev === null ? 0 : (prev === galleryImages.length - 1 ? 0 : prev + 1)
      );
    }
  };
  
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <BackgroundDecorators />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Our Gallery
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our portfolio showcasing our finest photography work across various genres and styles.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence>
            {isLoaded && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <motion.div 
                  className="flex transition-all duration-500 ease-in-out h-[600px]"
                  animate={{ x: `-${current * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {galleryImages.map((image, index) => (
                    <GalleryImage 
                      key={index}
                      image={image}
                      current={current}
                      index={index}
                      onClick={handleClickImage}
                    />
                  ))}
                </motion.div>

                <motion.button 
                  onClick={prevImage}
                  className={cn(
                    "absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-primary p-3 rounded-full z-10",
                    "hover:bg-white shadow-lg transition-all duration-200 group",
                    "focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button 
                  onClick={nextImage}
                  className={cn(
                    "absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-primary p-3 rounded-full z-10",
                    "hover:bg-white shadow-lg transition-all duration-200 group",
                    "focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
                
                <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                  <div className="bg-white/70 backdrop-blur-sm py-2 px-4 rounded-full">
                    <motion.p 
                      className="text-primary font-medium"
                      key={current}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {galleryImages[current].alt}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10">
            <GalleryIndicators 
              images={galleryImages}
              current={current}
              setCurrent={setCurrent}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <GalleryThumbnails 
                images={galleryImages}
                current={current}
                setCurrent={setCurrent}
              />
            </motion.div>
          </div>
        </div>

        <ImageModal 
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            // Reset modal index when closed
            setModalImageIndex(null);
          }}
          images={galleryImages}
          selectedIndex={modalImageIndex}
          onNavigate={handleModalNavigate}
          onSelectImage={setModalImageIndex}
        />
      </div>
    </section>
  );
};

export default Gallery;
