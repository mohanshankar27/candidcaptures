
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const corporateHeadshotsFAQs = [
  {
    question: "How long will a corporate headshot session take?",
    answer: "A standard corporate headshot session typically takes about 15-20 minutes per person. For group sessions with multiple employees, we can efficiently photograph 20-30 people in a day, depending on the package chosen and specific requirements."
  },
  {
    question: "What should I wear for my corporate headshot?",
    answer: "For corporate headshots, we recommend wearing professional attire that represents your company's culture and your position. Solid colors generally work better than busy patterns. For a more polished look, bring a few outfit options. We're happy to provide specific guidance based on your industry and brand."
  },
  {
    question: "Do you offer hair and makeup services?",
    answer: "Yes, we offer professional hair and makeup services that can be added to any corporate headshot package. Our makeup artists specialize in natural, professional looks that photograph well. This service is particularly valuable for executive portraits and helps ensure consistent, polished results."
  },
  {
    question: "Can you come to our office for the photoshoot?",
    answer: "Absolutely! We offer on-location corporate headshot services and can set up a professional studio environment right in your office. This is often the most convenient option for team photos and minimizes time away from work. There may be an additional fee depending on your location and setup requirements."
  },
  {
    question: "How quickly will we receive the final headshots?",
    answer: "For standard corporate headshot sessions, we deliver fully edited, high-resolution images within 3-5 business days. For larger team sessions (10+ people), delivery may take 5-7 business days. Rush delivery options are available upon request for an additional fee."
  },
  {
    question: "Do you offer retouching services?",
    answer: "Yes, basic retouching is included with all our corporate headshot packages. This includes skin smoothing, removal of temporary blemishes, and minor wrinkle reduction while maintaining a natural, professional appearance. More extensive retouching is available as an add-on service."
  },
  {
    question: "Can we get both digital files and printed copies?",
    answer: "Yes, all our packages include high-resolution digital files suitable for both web and print use. We also offer professional printing services for an additional fee, with options ranging from standard prints to executive portrait prints on premium paper. Bulk printing discounts are available for larger orders."
  },
  {
    question: "How should we prepare for a corporate headshot session?",
    answer: "For the best results, we recommend getting a good night's sleep before the session, staying hydrated, and avoiding heavy alcohol consumption the night before. If possible, schedule haircuts 1-2 weeks before the shoot. For men, consider shaving or trimming facial hair the morning of the shoot. We'll provide more detailed preparation guidelines when you book your session."
  },
  {
    question: "Can we choose the background for our corporate headshots?",
    answer: "Yes, we offer several background options for corporate headshots including solid colors, gradient backdrops, and contextual office settings. We can match your existing corporate imagery for consistency or create a new look. We're happy to discuss the options that would work best for your brand and intended use of the photos."
  },
  {
    question: "Do you provide guidance on posing?",
    answer: "Absolutely! Many professionals feel uncomfortable in front of the camera, so we provide clear direction on posing, expressions, and positioning to help everyone look their best. Our photographers are experienced in capturing natural, confident expressions that convey professionalism and approachability."
  }
];

const CorporateHeadshotsFAQ: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-primary/5"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#003c72] font-serif italic">
        Corporate Headshots FAQ
      </h2>
      
      <Accordion type="single" collapsible className="w-full">
        {corporateHeadshotsFAQs.map((faq, index) => (
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
    </motion.div>
  );
};

export default CorporateHeadshotsFAQ;
