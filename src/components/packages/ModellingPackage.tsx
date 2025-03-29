
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Info } from 'lucide-react';
import BookingCTA from './BookingCTA';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4 text-[#333333]">Modelling FAQ's</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="do-dont">
              <AccordionTrigger className="text-[#333333] font-medium">Do's & Don'ts before your Portfolio Shoot</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-slate-600 pl-2">
                  <li>• A portfolio is valid until it is a close representation of your current look, hence plan any makeovers before your Portfolio Shoot</li>
                  <li>• Sleep, get enough sleep in the days prior to any shoot (an extra hour of nap during the day / night's sleep should do)</li>
                  <li>• Work with your photographer or team (MUAH, Stylist etc) to decide on the looks that suit you well</li>
                  <li>• Chill !! Be Relaxed, Have fun during your shoot. (NOT A PARTY PLEASE)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="how-to-become">
              <AccordionTrigger className="text-[#333333] font-medium">How to become a Model in India?</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-slate-600 pl-2">
                  <li>• A Portfolio is your degree/certificate that showcases your abilities in modelling/acting abilities and forms the basis for your entry into the world of modelling/acting</li>
                  <li>• Its a myth only the fit/young can get into modelling, in fact people of any age/build etc can get into modelling. You just need to be realistic about the genre/roles that you can get into</li>
                  <li>• Work with a good photographer on creating a good portfolio that showcases your characteristics (Ex. facial structures, expressions, height, build etc)</li>
                  <li>• Remember it is you who has to stand out in your portfolio (and not the location/surroundings)</li>
                  <li>• An exception to the above point is how well you can carry off products, hence you can work with stylists/art directors during the time of updating your portfolio</li>
                  <li>• The portfolio forms the basis on which you can then reach out to Casting Agencies/Directors</li>
                  <li>• For better opportunities it is also essential to have a short video showcasing your posing/modelling abilities (a showreel for actors)</li>
                  <li>• Casting Agencies expect your portfolio to be realistic to your real/actual/current look(s)</li>
                  <li>• You can then register on portfolio website(s) where you can upload photos from your portfolio</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="what-to-do-after">
              <AccordionTrigger className="text-[#333333] font-medium">What to do after a Portfolio Shoot?</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-slate-600 pl-2">
                  <li>• Ensure that you have an exceptionally good Portfolio and realistic (Ex. Avoid images with unrealistic body shaping, skin colour changes etc.)</li>
                  <li>• Work on your grooming, Modelling is all about how you carry yourself apart from your looks</li>
                  <li>• Good grooming helps you make an impactful first impression during auditions</li>
                  <li>• Share your Portfolio with Agencies (look for ones that provide you with good grooming support, or join a grooming course)</li>
                  <li>• Continuously evaluate yourself (in terms of your portfolio & grooming) until you start getting selected at auditions / projects</li>
                  <li>• Give time, keep trying (do have a parallel profession to sustain you during the initial parts of your career)</li>
                  <li>• Meet the right people, network!! Be Professional, expect professionalism</li>
                  <li>• It is quite common to run into people who just boast about their credentials/connections. Always be realistic about what is being promised. Ex. Anyone asking for a payment/favour in return for being selected in an audition is a serious red-flag. Stay away from such people</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mt-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-blue-700 font-medium mb-2">Note:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• A portfolio is valid until it is a close representation of your current look (say almost a year, more if you have maintained your current look)</li>
                  <li>• An exception is when you change your look (cut your hair, gain/lose weight abs etc), in which case it could as as short as a few weeks/days</li>
                  <li>• Remember to have any makeovers before your Portfolio Shoot</li>
                  <li>• Additionally, you may choose to upgrade your portfolio to better showcase your modelling abilities (in posing etc., you may be able to additionally add select photographs from recent shoots for a short while)</li>
                </ul>
              </div>
            </div>
          </div>
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
