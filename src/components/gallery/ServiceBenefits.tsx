
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceBenefitsProps {
  benefits: string[];
  description: string;
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ benefits, description }) => {
  return (
    <div className="mb-6">
      <p className="text-lg mb-6">{description}</p>
      
      {benefits && (
        <Card className="mb-8 bg-secondary/20">
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-4">What's Included</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ServiceBenefits;
