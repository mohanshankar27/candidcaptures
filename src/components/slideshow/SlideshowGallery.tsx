
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GalleryCarousel from './gallery/GalleryCarousel';

interface SlideshowGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
}

const SlideshowGallery = ({ images }: SlideshowGalleryProps) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const galleryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <motion.div
      variants={galleryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-full mx-auto px-0"
    >
      <GalleryCarousel images={images} />
    </motion.div>
  );
};

export default SlideshowGallery;
