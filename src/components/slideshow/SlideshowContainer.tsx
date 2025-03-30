
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, galleryVariants } from './animation/AnimationVariants';
import BackgroundDecorators from './BackgroundDecorators';
import SlideshowHeader from './SlideshowHeader';
import ElementorStyles from './ElementorStyles';
import StyleProvider from '../gallery/StyleProvider';

interface SlideshowContainerProps {
  children: React.ReactNode;
  isLoaded: boolean;
  onToggleFullscreen: () => void;
}

const SlideshowContainer = ({ 
  children, 
  isLoaded, 
  onToggleFullscreen 
}: SlideshowContainerProps) => {
  const containerRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    // Set the reference
    containerRef.current = document.getElementById('glimpse');
    
    // Add the Elementor classes to container
    if (containerRef.current) {
      containerRef.current.classList.add(
        'elementor-main-swiper',
        'swiper-container',
        'swiper-coverflow',
        'swiper-3d',
        'swiper-initialized',
        'swiper-horizontal',
        'swiper-pointer-events',
        'swiper-watch-progress'
      );
    }
    
    // Add enhanced 3D effect with mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const mouseX = (e.clientX - left) / width - 0.5;
      const mouseY = (e.clientY - top) / height - 0.5;
      
      // Subtle parallax effect on the entire container
      containerRef.current.style.setProperty('--mouse-x', `${mouseX * 5}deg`);
      containerRef.current.style.setProperty('--mouse-y', `${mouseY * 5}deg`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up classes when component unmounts
      if (containerRef.current) {
        containerRef.current.classList.remove(
          'elementor-main-swiper',
          'swiper-container',
          'swiper-coverflow',
          'swiper-3d',
          'swiper-initialized',
          'swiper-horizontal',
          'swiper-pointer-events',
          'swiper-watch-progress'
        );
        
        // Remove custom properties
        containerRef.current.style.removeProperty('--mouse-x');
        containerRef.current.style.removeProperty('--mouse-y');
      }
    };
  }, []);

  return (
    <motion.section 
      id="glimpse" 
      className="py-32 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden"
      style={{ 
        transformStyle: 'preserve-3d',
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <BackgroundDecorators />
      
      <div className="container-fluid mx-auto px-0 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <SlideshowHeader onToggleFullscreen={onToggleFullscreen} />
        </div>
        
        <motion.div 
          variants={galleryVariants}
          initial="hidden"
          animate="visible"
          className="elementor-swiper-wrapper swiper-wrapper transform-style-3d w-full"
          style={{
            transform: 'var(--mouse-x, 0) var(--mouse-y, 0)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out',
          }}
        >
          <StyleProvider>
            {children}
          </StyleProvider>
        </motion.div>
      </div>
      
      <ElementorStyles />
    </motion.section>
  );
};

export default SlideshowContainer;
