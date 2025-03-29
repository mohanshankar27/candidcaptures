
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GalleryHeader = () => {
  const navigate = useNavigate();

  const premiumServices = [
    { name: "Wedding Photography", path: "/services", state: { selectedService: "Wedding Photography" } },
    { name: "Portrait Sessions", path: "/services", state: { selectedService: "Portrait Photography" } },
    { name: "Product Photography", path: "/services", state: { selectedService: "Product Photography" } },
    { name: "Concept Shoot", path: "/services", state: { selectedService: "Concept shoot" } },
    { name: "Event Coverage", path: "/services", state: { selectedService: "Event Photography" } }
  ];

  const handleServiceClick = (service: typeof premiumServices[0]) => {
    navigate(service.path, { state: service.state });
  };

  return (
    <div className="text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-arjulian">
          Our Gallery
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mt-4"></div>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-akaya">
          Explore our portfolio showcasing our finest photography work across various genres and styles.
        </p>
      </motion.div>

      {/* Premium Service Links */}
      <motion.div
        className="mt-10 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-amber-300/0 via-amber-400/40 to-amber-300/0"></div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-amber-300/0 via-amber-400/40 to-amber-300/0"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 max-w-4xl mx-auto mt-4">
          {premiumServices.map((service, index) => (
            <motion.button
              key={service.name}
              className="relative group"
              onClick={() => handleServiceClick(service)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="px-4 py-2 border border-amber-200/50 rounded-full bg-white shadow-sm backdrop-blur-sm relative overflow-hidden group-hover:border-amber-300 transition-all duration-300">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 via-amber-100/30 to-amber-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10 text-primary/90 font-akaya tracking-wide text-sm md:text-base">
                  {service.name}
                </span>
              </div>
              
              {/* Bottom subtle line animation */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-amber-500 group-hover:w-full transition-all duration-300 ease-out"></div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GalleryHeader;
