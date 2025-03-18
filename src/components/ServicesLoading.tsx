
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ServicesLoading = () => {
  return (
    <div className="space-y-6 p-4">
      {/* Loading skeleton for grid view with staggered animations */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
        {Array(12).fill(0).map((_, index) => (
          <Skeleton 
            key={index} 
            className="h-24 w-full rounded-md bg-secondary/80"
            style={{
              animationDelay: `${index * 50}ms`, // Faster staggered delay (reduced from 100ms to 50ms)
              animationDuration: '1s' // Faster animation (reduced from 1.5s to 1s)
            }}
          />
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
