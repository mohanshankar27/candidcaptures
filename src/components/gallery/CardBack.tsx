
import { motion } from 'framer-motion';

interface CardBackProps {
  title: string;
  description?: string;
  onViewInGallery?: (e: React.MouseEvent) => void;
}

const CardBack = ({ title, description, onViewInGallery }: CardBackProps) => {
  return (
    <div className="p-8 flex flex-col justify-between h-full bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Premium decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-orange-100 to-transparent opacity-50 -translate-y-1/2 translate-x-1/2"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-orange-100 to-transparent opacity-40 translate-y-1/2 -translate-x-1/2"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      
      {/* Premium diagonal line */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-200 to-amber-300 opacity-70 transform -rotate-1"
        animate={{ rotateZ: [-1, 1, -1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      
      <div className="relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-primary mb-2 font-serif"
          animate={{ rotateY: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        >
          {title}
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-300 to-amber-500 mt-2 mb-3 relative overflow-hidden">
            {/* Premium shimmer on title underline */}
            <motion.span 
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent" 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
            ></motion.span>
          </div>
        </motion.h3>
        <motion.p 
          className="text-slate-700 mb-4 font-light leading-relaxed"
          animate={{ rotateX: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        >
          {description || "This exquisite fine art piece exemplifies our meticulous attention to detail and passion for creating timeless visual narratives that transcend ordinary photography."}
        </motion.p>
      </div>
      
      {/* Premium metadata section */}
      <motion.div 
        className="mt-4 mb-4 py-2 border-t border-b border-orange-200/50 text-xs text-slate-500 relative z-10"
        animate={{ rotateX: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex justify-between items-center">
          <span>Limited Edition</span>
          <span>Premium Collection</span>
        </div>
      </motion.div>
      
      {onViewInGallery && (
        <motion.button 
          className="mt-auto w-full py-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 text-white font-medium shadow-lg relative overflow-hidden group"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(234, 88, 12, 0.5)" }}
          whileTap={{ scale: 0.98, rotate: -1 }}
          animate={{ rotateZ: [0, 0.5, 0] }}
          transition={{ 
            rotateZ: { duration: 5, repeat: Infinity, repeatType: "reverse" },
          }}
          onClick={(e) => {
            e.stopPropagation();
            onViewInGallery(e);
          }}
        >
          {/* Premium button shimmer effect */}
          <motion.span 
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          ></motion.span>
          View in Gallery
        </motion.button>
      )}
    </div>
  );
};

export default CardBack;
