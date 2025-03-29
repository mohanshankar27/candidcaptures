
import { motion } from "framer-motion";

interface GalleryImageProps {
  url: string;
  alt: string;
  index: number;
  onClick: (index: number) => void;
}

const GalleryImage = ({ url, alt, index, onClick }: GalleryImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full cursor-pointer"
      onClick={() => onClick(index)}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={url}
          alt={alt}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg opacity-50" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <p className="text-sm">{alt}</p>
      </div>
    </motion.div>
  );
};

export default GalleryImage;
