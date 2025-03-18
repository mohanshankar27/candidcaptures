
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const ServicesLoading = () => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(33);
    }, 1000);
    
    const timer2 = setTimeout(() => {
      setProgress(66);
    }, 2000);
    
    const timer3 = setTimeout(() => {
      setProgress(100);
    }, 2800);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col items-center justify-center my-8">
        <div className="w-16 h-16 rounded-full border-4 border-orange-400 border-t-transparent animate-spin mb-4"></div>
        <h3 className="text-primary font-serif italic text-2xl mb-2">Loading Premium Services</h3>
        <div className="w-full max-w-md mb-2">
          <Progress value={progress} className="h-2 bg-orange-100" />
        </div>
        <p className="text-gray-500 text-sm">{progress}% complete</p>
      </div>
      
      {/* Loading skeleton for grid view with staggered animations */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
        {Array(12).fill(0).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              delay: index * 0.1
            }}
          >
            <Skeleton 
              key={index} 
              className="h-24 w-full rounded-md bg-secondary/80"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Loading skeleton for detailed view content with professional staggered animations */}
      <div className="space-y-4 mt-8">
        <Skeleton 
          className="h-8 w-3/4 max-w-md bg-secondary/80" 
          style={{ animationDuration: '1.2s' }} // Faster animation
        />
        <Skeleton 
          className="h-[300px] w-full bg-secondary/80 relative overflow-hidden" 
          style={{ animationDuration: '1.5s' }} // Faster animation
        >
          {/* Professional shimmer effect overlay */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </Skeleton>
        <Skeleton 
          className="h-20 w-full bg-secondary/80 relative overflow-hidden" 
          style={{ animationDuration: '1.2s' }} // Faster animation
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </Skeleton>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array(5).fill(0).map((_, index) => (
            <Skeleton
              key={`detail-${index}`}
              className="aspect-square bg-secondary/80 relative overflow-hidden"
              style={{
                animationDelay: `${index * 75}ms`, // Faster staggered delay (reduced from 150ms to 75ms)
                animationDuration: '1.2s' // Faster animation
              }}
            >
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Skeleton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesLoading;
