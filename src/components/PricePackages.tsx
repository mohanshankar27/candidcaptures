
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import NewBornPackage from './packages/NewBornPackage';

interface PricePackageItem {
  title: string;
  component?: React.ReactNode;
}

const pricePackages: PricePackageItem[] = [
  { 
    title: 'New Born, Toddlers, and younger children',
    component: <NewBornPackage /> 
  },
  { title: 'Family Portrait Sessions' },
  { title: 'Corporate Head-shot Sessions' },
  { title: 'Maternity Photography Sessions' },
  { title: 'Matrimonial / Dating Portfolio Sessions' },
  { title: 'Modelling Portfolios & Polaroids' },
  { title: 'Event Photography Pricing' },
];

const PricePackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PricePackageItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePackageClick = (pkg: PricePackageItem) => {
    setSelectedPackage(pkg);
    setIsDialogOpen(true);
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-medium text-[#ea384c]">
                {selectedPackage?.title}
              </DialogTitle>
              <button 
                onClick={() => setIsDialogOpen(false)}
                className="rounded-full p-1 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </DialogHeader>
          
          <div className="mt-4">
            {selectedPackage?.component || (
              <div className="text-center p-8">
                <p className="text-slate-500">Package details coming soon.</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PricePackages;
