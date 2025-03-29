
import { motion } from 'framer-motion';

const SlideshowHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
          Glimpse of Our Work
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Take a peek at some of our favorite moments captured through our lens
        </p>
      </motion.div>
    </div>
  );
};

export default SlideshowHeader;
