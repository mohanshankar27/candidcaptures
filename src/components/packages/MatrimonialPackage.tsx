
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import BookingCTA from './BookingCTA';
import PackageImageCarousel from './PackageImageCarousel';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

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
              <CardTitle className="text-primary text-xl">Basic Portfolio</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Essential coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹1,999</span>
                <span className="text-sm text-slate-500 ml-1">+GST</span>
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
                  <span className="text-slate-700">Shoot Duration: 15-30 mins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Costumes Changes: 1 only</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">5 edited digital images (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: ₹200/image</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-xl">Standard Portfolio</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Enhanced coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹4,599</span>
                <span className="text-sm text-slate-500 ml-1">+GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Studio Session: Yes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Shoot Duration: 1-1.5 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Studio Time: 2 hrs (additional chargeable)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Costumes Changes: 2</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">15 edited digital images (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Styling: Minimal</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
              <CardTitle className="text-primary text-xl">Signature Portfolio</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Premium experience</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹9,499</span>
                <span className="text-sm text-slate-500 ml-1">+GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Session: Yes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: ~4 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Costumes Changes: 3+</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Styling: Yes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">20+ edited digital images (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Non-refundable Booking: ₹5,500/-</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator />

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
        
        <div className="mt-8 bg-slate-50/70 rounded-lg border border-slate-200 p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#333333]">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                What should I wear for my matrimonial portfolio?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>We recommend bringing a variety of outfits including:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Traditional attire (saree, lehenga, sherwani, etc.)</li>
                  <li>Formal western wear (suit, formal dress)</li>
                  <li>Smart casual outfits</li>
                  <li>Simple, solid colored clothing that highlights your features</li>
                </ul>
                <p className="mt-2">Avoid busy patterns or logos that might distract from your face.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                How long will it take to receive my photos?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>You will typically receive your edited photos within 7-10 business days after your session. For urgent requests, we offer expedited delivery options at an additional fee.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                Can I bring someone with me to the shoot?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>Yes, you're welcome to bring one person with you for support or assistance with outfits. Having someone you trust can help you feel more comfortable during the session.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                Do you provide hair and makeup services?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>Professional hair and makeup services are available as add-ons to any package. We work with experienced stylists who specialize in photoshoot-ready looks that photograph beautifully. Please inquire for current rates.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium text-slate-800">
                Can I customize my package?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>Absolutely! While we offer standard packages, we understand that everyone's needs are unique. Contact us to discuss customizing a package that perfectly matches your requirements and budget.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
