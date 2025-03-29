
import { motion } from 'framer-motion';

const BackgroundDecorators = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
      {/* Premium glow elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200 to-orange-400/70 blur-3xl"
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 0.8, rotate: 5 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100 to-orange-300/50 blur-3xl"
        initial={{ opacity: 0, rotate: 5 }}
        animate={{ opacity: 0.7, rotate: -5 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-40 right-1/3 w-60 h-60 rounded-full bg-gradient-to-r from-orange-300 to-orange-400/80 blur-3xl"
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ opacity: 0.9, rotate: 3 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 1.1 }}
      ></motion.div>
      
      {/* Premium decorative elements */}
      <motion.div 
        className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-orange-400/70 to-transparent rotate-45"
        initial={{ height: 0 }}
        animate={{ height: 80, rotateZ: [45, 55, 45] }}
        transition={{ 
          height: { duration: 1.5, delay: 1.2 },
          rotateZ: { duration: 8, repeat: Infinity, repeatType: "reverse" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-400/70 to-transparent -rotate-45"
        initial={{ height: 0 }}
        animate={{ height: 128, rotateZ: [-45, -55, -45] }}
        transition={{ 
          height: { duration: 1.5, delay: 1.4 },
          rotateZ: { duration: 9, repeat: Infinity, repeatType: "reverse" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-20 w-40 h-40 rounded-full border border-orange-300/40 backdrop-blur-sm"
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          rotate: [0, 360]
        }}
        transition={{ 
          scale: { duration: 1.5, delay: 1.6 },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-orange-300/20 backdrop-blur-sm"
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          rotate: [360, 0]
        }}
        transition={{ 
          scale: { duration: 1.5, delay: 1.8 },
          rotate: { duration: 50, repeat: Infinity, ease: "linear" }
        }}
      ></motion.div>
      
      {/* Premium shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)] opacity-0"
        animate={{ 
          opacity: [0, 0.3, 0],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 10, 0]
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
        animate={{ 
          height: 160, 
          opacity: 0.7,
          rotateZ: [12, 15, 12]
        }}
        transition={{ 
          height: { duration: 2, delay: 2.0 },
          opacity: { duration: 2, delay: 2.0 },
          rotateZ: { duration: 6, repeat: Infinity, repeatType: "reverse" }
        }}
      />
      <motion.div 
        className="absolute top-20 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-300/30 to-transparent -skew-x-12"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: 128, 
          opacity: 0.5,
          rotateZ: [-12, -15, -12]
        }}
        transition={{ 
          height: { duration: 2, delay: 2.2 },
          opacity: { duration: 2, delay: 2.2 },
          rotateZ: { duration: 7, repeat: Infinity, repeatType: "reverse" }
        }}
      />
    </div>
  );
};

export default BackgroundDecorators;
