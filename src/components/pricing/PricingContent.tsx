
import React from 'react';
import { PricingTabs } from './PricingTabs';

const PricingContent = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Photography Pricing</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Professional photography packages tailored to capture your special moments with exceptional quality and creativity.
        </p>
      </div>

      <PricingTabs />
    </div>
  );
};

export default PricingContent;
