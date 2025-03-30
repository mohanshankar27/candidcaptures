
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import servicesList from '@/data/services';

const OurServices = () => {
  const navigate = useNavigate();

  // All services organized by category
  const serviceCategories = {
    "Wedding Photography": { path: "/services", state: { selectedService: "Wedding Photography" } },
    "Portrait Sessions": { path: "/services", state: { selectedService: "Portrait Photography" } },
    "Product Photography": { path: "/services", state: { selectedService: "Product Photography" } },
    "Concept Shoot": { path: "/services", state: { selectedService: "Concept shoot" } },
    "Event Coverage": { path: "/services", state: { selectedService: "Event Photography" } },
    "Corporate Headshots": { path: "/services", state: { selectedService: "Corporate Headshots" } },
    "Maternity Photography": { path: "/services", state: { selectedService: "Maternity Photography" } },
    "E-Commerce Photography": { path: "/services", state: { selectedService: "E-Commerce & Catalogues" } },
    "Family Portraits": { path: "/services", state: { selectedService: "Family Portraits" } },
    "New Born Baby Shoot": { path: "/services", state: { selectedService: "New Born Baby Shoot" } },
    "Food Photography": { path: "/services", state: { selectedService: "Food Photography" } },
    "Fashion Photography": { path: "/services", state: { selectedService: "Fashion Photography" } },
    "Toddler Photography": { path: "/services", state: { selectedService: "Toddler & Children" } },
    "Makeup Portfolios": { path: "/services", state: { selectedService: "Makeup shoot" } },
    "Special Services": { path: "/services", state: { selectedService: "Special Services" } }
  };

  // Create a flat list of all services
  const allServices = [
    "Wedding Photography", "Event Coverage", "Fashion Photography", "Food Photography",
    "Portrait Sessions", "Corporate Headshots", "Family Portraits", "Maternity Photography", "New Born Baby Shoot",
    "Product Photography", "E-Commerce Photography",
    "Concept Shoot", "Toddler Photography", "Makeup Portfolios", "Special Services"
  ];

  const handleServiceClick = (serviceName: string) => {
    navigate('/services', { state: { selectedService: serviceName } });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"></div>
        
        {/* Light circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-30 rounded-full bg-gradient-radial from-amber-200/20 via-transparent to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-arjulian">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-akaya">
            Explore our comprehensive range of professional photography and video services
          </p>
        </motion.div>

        {/* All services using the premium button style */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {allServices.map((serviceName, index) => (
            <motion.button
              key={serviceName}
              className="relative group"
              onClick={() => handleServiceClick(serviceName)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="px-6 py-3 border border-amber-200/50 rounded-full bg-white shadow-md backdrop-blur-sm relative overflow-hidden group-hover:border-amber-300 transition-all duration-300">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 via-amber-100/30 to-amber-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10 text-primary/90 font-akaya tracking-wide text-base md:text-lg whitespace-nowrap">
                  {serviceName}
                </span>
              </div>
              
              {/* Bottom subtle line animation */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-amber-500 group-hover:w-full transition-all duration-300 ease-out"></div>
            </motion.button>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => navigate('/services')}
            className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-akaya"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
