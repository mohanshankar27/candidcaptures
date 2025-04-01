
import React from 'react';
import { Grid, List, ArrowLeft } from 'lucide-react';
import { ParticleButton } from '@/components/ui/particle-button';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesHeaderProps {
  viewMode: 'detailed' | 'grid';
  selectedServiceName: string;
  toggleViewMode: () => void;
  backToGrid: () => void;
  isMobile: boolean;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({
  viewMode,
  selectedServiceName,
  toggleViewMode,
  backToGrid,
  isMobile
}) => {
  return (
    <AnimatePresence mode="wait">
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
              <ParticleButton
                variant="ghost"
                size="icon"
                onClick={backToGrid}
                className="mr-1"
                aria-label="Back to grid"
                successDuration={500}
              >
                <ArrowLeft className="h-5 w-5 text-primary" />
              </ParticleButton>
            </motion.div>
          )}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003c72] font-arjulian">
            {viewMode === 'grid' ? 'Premium Services' : selectedServiceName}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <motion.div whileTap={{ scale: 0.9 }}>
            <ParticleButton 
              variant="outline" 
              size="icon" 
              onClick={toggleViewMode}
              className="ml-auto shadow-sm"
              aria-label={viewMode === 'detailed' ? "Switch to grid view" : "Switch to detailed view"}
              successDuration={500}
            >
              {viewMode === 'detailed' ? <Grid className="h-5 w-5" /> : <List className="h-5 w-5" />}
            </ParticleButton>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServicesHeader;
