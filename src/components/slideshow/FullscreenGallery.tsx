
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { fullscreenVariants } from './animation/AnimationVariants';
import SlideshowGallery from './SlideshowGallery';
import StyleProvider from '../gallery/StyleProvider';
import { galleryImages } from '../gallery/GalleryData';

interface FullscreenGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenGallery = ({ isOpen, onClose }: FullscreenGalleryProps) => {
  if (!isOpen) return null;
  
  return (
    <motion.div 
      variants={fullscreenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black z-50 overflow-hidden"
    >
      <div className="absolute top-4 right-4 z-50">
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Exit fullscreen"
        >
          <X className="w-6 h-6" />
        </motion.button>
      </div>
      
      <motion.div 
        className="h-full w-full flex items-center justify-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="container-fluid mx-auto h-full flex flex-col">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl text-white/90 font-bold font-akaya mb-2">
              Glimpse of Our Work
            </h2>
            <motion.div 
              className="h-0.5 w-24 bg-orange-400 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </motion.div>
          
          <div className="flex-1 overflow-hidden">
            <StyleProvider>
              <SlideshowGallery images={galleryImages} />
            </StyleProvider>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FullscreenGallery;
