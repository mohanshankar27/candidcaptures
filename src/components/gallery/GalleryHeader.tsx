
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Camera, Users, Package, CalendarDays } from 'lucide-react';
import { MenuBar } from "@/components/ui/menu-bar";

const GalleryHeader = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string>("");
  
  const premiumServices = [{
    name: "Wedding Photography",
    icon: <Camera size={18} />,
    path: "/services",
    state: {
      selectedService: "Wedding Photography"
    }
  }, {
    name: "Portrait Sessions",
    icon: <Users size={18} />,
    path: "/services",
    state: {
      selectedService: "Portrait Photography"
    }
  }, {
    name: "Product Photography",
    icon: <Package size={18} />,
    path: "/services",
    state: {
      selectedService: "Product Photography"
    }
  }, {
    name: "Concept Shoot",
    icon: <Camera size={18} />,
    path: "/services",
    state: {
      selectedService: "Concept shoot"
    }
  }, {
    name: "Event Coverage",
    icon: <CalendarDays size={18} />,
    path: "/services",
    state: {
      selectedService: "Event Photography"
    }
  }];
  
  // Convert to MenuBar format
  const menuItems = premiumServices.map(service => ({
    icon: service.icon.type,
    label: service.name,
    href: service.path,
    gradient: getGradientForService(service.name),
    iconColor: getColorForService(service.name)
  }));
  
  function getGradientForService(serviceName: string) {
    switch(serviceName) {
      case "Wedding Photography":
        return "radial-gradient(circle, rgba(234,56,76,0.15) 0%, rgba(234,56,76,0.06) 50%, rgba(194,25,25,0) 100%)";
      case "Portrait Sessions":
        return "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)";
      case "Product Photography":
        return "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(109,40,217,0.06) 50%, rgba(91,33,182,0) 100%)";
      case "Concept Shoot":
        return "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)";
      case "Event Coverage":
        return "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)";
      default:
        return "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)";
    }
  }
  
  function getColorForService(serviceName: string) {
    switch(serviceName) {
      case "Wedding Photography":
        return "text-[#ea384c]";
      case "Portrait Sessions":
        return "text-green-500";
      case "Product Photography":
        return "text-purple-500";
      case "Concept Shoot":
        return "text-blue-500";
      case "Event Coverage":
        return "text-orange-500";
      default:
        return "text-blue-500";
    }
  }
  
  const handleServiceClick = (label: string) => {
    setActiveItem(label);
    const service = premiumServices.find(s => s.name === label);
    if (service) {
      navigate(service.path, {
        state: service.state
      });
    }
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

      {/* Premium Service Links - Updated with MenuBar */}
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
        <div className="flex justify-center mt-6">
          <MenuBar
            className="w-full max-w-3xl mx-auto"
            items={menuItems}
            activeItem={activeItem}
            onItemClick={handleServiceClick}
          />
        </div>
        
        <div className="relative">
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-amber-300/0 via-amber-400/40 to-amber-300/0"></div>
        </div>
      </motion.div>
    </div>;
};

export default GalleryHeader;
