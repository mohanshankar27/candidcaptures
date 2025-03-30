
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from './gallery/GalleryData';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import SlideshowHeader from './slideshow/SlideshowHeader';
import SlideshowGallery from './slideshow/SlideshowGallery';
import StyleProvider from './gallery/StyleProvider';

const PhotoSlideshow = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  
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
    
    // Simulate loading for the transition effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
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
    
    // Handle escape key to exit fullscreen
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleKeyPress);
      
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

  // Animation variants for consistent animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const galleryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: isLoaded ? 1 : 0, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const fullscreenVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren"
      }
    }
  };

  return (
    <>
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
            <SlideshowHeader onToggleFullscreen={toggleFullscreen} />
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
              <SlideshowGallery images={galleryImages} />
            </StyleProvider>
          </motion.div>
        </div>
        
        {/* Add Elementor-style swiper styles with enhanced 3D effects */}
        <style>
          {`
            .elementor-main-swiper {
              overflow: hidden;
              position: relative;
              transform-style: preserve-3d;
              width: 100%;
            }
            
            .swiper-coverflow .swiper-wrapper {
              perspective: 2000px;
            }
            
            .swiper-3d .swiper-slide {
              transform-style: preserve-3d;
              will-change: transform;
            }
            
            .swiper-watch-progress .swiper-slide {
              transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
            }
            
            .swiper-initialized {
              overflow: hidden;
              position: relative;
            }
            
            .swiper-horizontal {
              touch-action: pan-y;
            }
            
            .swiper-pointer-events {
              touch-action: pan-y;
            }
            
            .elementor-swiper-wrapper {
              display: flex;
              align-items: center;
              transform-style: preserve-3d;
              transition: transform 0.2s;
              width: 100%;
            }
            
            .transform-style-3d {
              transform-style: preserve-3d;
            }
            
            #glimpse {
              transform-style: preserve-3d;
              perspective: 3000px;
            }
            
            #glimpse::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: radial-gradient(circle at center, rgba(251,191,36,0.05) 0%, rgba(251,191,36,0) 70%);
              pointer-events: none;
            }
            
            .container-fluid {
              width: 100%;
              max-width: 100%;
              margin: 0 auto;
            }
            
            .carousel-3d-container {
              width: 100vw;
              max-width: 100vw;
              margin-left: calc(-50vw + 50%);
              padding: 0;
            }
            
            @media (min-width: 1400px) {
              .carousel-3d-container {
                padding: 0;
              }
            }
            
            .golden-border-glow {
              box-shadow: 0 0 15px 2px rgba(251,191,36,0.3);
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
            }
            
            .card-3d-face:hover .golden-border-glow {
              opacity: 1;
            }
          `}
        </style>
      </motion.section>
      
      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            variants={fullscreenVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black z-50 overflow-hidden"
            ref={fullscreenRef}
          >
            <div className="absolute top-4 right-4 z-50">
              <motion.button
                onClick={toggleFullscreen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Exit fullscreen"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
            
            <motion.div 
              className="h-full w-full flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="container-fluid mx-auto h-full flex flex-col">
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl text-white/90 font-bold font-akaya mb-2">
                    Glimpse of Our Work
                  </h2>
                  <motion.div 
                    className="h-0.5 w-24 bg-orange-400 mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: "6rem" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  ></motion.div>
                </motion.div>
                
                <div className="flex-1 overflow-hidden">
                  <StyleProvider>
                    <SlideshowGallery images={galleryImages} />
                  </StyleProvider>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoSlideshow;
