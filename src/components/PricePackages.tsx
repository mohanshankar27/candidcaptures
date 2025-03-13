
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import { Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricePackageItem {
  title: string;
  id: string;
  description?: string;
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

const PricePackages: React.FC = () => {
  const navigate = useNavigate();

  const handlePackageClick = (pkg: PricePackageItem) => {
    // First navigate to the package page
    navigate(`/packages/${pkg.id}`);
    
    // Then scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="mt-16 mb-12">
      <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-primary/10 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <Package className="h-6 w-6 text-[#ea384c]" />
          <h2 className="text-3xl font-light text-[#ea384c]">Packages & Price Lists</h2>
        </div>
        
        <p className="text-slate-600 mb-8">
          Explore our range of photography packages designed to meet your specific needs. 
          Click on any package to view detailed pricing and what's included.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {pricePackages.map((pkg, index) => (
            <div 
              key={index}
              className="group border border-slate-200 hover:border-primary/20 rounded-lg p-4 transition-all duration-200 hover:shadow-md bg-white/50"
            >
              <div 
                className="cursor-pointer"
                onClick={() => handlePackageClick(pkg)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-slate-800 group-hover:text-[#ea384c] transition-colors">
                    {pkg.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#ea384c] transition-all transform group-hover:translate-x-1" />
                </div>
                
                {pkg.description && (
                  <p className="text-slate-600 text-sm mb-3">{pkg.description}</p>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-[#ea384c] hover:bg-[#ea384c]/10 hover:text-[#ea384c] p-0 h-auto mt-1"
                  onClick={() => handlePackageClick(pkg)}
                >
                  View pricing details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricePackages;
