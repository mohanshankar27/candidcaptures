
import { motion } from 'framer-motion';
import CardFlip from '../../gallery/CardFlip';
import CardBack from '../../gallery/CardBack';

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

  return (
    <motion.div 
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: isActive ? 1 : 0.85 - (distanceFromActive * 0.05),
        z: isActive ? 0 : -100 * distanceFromActive,
        rotateY: isActive ? 0 : isPrev ? 10 : isNext ? -10 : 0,
      }}
      transition={{ 
        duration: 0.7, 
        ease: "easeOut"
      }}
      className="flex-[0_0_280px] sm:flex-[0_0_320px] md:flex-[0_0_450px] relative mx-1 swiper-slide"
      style={{ 
        perspective: '1500px',
        transformStyle: 'preserve-3d',
      }}
    >
      <CardFlip
        isFlipped={flippedIndex === index}
        onFlip={() => handleCardFlip(index)}
        className="h-[520px] w-full"
        frontContent={
          <div className="relative w-full h-full overflow-hidden group">
            {/* Luxury gold border frame */}
            <div className="absolute inset-2 z-20 border-[1px] border-amber-300/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-[7px] z-20 border-[1px] border-amber-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            
            {/* Dynamic light effects */}
            <div className="absolute -inset-full z-10 bg-gradient-to-tr from-amber-300/10 via-white/20 to-amber-300/10 translate-x-[100%] skew-x-12 group-hover:animate-shine"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-black/20 mix-blend-overlay z-10 opacity-60"></div>
            
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover"
              style={{
                transform: isActive ? 'scale(1.02)' : 
                          isPrev ? 'scale(1.05) translateX(-2%)' : 
                          isNext ? 'scale(1.05) translateX(2%)' : 'scale(1.05)',
                filter: isActive ? 'contrast(1.1) brightness(1.08) saturate(1.1)' : 'contrast(1) brightness(1) saturate(1)',
                transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), filter 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)'
              }}
            />
            
            {/* Premium gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-700/20 via-transparent to-amber-300/20 opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
            
            {/* Premium corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-amber-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Luxury content overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20">
              <div
                style={{
                  opacity: isActive ? 1 : 0.7,
                  transform: isActive ? 'translateY(0)' : 'translateY(5px)',
                  transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
                }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-amber-200 to-amber-400"></div>
                  <h3 className="text-2xl font-serif italic font-light tracking-wide">
                    <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">{image.alt}</span>
                  </h3>
                </div>
                
                <div className="flex items-center space-x-2 mt-3">
                  <div className="h-[1px] w-2 bg-amber-300/80"></div>
                  <p className="text-xs uppercase tracking-widest text-amber-100/80 font-light">Premium Collection</p>
                </div>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <p className="text-sm text-white/90 backdrop-blur-sm font-light italic">
                    "Exquisitely crafted to captivate your senses"
                  </p>
                </div>
              </div>
            </div>
            
            {/* View indicator */}
            {isActive && (
              <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/40 backdrop-blur-sm py-1 px-2 rounded-full z-20">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                <span className="text-[10px] text-white/90 uppercase tracking-wider">Featured</span>
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
            transition: 'opacity 0.6s ease-out'
          }}
        />
      )}
    </motion.div>
  );
};

export default GallerySlide;
