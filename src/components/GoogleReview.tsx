
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Make sure this is importing from a specific file

const GoogleReview: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" 
              alt="Google" 
              className="w-5 h-5"
            />
            <h3 className="text-sm font-semibold">Google Reviews</h3>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">
          See what our clients are saying about us on Google!
        </p>
        
        <Button 
          className="w-full" 
          size="sm"
          onClick={() => window.open("https://g.co/kgs/YwbJx5W", "_blank", "noopener,noreferrer")}
        >
          Read Our Reviews
        </Button>
      </div>
    </motion.div>
  );
};

export default GoogleReview;
