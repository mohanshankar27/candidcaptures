
import React from 'react';
import { Separator } from '@/components/ui/separator';
import BookingCTA from './BookingCTA';
import TestShootCard from './TestShootCard';
import PolaroidsCard from './PolaroidsCard';
import PortfolioShootCard from './PortfolioShootCard';
import PortfolioTypes from './PortfolioTypes';
import ModellingGallery from './ModellingGallery';
import ModellingIntro from './ModellingIntro';

const ModellingPackage: React.FC = () => {
  const portfolioTypes = [
    'Fashion portfolios', 
    'Commercial modeling', 
    'Runway portfolios', 
    'Editorial style', 
    'Fitness modeling', 
    'Plus-size modeling', 
    'Parts modeling', 
    'Acting headshots'
  ];

  return (
    <div className="package-details">
      <ModellingGallery />
      
      <div className="space-y-6">
        <ModellingIntro />

        <div className="grid md:grid-cols-3 gap-5">
          <TestShootCard />
          <PolaroidsCard />
          <PortfolioShootCard />
        </div>

        <Separator />

        <PortfolioTypes types={portfolioTypes} />

        <BookingCTA 
          title="Book Your Modelling Portfolio Session" 
          serviceType="modeling career"
        />
      </div>
    </div>
  );
};

export default ModellingPackage;
