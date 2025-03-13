import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import BookingCTA from './BookingCTA';

const WeddingPackage: React.FC = () => {
  return (
    <div className="package-details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img 
          src="/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png" 
          alt="Wedding Photography" 
          className="w-full h-64 object-cover rounded-md col-span-3 md:col-span-2"
        />
        <div className="grid grid-cols-1 gap-4">
          <img 
            src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
            alt="Wedding Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
          <img 
            src="/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png" 
            alt="Wedding Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
        </div>
      </div>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Wedding Photography Packages</h3>
          <p className="mb-4 text-slate-600">
            Your wedding day is one of the most important days of your life. Our wedding photography 
            packages are designed to capture every precious moment, from getting ready to the grand reception.
            Choose the perfect package to preserve your memories forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
              <CardTitle className="text-primary text-2xl">Silver</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Perfect for intimate celebrations</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-4xl font-light text-[#ea384c]">₹65,000</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">1 Day Wedding Coverage (12 Hours)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">2 Professional Photographers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">300+ Edited Digital Images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Online Gallery with Digital Download</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">10 Printed 8×10″ Photographs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Basic Photo Album (20 Pages)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-2xl">Gold</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Comprehensive wedding coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-4xl font-light text-[#ea384c]">₹95,000</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">2 Days Wedding Coverage (16 Hours)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">3 Professional Photographers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">1 Cinematographer</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">500+ Edited Digital Images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Online Gallery with Digital Download</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">15 Printed 8×10″ Photographs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Premium Photo Album (30 Pages)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">5-minute Highlight Video</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
              <CardTitle className="text-primary text-2xl">Platinum</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Complete luxury experience</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-4xl font-light text-[#ea384c]">₹1,45,000</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Full Wedding Coverage (All Events)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">4 Professional Photographers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">2 Cinematographers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Drone Coverage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">800+ Edited Digital Images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Online Gallery with Digital Download</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">20 Printed 8×10″ Photographs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Luxury Photo Album (40 Pages)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">10-minute Cinematic Wedding Film</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">1 Large Canvas Print (24×36″)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <div className="space-y-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Additional Services</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-[#ea384c]">Pre-Wedding Photography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Capture your love story before the big day with our pre-wedding photography sessions.</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>4-hour photoshoot at location of your choice</li>
                  <li>150+ edited digital images</li>
                  <li>Online gallery with digital download</li>
                  <li>10 printed photographs</li>
                  <li><span className="font-medium">Starting at ₹30,000</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-[#ea384c]">Cinematic Wedding Film</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Professional videography to capture the emotions and moments of your wedding day.</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Full day coverage</li>
                  <li>2 professional cinematographers</li>
                  <li>5-10 minute highlight film</li>
                  <li>Full ceremony and reception coverage</li>
                  <li><span className="font-medium">Starting at ₹40,000</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Our Process</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary mb-4 mx-auto">1</div>
              <h4 className="text-center font-medium mb-2">Consultation</h4>
              <p className="text-sm text-slate-600 text-center">Meet with our photography team to discuss your vision and requirements.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary mb-4 mx-auto">2</div>
              <h4 className="text-center font-medium mb-2">Booking</h4>
              <p className="text-sm text-slate-600 text-center">Secure your date with a 30% booking deposit and sign the contract.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary mb-4 mx-auto">3</div>
              <h4 className="text-center font-medium mb-2">Delivery</h4>
              <p className="text-sm text-slate-600 text-center">Receive your final edited images and products within 6-8 weeks.</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 30% deposit is required to secure your booking</li>
            <li>Travel fees may apply for destinations beyond 50km from our studio</li>
            <li>Additional hours of coverage available at ₹10,000 per hour</li>
            <li>All packages include copyright release for personal use</li>
            <li>Delivery timeline: 6-8 weeks for photos, 8-10 weeks for albums</li>
          </ul>
        </div>

        <BookingCTA 
          title="Book Your Wedding Photography Package" 
          serviceType="special day"
        />
      </div>
    </div>
  );
};

export default WeddingPackage;
