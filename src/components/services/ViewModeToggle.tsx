
import React from 'react';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';
import { motion } from 'framer-motion';

interface ViewModeToggleProps {
  viewMode: 'detailed' | 'grid';
  toggleViewMode: () => void;
}

const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ viewMode, toggleViewMode }) => {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Button 
        variant="outline" 
        size="icon" 
        onClick={toggleViewMode}
        className="ml-auto shadow-sm"
        aria-label={viewMode === 'detailed' ? "Switch to grid view" : "Switch to detailed view"}
      >
        {viewMode === 'detailed' ? <Grid className="h-5 w-5" /> : <List className="h-5 w-5" />}
      </Button>
    </motion.div>
  );
};

export default ViewModeToggle;
