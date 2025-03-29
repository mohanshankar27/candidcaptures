
import { motion } from "framer-motion";

interface GalleryImageProps {
  image: {
    url: string;
    alt: string;
  };
  index: number;
  current: number;
  onClick: () => void;
}

const GalleryImage = ({ image, index, current, onClick }: GalleryImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-lg shadow-xl">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-auto object-cover rounded-lg transform transition-transform duration-2000 hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 rounded-lg opacity-60 hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-2">{image.alt}</h3>
        <div className="h-0.5 w-12 bg-orange-400 mb-2 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300" />
        <p className="text-sm text-white/90 max-w-sm">
          {index + 1}/{current + 1}
        </p>
      </div>
      <div className="absolute top-4 right-4">
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryImage;
