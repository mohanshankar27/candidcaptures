
import { motion } from 'framer-motion';
import { Maximize } from 'lucide-react';

interface SlideshowHeaderProps {
  onToggleFullscreen?: () => void;
}

const SlideshowHeader = ({ onToggleFullscreen }: SlideshowHeaderProps) => {
  return (
    <div className="text-center mb-16 relative z-10">
      {/* Festival Offer Running Scrawl */}
      <div className="mb-8 -mx-4 w-screen relative left-1/2 transform -translate-x-1/2">
        <div className="w-full bg-[#ea384c] py-2 overflow-hidden">
          <div className="relative">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="whitespace-nowrap inline-block"
            >
              <span className="text-white font-semibold text-lg tracking-wider font-akaya">
                🎉 Avail Festival offer 10% off on the packages of your choice 🎉 • 
                🎉 Avail Festival offer 10% off on the packages of your choice 🎉 • 
                🎉 Avail Festival offer 10% off on the packages of your choice 🎉 • 
                🎉 Avail Festival offer 10% off on the packages of your choice 🎉 • 
                🎉 Avail Festival offer 10% off on the packages of your choice 🎉 • 
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Subtle static glow behind heading */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-20 bg-orange-300/10 blur-3xl rounded-full"></div>
        
        <div className="flex items-center justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-arjulian italic text-primary mb-4 tracking-wide relative"
          >
            <span className="relative z-10 inline-block">Glimpse of Our Work</span>
            {/* Smooth gold underline effect */}
            <motion.span 
              className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-300 via-amber-400 to-orange-300 rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            ></motion.span>
          </motion.h2>
          
          {onToggleFullscreen && (
            <motion.button
              onClick={onToggleFullscreen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-amber-100 text-amber-800 p-2 rounded-full hover:bg-amber-200 transition-colors duration-300 shadow-sm"
              aria-label="View in fullscreen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Maximize className="w-5 h-5" />
            </motion.button>
          )}
        </div>
        
        <motion.div 
          className="w-24 h-[2px] bg-gradient-to-r from-orange-300 via-amber-500 to-orange-300 mx-auto rounded-full mb-6 overflow-hidden relative"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SlideshowHeader;
