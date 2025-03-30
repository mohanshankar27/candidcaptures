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
  // Calculate 3D transform based on index and active index
  const isActive = activeIndex === index;
  const isPrev = (activeIndex === 0 && index === totalSlides - 1) || 
                (activeIndex !== 0 && index === activeIndex - 1);
  const isNext = (activeIndex === totalSlides - 1 && index === 0) || 
                (activeIndex !== totalSlides - 1 && index === activeIndex + 1);
  
  // Calculate distance from active
  let distanceFromActive = Math.abs(index - activeIndex);
  // Handle wraparound for carousel
  if (distanceFromActive > totalSlides / 2) {
    distanceFromActive = totalSlides - distanceFromActive;
  }
  
  // State for 3D hover effect
  const [hoverRotate, setHoverRotate] = useState({ x: 0, y: 0 });
  
  // Advanced 3D effect on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    const rotateY = ((x / rect.width) * 10) - 5; // -5 to 5 degrees
    const rotateX = (((y / rect.height) * 10) - 5) * -1; // -5 to 5 degrees, inverted
    
    setHoverRotate({ x: rotateX, y: rotateY });
  };
  
  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setHoverRotate({ x: 0, y: 0 });
  };
  
  // Determine position class based on relationship to active slide
  const getPositionClass = () => {
    if (isActive) return "active-slide-zoom";
    if (isPrev) return "prev-slide-position";
    if (isNext) return "next-slide-position";
    return "far-slide-position";
  };
  
  // Animation effects based on active status
  const getAnimationClass = () => {
    if (isActive) return "animate-depth-shift";
    return "";
  };
  
  return (
    <motion.div 
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: isActive ? 1 : 0.85 - (distanceFromActive * 0.05),
        z: isActive ? 0 : -150 * distanceFromActive,
        rotateY: isActive ? hoverRotate.y : isPrev ? 25 : isNext ? -25 : 0,
        rotateX: isActive ? hoverRotate.x : 0,
        x: isActive ? 0 : isPrev ? "-25%" : isNext ? "25%" : 0,
      }}
      transition={{ 
        duration: 0.7, 
        ease: "easeOut"
      }}
      className={`flex-[0_0_280px] sm:flex-[0_0_320px] md:flex-[0_0_450px] relative mx-3 swiper-slide elementor-swiper-slide ${getPositionClass()} ${getAnimationClass()}`}
      style={{ 
        perspective: '1500px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-3d-container h-full w-full">
        <CardFlip
          isFlipped={flippedIndex === index}
          onFlip={() => handleCardFlip(index)}
          className="h-[520px] w-full card-3d"
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
                className="w-full h-full object-cover"
                style={{
                  transform: isActive ? 'scale(1.05) translateZ(10px)' : 
                            isPrev ? 'scale(1.05) translateX(-5%) translateZ(-50px)' : 
                            isNext ? 'scale(1.05) translateX(5%) translateZ(-50px)' : 'scale(1.05) translateZ(-100px)',
                  filter: isActive ? 'contrast(1.1) brightness(1.08) saturate(1.1)' : 'contrast(1) brightness(0.9) saturate(0.95)',
                  transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), filter 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)'
                }}
              />
              
              {/* Premium gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-700/20 via-transparent to-amber-300/20 opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              {/* Create reflective effect at bottom of card for 3D look */}
              {isActive && <div className="gallery-reflection"></div>}
              
              {/* Premium corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* View indicator for active slide - keeping minimal indicator without text */}
              {isActive && (
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/40 backdrop-blur-sm py-1 px-2 rounded-full z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                </div>
              )}
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
          <div 
            className="absolute inset-0 border-2 border-amber-300/30 rounded-xl pointer-events-none shadow-[0_0_40px_rgba(251,191,36,0.3)]"
            style={{
              transition: 'opacity 0.6s ease-out',
              transform: 'translateZ(5px)'
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default GallerySlide;
