
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const ServicesLoading = () => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    // Use a single timeout with requestAnimationFrame for better performance
    const timer = setTimeout(() => {
      requestAnimationFrame(() => setProgress(50));
      
      setTimeout(() => {
        requestAnimationFrame(() => setProgress(100));
      }, 800); // Complete in 800ms total
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col items-center justify-center my-8">
        <div className="w-16 h-16 rounded-full border-4 border-orange-400 border-t-transparent animate-spin mb-4"></div>
        <div className="w-full max-w-md mb-2">
          <Progress value={progress} className="h-2 bg-orange-100" />
        </div>
        <p className="text-gray-500 text-sm">{progress}% complete</p>
      </div>
      
      {/* Loading skeleton for grid view with optimized animations */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
        {Array(6).fill(0).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              delay: index * 0.05 // Reduced delay for faster loading perception
            }}
          >
            <Skeleton 
              key={index} 
              className="h-24 w-full rounded-md bg-secondary/80"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Loading skeleton with optimized animations */}
      <div className="space-y-4 mt-8">
        <Skeleton 
          className="h-8 w-3/4 max-w-md bg-secondary/80" 
          style={{ animationDuration: '1s' }}
        />
        <Skeleton 
          className="h-[200px] w-full bg-secondary/80 relative overflow-hidden" 
          style={{ animationDuration: '1.2s' }}
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </Skeleton>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array(3).fill(0).map((_, index) => (
            <Skeleton
              key={`detail-${index}`}
              className="aspect-square bg-secondary/80 relative overflow-hidden"
              style={{
                animationDelay: `${index * 50}ms`,
                animationDuration: '1s'
              }}
            >
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Skeleton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesLoading;
