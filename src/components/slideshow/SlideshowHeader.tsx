
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-primary mb-4 tracking-wide">
          Glimpse of Our Work
        </h2>
        <div className="w-24 h-[2px] bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          Curated masterpieces from our exclusive photography collection, where every frame tells a compelling story of artistry and emotion
        </p>
      </motion.div>
    </div>
  );
};

export default SlideshowHeader;
