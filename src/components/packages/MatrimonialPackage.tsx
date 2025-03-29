import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clock, Camera } from 'lucide-react';
import BookingCTA from './BookingCTA';
import PackageImageCarousel from './PackageImageCarousel';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const MatrimonialPackage: React.FC = () => {
  // Images for the matrimonial package carousel
  const matrimonialImages = [
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png'
  ];

  return (
    <div className="package-details">
      <PackageImageCarousel images={matrimonialImages} altPrefix="Matrimonial portfolio" />
      
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
              <CardTitle className="text-primary text-xl">MINI Session</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Quick & Essential</CardDescription>
              <div className="mt-2 mb-1 flex flex-col">
                <span className="text-sm text-slate-600 line-through">Regular Price ₹2,999+GST</span>
                <span className="text-3xl font-light text-[#ea384c]">Special OFFER ₹1,949 +GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Clock className="h-4 w-4 text-[#ea384c]" />
                  <p>15-30 Minute Session (Studio time: 45 mins)</p>
                </div>
                <ul className="space-y-2">
                  {[
                    'Studio Session: Yes', 
                    'Outdoor Session: No', 
                    'Look/Costumes Changes: 1 only', 
                    'Styling: No', 
                    '5 full res edited photographs', 
                    'Additional images: ₹475/image',
                    'Hard Copies: No',
                    'Makeup: No',
                    'Mood-board/planning: No'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="mt-0.5 mr-2 bg-primary/5 p-1 rounded-full">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 flex justify-center">
                  <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90 shadow-md relative overflow-hidden group w-full">
                    <span className="absolute inset-0 w-3 bg-white/20 skew-x-[-20deg] transform -translate-x-10 group-hover:translate-x-[400px] transition-all duration-1000 ease-out"></span>
                    <span className="relative">Book an Appointment</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-xl">Classic Session</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Complete coverage</CardDescription>
              <div className="mt-2 mb-1 flex flex-col">
                <span className="text-sm text-slate-600 line-through">Regular Price ₹7,999 +GST</span>
                <span className="text-3xl font-light text-[#ea384c]">Weekday Offer ₹4,067 +GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Clock className="h-4 w-4 text-[#ea384c]" />
                  <p>45-90 Minute Session (Studio time: 150 mins)</p>
                </div>
                <ul className="space-y-2">
                  {[
                    'Studio Session: Yes', 
                    'Outdoor Session: No', 
                    'Look/Costumes Changes: 3', 
                    'Additional Changes: ₹1,000/-', 
                    'Styling: Minimal', 
                    '15 full res photographs',
                    'Additional images: ₹375/image',
                    'Hard Copies: Optional',
                    'Makeup: Optional, Starting ₹4,275/-'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="mt-0.5 mr-2 bg-primary/5 p-1 rounded-full">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 flex justify-center">
                  <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90 shadow-md relative overflow-hidden group w-full">
                    <span className="absolute inset-0 w-3 bg-white/20 skew-x-[-20deg] transform -translate-x-10 group-hover:translate-x-[400px] transition-all duration-1000 ease-out"></span>
                    <span className="relative">Schedule Session</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
              <CardTitle className="text-primary text-xl">Signature Session</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Premium outdoor experience</CardDescription>
              <div className="mt-2 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹12,499 +GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Clock className="h-4 w-4 text-[#ea384c]" />
                  <p>4-Hour Premium Session</p>
                </div>
                <ul className="space-y-2">
                  {[
                    'Free Consultation',
                    'Studio Session: No', 
                    'Outdoor Session: Yes (location charges @ actuals)', 
                    '3+ outfit changes', 
                    'Styling: Basic (Dedicated stylist optional)', 
                    'Professional Styling: Optional, starting ₹7,999/-',
                    'Makeup: Starting ₹4,275/-',
                    '15+ delivered full res photographs',
                    'Additional Images: Chargeable',
                    'Hard Copies: Optional',
                    'Non-refundable Planning/Booking Charges: ₹5,500/-'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="mt-0.5 mr-2 bg-primary/5 p-1 rounded-full">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 flex justify-center">
                  <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90 shadow-md relative overflow-hidden group w-full">
                    <span className="absolute inset-0 w-3 bg-white/20 skew-x-[-20deg] transform -translate-x-10 group-hover:translate-x-[400px] transition-all duration-1000 ease-out"></span>
                    <span className="relative">Book Signature Session</span>
                  </Button>
                </div>
              </div>
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
