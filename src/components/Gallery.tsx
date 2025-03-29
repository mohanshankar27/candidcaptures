
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GalleryImage from './gallery/GalleryImage';
import GalleryThumbnails from './gallery/GalleryThumbnails';
import GalleryIndicators from './gallery/GalleryIndicators';
import ImageModal from './gallery/ImageModal';
import { galleryImages } from './gallery/GalleryData';

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const imageUrls = galleryImages.map(img => img.url);

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
  
  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Our Gallery
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our portfolio showcasing our finest photography work across various genres and styles.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <motion.div 
              className="flex transition-all duration-500 ease-in-out h-[500px]"
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

            <button 
              onClick={prevImage}
              className={cn(
                "absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full z-10",
                "hover:bg-black/50 transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              )}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className={cn(
                "absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full z-10",
                "hover:bg-black/50 transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              )}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <GalleryIndicators 
            images={galleryImages}
            current={current}
            setCurrent={setCurrent}
          />

          <GalleryThumbnails 
            images={galleryImages}
            current={current}
            setCurrent={setCurrent}
          />
        </div>

        <ImageModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={imageUrls}
          initialIndex={modalImageIndex}
        />
      </div>
    </section>
  );
};

export default Gallery;
