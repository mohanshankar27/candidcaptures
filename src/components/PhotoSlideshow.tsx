
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from './gallery/GalleryData';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import SlideshowHeader from './slideshow/SlideshowHeader';
import SlideshowGallery from './slideshow/SlideshowGallery';
import StyleProvider from './gallery/StyleProvider';

const PhotoSlideshow = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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
    
    return () => {
      clearTimeout(timer);
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
    <section 
      id="glimpse" 
      className="py-32 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden"
      style={{ 
        transformStyle: 'preserve-3d',
      }}
    >
      <BackgroundDecorators />
      
      <div className="container mx-auto px-4 relative z-10">
        <SlideshowHeader />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="elementor-swiper-wrapper swiper-wrapper transform-style-3d"
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.p 
            className="text-lg text-slate-700 italic max-w-2xl mx-auto font-serif"
            whileInView={{ 
              textShadow: ['0px 0px 0px rgba(251,191,36,0)', '0px 0px 10px rgba(251,191,36,0.3)', '0px 0px 0px rgba(251,191,36,0)'] 
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          >
            "Photography is the story I fail to put into words"
          </motion.p>
          <motion.div 
            className="h-0.5 w-16 bg-orange-300 mx-auto mt-6"
            whileInView={{ width: ['0px', '64px', '40px', '64px'] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
        </motion.div>
      </div>
      
      {/* Add Elementor-style swiper styles with enhanced 3D effects */}
      <style>
        {`
          .elementor-main-swiper {
            overflow: hidden;
            position: relative;
            transform-style: preserve-3d;
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
        `}
      </style>
    </section>
  );
};

export default PhotoSlideshow;
