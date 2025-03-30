
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { galleryImages } from './gallery/GalleryData';
import SlideshowContainer from './slideshow/SlideshowContainer';
import SlideshowGallery from './slideshow/SlideshowGallery';
import FullscreenGallery from './slideshow/FullscreenGallery';

const PhotoSlideshow = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  useEffect(() => {
    // Simulate loading for the transition effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    // Handle escape key to exit fullscreen
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isFullscreen]);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    
    // Apply no-scroll to body when in fullscreen
    if (!isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <SlideshowContainer 
        isLoaded={isLoaded}
        onToggleFullscreen={toggleFullscreen}
      >
        <SlideshowGallery images={galleryImages} />
      </SlideshowContainer>
      
      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {isFullscreen && (
          <FullscreenGallery 
            isOpen={isFullscreen} 
            onClose={toggleFullscreen} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoSlideshow;
