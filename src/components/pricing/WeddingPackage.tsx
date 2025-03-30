
import React from 'react';
import { PackageCard } from './PackageCard';
import { PricingTable } from './PricingTable';
import { AddonsList } from './AddonsList';
import { BookingInfo } from './BookingInfo';
import { Separator } from '@/components/ui/separator';
import { Check, X } from 'lucide-react';

export const WeddingPackage = () => {
  const packages = [
    {
      title: "Silver",
      description: "Perfect for intimate weddings",
      price: "₹55,000",
      features: [
        { name: "1 Premium Photographer", included: true },
        { name: "Pre-Wedding Consultation", included: true },
        { name: "8-Hour Coverage", included: true },
        { name: "400+ Edited Images", included: true },
        { name: "Online Gallery", included: true },
        { name: "Drone Coverage", included: false },
        { name: "Wedding Album", included: false },
      ],
      isPopular: false
    },
    {
      title: "Gold",
      description: "Best value for most weddings",
      price: "₹85,000",
      features: [
        { name: "2 Premium Photographers", included: true },
        { name: "Pre-Wedding Consultation", included: true },
        { name: "10-Hour Coverage", included: true },
        { name: "600+ Edited Images", included: true },
        { name: "Online Gallery", included: true },
        { name: "Drone Coverage", included: true },
        { name: "Premium Wedding Album", included: true },
      ],
      isPopular: true
    },
    {
      title: "Platinum",
      description: "Luxury premium experience",
      price: "₹1,25,000",
      features: [
        { name: "3 Premium Photographers", included: true },
        { name: "Pre-Wedding Consultation", included: true },
        { name: "Full-Day Coverage", included: true },
        { name: "800+ Edited Images", included: true },
        { name: "Online Gallery", included: true },
        { name: "Drone Coverage", included: true },
        { name: "Luxury Wedding Album", included: true },
        { name: "Parent Albums (2)", included: true },
      ],
      isPopular: false
    }
  ];

  const tableFeatures = [
    { 
      feature: "Photographers", 
      silver: "1", 
      gold: "2", 
      platinum: "3" 
    },
    { 
      feature: "Coverage Hours", 
      silver: "8 Hours", 
      gold: "10 Hours", 
      platinum: "Full Day" 
    },
    { 
      feature: "Edited Photos", 
      silver: "400+", 
      gold: "600+", 
      platinum: "800+" 
    },
    { 
      feature: "Photo Album", 
      silver: <X className="h-4 w-4 text-red-500" />, 
      gold: "Premium (30 Pages)", 
      platinum: "Luxury (40 Pages)" 
    },
    { 
      feature: "Drone Coverage", 
      silver: <X className="h-4 w-4 text-red-500" />, 
      gold: <Check className="h-4 w-4 text-green-500" />, 
      platinum: <Check className="h-4 w-4 text-green-500" /> 
    },
    { 
      feature: "Engagement Session", 
      silver: <X className="h-4 w-4 text-red-500" />, 
      gold: "1 Hour", 
      platinum: "2 Hours" 
    },
    { 
      feature: "Online Gallery", 
      silver: <Check className="h-4 w-4 text-green-500" />, 
      gold: <Check className="h-4 w-4 text-green-500" />, 
      platinum: <Check className="h-4 w-4 text-green-500" /> 
    },
    { 
      feature: "Parent Albums", 
      silver: <X className="h-4 w-4 text-red-500" />, 
      gold: <X className="h-4 w-4 text-red-500" />, 
      platinum: "2 Included" 
    }
  ];

  const addons = [
    { name: "Extra Coverage Hour", price: "₹5,000/hour" },
    { name: "Additional Photographer", price: "₹10,000/day" },
    { name: "Engagement Session", price: "₹15,000" },
    { name: "Premium Album", price: "₹12,000" },
    { name: "Parent Albums (each)", price: "₹8,000" },
    { name: "Drone Coverage", price: "₹10,000" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-primary">Wedding Photography Packages</h2>
        <p className="text-slate-600 mt-2">
          Premium wedding photography packages to capture your special day
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

      <Separator className="my-12" />

      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-slate-800 text-center">Wedding Photography Details</h3>
        
        <div className="space-y-6">
          <PricingTable features={tableFeatures} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AddonsList addons={addons} />
            <BookingInfo />
          </div>
        </div>
      </div>
    </div>
  );
};
