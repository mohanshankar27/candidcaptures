
import { motion } from 'framer-motion';

const SlideshowHeader = () => {
  return (
    <div className="text-center mb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Premium subtle glow behind heading */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-20 bg-orange-300/10 blur-3xl rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [-1, 1, -1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-primary mb-4 tracking-wide relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="inline-block relative"
          >
            <motion.span 
              className="relative z-10"
              animate={{ rotateX: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            >Glimpse of Our Work</motion.span>
            {/* Premium gold underline effect */}
            <motion.span 
              className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-300 via-amber-400 to-orange-300 rounded-full" 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1 }}
              viewport={{ once: true }}
            ></motion.span>
          </motion.span>
        </h2>
        
        <motion.div 
          className="w-24 h-[2px] bg-gradient-to-r from-orange-300 via-amber-500 to-orange-300 mx-auto rounded-full mb-6 overflow-hidden relative"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Premium shimmer effect on divider */}
          <motion.span 
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent" 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
          ></motion.span>
        </motion.div>
        
        <motion.p 
          className="text-slate-600 max-w-2xl mx-auto font-light text-lg leading-relaxed relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          viewport={{ once: true }}
          animate={{ 
            rotateX: [0, 2, 0]
          }}
          transition={{ 
            rotateX: { duration: 7, repeat: Infinity, repeatType: "reverse" }
          }}
        >
          <span className="relative">
            Extraordinary masterpieces from our exclusive fine art collection, where every meticulously crafted frame captures the essence of unparalleled luxury and artistic excellence
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SlideshowHeader;
