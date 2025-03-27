
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const servicesFAQs = [
  {
    question: "How far in advance should I book a photography session?",
    answer: "We recommend booking at least 4-6 weeks in advance for portrait sessions and 6-12 months for weddings. However, we sometimes have last-minute availability, so don't hesitate to inquire about your desired date."
  },
  {
    question: "What should I wear for my photo session?",
    answer: "Choose clothing that makes you feel comfortable and confident. Solid colors typically photograph well, and coordinating (not matching) outfits work best for groups. We provide detailed styling guides for each type of session upon booking."
  },
  {
    question: "How long until I receive my photos?",
    answer: "Delivery times vary by session type. Portrait sessions are typically delivered within 1-2 weeks, while weddings may take 4-6 weeks. Rush delivery is available for an additional fee if you need your images sooner."
  },
  {
    question: "Do you provide both digital files and prints?",
    answer: "Yes, all our packages include high-resolution digital images, and we offer professional printing services as an add-on. We highly recommend ordering prints through us to ensure the highest quality and color accuracy."
  },
  {
    question: "What happens if it rains on the day of an outdoor session?",
    answer: "For outdoor sessions, we monitor the weather closely and will contact you 24-48 hours before if rescheduling seems necessary. We can either move to an indoor location or reschedule your session at no additional cost."
  },
  {
    question: "Can I purchase additional images beyond what's included in my package?",
    answer: "Absolutely! Additional images can be purchased à la carte or as a complete gallery. We also offer the option to upgrade your package even after your session if you fall in love with more images than expected."
  },
  {
    question: "Do you travel for photography sessions?",
    answer: "Yes, we're available for travel worldwide. Local sessions (within 30 miles) don't incur a travel fee, while sessions beyond that radius may include additional travel costs which we'll outline in your custom quote."
  },
  {
    question: "How do I reserve my photography session date?",
    answer: "A signed contract and non-refundable retainer (typically 25-50% of your package) are required to secure your date. The remaining balance is due one week before your session or event."
  }
];

const ServicesFAQ: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-primary/5">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="h-6 w-6 text-[#003c72]" />
        <h2 className="text-2xl md:text-3xl font-bold text-[#003c72]">
          Frequently Asked Questions
        </h2>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {servicesFAQs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger 
              className="text-lg font-medium text-gray-800 py-4 hover:text-primary"
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4 px-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ServicesFAQ;
