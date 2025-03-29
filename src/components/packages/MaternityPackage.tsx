
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import BookingCTA from './BookingCTA';

const MaternityPackage: React.FC = () => {
  return (
    <div className="package-details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img 
          src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
          alt="Maternity Photography" 
          className="w-full h-64 object-cover rounded-md col-span-3 md:col-span-2"
        />
        <div className="grid grid-cols-1 gap-4">
          <img 
            src="/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png" 
            alt="Maternity Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
          <img 
            src="/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png" 
            alt="Maternity Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Maternity Photography Sessions</h3>
          <p className="mb-4 text-slate-600">
            Celebrate the beauty and miracle of pregnancy with our professional maternity photography sessions. 
            We capture this special time in your life with elegant, intimate portraits that you will cherish forever.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
              <CardTitle className="text-primary text-lg">Basic</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Simple session</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-2xl font-light text-[#ea384c]">₹4,499</span>
                <span className="text-sm text-slate-500">+GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Location: Your Premises</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 60-90 mins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Costume Changes: Max 2</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Props: Basic collection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">15 full res photos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: ₹200/image</span>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <a href="tel:+919632288815" className="text-primary hover:underline text-sm font-medium">
                  Check Availability
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-lg">Standard</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Popular choice</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-2xl font-light text-[#ea384c]">₹8,999</span>
                <span className="text-sm text-slate-500">+GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Location: Your Premises</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 2-3 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Costume Changes: Max 4</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Short Video: 1</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Props: Basic + Custom</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">30 full res photos</span>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <a href="https://calendly.com/candidcapture/30min" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium">
                  Schedule Online
                </a>
              </div>
              <div className="mt-3 text-center space-x-2">
                <a href="#" className="text-xs text-primary/80 hover:underline">Sample-1</a>
                <span className="text-xs text-slate-400">|</span>
                <a href="#" className="text-xs text-primary/80 hover:underline">Sample-2</a>
                <span className="text-xs text-slate-400">|</span>
                <a href="#" className="text-xs text-primary/80 hover:underline">Sample-3</a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-lg">Premium</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Complete coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-2xl font-light text-[#ea384c]">₹18,000</span>
                <span className="text-sm text-slate-500">+GST</span>
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
                  <span className="text-slate-700">30 edited digital images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">3 outfit changes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Studio and outdoor locations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hair and makeup artist</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
              <CardTitle className="text-primary text-lg">Signature</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Luxury experience</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-2xl font-light text-[#ea384c]">₹24,999</span>
                <span className="text-sm text-slate-500">+GST*</span>
                <div className="text-xs text-slate-500 mt-1">*Variable based on Location/Styling/Props/Costumes</div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Location: Your Premises</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 3-6 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Look Costume Changes: Max 4</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">50 full res photos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Short Videos: 4</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Album Book: 1</span>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <a href="tel:+919632288815" className="text-primary hover:underline text-sm font-medium">
                  Free Consultation
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Add-On Services</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Additional digital images - ₹200 per image (Basic & Standard packages)</li>
            <li>Hair and makeup artist - Starting at ₹4,750</li>
            <li>Custom props - Price varies based on requirements</li>
            <li>Partner/family photos - Included in Standard and above packages</li>
            <li>Location/Prop charges - At actuals</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Maternity sessions are best scheduled between 28-34 weeks of pregnancy</li>
            <li>A 50% deposit is required to secure your booking</li>
            <li>Rescheduling must be done at least 48 hours in advance</li>
            <li>Creative planning and mood-board included in Signature package</li>
            <li>Travel fees may apply for locations beyond 20km from our studio</li>
          </ul>
        </div>

        <BookingCTA 
          title="Book Your Maternity Photography Session" 
          serviceType="precious pregnancy journey"
        />
      </div>
    </div>
  );
};

export default MaternityPackage;

