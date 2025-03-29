
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';
import BookingCTA from './BookingCTA';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

const NewBornPackage: React.FC = () => {
  // Images for the newborn package carousel
  const newbornImages = [
    '/lovable-uploads/b977d3f5-fd63-468d-ac7f-09766c3ab6c1.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png'
  ];

  return (
    <div className="package-details">
      <div className="mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {newbornImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl h-48 md:h-64">
                    <img 
                      src={image} 
                      alt={`Newborn photography ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <CarouselNext />
          </div>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <CarouselPrevious />
          </div>
        </Carousel>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">New Born Photo Shoot Packages</h3>
          <p className="mb-4 text-slate-600">
            Creating memories that last a lifetime with our professional newborn photography services.
            Our carefully designed packages ensure your precious moments are captured with love and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
              <CardTitle className="text-primary text-xl">TINY TOTS - BASIC</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Essential coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹8,560</span>
                <span className="text-slate-600 text-sm ml-1">+gst</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Studio Shoot</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-slate-500 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Shoot</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 1 - 2.5 hrs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">2 Look/Costume Changes</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-slate-500 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Props</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">10-15 edited photographs</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-slate-500 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hard Copies</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Optional ₹3,500 for 1 look, additional ₹1,500</span>
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
              <CardTitle className="text-primary text-xl">TINY TOTS - STANDARD</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Premium coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹11,850</span>
                <span className="text-slate-600 text-sm ml-1">+gst</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Studio Shoot</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-slate-500 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Shoot</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 2 - 5 hrs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">3 to 5 Look/Costume Changes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Props: charges/set applicable</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">20+ edited photographs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hard Copies included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup: Optional ₹3,500 for 2 looks, additional ₹1,500</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">
                    <a href="tel:+919632288815" className="text-primary underline">Call Us</a>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
              <CardTitle className="text-primary text-xl">CUSTOMISED</CardTitle>
              <CardDescription className="text-slate-600 pt-1">Complete coverage</CardDescription>
              <div className="mt-4 mb-1">
                <span className="text-3xl font-light text-[#ea384c]">₹19,500</span>
                <span className="text-slate-600 text-sm ml-1">+gst</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Studio Shoot</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Outdoor Shoot (Optional)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Duration: 1 - 2 days / sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">3 to 5 Look/Costume Changes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">20+ edited photographs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Hard Copies included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Makeup included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Concept & Planning included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">
                    <a href="mailto:candidcapture4@gmail.com" className="text-primary underline">Discuss your requirements</a>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <div className="mt-6 bg-slate-50 p-6 rounded-lg border border-slate-100">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Birthdays Parties, & Other Events</h3>
          <p className="text-slate-600 mb-4">
            We do know from experience that no two clients have the same set of requirements. The customised packages we offer is specific to your requirements. The final cost is dependant on several factors including but not limited to the dates of your event (booking us early also allows us offer you a good deal), the size of our team covering your event, the type of prints / albums that you choose, duration of the shoot, timelines of deliveries etc.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Newborn sessions are best scheduled within the first 5-14 days after birth</li>
            <li>A 50% deposit is required to secure your booking</li>
            <li>Additional digital images can be purchased at ₹1,000 per image</li>
            <li>Travel fees may apply for at-home sessions</li>
            <li>All packages include pre-session consultation</li>
          </ul>
        </div>

        <BookingCTA 
          title="Book Your Newborn Photography Session" 
          serviceType="precious moments"
        />
      </div>
    </div>
  );
};

export default NewBornPackage;
