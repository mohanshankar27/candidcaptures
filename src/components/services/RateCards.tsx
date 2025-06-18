
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from 'lucide-react';

const RateCards = () => {
  const rateCards = [
    {
      title: "New Born, Toddlers, and younger children",
      description: "Professional photography for your little ones",
      price: "₹4,999",
      originalPrice: "₹8,000",
      features: [
        "30+ edited photos",
        "1-2 hour session",
        "Studio or outdoor location",
        "Digital gallery access",
        "Professional editing"
      ],
      badge: "Popular"
    },
    {
      title: "Wedding Photography - Premium",
      description: "Complete wedding day coverage",
      price: "₹85,000",
      originalPrice: "₹1,20,000",
      features: [
        "2 Professional photographers",
        "10+ hours coverage",
        "600+ edited images",
        "Online gallery",
        "Premium wedding album",
        "Drone coverage included"
      ],
      badge: "Best Value"
    },
    {
      title: "Maternity Photography Sessions",
      description: "Beautiful pregnancy portraits",
      price: "₹8,999",
      originalPrice: "₹15,000",
      features: [
        "50+ edited photos",
        "2-3 hour session",
        "Multiple outfit changes",
        "Studio and outdoor options",
        "Partner and family shots",
        "Digital gallery"
      ]
    },
    {
      title: "Corporate Head-shot Sessions",
      description: "Professional business portraits",
      price: "₹7,500",
      originalPrice: "₹12,000",
      features: [
        "Individual headshots",
        "30-minute session",
        "3 edited images",
        "High-resolution files",
        "Professional lighting",
        "Quick turnaround"
      ]
    },
    {
      title: "Family Portrait Sessions",
      description: "Timeless family memories",
      price: "₹12,999",
      originalPrice: "₹20,000",
      features: [
        "60+ edited photos",
        "2-3 hour session",
        "Multiple locations",
        "All family members included",
        "Candid and posed shots",
        "Digital gallery access"
      ]
    },
    {
      title: "Event Photography Pricing",
      description: "Complete event coverage",
      price: "₹25,000",
      originalPrice: "₹40,000",
      features: [
        "Full event coverage",
        "200+ edited photos",
        "Professional photographer",
        "Online gallery",
        "Fast delivery",
        "Multiple formats"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Photography Rate Cards
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Professional photography packages with competitive pricing. All packages include professional editing and digital delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rateCards.map((card, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary/20">
              {card.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-primary text-white">
                    {card.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-slate-800 pr-16">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {card.description}
                </CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">{card.price}</span>
                    {card.originalPrice && (
                      <span className="text-lg text-slate-400 line-through">{card.originalPrice}</span>
                    )}
                  </div>
                  {card.originalPrice && (
                    <p className="text-sm text-green-600 font-medium mt-1">
                      Save {Math.round(((parseInt(card.originalPrice.replace(/[₹,]/g, '')) - parseInt(card.price.replace(/[₹,]/g, ''))) / parseInt(card.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2">
                  <a 
                    href="tel:+919632288815" 
                    className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Book Now
                  </a>
                  <a 
                    href="/contact" 
                    className="block w-full text-center border border-primary text-primary py-2 rounded-md hover:bg-primary/5 transition-colors font-medium"
                  >
                    Get Quote
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Need a custom package? Contact us for personalized pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919632288815" 
              className="text-primary hover:underline font-medium"
            >
              📞 +91 96322 88815
            </a>
            <span className="hidden sm:block text-slate-300">|</span>
            <a 
              href="mailto:candidcapture4@gmail.com" 
              className="text-primary hover:underline font-medium"
            >
              ✉️ candidcapture4@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateCards;
