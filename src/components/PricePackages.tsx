
import React from 'react';
import { Separator } from '@/components/ui/separator';

interface PricePackageItem {
  title: string;
}

const pricePackages: PricePackageItem[] = [
  { title: 'New Born, Toddlers, and younger children' },
  { title: 'Family Portrait Sessions' },
  { title: 'Corporate Head-shot Sessions' },
  { title: 'Maternity Photography Sessions' },
  { title: 'Matrimonial / Dating Portfolio Sessions' },
  { title: 'Modelling Portfolios & Polaroids' },
  { title: 'Studio Rental Packages' },
  { title: 'Website Maintenance Services' },
  { title: 'Event Photography Pricing' },
];

const PricePackages: React.FC = () => {
  return (
    <div className="mt-16 mb-8">
      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-primary/5">
        <h2 className="text-3xl font-light text-[#ea384c] mb-6">Packages & Price Lists</h2>
        
        <div className="space-y-3">
          {pricePackages.map((pkg, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center text-lg">
                <span className="w-2 h-2 inline-block bg-[#ea384c] rounded-full mr-3"></span>
                <span className="text-slate-800 font-medium">{pkg.title}</span>
              </div>
              {index < pricePackages.length - 1 && (
                <Separator className="bg-slate-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricePackages;
