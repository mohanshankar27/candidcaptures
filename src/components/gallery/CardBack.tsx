
import { motion } from 'framer-motion';

interface CardBackProps {
  title: string;
  description?: string;
  onViewInGallery?: (e: React.MouseEvent) => void;
}

const CardBack = ({ title, description, onViewInGallery }: CardBackProps) => {
  return (
    <div className="p-8 flex flex-col justify-between h-full bg-gradient-to-br from-orange-50 to-white">
      <div>
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <div className="w-12 h-0.5 bg-gradient-to-r from-orange-300 to-orange-500 mb-3"></div>
        <p className="text-slate-700 mb-4">
          {description || "This captivating moment exemplifies our commitment to creative photography that tells a unique story."}
        </p>
      </div>
      {onViewInGallery && (
        <motion.button 
          className="mt-auto w-full py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium shadow-lg"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.stopPropagation();
            onViewInGallery(e);
          }}
        >
          View in Gallery
        </motion.button>
      )}
    </div>
  );
};

export default CardBack;
