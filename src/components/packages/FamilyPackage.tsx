
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import BookingCTA from './BookingCTA';
import PackageImageCarousel from './PackageImageCarousel';

const FamilyPackage: React.FC = () => {
  // Images for the family package carousel
  const familyImages = [
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png'
  ];

  return (
    <div className="package-details">
      <PackageImageCarousel images={familyImages} altPrefix="Family portrait" />
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Family Portrait Sessions</h3>
          <p className="mb-4 text-slate-600">
            Capture the essence of your family's bond with our professional portrait photography services.
            Our expertly designed packages ensure that your family's unique dynamics and personalities shine through in every image.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
              <CardTitle className="text-primary text-xl">MINI</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Essential coverage</CardDescription>
              <div className="mt-4 mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-slate-500">₹8,850 inclusive of GST</span>
                  <span className="text-3xl font-light text-[#ea384c]">₹5,790 +GST</span>
                </div>
                <p className="text-xs mt-1 text-green-600 font-medium">
                  Additional 15% Discount if all members are above 7 years (₹4,922 +GST)
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Studio Shoot: Yes, at our studio</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Shoot: No</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 60 - 90 mins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Look/Costumes Changes: Max 2</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Props: Minimal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Photographs Delivered: 15 (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: @350/image</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hard Copies: No (full res soft copies only)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: No</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <a href="#book" className="block w-full text-center bg-[#ea384c] hover:bg-[#ea384c]/90 text-white py-2 rounded transition-colors">
                  Schedule Online
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-xl">CLASSIC</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Enhanced coverage</CardDescription>
              <div className="mt-4 mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-slate-500">₹17,700 inclusive of GST</span>
                  <span className="text-3xl font-light text-[#ea384c]">₹12,360 +GST</span>
                </div>
                <p className="text-xs mt-1 text-green-600 font-medium">
                  Additional 15% Discount if all members are above 7 years (₹10,505 +GST)
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Studio Shoot: Yes, at our studio</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Shoot: No</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 150 - 180 mins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Look/Costumes Changes: Max 5</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Props: Basic Toys/books</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Photographs Delivered: 30 (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: @300/image</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hard Copies: Yes, starting ₹35/- per print (min 10)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Optional, starting 3,750/-</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <a href="tel:+919886156696" className="block w-full text-center bg-[#ea384c] hover:bg-[#ea384c]/90 text-white py-2 rounded transition-colors">
                  Call us on: +91.98861-56696
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
              <CardTitle className="text-primary text-xl">Deluxe Family</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Complete coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹35,000</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Up to 3-hour photo session</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">30 edited digital images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Multiple poses and groupings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">2-3 outfit changes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">2 locations (studio and/or outdoor)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">1 custom photo album (10×10″)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Extended Family Package - ₹45,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 4-hour photo session</li>
            <li>40 edited digital images</li>
            <li>Ideal for large family groups and multiple generations</li>
            <li>Multiple poses, groupings, and individual family units</li>
            <li>2-3 outfit changes</li>
            <li>2 locations (studio and/or outdoor)</li>
            <li>15 printed 8×10″ photographs</li>
            <li>1 custom photo album (12×12″)</li>
            <li>2 mounted wall prints (16×20″)</li>
          </ul>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 50% deposit is required to secure your booking</li>
            <li>Additional digital images can be purchased at ₹1,500 per image</li>
            <li>Travel fees may apply for locations beyond 20km from our studio</li>
            <li>All packages include pre-session consultation</li>
            <li>Weekend and holiday sessions may incur additional charges</li>
          </ul>
        </div>

        <BookingCTA 
          title="Book Your Family Portrait Session" 
          serviceType="family memories"
        />
      </div>
    </div>
  );
};

export default FamilyPackage;
