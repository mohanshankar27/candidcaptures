
import { useEffect, useState } from 'react';
import { galleryImages } from './gallery/GalleryData';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import SlideshowHeader from './slideshow/SlideshowHeader';
import SlideshowGallery from './slideshow/SlideshowGallery';
import StyleProvider from './gallery/StyleProvider';

const PhotoSlideshow = () => {
  return (
    <section id="glimpse" className="py-24 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden">
      <BackgroundDecorators />
      
      <div className="container mx-auto px-4 relative z-10">
        <SlideshowHeader />
        
        <StyleProvider>
          <SlideshowGallery images={galleryImages} />
        </StyleProvider>
      </div>
    </section>
  );
};

export default PhotoSlideshow;
