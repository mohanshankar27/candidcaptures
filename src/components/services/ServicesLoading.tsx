
import React from 'react';

const ServicesLoading = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-4 p-4">
      <div className="h-6 bg-slate-200 rounded w-3/4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-40 bg-slate-200 rounded"></div>
        ))}
      </div>
    </div>
  );
};

export default ServicesLoading;
