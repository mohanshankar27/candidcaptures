
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewBornPackage from '@/components/packages/NewBornPackage';
import FamilyPackage from '@/components/packages/FamilyPackage';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PackageDetails: React.FC = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  const getPackageComponent = () => {
    switch (packageId) {
      case 'new-born':
        return <NewBornPackage />;
      case 'family':
        return <FamilyPackage />;
      default:
        return (
          <div className="text-center p-8">
            <p className="text-slate-500">Package details coming soon.</p>
          </div>
        );
    }
  };

  const getPackageTitle = () => {
    switch (packageId) {
      case 'new-born':
        return 'New Born, Toddlers, and younger children';
      case 'family':
        return 'Family Portrait Sessions';
      case 'corporate':
        return 'Corporate Head-shot Sessions';
      case 'maternity':
        return 'Maternity Photography Sessions';
      case 'matrimonial':
        return 'Matrimonial / Dating Portfolio Sessions';
      case 'modelling':
        return 'Modelling Portfolios & Polaroids';
      case 'event':
        return 'Event Photography Pricing';
      default:
        return 'Photography Package';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-24 pb-8">
        <div className="container mx-auto px-2 md:px-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="mb-4" 
            onClick={() => navigate('/services')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Button>
          
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-primary/5">
            <h1 className="text-3xl font-light text-[#ea384c] mb-6">{getPackageTitle()}</h1>
            
            <div className="package-container">
              {getPackageComponent()}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PackageDetails;
