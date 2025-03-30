
import { motion } from 'framer-motion';
import CardFlip from '../../gallery/CardFlip';
import CardBack from '../../gallery/CardBack';
import { useState, useEffect } from 'react';

interface GallerySlideProps {
  image: {
    url: string;
    alt: string;
  };
  index: number;
  activeIndex: number;
  flippedIndex: number | null;
  handleCardFlip: (index: number) => void;
  totalSlides: number;
  showFullSize?: boolean;
  isLoaded?: boolean;
}

const GallerySlide = ({ 
  image, 
  index, 
  activeIndex, 
  flippedIndex, 
  handleCardFlip,
  totalSlides,
  showFullSize = false,
  isLoaded = true
}: GallerySlideProps) => {
  // Calculate if this is the active slide
  const isActive = activeIndex === index;
  
  // State for 3D hover effect
  const [hoverRotate, setHoverRotate] = useState({ x: 0, y: 0 });
  
  // Advanced 3D effect on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position (more subtle)
    const rotateY = ((x / rect.width) * 4) - 2; // -2 to 2 degrees (reduced from -3 to 3)
    const rotateX = (((y / rect.height) * 4) - 2) * -1; // -2 to 2 degrees (reduced from -3 to 3)
    
    setHoverRotate({ x: rotateX, y: rotateY });
  };
  
  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setHoverRotate({ x: 0, y: 0 });
  };
  
  // Animation variants for consistent motion
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20, // Reduced from 40
      scale: 0.95
    },
    animate: {
      opacity: isActive ? 1 : 0.3,
      y: 0,
      scale: isActive ? 1 : 0.85,
      rotateY: isActive ? hoverRotate.y : 0,
      rotateX: isActive ? hoverRotate.x : 0,
      transition: { 
        duration: 0.5, // Reduced from 0.7
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <motion.div 
      key={index}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className="flex-[0_0_100%] min-w-full relative swiper-slide elementor-swiper-slide"
      style={{ 
        perspective: '1500px',
        transformStyle: 'preserve-3d',
        display: isActive ? 'block' : 'none'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-3d-container h-full w-full">
        <CardFlip
          isFlipped={flippedIndex === index}
          onFlip={() => handleCardFlip(index)}
          className={`${showFullSize ? 'h-[80vh] max-h-[600px]' : 'h-[520px]'} w-full card-3d mx-auto max-w-5xl`}
          frontContent={
            <div className="relative w-full h-full overflow-hidden group card-3d-face">
              {/* Golden border glow effect */}
              <div className="absolute inset-0 z-20 golden-border-glow rounded-lg"></div>
              
              {/* Simplified luxury gold border frame */}
              <div className="absolute inset-2 z-20 border-[1px] border-amber-300/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Loading state placeholder */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-30">
                  <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Image with loading attributes */}
              <img 
                src={image.url} 
                alt={image.alt} 
                loading={index < 2 ? "eager" : "lazy"}
                decoding={index < 2 ? "sync" : "async"}
                className={`${showFullSize ? 'w-full h-full object-contain' : 'w-full h-full object-contain'} mx-auto ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
                style={{ 
                  willChange: 'transform',
                  transition: 'opacity 0.3s ease'
                }}
              />
              
              {/* Simplified gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-700/20 via-transparent to-amber-300/20 opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              {/* Create reflective effect at bottom of card for 3D look */}
              {isActive && <div className="gallery-reflection"></div>}
              
              {/* Premium corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          }
          backContent={
            <CardBack 
              title={image.alt} 
              description="This exclusive fine art photography piece exemplifies our commitment to unparalleled visual excellence. Each image is meticulously composed and post-processed with premium attention to detail."
              onViewInGallery={() => {}}
            />
          }
        />
        
        {isActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }} // Reduced from 0.6
            className="absolute inset-0 border-2 border-amber-300/30 rounded-xl pointer-events-none shadow-[0_0_40px_rgba(251,191,36,0.3)]"
            style={{
              transform: 'translateZ(5px)'
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default GallerySlide;
