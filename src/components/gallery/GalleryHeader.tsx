
import { motion } from 'framer-motion';

const GalleryHeader = () => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
        Our Gallery
      </h2>
      <div className="h-1 w-24 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mt-4"></div>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Explore our portfolio showcasing our finest photography work across various genres and styles.
      </p>
    </motion.div>
  );
};

export default GalleryHeader;
