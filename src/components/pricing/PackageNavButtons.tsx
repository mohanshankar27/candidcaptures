
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Camera, Heart, Users, Briefcase, Baby } from 'lucide-react';

interface PackageButton {
  icon: React.ReactNode;
  label: string;
  description: string;
  path: string;
  color: string;
}

const PackageNavButtons = () => {
  const navigate = useNavigate();

  const packages: PackageButton[] = [
    {
      icon: <Camera className="w-6 h-6" />,
      label: "Wedding Photography",
      description: "Complete wedding day coverage",
      path: "/services",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "Pre-Wedding Sessions",
      description: "Romantic couple shoots",
      path: "/services", 
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      label: "Maternity Photography",
      description: "Beautiful pregnancy portraits",
      path: "/pricing",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Family Portraits",
      description: "Timeless family memories",
      path: "/services",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: "Corporate Events",
      description: "Professional event coverage",
      path: "/services",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const handlePackageClick = (pkg: PackageButton) => {
    if (pkg.label === "Maternity Photography") {
      // Scroll to maternity tab or trigger tab change
      navigate('/pricing');
      // You could add state management here to auto-select the maternity tab
    } else {
      navigate(pkg.path, { 
        state: { selectedService: pkg.label } 
      });
    }
  };

  return (
    <div className="mb-12">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
          Choose Your Photography Package
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Select from our specialized photography services designed to capture your most precious moments
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.button
            key={pkg.label}
            onClick={() => handlePackageClick(pkg)}
            className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left border border-slate-200 hover:border-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            {/* Icon */}
            <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${pkg.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {pkg.icon}
            </div>
            
            {/* Content */}
            <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
              {pkg.label}
            </h3>
            <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
              {pkg.description}
            </p>
            
            {/* Arrow indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PackageNavButtons;
