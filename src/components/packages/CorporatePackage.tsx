
import React from 'react';
import { Check, X, Info, Star, Crown, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import PackageImageCarousel from '../packages/PackageImageCarousel';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const CorporatePackage: React.FC = () => {
  // Define corporate package images for the carousel with updated professional photos
  const corporateImages = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png'
  ];
  
  return (
    <div className="package-details bg-white">
      {/* Hero section with premium styling */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] opacity-40"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1F2C] leading-tight">
              Corporate Headshot <span className="text-[#ea384c]">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional portraits that elevate your brand and showcase your team's personality
            </p>
          </div>
        </div>
      </div>

      {/* Add the image carousel component with enhanced styling */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <PackageImageCarousel images={corporateImages} altPrefix="Corporate Headshot" />
      </div>
      
      <div className="space-y-12 max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-[#1A1F2C]">Corporate Headshot Packages</h3>
          <p className="mb-6 text-slate-600 text-lg">
            Professional headshots for business profiles, websites, and marketing materials. Choose the package 
            that best suits your team's requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* BASIC PACKAGE */}
          <Card className="overflow-hidden border-none hover:shadow-xl transition-all duration-300 bg-white rounded-2xl shadow-md">
            <CardHeader className="bg-gradient-to-r from-white to-slate-50 p-8 text-center relative">
              <div className="absolute top-6 right-6">
                <Star className="h-5 w-5 text-[#ea384c]" />
              </div>
              <h4 className="text-2xl uppercase font-bold tracking-wide text-slate-800 mb-2">Basic</h4>
              <p className="text-sm uppercase tracking-wider font-medium text-slate-600">HEADSHOTS FOR PROFESSIONALS</p>
              
              <div className="mt-6 space-y-3">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-slate-800">₹995</span>
                    <span className="text-sm text-slate-500">+GST per image</span>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 bg-gradient-to-r from-[#ea384c] to-[#ea384c]/90 text-white rounded-full px-6 py-3 text-sm hover:shadow-lg transition-all w-full font-medium">
                Schedule Online
              </button>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Location:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Your Premises
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Costume Changes:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Consultation:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600">10-15 mins</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* STANDARD PACKAGE */}
          <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 relative bg-white rounded-2xl scale-105 z-10">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-6 py-1.5 bg-gradient-to-r from-[#ea384c] to-[#ea384c]/80 text-white text-sm rounded-full font-semibold shadow-md">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] p-8 text-center relative">
              <div className="absolute top-6 right-6">
                <Crown className="h-6 w-6 text-[#ea384c]" />
              </div>
              <h4 className="text-2xl uppercase font-bold tracking-wide text-slate-800 mb-2">Standard</h4>
              <p className="text-sm uppercase tracking-wider font-medium text-slate-600">EXECUTIVE HEADSHOT SESSION</p>
              
              <div className="mt-6 space-y-3">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#ea384c]/10 px-3 py-1 rounded-full text-[#ea384c] font-medium">OFFER!!</span>
                    <span className="text-3xl font-bold text-slate-800">₹5,275</span>
                    <span className="text-sm text-slate-500">+GST</span>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 bg-gradient-to-r from-[#ea384c] to-[#ea384c]/90 text-white rounded-full px-6 py-3 text-sm hover:shadow-lg transition-all w-full font-medium">
                Book Your Appointment
              </button>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Location:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Your Premises
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outdoor Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Costume Changes:</span>
                  <span className="text-sm text-slate-600">Yes (upto 2 changes)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Consultation:</span>
                  <span className="text-sm text-slate-600">Yes (basic 10-15 mins)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600">30-45 mins</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Deliverables:</span>
                  <span className="text-sm text-slate-600">10 fully edited images</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Additional Images:</span>
                  <span className="text-sm text-slate-600">₹500/image</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SIGNATURE PACKAGE */}
          <Card className="overflow-hidden border-none hover:shadow-xl transition-all duration-300 bg-white rounded-2xl shadow-md">
            <CardHeader className="bg-gradient-to-r from-white to-slate-50 p-8 text-center relative">
              <div className="absolute top-6 right-6">
                <Sparkles className="h-5 w-5 text-[#ea384c]" />
              </div>
              <h4 className="text-2xl uppercase font-bold tracking-wide text-slate-800 mb-2">Signature</h4>
              <p className="text-sm uppercase tracking-wider font-medium text-slate-600">CUSTOMISED SHOOTS FOR ORGANISATIONS</p>
              
              <div className="mt-6">
                <div className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] p-6 rounded-lg shadow-sm">
                  <div className="text-xl font-bold text-slate-800">Starts</div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-3xl font-bold text-[#ea384c]">₹12,000</span>
                    <span className="text-sm text-slate-500">+GST</span>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 bg-gradient-to-r from-[#ea384c] to-[#ea384c]/90 text-white rounded-full px-6 py-3 text-sm hover:shadow-lg transition-all w-full font-medium">
                Let us plan everything
              </button>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Location:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Your Premises
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outstation:</span>
                  <span className="text-sm text-slate-600">Travel charges applicable</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Costume Changes:</span>
                  <span className="text-sm text-slate-600">Yes (optional)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Timing:</span>
                  <span className="text-sm text-slate-600">4 / sessions</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600">~15-20 minutes per person</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600">Optional</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Deliverables:</span>
                  <span className="text-sm text-slate-600">Customisable</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Planning/Reece:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Included
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-16" />
        
        {/* Frequently Asked Questions Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-10 text-center text-[#1A1F2C]">Frequently Asked Questions</h3>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold mb-4 text-[#1A1F2C]">Posing for Corporate Headshots</h4>
              <p className="text-slate-700 mb-3">
                We making posing super simple, we do try to make you feel comfortable and get to know you and what you do before we click any picture.
              </p>
              <p className="text-slate-700 mb-3">
                Our approach to portraits is retaining elements of who you are and how your peers/subordinates see you (OR how you want to be viewed as by your clients, bosses, employees etc)
              </p>
              <p className="text-slate-700">
                We do shoot every pose with several subtle variations which you can not just use a s Social media profile picture on LinkedIn but also to use on meeting apps for calls on Zoom, Teams etc.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold mb-4 text-[#1A1F2C]">Styling for Corporate Headshots</h4>
              <p className="text-slate-700 mb-3">
                We keep styling natural & minimalistic and include it as a variation only if your profession/role calls for it.
              </p>
              <p className="text-slate-700">
                Do take some time to discuss your role/profession with us (WhatsApp preferred, as it allows us to respond during micro breaks in our shoots. We will call back/schedule a call if we feel discussing over a call would be faster).
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold mb-4 text-[#1A1F2C]">Retouching / Editing</h4>
              <p className="text-slate-700 mb-3">
                We take the extra effort to keep pictures as natural as possible. In fact our colour calibrated workflow ensues super accurate colours and skin tones.
              </p>
              <p className="text-slate-700 mb-3">
                Most of our tricks is with how we use our extended collection of light modifiers at our studio (for example: soft light instead of smoothening the skin).
                We balance your skin tone with a suitable brightness level/colour for the background such that the need for modifying the skin tones is eliminated.
              </p>
              <p className="text-slate-700 mb-3">
                We believe authenticity and a sense of realness has the maximum impact for Professional/Corporate Portraits.
              </p>
              <p className="text-slate-700 mb-3">
                Our editing is mostly limited to removing blemishes (pimples, stray hairs, specks of dust/fibres on clothing etc) without giving an appearance of the image being edited.
              </p>
              <p className="text-slate-700">
                Don't believe what we say/unsure. Do take some time to view our extensive portfolio of Corporate Headshots (several of which have now appeared in print and other media)
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold mb-4 text-[#1A1F2C]">Costume Rentals, What to wear etc...</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Corporate Headshots is about perfection and suits fit best when tailor made by a master for your fitting. Hence we do not stock business attire for Corporate Headshots.</li>
                <li>We do have smaller props like a good pen, squares and a few neckties, but we do recommend that you carry your own attire and props to maintain a look that is unique to you.</li>
                <li>Small imperfections in your attire are OK, we can usually clone the area from a clear spot while maintaining an unedited look.</li>
                <li>For choice of colours, do give us a call/message us over WhatsApp. Selection of colours, attire and some profession related props are dependent on your profession and your role. (for example: we avoid using a Stethoscope while shooting a surgeon/Orthopaedist, while it is perfect for a physician)</li>
                <li>Some colours like red could suggest aggressiveness, and hence it is better you do discuss with us when in doubt.</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold mb-4 text-[#1A1F2C]">Tie / Knot - How to Videos</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <a href="https://www.youtube.com/watch?v=flONEDCEGNQ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.youtube.com/watch?v=flONEDCEGNQ
                  </a>
                  <span className="text-slate-500 ml-2">(Shot through Mirror / May be easier for some)</span>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=7AbCQghx0R0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.youtube.com/watch?v=7AbCQghx0R0
                  </a>
                  <span className="text-slate-500 ml-2">(Shot through Mirror / May be easier for some)</span>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=7AbCQghx0R0&list=RDCMUCzmT0dA02GW90IvIQsJaCXQ&start_radio=1&rv=7AbCQghx0R0&t=8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.youtube.com/watch?v=7AbCQghx0R0&list=RDCMUCzmT0dA02GW90IvIQsJaCXQ&start_radio=1&rv=7AbCQghx0R0&t=8
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] p-10 rounded-2xl mt-12 text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-5 text-[#1A1F2C]">Ready to elevate your team's professional image?</h3>
          <p className="text-slate-700 mb-8 text-lg max-w-2xl mx-auto">
            Contact us to schedule a consultation and discuss your specific corporate photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="tel:+919632288815" className="inline-flex items-center justify-center gap-2 bg-[#ea384c] text-white px-8 py-3.5 rounded-full hover:bg-[#ea384c]/90 transition-all hover:shadow-md font-medium text-lg">
              Call Us: +91 96322 88815
            </a>
            <a href="mailto:candidcapture4@gmail.com" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#ea384c] text-[#ea384c] px-8 py-3.5 rounded-full hover:bg-[#ea384c]/5 transition-all font-medium text-lg">
              Email: candidcapture4@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePackage;
