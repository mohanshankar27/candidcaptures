
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import BookingCTA from './BookingCTA';

const EventPackage: React.FC = () => {
  return (
    <div className="package-details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img 
          src="/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png" 
          alt="Event Photography" 
          className="w-full h-64 object-cover rounded-md col-span-3 md:col-span-2"
        />
        <div className="grid grid-cols-1 gap-4">
          <img 
            src="/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png" 
            alt="Event Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
          <img 
            src="/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png" 
            alt="Event Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Event Photography Pricing</h3>
          <p className="mb-4 text-slate-600">
            Capture the special moments of your events with our professional photography services. We offer a range of event photography packages tailored to meet your specific needs, from corporate functions to personal celebrations.
          </p>
        </div>

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

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Add-On Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-slate-50 p-4 rounded-lg">
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Additional hour of coverage - ₹5,000 per hour</li>
                <li>Additional photographer - ₹10,000 per photographer</li>
                <li>Express delivery (48 hours) - ₹5,000</li>
                <li>Printed photo album (30 pages) - ₹8,000</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>On-site printing station - ₹15,000</li>
                <li>Photo booth setup - ₹20,000</li>
                <li>Drone photography - ₹10,000</li>
                <li>Video highlights - starting at ₹15,000</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Event Types We Cover</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {['Corporate conferences', 'Product launches', 'Award ceremonies', 'Trade shows', 'Team-building',
              'Birthday parties', 'Anniversaries', 'Religious ceremonies', 'Graduations', 'Cultural events'].map((type, i) => (
              <div key={i} className="bg-primary/5 p-2 rounded-lg text-center text-slate-700 border border-primary/10 text-sm">
                {type}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 50% deposit is required to secure your booking</li>
            <li>Travel fees may apply for events outside Bangalore city limits</li>
            <li>Customized packages available upon request</li>
            <li>Weekend and holiday bookings should be made well in advance</li>
          </ul>
        </div>

        <BookingCTA 
          title="Book Your Event Photography Services" 
          serviceType="special event"
        />
      </div>
    </div>
  );
};

export default EventPackage;
