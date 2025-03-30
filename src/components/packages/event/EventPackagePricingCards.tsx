
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const EventPackagePricingCards: React.FC = () => {
  return (
    <div className="grid md:grid-cols-4 gap-5">
      <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
          <CardTitle className="text-primary text-lg">Basic</CardTitle>
          <CardDescription className="text-slate-600 pt-1">Small events</CardDescription>
          <div className="mt-4 mb-1">
            <span className="text-2xl font-light text-[#ea384c]">₹15,000</span>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">4 hours of coverage</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">One professional photographer</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">100+ edited digital images</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">Online gallery for downloading</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">7-10 business days delivery</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
          <CardTitle className="text-primary text-lg">Standard</CardTitle>
          <CardDescription className="text-slate-600 pt-1">Medium events</CardDescription>
          <div className="mt-4 mb-1">
            <span className="text-2xl font-light text-[#ea384c]">₹25,000</span>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">6 hours of coverage</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">One professional photographer</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">200+ edited digital images</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">Same-day preview (10 photos)</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">7-10 business days delivery</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
        <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
          Most Popular
        </div>
        <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
          <CardTitle className="text-primary text-lg">Premium</CardTitle>
          <CardDescription className="text-slate-600 pt-1">Large events</CardDescription>
          <div className="mt-4 mb-1">
            <span className="text-2xl font-light text-[#ea384c]">₹35,000</span>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">8 hours of coverage</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">Two professional photographers</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">300+ edited digital images</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">Same-day preview (20 photos)</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">5-7 business days delivery</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
          <CardTitle className="text-primary text-lg">Corporate</CardTitle>
          <CardDescription className="text-slate-600 pt-1">Professional events</CardDescription>
          <div className="mt-4 mb-1">
            <span className="text-2xl font-light text-[#ea384c]">₹40,000</span>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">Full day (up to 10 hours)</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">Two professional photographers</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">400+ edited digital images</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">Corporate branding integration</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-slate-700">Commercial usage rights</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventPackagePricingCards;
