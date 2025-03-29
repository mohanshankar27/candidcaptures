
import React from 'react';
import { Check } from 'lucide-react';

interface PackageFeatureProps {
  text: string;
}

const PackageFeature: React.FC<PackageFeatureProps> = ({ text }) => {
  return (
    <li className="flex items-start">
      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
      <span className="text-slate-700">{text}</span>
    </li>
  );
};

export default PackageFeature;
