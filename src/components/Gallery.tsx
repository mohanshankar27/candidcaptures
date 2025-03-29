
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from './gallery/GalleryData';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import GalleryHeader from './gallery/GalleryHeader';
import GallerySlider from './gallery/GallerySlider';
import GalleryThumbnails from './gallery/GalleryThumbnails';
import GalleryIndicators from './gallery/GalleryIndicators';
import ImageModal from './gallery/ImageModal';
import StyleProvider from './gallery/StyleProvider';

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

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
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
        <GalleryHeader />

        <div className="max-w-5xl mx-auto">
          <AnimatePresence>
            {isLoaded && (
              <StyleProvider>
                <GallerySlider 
                  images={galleryImages}
                  current={current}
                  setCurrent={setCurrent}
                  onOpenModal={openModal}
                  flippedIndex={flippedIndex}
                  setFlippedIndex={setFlippedIndex}
                />
              </StyleProvider>
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
