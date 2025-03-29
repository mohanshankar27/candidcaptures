
import { motion } from 'framer-motion';

interface CardFrontProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
}

const CardFront = ({ imageUrl, imageAlt, title }: CardFrontProps) => {
  return (
    <>
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="w-full h-full object-cover transition-transform duration-3000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
        whileHover={{ y: 0 }}
      >
        <h3 className="text-2xl font-semibold mb-2 text-shadow">{title}</h3>
        <div className="h-0.5 w-16 bg-orange-400 mb-3" />
        <p className="text-sm text-white/90 max-w-md">
          Tap to view details or swipe to explore more
        </p>
      </motion.div>
    </>
  );
};

export default CardFront;
