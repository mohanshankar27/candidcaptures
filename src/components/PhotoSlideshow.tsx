
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from './gallery/GalleryData';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import SlideshowHeader from './slideshow/SlideshowHeader';
import SlideshowGallery from './slideshow/SlideshowGallery';
import StyleProvider from './gallery/StyleProvider';

const PhotoSlideshow = () => {
  return (
    <section id="glimpse" className="py-32 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden">
      <BackgroundDecorators />
      
      <div className="container mx-auto px-4 relative z-10">
        <SlideshowHeader />
        
        <StyleProvider>
          <SlideshowGallery images={galleryImages} />
        </StyleProvider>
        
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
    </section>
  );
};

export default PhotoSlideshow;
