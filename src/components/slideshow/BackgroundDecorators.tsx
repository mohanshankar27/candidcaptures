
import { motion } from 'framer-motion';

const BackgroundDecorators = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
      {/* Premium glow elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200 to-orange-400/70 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, delay: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100 to-orange-300/50 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-40 right-1/3 w-60 h-60 rounded-full bg-gradient-to-r from-orange-300 to-orange-400/80 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2, delay: 1.1 }}
      ></motion.div>
      
      {/* Premium decorative elements */}
      <motion.div 
        className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-orange-400/70 to-transparent rotate-45"
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-400/70 to-transparent -rotate-45"
        initial={{ height: 0 }}
        animate={{ height: 128 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-20 w-40 h-40 rounded-full border border-orange-300/40 backdrop-blur-sm"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 1.6 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-orange-300/20 backdrop-blur-sm"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      ></motion.div>
      
      {/* Premium shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)] opacity-0"
        animate={{ 
          opacity: [0, 0.3, 0],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "easeInOut"
        }}
      />
      
      {/* Premium light rays */}
      <motion.div 
        className="absolute top-0 left-1/3 w-1 h-40 bg-gradient-to-b from-orange-300/40 to-transparent skew-x-12"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 160, opacity: 0.7 }}
        transition={{ duration: 2, delay: 2.0 }}
      />
      <motion.div 
        className="absolute top-20 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-300/30 to-transparent -skew-x-12"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 128, opacity: 0.5 }}
        transition={{ duration: 2, delay: 2.2 }}
      />
    </div>
  );
};

export default BackgroundDecorators;
