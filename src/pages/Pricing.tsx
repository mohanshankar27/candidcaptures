
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PricingContent } from '@/components/PricingContent';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-28">
        <div className="container mx-auto px-4 py-8">
          <PricingContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
