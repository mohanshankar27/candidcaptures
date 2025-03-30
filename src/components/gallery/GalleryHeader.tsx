import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const GalleryHeader = () => {
  const navigate = useNavigate();
  const premiumServices = [{
    name: "Wedding Photography",
    path: "/services",
    state: {
      selectedService: "Wedding Photography"
    }
  }, {
    name: "Portrait Sessions",
    path: "/services",
    state: {
      selectedService: "Portrait Photography"
    }
  }, {
    name: "Product Photography",
    path: "/services",
    state: {
      selectedService: "Product Photography"
    }
  }, {
    name: "Concept Shoot",
    path: "/services",
    state: {
      selectedService: "Concept shoot"
    }
  }, {
    name: "Event Coverage",
    path: "/services",
    state: {
      selectedService: "Event Photography"
    }
  }];
  const handleServiceClick = (service: typeof premiumServices[0]) => {
    navigate(service.path, {
      state: service.state
    });
  };
  return <div className="text-center mb-16">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.7
    }} viewport={{
      once: true
    }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-arjulian">
          Our Gallery
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mt-4"></div>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-akaya">
          Explore our portfolio showcasing our finest photography work across various genres and styles.
        </p>
      </motion.div>

      {/* Premium Service Links */}
      <motion.div className="mt-10 mb-8" initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.7,
      delay: 0.2
    }} viewport={{
      once: true
    }}>
        <div className="relative">
          {/* Decorative elements */}
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-amber-300/0 via-amber-400/40 to-amber-300/0"></div>
        </div>

        
      </motion.div>
    </div>;
};
export default GalleryHeader;