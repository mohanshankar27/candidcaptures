
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
        rotateY: isActive ? 0 : isPrev ? 25 : isNext ? -25 : 0,
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.165, 0.84, 0.44, 1]
      }}
      className="flex-[0_0_280px] sm:flex-[0_0_320px] md:flex-[0_0_450px] relative mx-2 swiper-slide"
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
            {/* Premium overlay effects */}
            <div className="absolute inset-0 bg-black/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-blue-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
            
            {/* Premium light effect */}
            <div className="absolute -inset-[100%] bg-white/5 skew-x-12 group-hover:animate-shine z-10 opacity-0 group-hover:opacity-100"></div>
            
            <motion.img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-7000 group-hover:scale-110"
              initial={{ scale: 1.05, rotateY: 0 }}
              animate={{ 
                scale: isActive ? 1 : 1.05,
                x: isPrev ? '-10%' : isNext ? '10%' : 0,
                rotateY: isActive ? 0 : isPrev ? '35deg' : isNext ? '-35deg' : 0,
                filter: isActive ? 'contrast(1.1) brightness(1.05)' : 'contrast(1) brightness(1)',
                z: isActive ? 50 : 0
              }}
              transition={{ 
                duration: 1.8, 
                ease: [0.25, 0.1, 0.25, 1.0],
                x: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
                rotateY: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                filter: { duration: 1.2 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            />
            
            {/* Premium gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.5, 
                  y: isActive ? 0 : 10,
                  rotateY: isActive ? 0 : isPrev ? '20deg' : isNext ? '-20deg' : 0
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.2,
                  rotateY: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <h3 className="text-2xl font-serif italic font-light mb-2 tracking-wide">{image.alt}</h3>
                <div className="h-0.5 w-16 bg-gradient-to-r from-orange-300 to-orange-500 mb-3"></div>
                <p className="text-sm text-white/90 max-w-md font-light backdrop-blur-sm bg-black/10 inline-block px-2 py-1 rounded">
                  Premium photography excellence
                </p>
              </motion.div>
            </div>
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
          layoutId="activeSlide"
          className="absolute inset-0 border-2 border-white/50 rounded-xl pointer-events-none shadow-[0_0_40px_rgba(255,165,0,0.15)]"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </motion.div>
  );
};

export default GallerySlide;
