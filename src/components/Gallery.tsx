
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from './gallery/GalleryData';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import GalleryHeader from './gallery/GalleryHeader';
import GallerySlider from './gallery/GallerySlider';
import GalleryIndicators from './gallery/GalleryIndicators';
import ImageModal from './gallery/ImageModal';
import StyleProvider from './gallery/StyleProvider';
import PremiumGalleryEffects from './gallery/PremiumGalleryEffects';
import RunningScrawl from './gallery/RunningScrawl';

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    // Simulate loading to create better animation transitions
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    if (!autoplayEnabled) return;
    
    const interval = setInterval(() => {
      setCurrent((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
    }, 4000); // Changed to 4000ms (4 seconds)
    
    return () => clearInterval(interval);
  }, [autoplayEnabled]);

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    setAutoplayEnabled(false); // Pause autoplay when modal is open
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
      <PremiumGalleryEffects />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Festival Offer Running Scrawl */}
        <div className="mb-8 -mx-4">
          <RunningScrawl message="🎉 Avail Festival offer 10% off on the packages of your choice 🎉" />
        </div>

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
              setCurrent={(index) => {
                setCurrent(index);
                // Reset autoplay timer when manually changing slides
                setAutoplayEnabled(true);
              }}
            />
          </div>
        </div>

        <ImageModal 
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            // Reset modal index when closed
            setModalImageIndex(null);
            // Resume autoplay when modal is closed
            setAutoplayEnabled(true);
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
