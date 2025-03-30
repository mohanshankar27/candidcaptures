
import React, { useEffect, useState } from 'react';
import { PricingTabs } from './PricingTabs';

const PricingContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Mark component as loaded to trigger transitions
    setIsLoaded(true);
  }, []);
  
  return (
    <div className={`max-w-6xl mx-auto transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <PricingTabs />
    </div>
  );
};

export default PricingContent;
