
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import BookingCTA from '../packages/BookingCTA';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

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
                  <span className="text-slate-700">Costumes Changes: Max 2</span>
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
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hard Copies: No</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Not Included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Prior Creative Planning: No</span>
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
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
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
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: ₹200/image</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Optional, ₹4,750+</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Creative Planning: Yes</span>
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

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-lg">Premium</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Enhanced session</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-2xl font-light text-[#ea384c]">₹18,999</span>
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
                  <span className="text-slate-700">Duration: 3-4 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Costume Changes: Max 6</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Short Videos: 2-3</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Props: Premium collection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">45 full res photos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: ₹150/image</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Optional, ₹4,750+</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Creative Planning: Advanced</span>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <a href="https://calendly.com/candidcapture/30min" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium">
                  Schedule Consultation
                </a>
              </div>
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
                  <span className="text-slate-700">Props: At actuals as per concept</span>
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
                  <span className="text-slate-700">Location/Prop Charges: At actuals</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup/hair: Optional</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Creative Planning: Mood-board, Stylist</span>
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
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Maternity sessions are best scheduled between 28-34 weeks of pregnancy</li>
            <li>A 50% deposit is required to secure your booking</li>
            <li>Rescheduling must be done at least 48 hours in advance</li>
            <li>Creative planning and mood-board included in Signature package</li>
            <li>Travel fees may apply for locations beyond 20km from our studio</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-slate-50/70 rounded-lg border border-slate-200 p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#333333]">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                When do I schedule my maternity photography session?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>You can book a date during the start of 7th month for a shoot is in your 8th month.</p>
                <p>(30-34th week i.e the 8th Month) is an optimum time for both comfortable movement & belly to be seen nicely.</p>
                <p>Early booking also gives you ample time to plan a concept, order garments etc.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                Can I Customise my shoot?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>Yes, you can.</p>
                <p>SIGNATURE & above plans can be entirely customised as per your liking.</p>
                <p>In fact we use a couple of your suggestions as a starting point to understand your taste and plan the mood board accordingly.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                What can/should I wear for the Session?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>The following work great:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Form fitting dresses</li>
                  <li>Flowy Dresses</li>
                  <li>Snug fitting tank top with a low riding skirt can also be a great way to show off your beautiful bump</li>
                </ul>
                <p className="mt-2">Keep your selections simple, Stripes and patterns can hide the stomach or distract attention from it. It is safe to stick to solid colours.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                Will we get all the photos? Can we get the RAW images?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>The short answer is no.</p>
                <p>Only the absolute best of the best make it, which will in the end be about 10 – 30 images as per the selected plan.</p>
                <p>Additional images beyond the discussed number are available for a small fee.</p>
                <p>These images will be fully edited, cropped, and prepared for final presentation and in the full resolution (with an embedded colour profile, that can printed later on).</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                Can I include my children / extended family?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>Absolutely yes,</p>
                <p>Our Sessions are not just for you and your spouse, but for your immediate family too, after all they too are part of your journey.</p>
                <p>Please let us know in advance in order to plan the shoot for accommodating your kids/family in the shoot.</p>
                <p>We keep things simple, If required images are more we charge a nominal fee that accounts for extra logistics/time involved.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
