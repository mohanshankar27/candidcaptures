
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, HelpCircle } from 'lucide-react';
import BookingCTA from './BookingCTA';
import PackageImageCarousel from './PackageImageCarousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FamilyPackage: React.FC = () => {
  // Images for the family package carousel
  const familyImages = [
    '/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
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
              <CardTitle className="text-primary text-xl">BASIC</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Essential coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹6,750</span>
                <span className="text-slate-600 text-sm ml-1">+gst</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Shoot</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 1 - 1.5 hrs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Costumes Changes: Max 2</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Photographs Delivered: 15 (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: @₹200/image</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-slate-500 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">
                    <a href="#" className="text-primary underline">Schedule Online</a>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
              <CardTitle className="text-primary text-xl">STANDARD</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Enhanced coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹12,550</span>
                <span className="text-slate-600 text-sm ml-1">+gst</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Shoot</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 2 - 3 hrs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Costumes Changes: Max 5</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Props: Basic</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Photographs Delivered: 30 (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Additional Images: @₹200/image</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Optional</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">
                    <a href="tel:+919632288815" className="text-primary underline">Call Us: +91 9632288815</a>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
              <CardTitle className="text-primary text-xl">SIGNATURE</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Fully customised</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹15,550</span>
                <span className="text-slate-600 text-sm ml-1">+gst</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Shoot: Yes, optional</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: up to 4 hrs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Costumes Changes: as discussed</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Props: Our/rental/location's collection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Photographs Delivered: 40 (full res)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Location/Prop Charges: At actuals</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Optional</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">
                    <a href="mailto:candidcapture4@gmail.com" className="text-primary underline">Let us plan everything</a>
                  </span>
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
            <li>Travel fees may apply for locations beyond 20km from our studio</li>
            <li>All packages include pre-session consultation</li>
            <li>Weekend and holiday sessions may incur additional charges</li>
          </ul>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="h-5 w-5 text-[#ea384c]" />
            <h3 className="text-lg font-medium text-[#333333]">Frequently Asked Questions</h3>
          </div>
          
          <Card className="mt-3 border-primary/10 bg-slate-50/80 shadow-sm">
            <CardContent className="pt-4 px-4 pb-2">
              <Accordion type="single" collapsible className="w-full text-sm">
                <AccordionItem value="faq-1" className="border-b border-primary/10">
                  <AccordionTrigger className="text-left text-sm font-medium py-3 hover:text-primary">
                    Can I include siblings/myself in the shoot?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-xs pb-3">
                    Absolutely yes, in fact we recommend you to. We are more about framing memories and do not restrict the shoots only to the child being photographed, instead we want this to be that your family can remember by and in fact recommend you to be involved in the shoot.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-2" className="border-b border-primary/10">
                  <AccordionTrigger className="text-left text-sm font-medium py-3 hover:text-primary">
                    Can I customize my shoot?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-xs pb-3">
                    Yes, you can. SIGNATURE & above plans provide you with options to customize. In fact, we use a couple of your suggestions as a starting point to understand your likes and plan the mood board accordingly.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-3" className="border-b border-primary/10">
                  <AccordionTrigger className="text-left text-sm font-medium py-3 hover:text-primary">
                    How do I pick costumes / What should I wear for the shoot?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-xs pb-3">
                    <p>We keep our shoots simple, and solid colors work best. You can share your wardrobe options over WhatsApp and we can help you with the selection you have confirmed your shoot with us.</p>
                    <p className="mt-2">Keep your selections simple, stripes and patterns can hide the stomach or distract attention from it. It is safe to stick to solid colors.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-4" className="border-b border-primary/10">
                  <AccordionTrigger className="text-left text-sm font-medium py-3 hover:text-primary">
                    Will we get all the photos? Can we get the RAW images?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-xs pb-3">
                    <p>The short answer is no. Only the absolute best of the best make it, which will in the end be about 10 – 30 images as per the selected plan.</p>
                    <p className="mt-2">Additional images beyond the discussed number are available for a small fee. These images will be fully edited, cropped, and prepared for final presentation and in the full resolution (with an embedded color profile, that can printed later on).</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-5" className="border-b-0">
                  <AccordionTrigger className="text-left text-sm font-medium py-3 hover:text-primary">
                    Can I include Uncles/Aunts/Grand Parents/Cousins etc.?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-xs pb-3">
                    <p>Absolutely yes, the shoot is not just for your kid, but for the immediate family.</p>
                    <p className="mt-2">Please let us know in advance in order to plan the shoot for accommodating your relatives in the shoot (Pricing variations may apply where number of people in the shoot exceeds 8pax).</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
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
