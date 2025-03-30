
import React from 'react';
import { PackageCard } from './PackageCard';

export const PreWeddingPackage = () => {
  const packages = [
    {
      title: "Basic",
      description: "Simple pre-wedding shoot",
      price: "₹25,000",
      features: [
        { name: "1 Photographer", included: true },
        { name: "3 Hours Coverage", included: true },
        { name: "1 Location", included: true },
        { name: "100+ Edited Images", included: true },
        { name: "Online Gallery", included: true },
        { name: "Outfit Changes", included: false },
      ],
      isPopular: false
    },
    {
      title: "Standard",
      description: "Complete pre-wedding experience",
      price: "₹35,000",
      features: [
        { name: "1 Photographer", included: true },
        { name: "4-5 Hours Coverage", included: true },
        { name: "2 Locations", included: true },
        { name: "150+ Edited Images", included: true },
        { name: "Online Gallery", included: true },
        { name: "2 Outfit Changes", included: true },
      ],
      isPopular: true
    },
    {
      title: "Premium",
      description: "Luxury pre-wedding shoot",
      price: "₹45,000",
      features: [
        { name: "2 Photographers", included: true },
        { name: "Full-Day Coverage", included: true },
        { name: "3 Locations", included: true },
        { name: "200+ Edited Images", included: true },
        { name: "Online Gallery", included: true },
        { name: "3 Outfit Changes", included: true },
        { name: "Photo Album Included", included: true },
      ],
      isPopular: false
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-primary">Pre-Wedding Photography Packages</h2>
        <p className="text-slate-600 mt-2">
          Capture your love story before the big day
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            features={pkg.features}
            isPopular={pkg.isPopular}
          />
        ))}
      </div>
    </div>
  );
};
