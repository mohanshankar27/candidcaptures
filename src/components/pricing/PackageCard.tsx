
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from 'lucide-react';

interface PackageFeature {
  name: string;
  included: boolean;
}

export interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  features: PackageFeature[];
  isPopular?: boolean;
}

export const PackageCard = ({ 
  title, 
  description, 
  price, 
  features, 
  isPopular = false 
}: PackageCardProps) => {
  return (
    <Card className={`border-primary/10 overflow-hidden hover:shadow-lg transition-all ${
      isPopular ? "border-primary/20 shadow-md hover:shadow-xl relative" : ""
    }`}>
      {isPopular && (
        <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-4 py-1 bg-primary text-white text-sm rounded-full font-medium">
          Most Popular
        </div>
      )}
      <CardHeader className={`pb-4 ${
        isPopular 
          ? "bg-gradient-to-b from-primary/10 to-white" 
          : "bg-gradient-to-b from-slate-50 to-white"
      }`}>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-semibold">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-red-400 shrink-0 mr-2 mt-0.5" />
              )}
              <span className={`${!feature.included ? "text-slate-400" : ""}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
            Book Now
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
