
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

interface PricePackageItem {
  title: string;
  id: string;
}

const pricePackages: PricePackageItem[] = [
  { 
    title: 'New Born, Toddlers, and younger children',
    id: 'new-born'
  },
  { title: 'Family Portrait Sessions', id: 'family' },
  { title: 'Corporate Head-shot Sessions', id: 'corporate' },
  { title: 'Maternity Photography Sessions', id: 'maternity' },
  { title: 'Matrimonial / Dating Portfolio Sessions', id: 'matrimonial' },
  { title: 'Modelling Portfolios & Polaroids', id: 'modelling' },
  { title: 'Event Photography Pricing', id: 'event' },
];

const PricePackages: React.FC = () => {
  const navigate = useNavigate();

  const handlePackageClick = (pkg: PricePackageItem) => {
    navigate(`/packages/${pkg.id}`);
  };

  return (
    <div className="mt-16 mb-8">
      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-primary/5">
        <h2 className="text-3xl font-light text-[#ea384c] mb-6">Packages & Price Lists</h2>
        
        <div className="space-y-3">
          {pricePackages.map((pkg, index) => (
            <React.Fragment key={index}>
              <div 
                className="flex items-center text-lg cursor-pointer hover:bg-slate-50 p-2 rounded-md transition-colors"
                onClick={() => handlePackageClick(pkg)}
              >
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
