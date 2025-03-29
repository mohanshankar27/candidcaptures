
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Package, Camera, Users, ShoppingBag, Video, Pencil } from 'lucide-react';
import servicesList from '@/data/services';

const OurServices = () => {
  const navigate = useNavigate();

  // Group services by category
  const categories = [
    {
      name: "Photography Services",
      icon: <Camera className="h-6 w-6 text-amber-500" />,
      services: servicesList.filter(service => 
        service.name.includes('Photography') || 
        service.name.includes('Wedding') ||
        service.name.includes('Event')
      ).slice(0, 4)
    },
    {
      name: "Portrait Services",
      icon: <Users className="h-6 w-6 text-amber-500" />,
      services: servicesList.filter(service => 
        service.name.includes('Portrait') || 
        service.name.includes('Headshots') ||
        service.name.includes('Baby') ||
        service.name.includes('Maternity') ||
        service.name.includes('Toddler') ||
        service.name.includes('Children')
      ).slice(0, 4)
    },
    {
      name: "Product Services",
      icon: <ShoppingBag className="h-6 w-6 text-amber-500" />,
      services: servicesList.filter(service => 
        service.name.includes('Product') || 
        service.name.includes('E-Commerce')
      ).slice(0, 4)
    },
    {
      name: "Specialty Services",
      icon: <Pencil className="h-6 w-6 text-amber-500" />,
      services: servicesList.filter(service => 
        service.name.includes('Concept') || 
        service.name.includes('Makeup') ||
        service.name.includes('Special')
      ).slice(0, 4)
    },
    {
      name: "Video Services",
      icon: <Video className="h-6 w-6 text-amber-500" />,
      services: servicesList.filter(service => 
        service.name.includes('Video') || 
        service.name.includes('Corporate')
      ).slice(0, 2)
    }
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

        {/* Service categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-amber-100/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-primary font-arjulian">{category.name}</h3>
              </div>

              <div className="space-y-3">
                {category.services.map((service) => (
                  <motion.button
                    key={service.name}
                    onClick={() => handleServiceClick(service.name)}
                    className="w-full text-left group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-amber-50/50 transition-colors">
                      <span className="font-akaya text-slate-700 group-hover:text-amber-700 transition-colors">
                        {service.name}
                      </span>
                      <motion.div 
                        className="h-0.5 w-4 bg-amber-400 rounded-full"
                        whileHover={{ width: 20 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 text-center">
                <motion.button
                  onClick={() => navigate('/services')}
                  className="inline-flex items-center px-4 py-2 text-sm text-amber-700 border border-amber-300 rounded-full hover:bg-amber-100/50 transition-all duration-300 font-akaya"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Package className="w-4 h-4 mr-2" />
                  View all in this category
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

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
