
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const PricingContent = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Photography Pricing</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Professional photography packages tailored to capture your special moments with exceptional quality and creativity.
        </p>
      </div>

      <Tabs defaultValue="wedding" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
          <TabsTrigger value="wedding">Wedding</TabsTrigger>
          <TabsTrigger value="pre-wedding">Pre-Wedding</TabsTrigger>
          <TabsTrigger value="corporate">Corporate</TabsTrigger>
        </TabsList>
        
        <TabsContent value="wedding" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-primary">Wedding Photography Packages</h2>
            <p className="text-slate-600 mt-2">
              Premium wedding photography packages to capture your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Silver Package */}
            <Card className="border-primary/10 overflow-hidden hover:shadow-lg transition-all">
              <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
                <CardTitle className="text-2xl text-primary">Silver</CardTitle>
                <CardDescription>Perfect for intimate weddings</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-semibold">₹55,000</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>1 Premium Photographer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Pre-Wedding Consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>8-Hour Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>400+ Edited Images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Online Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 shrink-0 mr-2 mt-0.5" />
                    <span className="text-slate-400">Drone Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 shrink-0 mr-2 mt-0.5" />
                    <span className="text-slate-400">Wedding Album</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Gold Package */}
            <Card className="border-primary/20 overflow-hidden shadow-md hover:shadow-xl relative transition-all">
              <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-4 py-1 bg-primary text-white text-sm rounded-full font-medium">
                Most Popular
              </div>
              <CardHeader className="bg-gradient-to-b from-primary/10 to-white pb-4">
                <CardTitle className="text-2xl text-primary">Gold</CardTitle>
                <CardDescription>Best value for most weddings</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-semibold">₹85,000</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>2 Premium Photographers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Pre-Wedding Consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>10-Hour Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>600+ Edited Images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Online Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Drone Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Premium Wedding Album</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Platinum Package */}
            <Card className="border-primary/10 overflow-hidden hover:shadow-lg transition-all">
              <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
                <CardTitle className="text-2xl text-primary">Platinum</CardTitle>
                <CardDescription>Luxury premium experience</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-semibold">₹1,25,000</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>3 Premium Photographers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Pre-Wedding Consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Full-Day Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>800+ Edited Images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Online Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Drone Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Luxury Wedding Album</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Parent Albums (2)</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-12" />

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-800 text-center">Wedding Photography Details</h3>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Features</TableHead>
                        <TableHead>Silver</TableHead>
                        <TableHead>Gold</TableHead>
                        <TableHead>Platinum</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Photographers</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Coverage Hours</TableCell>
                        <TableCell>8 Hours</TableCell>
                        <TableCell>10 Hours</TableCell>
                        <TableCell>Full Day</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Edited Photos</TableCell>
                        <TableCell>400+</TableCell>
                        <TableCell>600+</TableCell>
                        <TableCell>800+</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Photo Album</TableCell>
                        <TableCell><X className="h-4 w-4 text-red-500" /></TableCell>
                        <TableCell>Premium (30 Pages)</TableCell>
                        <TableCell>Luxury (40 Pages)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Drone Coverage</TableCell>
                        <TableCell><X className="h-4 w-4 text-red-500" /></TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Engagement Session</TableCell>
                        <TableCell><X className="h-4 w-4 text-red-500" /></TableCell>
                        <TableCell>1 Hour</TableCell>
                        <TableCell>2 Hours</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Online Gallery</TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Parent Albums</TableCell>
                        <TableCell><X className="h-4 w-4 text-red-500" /></TableCell>
                        <TableCell><X className="h-4 w-4 text-red-500" /></TableCell>
                        <TableCell>2 Included</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Additional Add-ons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span>Extra Coverage Hour</span>
                        <span className="font-medium">₹5,000/hour</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span>Additional Photographer</span>
                        <span className="font-medium">₹10,000/day</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span>Engagement Session</span>
                        <span className="font-medium">₹15,000</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span>Premium Album</span>
                        <span className="font-medium">₹12,000</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span>Parent Albums (each)</span>
                        <span className="font-medium">₹8,000</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Drone Coverage</span>
                        <span className="font-medium">₹10,000</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Booking Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      A 30% booking fee is required to secure your date, with the balance due two weeks before the wedding.
                    </p>
                    <p>
                      Travel fees may apply for destinations beyond 50km from our studio location.
                    </p>
                    <p>
                      For availability and to discuss your specific requirements, please contact us:
                    </p>
                    <div className="pt-2">
                      <a href="tel:+919632288815" className="text-primary hover:underline font-medium block">
                        Phone: +91 96322 88815
                      </a>
                      <a href="mailto:candidcapture4@gmail.com" className="text-primary hover:underline font-medium">
                        Email: candidcapture4@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pre-wedding" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-primary">Pre-Wedding Photography Packages</h2>
            <p className="text-slate-600 mt-2">
              Capture your love story before the big day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Pre-Wedding Package */}
            <Card className="border-primary/10 overflow-hidden hover:shadow-lg transition-all">
              <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
                <CardTitle className="text-2xl text-primary">Basic</CardTitle>
                <CardDescription>Simple pre-wedding shoot</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-semibold">₹25,000</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>1 Photographer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>3 Hours Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>1 Location</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>100+ Edited Images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Online Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 shrink-0 mr-2 mt-0.5" />
                    <span className="text-slate-400">Outfit Changes</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Standard Pre-Wedding Package */}
            <Card className="border-primary/20 overflow-hidden shadow-md hover:shadow-xl relative transition-all">
              <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-4 py-1 bg-primary text-white text-sm rounded-full font-medium">
                Most Popular
              </div>
              <CardHeader className="bg-gradient-to-b from-primary/10 to-white pb-4">
                <CardTitle className="text-2xl text-primary">Standard</CardTitle>
                <CardDescription>Complete pre-wedding experience</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-semibold">₹35,000</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>1 Photographer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>4-5 Hours Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>2 Locations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>150+ Edited Images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Online Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>2 Outfit Changes</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Premium Pre-Wedding Package */}
            <Card className="border-primary/10 overflow-hidden hover:shadow-lg transition-all">
              <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
                <CardTitle className="text-2xl text-primary">Premium</CardTitle>
                <CardDescription>Luxury pre-wedding shoot</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-semibold">₹45,000</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>2 Photographers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Full-Day Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>3 Locations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>200+ Edited Images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Online Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>3 Outfit Changes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Photo Album Included</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="corporate" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-primary">Corporate Photography Packages</h2>
            <p className="text-slate-600 mt-2">
              Professional photography for business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Corporate Package */}
            <Card className="border-primary/10 overflow-hidden hover:shadow-lg transition-all">
              <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
                <CardTitle className="text-2xl text-primary">Basic</CardTitle>
                <CardDescription>Individual headshots</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-semibold">₹7,500</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Studio Session</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>30 Minutes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>3 Edited Images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Online Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 shrink-0 mr-2 mt-0.5" />
                    <span className="text-slate-400">On-Location</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Team Corporate Package */}
            <Card className="border-primary/20 overflow-hidden shadow-md hover:shadow-xl relative transition-all">
              <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-4 py-1 bg-primary text-white text-sm rounded-full font-medium">
                Most Popular
              </div>
              <CardHeader className="bg-gradient-to-b from-primary/10 to-white pb-4">
                <CardTitle className="text-2xl text-primary">Team</CardTitle>
                <CardDescription>For small teams (5-10 people)</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-semibold">₹25,000</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Studio or On-Location</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Half Day Session</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>5 Edited Images per Person</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Group Photos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Online Gallery</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Corporate Package */}
            <Card className="border-primary/10 overflow-hidden hover:shadow-lg transition-all">
              <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
                <CardTitle className="text-2xl text-primary">Enterprise</CardTitle>
                <CardDescription>For larger teams (10+ people)</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-semibold">₹40,000+</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>On-Location Session</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Full Day Session</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>8 Edited Images per Person</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Group & Department Photos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Office Environment Photos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span>Online Gallery with Sorting Options</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel:+919632288815" className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
