
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import BookingCTA from './BookingCTA';

const MatrimonialPackage: React.FC = () => {
  return (
    <div className="package-details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img 
          src="/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png" 
          alt="Matrimonial Portfolio Photography" 
          className="w-full h-64 object-cover rounded-md col-span-3 md:col-span-2"
        />
        <div className="grid grid-cols-1 gap-4">
          <img 
            src="/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png" 
            alt="Matrimonial Portfolio" 
            className="w-full h-[120px] object-cover rounded-md"
          />
          <img 
            src="/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png" 
            alt="Matrimonial Portfolio" 
            className="w-full h-[120px] object-cover rounded-md"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Matrimonial / Dating Portfolio Sessions</h3>
          <p className="mb-4 text-slate-600">
            Create an impressive matrimonial portfolio with our professional photography services. 
            We offer customized packages to help you make a lasting impression with high-quality, authentic photographs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
              <CardTitle className="text-primary text-xl">Basic Portfolio</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Essential coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹10,000</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">1-hour photo session</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">2 outfit changes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">10 edited digital images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Indoor studio session</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Basic retouching included</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-xl">Premium Portfolio</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Enhanced coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹15,000</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">2-hour photo session</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">3 outfit changes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">15 edited digital images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Indoor studio and outdoor location</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Advanced retouching included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">5 printed 5×7″ photographs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
              <CardTitle className="text-primary text-xl">Deluxe Portfolio</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Complete coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹20,000</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">3-hour photo session</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">4 outfit changes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">20 edited digital images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Multiple locations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hair and makeup included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">10 printed 5×7″ photographs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Add-On Services</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Additional digital images - ₹750 per image</li>
            <li>Hair and makeup services - ₹4,000</li>
            <li>Additional location - ₹3,000 per location</li>
            <li>Extra outfit change - ₹1,500 per outfit</li>
            <li>Custom-designed digital portfolio (if not included) - ₹5,000</li>
            <li>Extended session time - ₹5,000 per hour</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 50% deposit is required to secure your booking</li>
            <li>We recommend booking your session at least 2 weeks in advance</li>
            <li>Bring multiple outfits for variety (formal, casual, traditional)</li>
            <li>Matrimonial portfolios typically include a mix of traditional and contemporary looks</li>
            <li>Travel fees may apply for locations beyond 20km from our studio</li>
            <li>All packages include pre-session consultation</li>
          </ul>
        </div>

        <BookingCTA 
          title="Book Your Matrimonial Portfolio Session" 
          serviceType="perfect portfolio"
        />
      </div>
    </div>
  );
};

export default MatrimonialPackage;
