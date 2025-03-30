
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
}

const GallerySlide = ({ 
  image, 
  index, 
  activeIndex, 
  flippedIndex, 
  handleCardFlip,
  totalSlides
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
    const rotateY = ((x / rect.width) * 6) - 3; // -3 to 3 degrees
    const rotateX = (((y / rect.height) * 6) - 3) * -1; // -3 to 3 degrees, inverted
    
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
      y: 40,
      scale: 0.95
    },
    animate: {
      opacity: isActive ? 1 : 0.3,
      y: 0,
      scale: isActive ? 1 : 0.85,
      rotateY: isActive ? hoverRotate.y : 0,
      rotateX: isActive ? hoverRotate.x : 0,
      transition: { 
        duration: 0.7, 
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
          className="h-[520px] w-full card-3d mx-auto max-w-5xl"
          frontContent={
            <div className="relative w-full h-full overflow-hidden group card-3d-face">
              {/* Golden border glow effect */}
              <div className="absolute inset-0 z-20 golden-border-glow rounded-lg"></div>
              
              {/* Luxury gold border frame */}
              <div className="absolute inset-2 z-20 border-[1px] border-amber-300/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-[7px] z-20 border-[1px] border-amber-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              
              {/* 3D card shadow effect */}
              {isActive && <div className="card-3d-shadow"></div>}
              
              {/* Dynamic light effects */}
              <div className="absolute -inset-full z-10 bg-gradient-to-tr from-amber-300/10 via-white/20 to-amber-300/10 translate-x-[100%] skew-x-12 animate-shine"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-black/20 mix-blend-overlay z-10 opacity-60"></div>
              
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-contain mx-auto"
              />
              
              {/* Premium gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 opacity-40"></div>
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
            transition={{ duration: 0.6 }}
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
