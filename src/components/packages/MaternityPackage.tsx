
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Camera, Clock, Image, CheckCircle2, Star, Medal, Award, ThumbsUp } from 'lucide-react';
import BookingCTA from './BookingCTA';
import { Button } from '@/components/ui/button';
import PackageImageCarousel from './PackageImageCarousel';
import { motion } from 'framer-motion';

const MaternityPackage: React.FC = () => {
  const packageImages = [
    "/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png",
    "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
    "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
    "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png"
  ];

  return (
    <div className="package-details">
      <div className="mb-10">
        <PackageImageCarousel images={packageImages} altPrefix="Maternity Photography" />
      </div>
      
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-primary/5 to-white p-6 rounded-xl border border-primary/10 shadow-sm">
          <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">Maternity Photography</h3>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Our maternity photography sessions are designed to celebrate and capture the beauty of your pregnancy journey. 
            We offer a variety of packages to suit your needs and budget, ensuring you have beautiful memories to cherish for a lifetime.
          </p>
          <p className="mb-2 text-slate-600 leading-relaxed">
            All sessions include professional editing, online gallery delivery, and a pre-session consultation to plan your perfect shoot.
          </p>
        </div>

        {/* Package cards in a flex row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MINI Session */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden group h-full">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-3 relative">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#ea384c]/10 rounded-full blur-xl group-hover:bg-[#ea384c]/20 transition-all duration-500"></div>
                <CardTitle className="text-primary text-xl font-serif">MINI</CardTitle>
                <div className="mt-2 mb-1 flex flex-col">
                  <span className="text-sm text-slate-600 line-through">Regular Price ₹8,490/-</span>
                  <span className="text-xl font-medium text-[#ea384c]">Special OFFER ₹4,949 +GST</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Clock className="h-4 w-4 text-[#ea384c]" />
                    <p>60-90 Minute Session</p>
                  </div>
                  <ul className="space-y-2">
                    {['Studio Shoot: Yes', 'Outdoor Shoot: No', 'Max 2 costume changes^', 'Basic props collection', '12 full res photographs', 'Additional images: ₹375/image*'].map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="mt-0.5 mr-2 bg-primary/5 p-1 rounded-full">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 flex justify-center">
                    <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90 shadow-md relative overflow-hidden group w-full">
                      <span className="absolute inset-0 w-3 bg-white/20 skew-x-[-20deg] transform -translate-x-10 group-hover:translate-x-[400px] transition-all duration-1000 ease-out"></span>
                      <span className="relative">Check Availability</span>
                    </Button>
                  </div>
                  <div className="mt-3 text-xs text-slate-500 border-t border-slate-100 pt-3">
                    <p>*Progressively decreases with more images</p>
                    <p>^Costumes not provided</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CLASSIC Session */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:-mt-4 md:-mb-4 z-10"
          >
            <Card className="border-primary/20 shadow-xl hover:shadow-2xl relative transition-all duration-300 overflow-hidden group h-full scale-105">
              <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-4 py-1 bg-gradient-to-r from-[#ea384c] to-[#fb6340] text-white text-sm rounded-full font-medium shadow-lg z-10">
                Most Popular
              </div>
              <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-3 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#fb6340]/20 rounded-full blur-xl group-hover:bg-[#fb6340]/30 transition-all duration-500"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#ea384c]/20 rounded-full blur-xl group-hover:bg-[#ea384c]/30 transition-all duration-500"></div>
                <CardTitle className="text-primary text-xl font-serif relative z-10">CLASSIC</CardTitle>
                <div className="mt-2 mb-1 flex flex-col relative z-10">
                  <span className="text-sm text-slate-600 line-through">Regular Price ₹14,199/-</span>
                  <span className="text-xl font-medium text-[#ea384c]">HAPPY Mom's OFFER ₹8,888 +GST</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Clock className="h-4 w-4 text-[#ea384c]" />
                    <p>150-180 Minute Session</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Studio Shoot: Yes', 
                      'Outdoor Shoot: No', 
                      'Look Costumes Changes: Max 4', 
                      'Props: Basic + Custom (may be chargable)', 
                      '25 full res photographs', 
                      'Additional images: ₹350/image*',
                      'Hard Copies: Yes, starting ₹25/- per print',
                      'Makeup: Optional, starting ₹4,750/-'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="mt-0.5 mr-2 bg-primary/5 p-1 rounded-full">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 flex justify-center">
                    <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90 shadow-md relative overflow-hidden group w-full">
                      <span className="absolute inset-0 w-3 bg-white/20 skew-x-[-20deg] transform -translate-x-10 group-hover:translate-x-[400px] transition-all duration-1000 ease-out"></span>
                      <span className="relative">Schedule Online</span>
                    </Button>
                  </div>
                  <div className="mt-3 text-xs text-slate-500 border-t border-slate-100 pt-3">
                    <p>*Progressively decreases with more images</p>
                    <p>^Costumes not provided</p>
                    <p>Creative Planning: Basic Mood-board</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* SIGNATURE Session */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden group h-full">
              <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-3 relative">
                <div className="absolute -left-12 -top-12 w-32 h-32 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
                <CardTitle className="text-primary text-xl font-serif">SIGNATURE</CardTitle>
                <div className="mt-2 mb-1">
                  <span className="text-xl font-medium text-[#ea384c]">Prices start ₹37,290 +GST*</span>
                  <p className="text-xs text-slate-600 mt-1">*Variable based on Location/Styling/Props/Costumes</p>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Clock className="h-4 w-4 text-[#ea384c]" />
                    <p>3-6 Hour Session</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Studio Shoot: Yes', 
                      'Outdoor Shoot: Yes, optional', 
                      'Look Costumes Changes: Max 4', 
                      'Props: At actuals as per concept', 
                      '35 full res photographs',
                      'Location/Prop Charges: At actuals',
                      'Makeup/hair: 2 Looks included',
                      'Creative Planning: Mood-board, Stylist'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="mt-0.5 mr-2 bg-primary/5 p-1 rounded-full">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 flex justify-center">
                    <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90 shadow-md relative overflow-hidden group w-full">
                      <span className="absolute inset-0 w-3 bg-white/20 skew-x-[-20deg] transform -translate-x-10 group-hover:translate-x-[400px] transition-all duration-1000 ease-out"></span>
                      <span className="relative">Free Consultation</span>
                    </Button>
                  </div>
                  <div className="mt-3 text-xs text-slate-500 border-t border-slate-100 pt-3">
                    <p>*Progressively decreases with more images</p>
                    <p>Cost for composites starting at ₹1,550/image</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-semibold text-primary">Additional Information</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-lg shadow-sm border border-primary/10">
              <h4 className="text-lg font-medium mb-3 text-primary flex items-center">
                <Star className="h-5 w-5 text-[#ea384c] mr-2" /> Add-On Services
              </h4>
              <ul className="space-y-3 pl-5 list-disc text-slate-600">
                <li>Hair and makeup styling: ₹4,000</li>
                <li>Additional digital images: ₹750 per image</li>
                <li>Partner/family add-on: ₹2,500</li>
                <li>Additional location: ₹3,000</li>
                <li>8×10 matted print: ₹2,000</li>
                <li>Custom photo album: Starting at ₹8,000</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-lg shadow-sm border border-primary/10">
              <h4 className="text-lg font-medium mb-3 text-primary flex items-center">
                <Clock className="h-5 w-5 text-[#ea384c] mr-2" /> When to Book
              </h4>
              <p className="text-slate-600 mb-3 leading-relaxed">
                The ideal time for maternity photos is between 28-34 weeks of pregnancy when your bump is beautifully visible but you're still comfortable moving around.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We recommend booking your session at least 1-2 months in advance to ensure availability, especially during peak seasons.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/5 to-white p-6 rounded-xl border border-primary/10 shadow-sm mt-6">
            <h4 className="text-lg font-medium mb-5 text-primary">What to Expect</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300">
                <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                  <div className="p-2 bg-[#ea384c]/10 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-[#ea384c]" />
                  </div>
                  Before Your Session
                </h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We'll have a consultation to discuss your vision, outfit choices, and location preferences. We'll provide guidance on how to prepare for your session.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300">
                <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                  <div className="p-2 bg-[#ea384c]/10 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-[#ea384c]" />
                  </div>
                  During Your Session
                </h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our experienced photographers will guide you through natural poses that highlight your pregnancy. We focus on creating a comfortable, enjoyable experience.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300">
                <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                  <div className="p-2 bg-[#ea384c]/10 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-[#ea384c]" />
                  </div>
                  After Your Session
                </h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You'll receive your professionally edited images in an online gallery within 2 weeks. From there, you can download your included images and order prints or albums.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#ea384c]/10 to-[#fb6340]/10 p-8 rounded-xl border border-[#ea384c]/20 shadow-md mt-6">
          <BookingCTA 
            title="Capture Your Beautiful Pregnancy Journey" 
            serviceType="maternity photography session"
          />
        </div>
      </div>
    </div>
  );
};

export default MaternityPackage;
