
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
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

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

  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
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
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/50 to-slate-50/50 z-0" />
                
                <motion.div 
                  className="flex transition-all duration-500 ease-in-out h-[600px] relative z-10"
                  animate={{ x: `-${current * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {galleryImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative min-w-full h-full flex items-center justify-center overflow-hidden"
                      style={{ perspective: '1000px' }}
                    >
                      <motion.div
                        initial={{ opacity: 0, rotateY: 10, scale: 0.95 }}
                        animate={{ 
                          opacity: current === index ? 1 : 0.3,
                          rotateY: current === index ? 0 : 10,
                          scale: current === index ? 1 : 0.95,
                          filter: current === index ? 'none' : 'blur(2px)'
                        }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full px-4 py-6 flex items-center justify-center"
                      >
                        {/* Use 3D card flip effect */}
                        <div 
                          className={cn(
                            "flip-card cursor-pointer h-full w-full perspective-1000 transition-transform duration-500 bg-transparent overflow-visible",
                            flippedIndex === index ? "is-flipped" : ""
                          )}
                          onClick={() => handleCardFlip(index)}
                        >
                          {/* Card Inner Container - this handles the 3D rotation */}
                          <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
                            
                            {/* Front of Card */}
                            <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-2xl border border-white/20">
                              <img 
                                src={image.url} 
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-3000 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                              
                              <motion.div 
                                className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                                whileHover={{ y: 0 }}
                              >
                                <h3 className="text-2xl font-semibold mb-2 text-shadow">{image.alt}</h3>
                                <div className="h-0.5 w-16 bg-orange-400 mb-3" />
                                <p className="text-sm text-white/90 max-w-md">
                                  Tap to view details or swipe to explore more
                                </p>
                              </motion.div>
                            </div>
                            
                            {/* Back of Card */}
                            <div className="flip-card-back absolute w-full h-full backface-hidden rounded-lg overflow-hidden bg-white shadow-2xl transform-rotate-y-180">
                              <div className="p-8 flex flex-col justify-between h-full bg-gradient-to-br from-orange-50 to-white">
                                <div>
                                  <h3 className="text-2xl font-bold text-primary mb-2">{image.alt}</h3>
                                  <div className="w-12 h-0.5 bg-gradient-to-r from-orange-300 to-orange-500 mb-3"></div>
                                  <p className="text-slate-700 mb-4">
                                    This captivating moment exemplifies our commitment to creative photography that tells a unique story.
                                  </p>
                                </div>
                                <motion.button 
                                  className="mt-auto w-full py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium shadow-lg"
                                  whileHover={{ scale: 1.03 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(index);
                                  }}
                                >
                                  View in Gallery
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>

                <motion.button 
                  onClick={prevImage}
                  className={cn(
                    "absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-primary p-3 rounded-full z-10",
                    "hover:bg-white shadow-lg transition-all duration-200 group",
                    "focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                  )}
                  whileHover={{ scale: 1.05, x: -2 }}
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
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
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
      
      {/* Add necessary CSS for 3D transform */}
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .transform-rotate-y-180 {
            transform: rotateY(180deg);
          }
          .is-flipped .flip-card-inner {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
