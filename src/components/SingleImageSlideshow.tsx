
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { galleryImages } from './gallery/GalleryData';
import BackgroundDecorators from './slideshow/BackgroundDecorators';
import SlideshowHeader from './slideshow/SlideshowHeader';

const SingleImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [rotationValues, setRotationValues] = useState<{ [key: number]: number }>({});
  const timerRef = useRef<number | null>(null);
  
  // Function to handle auto-play with cleanup for timer
  useEffect(() => {
    if (isPlaying && !isComplete) {
      timerRef.current = window.setTimeout(() => {
        if (currentIndex === galleryImages.length - 1) {
          // When we reach the last image, mark slideshow as complete
          setIsComplete(true);
          setIsPlaying(false);
        } else {
          setCurrentIndex(prevIndex => prevIndex + 1);
        }
      }, 3000); // 3 seconds per slide
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPlaying, isComplete]);
  
  const goToNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      setIsComplete(true);
    }
  };
  
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const resetSlideshow = () => {
    setCurrentIndex(0);
    setIsComplete(false);
    setIsPlaying(true);
  };
  
  const handleRotateImage = (index: number) => {
    setRotationValues(prev => ({
      ...prev,
      [index]: ((prev[index] || 0) + 90) % 360
    }));
  };
  
  const getRotationStyle = (index: number) => {
    return {
      transform: `rotate(${rotationValues[index] || 0}deg)`,
      transition: 'transform 0.5s ease'
    };
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden">
      <BackgroundDecorators />
      
      <div className="container mx-auto px-4 relative z-10">
        <SlideshowHeader />
        
        <div className="max-w-5xl mx-auto mt-12">
          {/* Main slideshow container */}
          <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden aspect-[4/3] mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
              >
                <div className="relative w-full h-full">
                  <img 
                    src={galleryImages[currentIndex].url} 
                    alt={galleryImages[currentIndex].alt}
                    className="w-full h-full object-cover"
                    style={getRotationStyle(currentIndex)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/40"></div>
                  
                  {/* Image caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-light">
                      {galleryImages[currentIndex].alt}
                    </h3>
                    <div className="w-16 h-0.5 bg-orange-300 my-2"></div>
                    <p className="text-sm text-white/80">
                      Image {currentIndex + 1} of {galleryImages.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Controls overlay */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button 
                onClick={togglePlayPause}
                className="bg-black/30 text-white hover:bg-black/50 p-2 rounded-full backdrop-blur-sm"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
              <button 
                onClick={resetSlideshow}
                className="bg-black/30 text-white hover:bg-black/50 p-2 rounded-full backdrop-blur-sm"
              >
                <RotateCcw size={20} />
              </button>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="bg-white hover:bg-orange-50 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <span className="text-slate-600">
                {currentIndex + 1} / {galleryImages.length}
              </span>
            </div>
            
            <button
              onClick={goToNext}
              disabled={currentIndex === galleryImages.length - 1 && isComplete}
              className="bg-white hover:bg-orange-50 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Image rotation panel - shows only after slideshow is complete */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">Rotate Images</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-full aspect-square mb-2 overflow-hidden rounded-lg border border-gray-200">
                      <img 
                        src={image.url} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={getRotationStyle(index)}
                      />
                    </div>
                    <button
                      onClick={() => handleRotateImage(index)}
                      className="bg-orange-50 hover:bg-orange-100 text-amber-800 px-3 py-1 rounded-full text-xs"
                    >
                      Rotate {rotationValues[index] ? `(${rotationValues[index]}°)` : ''}
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={resetSlideshow}
                  className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-6 py-2 rounded-full inline-flex items-center"
                >
                  <RotateCcw size={16} className="mr-2" />
                  Restart Slideshow
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Thumbnail navigation */}
          <div className="mt-8 overflow-hidden">
            <div className="flex overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-transparent">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`flex-shrink-0 w-20 h-20 mx-2 rounded-lg overflow-hidden cursor-pointer ${
                    currentIndex === index ? 'ring-2 ring-amber-500' : ''
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPlaying(false);
                  }}
                >
                  <img 
                    src={image.url} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for scrollbar styling */}
      <style>
        {`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgb(252, 211, 77);
          border-radius: 20px;
        }
        `}
      </style>
    </section>
  );
};

export default SingleImageSlideshow;
