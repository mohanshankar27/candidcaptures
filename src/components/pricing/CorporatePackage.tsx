
import React from 'react';
import { PackageCard } from './PackageCard';

export const CorporatePackage = () => {
  const packages = [
    {
      title: "Basic",
      description: "Individual headshots",
      price: "₹7,500",
      features: [
        { name: "Studio Session", included: true },
        { name: "30 Minutes", included: true },
        { name: "3 Edited Images", included: true },
        { name: "Online Gallery", included: true },
        { name: "On-Location", included: false },
      ],
      isPopular: false
    },
    {
      title: "Team",
      description: "For small teams (5-10 people)",
      price: "₹25,000",
      features: [
        { name: "Studio or On-Location", included: true },
        { name: "Half Day Session", included: true },
        { name: "5 Edited Images per Person", included: true },
        { name: "Group Photos", included: true },
        { name: "Online Gallery", included: true },
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      description: "For larger teams (10+ people)",
      price: "₹40,000+",
      features: [
        { name: "On-Location Session", included: true },
        { name: "Full Day Session", included: true },
        { name: "8 Edited Images per Person", included: true },
        { name: "Group & Department Photos", included: true },
        { name: "Office Environment Photos", included: true },
        { name: "Online Gallery with Sorting Options", included: true },
      ],
      isPopular: false
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-primary">Corporate Photography Packages</h2>
        <p className="text-slate-600 mt-2">
          Professional photography for business needs
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
