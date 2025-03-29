
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import BookingCTA from './BookingCTA';

const ModellingPackage: React.FC = () => {
  return (
    <div className="package-details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img 
          src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
          alt="Modelling Portfolio" 
          className="w-full h-64 object-cover rounded-md col-span-3 md:col-span-2"
        />
        <div className="grid grid-cols-1 gap-4">
          <img 
            src="/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png" 
            alt="Modelling Portfolio" 
            className="w-full h-[120px] object-cover rounded-md"
          />
          <img 
            src="/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png" 
            alt="Modelling Portfolio" 
            className="w-full h-[120px] object-cover rounded-md"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Modelling Portfolio & Polaroid Sessions</h3>
          <p className="mb-4 text-slate-600">
            Elevate your modelling career with our professional portfolio services. Our expert photographers specialize in creating stunning portfolios that showcase your versatility and unique look, helping you stand out in the competitive modelling industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
              <CardTitle className="text-primary text-lg">Basic Polaroid</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Agency submissions</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-2xl font-light text-[#ea384c]">₹4,480</span>
                <span className="text-sm text-slate-500 ml-1">+GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Location: Studio Only</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: ~30 mins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">15 polaroid images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Retouching: Basic</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Changes/Looks: 1 (no changes allowed)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Planning: Basic</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Intro Video: Extra @995+gst</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">MUA/H: optional @actuals</span>
                </li>
              </ul>
              <div className="mt-4 pt-2 border-t border-slate-100">
                <a href="#booking" className="inline-block w-full text-center text-primary hover:text-primary/80 font-medium text-sm py-1.5 border border-primary/30 rounded hover:bg-primary/5 transition-colors">
                  Book Appointment Online
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-lg">Standard Portfolio</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Professional portfolio</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-2xl font-light text-[#ea384c]">₹14,499</span>
                <span className="text-sm text-slate-500 ml-1">+GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Location: Studio</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: ~4 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">25 photographs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Retouching: 10 images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Changes/Looks: up to 4 looks</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Planning: Yes, test shoot followed by planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Intro Video: Yes, Basic (45 sec)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Look Book/Hard Prints: Yes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">MUA/H: additional @ actuals</span>
                </li>
              </ul>
              <div className="mt-4 pt-2 border-t border-slate-100">
                <a href="#booking" className="inline-block w-full text-center bg-primary/10 text-primary hover:bg-primary/20 font-medium text-sm py-1.5 rounded transition-colors">
                  Let's Plan
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
              <CardTitle className="text-primary text-lg">Signature Portfolio</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Agency-ready portfolio</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-2xl font-light text-[#ea384c]">₹34,499</span>
                <span className="text-sm text-slate-500 ml-1">+GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Location: Studio & outdoor</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: ~8 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">40+ photographs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Retouching: 25 images</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Changes/Looks: 4 looks or more</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Planning: Complete Planning Support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Intro Video: Yes, personalized (60-90 min)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Look Book/Hard Prints: Yes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">MUA/H: additional @ actuals</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Stylist/Art Direction: Yes, @ actuals</span>
                </li>
              </ul>
              <div className="mt-4 pt-2 border-t border-slate-100">
                <a href="tel:+919632288815" className="inline-block w-full text-center text-primary hover:text-primary/80 font-medium text-sm py-1.5 border border-primary/30 rounded hover:bg-primary/5 transition-colors">
                  Call +91.9632288815
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Portfolio Types We Specialize In</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Fashion portfolios', 'Commercial modeling', 'Runway portfolios', 'Editorial style', 
              'Fitness modeling', 'Plus-size modeling', 'Parts modeling', 'Acting headshots'].map((type, i) => (
              <div key={i} className="bg-primary/5 p-3 rounded-lg text-center text-slate-700 border border-primary/10">
                {type}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 50% deposit is required to secure your booking</li>
            <li>Rescheduling is possible with at least 48 hours notice</li>
            <li>We can provide recommendations for hair stylists, makeup artists, and wardrobe stylists</li>
            <li>Travel fees may apply for locations outside Bangalore city limits</li>
            <li>Customized packages available upon request</li>
          </ul>
        </div>

        <BookingCTA 
          title="Book Your Modelling Portfolio Session" 
          serviceType="modeling career"
        />
      </div>
    </div>
  );
};

export default ModellingPackage;
