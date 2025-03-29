
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <GalleryCarousel images={images} />
    </motion.div>
  );
};

export default SlideshowGallery;
