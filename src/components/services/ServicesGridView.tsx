
import React from 'react';
import { lazy } from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';

const ServicesGrid = lazy(() => import('@/components/ServicesGrid'));

interface ServicesGridViewProps {
  services: Service[];
  onServiceClick: (service: Service) => void;
}

const ServicesGridView: React.FC<ServicesGridViewProps> = ({
  services,
  onServiceClick
}) => {
  return (
    <motion.div 
      key="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-sm border border-amber-100/20 mx-3 sm:mx-4 animate-fade-in"
    >
      <ServicesGrid services={services} onServiceClick={onServiceClick} />
    </motion.div>
  );
};

export default ServicesGridView;
