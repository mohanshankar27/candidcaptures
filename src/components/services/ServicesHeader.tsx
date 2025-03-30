
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ViewModeToggle from './ViewModeToggle';
import { Service } from '@/data/services';

interface ServicesHeaderProps {
  viewMode: 'detailed' | 'grid';
  selectedService: Service;
  isMobile: boolean;
  backToGrid: () => void;
  toggleViewMode: () => void;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({
  viewMode,
  selectedService,
  isMobile,
  backToGrid,
  toggleViewMode
}) => {
  return (
    <motion.div 
      key={viewMode}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center mb-3 px-4"
    >
      <div className="flex items-center gap-2">
        {isMobile && viewMode === 'detailed' && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={backToGrid}
              className="mr-1"
              aria-label="Back to grid"
            >
              <ArrowLeft className="h-5 w-5 text-primary" />
            </Button>
          </motion.div>
        )}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003c72] font-arjulian">
          {viewMode === 'grid' ? 'Premium Services' : selectedService.name}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <ViewModeToggle viewMode={viewMode} toggleViewMode={toggleViewMode} />
      </div>
    </motion.div>
  );
};

export default ServicesHeader;
