
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ServicesLoading = () => {
  return (
    <div className="space-y-6 p-4 animate-pulse">
      {/* Loading skeleton for grid view */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
        {Array(12).fill(0).map((_, index) => (
          <Skeleton 
            key={index} 
            className="h-24 w-full rounded-md bg-secondary/80"
            style={{
              animationDelay: `${index * 100}ms`,
              animationDuration: '1.5s'
            }}
          />
        ))}
      </div>
      
      {/* Loading skeleton for detailed view content */}
      <div className="space-y-4 mt-8">
        <Skeleton 
          className="h-8 w-3/4 max-w-md bg-secondary/80" 
          style={{ animationDuration: '2s' }}
        />
        <Skeleton 
          className="h-[300px] w-full bg-secondary/80" 
          style={{ animationDuration: '2.5s' }}
        />
        <Skeleton 
          className="h-20 w-full bg-secondary/80" 
          style={{ animationDuration: '2s' }}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array(5).fill(0).map((_, index) => (
            <Skeleton
              key={`detail-${index}`}
              className="aspect-square bg-secondary/80"
              style={{
                animationDelay: `${index * 150}ms`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesLoading;
