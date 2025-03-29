
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from './gallery/GalleryData';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import SlideshowHeader from './slideshow/SlideshowHeader';
import SlideshowGallery from './slideshow/SlideshowGallery';
import StyleProvider from './gallery/StyleProvider';

const PhotoSlideshow = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add the swiper watch progress class to body or container
    const container = document.getElementById('glimpse');
    if (container) {
      container.classList.add('swiper-watch-progress');
    }
    
    // Simulate loading for the transition effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => {
      clearTimeout(timer);
      // Clean up classes when component unmounts
      if (container) {
        container.classList.remove('swiper-watch-progress');
      }
    };
  }, []);

  return (
    <section id="glimpse" className="py-32 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden swiper-coverflow swiper-3d">
      <BackgroundDecorators />
      
      <div className="container mx-auto px-4 relative z-10">
        <SlideshowHeader />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="swiper-initialized swiper-horizontal swiper-pointer-events"
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
          <p className="text-lg text-slate-700 italic max-w-2xl mx-auto font-serif">
            "Photography is the story I fail to put into words"
          </p>
          <div className="h-0.5 w-16 bg-orange-300 mx-auto mt-6"></div>
        </motion.div>
      </div>
      
      {/* Add custom Elementor-like swiper styles */}
      <style>
        {`
          .swiper-coverflow .swiper-wrapper {
            perspective: 1200px;
          }
          
          .swiper-3d .swiper-slide {
            transform-style: preserve-3d;
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
        `}
      </style>
    </section>
  );
};

export default PhotoSlideshow;
