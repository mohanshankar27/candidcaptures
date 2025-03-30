
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Check, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import BookingCTA from './BookingCTA';
import PackageImageCarousel from './PackageImageCarousel';

const NewBornPackage: React.FC = () => {
  const navigate = useNavigate();

  // Images for the newborn package carousel
  const newbornImages = [
    '/lovable-uploads/6066b255-5f3a-4f05-b2b7-f144098189da.png', // New baby in red wrap image
    '/lovable-uploads/6b3d57da-a4b7-4ab6-8282-a666fc5400b4.png', // Baby chef image
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png', // Original newborn image
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png', // Toddler image
    '/lovable-uploads/fe26bc26-2a66-4dfb-aeb8-db5490eeaea9.png', // New girl in blue dress image
    '/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png'  // Family photo
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
          <PackageImageCarousel images={newbornImages} />
        </div>
        
        <div className="md:col-span-7 space-y-6">
          <div>
            <h2 className="text-2xl font-medium mb-2 text-primary">New Born & Children Photography</h2>
            <p className="text-slate-600">Capture those precious early moments with our professional newborn and children photography packages. Our experienced photographers create gentle, timeless portraits in a safe and comfortable setting.</p>
          </div>
          
          <Separator />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-4 border-primary/10 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium">Essential Package</h3>
                <Badge className="bg-primary/90 hover:bg-primary">₹8,560</Badge>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">2-hour photo session</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">20 digital edited images</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Basic props and setups</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">1 outfit change</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-4 border-primary/10 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute -right-8 -top-8 bg-amber-500 w-20 h-20 rotate-45 z-0"></div>
              <div className="flex justify-between items-start mb-3 relative z-10">
                <h3 className="text-lg font-medium">Premium Package</h3>
                <Badge className="bg-amber-500 hover:bg-amber-600">₹12,999</Badge>
              </div>
              <ul className="space-y-2 relative z-10">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">3-hour photo session</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">35 digital edited images</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Premium props and setups</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">2-3 outfit changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Family poses included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Photo album (10 pages)</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <Card className="p-4 border-primary/10 bg-slate-50">
            <div className="flex gap-2 mb-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Deluxe Package</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">Our most comprehensive newborn package includes a 4-hour session, 50+ edited images, multiple premium setups, 3-4 outfit changes, sibling & family photos, and a premium photo album. Contact us for pricing.</p>
            <Button 
              size="sm" 
              variant="outline" 
              className="mt-2"
              onClick={() => navigate('/contact')}
            >
              Inquire for Details
            </Button>
          </Card>
        </div>
      </div>
      
      <Separator />
      
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Additional Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Newborn Sessions (0-2 weeks)</h4>
            <ul className="space-y-1.5">
              <li className="text-sm flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Best scheduled 5-12 days after birth</span>
              </li>
              <li className="text-sm flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Comfortable, temperature-controlled environment</span>
              </li>
              <li className="text-sm flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Specialized posing and safety techniques</span>
              </li>
              <li className="text-sm flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Variety of wraps, headbands, and accessories</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Children Sessions (3 months - 5 years)</h4>
            <ul className="space-y-1.5">
              <li className="text-sm flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Milestone sessions (3, 6, 9, 12 months, etc.)</span>
              </li>
              <li className="text-sm flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Play-based photography for natural expressions</span>
              </li>
              <li className="text-sm flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Themed mini-sessions available seasonally</span>
              </li>
              <li className="text-sm flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>First birthday cake smash photography</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <BookingCTA 
        title="Ready to capture those precious moments?"
        description="Book your newborn or children's photography session today. We recommend booking newborn sessions during your pregnancy to secure your spot."
        ctaText="Book Your Session"
      />
    </div>
  );
};

export default NewBornPackage;
