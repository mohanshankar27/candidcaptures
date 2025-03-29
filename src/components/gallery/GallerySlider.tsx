
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import GalleryControls from './GalleryControls';
import CardFlip from './CardFlip';
import CardFront from './CardFront';
import CardBack from './CardBack';

interface GallerySliderProps {
  images: {
    url: string;
    alt: string;
  }[];
  current: number;
  setCurrent: (index: number) => void;
  onOpenModal: (index: number) => void;
  flippedIndex: number | null;
  setFlippedIndex: (index: number | null) => void;
}

const GallerySlider = ({
  images,
  current,
  setCurrent,
  onOpenModal,
  flippedIndex,
  setFlippedIndex
}: GallerySliderProps) => {
  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
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
        {images.map((image, index) => (
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
              <CardFlip 
                isFlipped={flippedIndex === index} 
                onFlip={() => handleCardFlip(index)} 
                className="h-full w-full"
                frontContent={
                  <CardFront 
                    imageUrl={image.url} 
                    imageAlt={image.alt} 
                    title={image.alt} 
                  />
                }
                backContent={
                  <CardBack 
                    title={image.alt} 
                    onViewInGallery={(e) => {
                      e.stopPropagation();
                      onOpenModal(index);
                    }} 
                  />
                }
              />
            </motion.div>
          </div>
        ))}
      </motion.div>

      <GalleryControls onPrev={prevImage} onNext={nextImage} />
    </motion.div>
  );
};

export default GallerySlider;
