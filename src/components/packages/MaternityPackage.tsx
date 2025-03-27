import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Camera, Clock, Image, CheckCircle2 } from 'lucide-react';
import BookingCTA from './BookingCTA';
import { Button } from '@/components/ui/button';

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
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Maternity Photography</h3>
          <p className="mb-4 text-slate-600">
            Our maternity photography sessions are designed to celebrate and capture the beauty of your pregnancy journey. 
            We offer a variety of packages to suit your needs and budget, ensuring you have beautiful memories to cherish for a lifetime.
          </p>
          <p className="mb-6 text-slate-600">
            All sessions include professional editing, online gallery delivery, and a pre-session consultation to plan your perfect shoot.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Mini Session */}
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-3">
              <CardTitle className="text-primary text-xl">MINI</CardTitle>
              <div className="mt-3 mb-1 flex flex-col">
                <span className="text-sm text-slate-600 line-through">Regular Price ₹8,490/-</span>
                <span className="text-2xl font-medium text-[#ea384c]">Special OFFER ₹4,949 +GST</span>
              </div>
            </CardHeader>
            <CardContent className="pt-5">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-slate-700 font-medium">60-90 Minute Session</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">Studio Shoot: Yes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">Outdoor Shoot: No</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">Max 2 costume changes^</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">Basic props collection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">12 full res photographs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">Additional images: ₹375/image*</span>
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="text-slate-600 mb-4">
                    Perfect for those wanting a quick session to document this special time. Studio time included in this package is 90 mins with shoot time of approximately 45-60 mins.
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                        Sample-1
                      </Button>
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                        Sample-2
                      </Button>
                    </div>
                    <div className="mt-2">
                      <Button size="sm" className="bg-[#ea384c] hover:bg-[#ea384c]/90">
                        Check Availability
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-slate-500 space-y-1">
                    <p>*Progressively decreases, i.e. more images means lesser per image cost</p>
                    <p>^Note: This is a base plan and costumes & option for makeup at the studio are not provided.</p>
                    <p>Hard Copies: No (full res soft copies only)</p>
                    <p>Makeup: Not Included</p>
                    <p>Prior Creative Planning: No</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Standard Session */}
          <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-3">
              <CardTitle className="text-primary text-xl">Standard Maternity Session</CardTitle>
              <div className="mt-3 mb-1">
                <span className="text-2xl font-medium text-[#ea384c]">₹15,000</span>
              </div>
            </CardHeader>
            <CardContent className="pt-5">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-slate-700 font-medium">1 Hour Session</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">2 outfits</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">1-2 locations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">15 digital images</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">Partner photos included</span>
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="text-slate-600 mb-4">
                    Our most popular option that provides enough time to capture a variety of beautiful maternity portraits. Includes both indoor and outdoor options if desired.
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      View Gallery
                    </Button>
                    <Button size="sm" className="bg-[#ea384c] hover:bg-[#ea384c]/90">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Luxury Session */}
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-3">
              <CardTitle className="text-primary text-xl">Luxury Maternity Session</CardTitle>
              <div className="mt-3 mb-1">
                <span className="text-2xl font-medium text-[#ea384c]">₹25,000</span>
              </div>
            </CardHeader>
            <CardContent className="pt-5">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-slate-700 font-medium">2 Hour Session</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">3-4 outfits</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">Multiple locations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">25 digital images</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">Hair and makeup included</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">8×10 matted print</span>
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="text-slate-600 mb-4">
                    The ultimate maternity experience with professional hair and makeup, multiple outfit changes, and a variety of stunning locations. Perfect for the mom-to-be who wants the complete luxury package.
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      View Gallery
                    </Button>
                    <Button size="sm" className="bg-[#ea384c] hover:bg-[#ea384c]/90">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#333333]">Additional Information</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-3 text-primary">Add-On Services</h4>
              <ul className="space-y-2 pl-5 list-disc text-slate-600">
                <li>Hair and makeup styling: ₹4,000</li>
                <li>Additional digital images: ₹750 per image</li>
                <li>Partner/family add-on: ₹2,500</li>
                <li>Additional location: ₹3,000</li>
                <li>8×10 matted print: ₹2,000</li>
                <li>Custom photo album: Starting at ₹8,000</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3 text-primary">When to Book</h4>
              <p className="text-slate-600 mb-3">
                The ideal time for maternity photos is between 28-34 weeks of pregnancy when your bump is beautifully visible but you're still comfortable moving around.
              </p>
              <p className="text-slate-600">
                We recommend booking your session at least 1-2 months in advance to ensure availability, especially during peak seasons.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3 text-primary">What to Expect</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h5 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#ea384c]" /> Before Your Session
                </h5>
                <p className="text-slate-600 text-sm">
                  We'll have a consultation to discuss your vision, outfit choices, and location preferences. We'll provide guidance on how to prepare for your session.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h5 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#ea384c]" /> During Your Session
                </h5>
                <p className="text-slate-600 text-sm">
                  Our experienced photographers will guide you through natural poses that highlight your pregnancy. We focus on creating a comfortable, enjoyable experience.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h5 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#ea384c]" /> After Your Session
                </h5>
                <p className="text-slate-600 text-sm">
                  You'll receive your professionally edited images in an online gallery within 2 weeks. From there, you can download your included images and order prints or albums.
                </p>
              </div>
            </div>
          </div>
        </div>

        <BookingCTA 
          title="Capture Your Beautiful Pregnancy Journey" 
          serviceType="maternity photography session"
        />
      </div>
    </div>
  );
};

export default MaternityPackage;
