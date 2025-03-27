
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const photographyFAQs = [
  {
    question: "How much do you charge for a photoshoot?",
    answer: "Our pricing depends on the type of photography service you're looking for. We offer various packages tailored to different needs. Please visit our Pricing page for detailed information about our packages and rates."
  },
  {
    question: "Do you shoot wedding photography?",
    answer: "Yes, we specialize in wedding photography. We offer comprehensive wedding packages that cover everything from pre-wedding shoots to full-day wedding coverage. Our team is experienced in capturing beautiful, candid moments that tell your unique love story."
  },
  {
    question: "How much time do you need to deliver the final edited images?",
    answer: "For standard photoshoots, we typically deliver the fully edited images within 7-14 business days. For larger events like weddings, the delivery time may extend to 3-4 weeks. Rush delivery options are available upon request for an additional fee."
  },
  {
    question: "Do you shoot photographs outside of your hometown?",
    answer: "Absolutely! We are available for photography assignments anywhere. For locations outside our base area, there may be additional travel and accommodation charges depending on the distance and duration of the shoot."
  },
  {
    question: "How many pictures will I receive from a photoshoot?",
    answer: "The number of final edited images varies depending on the package you choose and the duration of the shoot. Typically, for a standard 1-hour session, you can expect around 30-50 fully edited images. For events like weddings, the number is significantly higher."
  },
  {
    question: "Do you offer family portrait sessions?",
    answer: "Yes, we offer family portrait sessions tailored to capture the unique dynamics and personalities of your family. These sessions can be conducted in our studio or at a location of your choice."
  },
  {
    question: "What is your photography style?",
    answer: "Our photography style blends candid, documentary-style captures with artistic, editorial touches. We focus on creating natural, authentic images while also incorporating creative compositions and beautiful lighting to enhance the final result."
  },
  {
    question: "Do you provide printed photographs or just digital files?",
    answer: "We provide high-resolution digital files as part of all our packages. Additionally, we offer various print options including professional prints, canvas wraps, albums, and more. These can be ordered separately after your session."
  }
];

const FAQAccordion = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-primary/5"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#003c72] font-serif italic">
        Frequently Asked Questions
      </h2>
      
      <Accordion type="single" collapsible className="w-full">
        {photographyFAQs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger 
              className="text-lg font-medium text-gray-800 py-4 hover:text-primary"
              onClick={() => setOpenFAQ(openFAQ === `faq-${index}` ? null : `faq-${index}`)}
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

export default FAQAccordion;
