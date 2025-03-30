
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Addon {
  name: string;
  price: string;
}

interface AddonsListProps {
  addons: Addon[];
}

export const AddonsList = ({ addons }: AddonsListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Additional Add-ons</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {addons.map((addon, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center pb-2 border-b border-slate-100"
            >
              <span>{addon.name}</span>
              <span className="font-medium">{addon.price}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
