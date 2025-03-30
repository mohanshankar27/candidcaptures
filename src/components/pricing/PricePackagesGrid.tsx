
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PricePackageItem {
  title: string;
  id: string;
  description: string;
}

const pricePackages: PricePackageItem[] = [
  { 
    title: 'New Born, Toddlers, and younger children',
    id: 'new-born',
    description: 'Capture precious moments of your little ones with our specialized photography sessions.'
  },
  {
    title: 'Wedding Photography',
    id: 'wedding',
    description: 'Comprehensive packages to capture your special day from start to finish.'
  },
  { 
    title: 'Family Portrait Sessions', 
    id: 'family',
    description: 'Create lasting memories with professional family portraits that tell your unique story.'
  },
  { 
    title: 'Corporate Head-shot Sessions', 
    id: 'corporate',
    description: 'Professional headshots for business profiles, websites and marketing materials.'
  },
  { 
    title: 'Maternity Photography Sessions', 
    id: 'maternity',
    description: 'Celebrate the journey to motherhood with elegant and intimate maternity portraits.'
  },
  { 
    title: 'Matrimonial / Dating Portfolio Sessions', 
    id: 'matrimonial',
    description: 'Stand out with professional portraits designed specifically for matrimonial profiles.'
  },
  { 
    title: 'Modelling Portfolios & Polaroids', 
    id: 'modelling',
    description: 'Professional portfolio shoots to showcase your versatility and unique look to agencies.'
  },
  { 
    title: 'Event Photography Pricing', 
    id: 'event',
    description: 'Comprehensive coverage of corporate events, parties, and special occasions.'
  },
];

const PricePackagesGrid: React.FC = () => {
  const navigate = useNavigate();

  const handlePackageClick = (pkg: PricePackageItem) => {
    navigate(`/packages/${pkg.id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="my-12">
      {/* Header with logo */}
      <div className="text-center mb-8 relative">
        <div className="inline-block bg-white rounded-full p-2">
          <div className="w-16 h-16 rounded-full bg-[#ea384c]/10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/469e56bd-78fb-4a44-b55c-04dfba69656b.png"
              alt="Candid Capture Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-3 text-slate-800">Packages & Price Lists</h2>
        <p className="text-sm italic text-slate-600 max-w-2xl mx-auto mt-2">
          "Explore our tailored photography packages, crafted with precision and artistry to capture your most cherished moments with exceptional quality."
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pricePackages.map((pkg, index) => (
          <Card 
            key={index}
            className="overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer border-slate-200 hover:border-[#ea384c]/20"
            onClick={() => handlePackageClick(pkg)}
          >
            <CardContent className="p-0">
              <div className="flex justify-between items-center">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-slate-800">{pkg.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{pkg.description}</p>
                  <div className="mt-2">
                    <span className="text-[#ea384c] text-sm font-medium hover:underline">View pricing details</span>
                  </div>
                </div>
                <div className="bg-slate-100 h-full p-4 flex items-center">
                  <ChevronRight className="h-5 w-5 text-slate-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Center Image Display */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="md:w-1/3">
          <img 
            src="/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png" 
            alt="Family Photography"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/3 flex items-center justify-center py-6">
          <img 
            src="/lovable-uploads/469e56bd-78fb-4a44-b55c-04dfba69656b.png"
            alt="Candid Capture Logo"
            className="max-w-full h-24 object-contain"
          />
        </div>
        <div className="md:w-1/3">
          <img 
            src="/lovable-uploads/8b3e3260-20a8-4a51-ac28-59e1f1b41bb2.png" 
            alt="Maternity Photography"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PricePackagesGrid;
