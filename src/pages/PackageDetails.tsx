
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewBornPackage from '@/components/packages/NewBornPackage';
import FamilyPackage from '@/components/packages/FamilyPackage';
import CorporatePackage from '@/components/packages/CorporatePackage';
import MaternityPackage from '@/components/packages/MaternityPackage';
import MatrimonialPackage from '@/components/packages/MatrimonialPackage';
import ModellingPackage from '@/components/packages/ModellingPackage';
import EventPackage from '@/components/packages/EventPackage';
import WeddingPackage from '@/components/packages/WeddingPackage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const PackageDetails: React.FC = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  const packageList = [
    { id: 'new-born', title: 'New Born, Toddlers, and younger children' },
    { id: 'wedding', title: 'Wedding Photography' },
    { id: 'family', title: 'Family Portrait Sessions' },
    { id: 'corporate', title: 'Corporate Head-shot Sessions' },
    { id: 'maternity', title: 'Maternity Photography Sessions' },
    { id: 'matrimonial', title: 'Matrimonial / Dating Portfolio Sessions' },
    { id: 'modelling', title: 'Modelling Portfolios & Polaroids' },
    { id: 'event', title: 'Event Photography Pricing' },
  ];

  const currentPackageIndex = packageList.findIndex(pkg => pkg.id === packageId);
  const prevPackage = currentPackageIndex > 0 ? packageList[currentPackageIndex - 1] : null;
  const nextPackage = currentPackageIndex < packageList.length - 1 ? packageList[currentPackageIndex + 1] : null;

  const getPackageComponent = () => {
    switch (packageId) {
      case 'new-born':
        return <NewBornPackage />;
      case 'wedding':
        return <WeddingPackage />;
      case 'family':
        return <FamilyPackage />;
      case 'corporate':
        return <CorporatePackage />;
      case 'maternity':
        return <MaternityPackage />;
      case 'matrimonial':
        return <MatrimonialPackage />;
      case 'modelling':
        return <ModellingPackage />;
      case 'event':
        return <EventPackage />;
      default:
        return (
          <div className="text-center p-8">
            <p className="text-slate-500">Package details coming soon.</p>
          </div>
        );
    }
  };

  const getPackageTitle = () => {
    const foundPackage = packageList.find(pkg => pkg.id === packageId);
    return foundPackage ? foundPackage.title : 'Photography Package';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      
      <div className="flex-1 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="hover:bg-primary/10" 
              onClick={() => navigate('/services')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
            
            <div className="hidden md:flex items-center gap-2">
              {prevPackage && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                  onClick={() => navigate(`/packages/${prevPackage.id}`)}
                >
                  <ArrowLeft className="mr-1 h-3 w-3" /> {prevPackage.title}
                </Button>
              )}
              
              {nextPackage && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                  onClick={() => navigate(`/packages/${nextPackage.id}`)}
                >
                  {nextPackage.title} <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              )}
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-primary/10 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
              <Package className="h-6 w-6 text-[#ea384c]" />
              <h1 className="text-3xl font-light text-[#ea384c]">{getPackageTitle()}</h1>
            </div>
            
            <div className="package-container animate-fadeIn">
              {getPackageComponent()}
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-medium mb-4 text-slate-800">Explore Other Photography Packages</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {packageList.map(pkg => (
                  <Button
                    key={pkg.id}
                    variant={pkg.id === packageId ? "default" : "outline"}
                    size="sm"
                    className={cn(
                      "text-xs w-full justify-start",
                      pkg.id === packageId ? "bg-primary text-white" : "hover:bg-primary/10"
                    )}
                    onClick={() => navigate(`/packages/${pkg.id}`)}
                  >
                    {pkg.id === packageId ? "• " : ""}{pkg.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PackageDetails;
