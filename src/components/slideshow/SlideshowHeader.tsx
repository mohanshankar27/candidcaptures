
import { motion } from 'framer-motion';
import { Maximize } from 'lucide-react';

interface SlideshowHeaderProps {
  onToggleFullscreen?: () => void;
}

const SlideshowHeader = ({ onToggleFullscreen }: SlideshowHeaderProps) => {
  return (
    <div className="text-center mb-16 relative z-10">
      <div className="relative">
        {/* Subtle static glow behind heading */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-20 bg-orange-300/10 blur-3xl rounded-full"></div>
        
        <div className="flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-arjulian italic text-primary mb-4 tracking-wide relative">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="inline-block relative"
            >
              <span className="relative z-10 inline-block">Glimpse of Our Work</span>
              {/* Smooth gold underline effect */}
              <motion.span 
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-300 via-amber-400 to-orange-300 rounded-full" 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.span>
            </motion.span>
          </h2>
          
          {onToggleFullscreen && (
            <motion.button
              onClick={onToggleFullscreen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-amber-100 text-amber-800 p-2 rounded-full hover:bg-amber-200 transition-colors duration-300 shadow-sm"
              aria-label="View in fullscreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Maximize className="w-5 h-5" />
            </motion.button>
          )}
        </div>
        
        <motion.div 
          className="w-24 h-[2px] bg-gradient-to-r from-orange-300 via-amber-500 to-orange-300 mx-auto rounded-full mb-6 overflow-hidden relative"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>
        
        <motion.p 
          className="text-slate-600 max-w-2xl mx-auto font-akaya text-lg leading-relaxed relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <span className="relative inline-block">
            Extraordinary masterpieces from our exclusive fine art collection, where every meticulously crafted frame captures the essence of unparalleled luxury and artistic excellence
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default SlideshowHeader;
