
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, InfoIcon } from 'lucide-react';
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
    '/lovable-uploads/0ef8c636-5a0e-4fe4-aedb-03f82bc3c8d4.png', // New matrimonial portrait image
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png', // Previous thumbnail
    '/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png',
    '/lovable-uploads/cad21907-840a-459a-8e84-261e5dd02084.png', // Bridal makeup image
    '/lovable-uploads/d5af9480-02f6-4601-98cd-5bd10840f0c8.png' // Fashion portrait
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
                  <span className="text-slate-700">Styling: No</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">5 edited digital images (full res)</span>
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
                  <span className="text-slate-700">Makeup: No</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Mood-board/planning: No</span>
                </li>
              </ul>
              <div className="mt-4 pt-2 border-t border-slate-100">
                <a href="#booking" className="inline-block w-full text-center text-primary hover:text-primary/80 font-medium text-sm py-1.5 border border-primary/30 rounded hover:bg-primary/5 transition-colors">
                  Book an Appointment
                </a>
              </div>
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
                  <span className="text-slate-700">Location: Your Premises</span>
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
                  <span className="text-slate-700">Additional Changes: ₹1,000/-</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Styling: Minimal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">15 edited digital images (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: ₹200/image</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hard Copies: Optional</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Optional</span>
                </li>
              </ul>
              <div className="mt-4 pt-2 border-t border-slate-100">
                <a href="#booking" className="inline-block w-full text-center bg-primary/10 text-primary hover:bg-primary/20 font-medium text-sm py-1.5 rounded transition-colors">
                  Schedule Session
                </a>
              </div>
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
                  <span className="text-slate-700">Studio Session: No</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Session: Yes (location charges @ actuals)</span>
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
                  <span className="text-slate-700">Styling: Yes (Dedicated stylist optional)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Professional Styling: Optional</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Optional</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">20+ edited digital images (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: ₹200/image</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hard Copies: Optional</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Non-refundable Planning/Booking: ₹5,500/-</span>
                </li>
              </ul>
              <div className="mt-4 pt-2 border-t border-slate-100">
                <a href="#booking" className="inline-block w-full text-center text-primary hover:text-primary/80 font-medium text-sm py-1.5 border border-primary/30 rounded hover:bg-primary/5 transition-colors">
                  Free Consultation
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 bg-gradient-to-r from-slate-50 to-slate-100/70 p-5 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-start mb-3">
            <InfoIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <h3 className="text-lg font-medium text-[#333333]">Note:</h3>
          </div>
          <p className="text-slate-700 mb-3">Matrimonial / Dating portfolio shoots are about you, your style & personality.</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Do carry some of your personal items that can be used for styling</li>
            <li>Images can be customised based on audience - a prospective life partner / elder family members etc.</li>
            <li>You will get a combination of headshots, medium & full length shots.</li>
            <li>Have a hobby / practice a sport? We might be able to tastefully create a shot to show that off too.</li>
          </ul>
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
