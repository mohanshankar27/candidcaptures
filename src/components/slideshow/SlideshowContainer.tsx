
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
    // Set the reference - moved inside useEffect to ensure DOM is ready
    const containerElement = document.getElementById('glimpse');
    containerRef.current = containerElement;

    // Only continue if the container element exists
    if (!containerElement) return;

    // Add the Elementor classes to container
    containerElement.classList.add('elementor-main-swiper', 'swiper-container', 'swiper-coverflow', 'swiper-3d', 'swiper-initialized', 'swiper-horizontal', 'swiper-pointer-events', 'swiper-watch-progress');

    // Add enhanced 3D effect with mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
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
        containerRef.current.classList.remove('elementor-main-swiper', 'swiper-container', 'swiper-coverflow', 'swiper-3d', 'swiper-initialized', 'swiper-horizontal', 'swiper-pointer-events', 'swiper-watch-progress');

        // Remove custom properties
        containerRef.current.style.removeProperty('--mouse-x');
        containerRef.current.style.removeProperty('--mouse-y');
      }
    };
  }, []);
  
  return (
    <div className="slideshow-container relative">
      {children}
    </div>
  );
};

export default SlideshowContainer;
