
import React from "react";
import { CheckCircle } from "lucide-react";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-primary/10 p-3 rounded-full">
        <CheckCircle className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
