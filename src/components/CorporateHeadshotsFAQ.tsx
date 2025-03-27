import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { Book, Camera, Shirt, Edit, UserPlus, Info } from 'lucide-react';

// Organize FAQs by categories for better organization
const faqCategories = [{
  icon: <Info className="h-5 w-5 text-primary" />,
  title: "General Information",
  questions: [{
    question: "How long will a corporate headshot session take?",
    answer: "A standard corporate headshot session typically takes about 15-20 minutes per person. For group sessions with multiple employees, we can efficiently photograph 20-30 people in a day, depending on the package chosen and specific requirements."
  }, {
    question: "How quickly will we receive the final headshots?",
    answer: "For standard corporate headshot sessions, we deliver fully edited, high-resolution images within 3-5 business days. For larger team sessions (10+ people), delivery may take 5-7 business days. Rush delivery options are available upon request for an additional fee."
  }, {
    question: "Can you come to our office for the photoshoot?",
    answer: "Absolutely! We offer on-location corporate headshot services and can set up a professional studio environment right in your office. This is often the most convenient option for team photos and minimizes time away from work. There may be an additional fee depending on your location and setup requirements."
  }, {
    question: "Can we get both digital files and printed copies?",
    answer: "Yes, all our packages include high-resolution digital files suitable for both web and print use. We also offer professional printing services for an additional fee, with options ranging from standard prints to executive portrait prints on premium paper. Bulk printing discounts are available for larger orders."
  }, {
    question: "Can we choose the background for our corporate headshots?",
    answer: "Yes, we offer several background options for corporate headshots including solid colors, gradient backdrops, and contextual office settings. We can match your existing corporate imagery for consistency or create a new look. We're happy to discuss the options that would work best for your brand and intended use of the photos."
  }]
}, {
  icon: <UserPlus className="h-5 w-5 text-primary" />,
  title: "Posing for Corporate Headshots",
  questions: [{
    question: "Do you provide guidance on posing?",
    answer: "Absolutely! Many professionals feel uncomfortable in front of the camera, so we provide clear direction on posing, expressions, and positioning to help everyone look their best. Our photographers are experienced in capturing natural, confident expressions that convey professionalism and approachability."
  }, {
    question: "What are the best poses for corporate headshots?",
    answer: "The best corporate headshot poses typically include a slight angle of the shoulders (not directly facing the camera), a straight but relaxed posture, and a natural expression. We'll guide you through various subtle head tilts and shoulder positions to find the most flattering angles for your face shape and build."
  }, {
    question: "How can I look natural in my corporate headshot?",
    answer: "Looking natural comes from being relaxed. We create a comfortable environment and will engage in conversation during your session to capture authentic expressions. We recommend practicing your smile in the mirror beforehand, taking deep breaths during the session, and thinking positive thoughts that naturally bring a genuine expression to your face."
  }, {
    question: "What should I do with my hands in a corporate portrait?",
    answer: "For traditional headshots, hands are typically not in the frame. For three-quarter or full-body corporate portraits, we recommend natural poses like hands lightly clasped in front, one hand in a pocket, or arms crossed but relaxed. We'll provide guidance based on your industry standards and the message you want to convey."
  }]
}, {
  icon: <Shirt className="h-5 w-5 text-primary" />,
  title: "Styling for Corporate Headshots",
  questions: [{
    question: "What should I wear for my corporate headshot?",
    answer: "For corporate headshots, we recommend wearing professional attire that represents your company's culture and your position. Solid colors generally work better than busy patterns. For a more polished look, bring a few outfit options. We're happy to provide specific guidance based on your industry and brand."
  }, {
    question: "Are there costume rentals available?",
    answer: "We don't provide costume rentals directly, but we can recommend local styling services and rental options if needed. For executive sessions, we can arrange for a professional stylist to help select appropriate attire that aligns with your brand image. This service would be an additional cost."
  }, {
    question: "How can I tie a tie properly for my headshot?",
    answer: "We have a selection of tutorial videos on our website showing different tie knots (Windsor, Half-Windsor, Four-in-Hand, etc.). Our photographers can also help adjust your tie on the day of the shoot. If you're struggling with this, arrive a few minutes early and we'll assist you in getting it just right."
  }, {
    question: "What colors work best for corporate headshots?",
    answer: "Solid, medium to dark tones generally photograph well. Navy blue, charcoal gray, burgundy, and forest green convey professionalism while being more interesting than plain black. For those with fair skin, avoid pure white as it can wash you out. We recommend bringing a few color options to determine what works best with your skin tone and the background we'll be using."
  }, {
    question: "Should I get a haircut before my session?",
    answer: "We recommend getting a haircut 1-2 weeks before your session, not the day before. This allows your hair to settle into a natural style. Bring styling products or tools if you normally use them. For men with facial hair, either trim neatly or shave right before the session, depending on your preferred look."
  }]
}, {
  icon: <Camera className="h-5 w-5 text-primary" />,
  title: "Preparation Tips",
  questions: [{
    question: "How should we prepare for a corporate headshot session?",
    answer: "For the best results, we recommend getting a good night's sleep before the session, staying hydrated, and avoiding heavy alcohol consumption the night before. If possible, schedule haircuts 1-2 weeks before the shoot. For men, consider shaving or trimming facial hair the morning of the shoot. We'll provide more detailed preparation guidelines when you book your session."
  }, {
    question: "What should I bring to my headshot session?",
    answer: "We recommend bringing several outfit options, any accessories you regularly wear, basic grooming supplies for touch-ups, and examples of headshots you like. If you wear glasses, bringing a backup pair without lenses can help us avoid glare. For longer sessions, bring a snack and water to stay energized."
  }, {
    question: "Do you offer hair and makeup services?",
    answer: "Yes, we offer professional hair and makeup services that can be added to any corporate headshot package. Our makeup artists specialize in natural, professional looks that photograph well. This service is particularly valuable for executive portraits and helps ensure consistent, polished results."
  }]
}, {
  icon: <Edit className="h-5 w-5 text-primary" />,
  title: "Retouching / Editing",
  questions: [{
    question: "Do you offer retouching services?",
    answer: "Yes, basic retouching is included with all our corporate headshot packages. This includes skin smoothing, removal of temporary blemishes, and minor wrinkle reduction while maintaining a natural, professional appearance. More extensive retouching is available as an add-on service."
  }, {
    question: "What kind of editing is included in the standard packages?",
    answer: "Standard editing includes color correction, exposure adjustments, contrast enhancement, and basic skin retouching. We maintain a natural look while ensuring you present your best professional self. Our philosophy is 'you on your best day' rather than heavy editing that makes you unrecognizable."
  }, {
    question: "Can you edit out specific features or items?",
    answer: "Yes, we can remove temporary elements like blemishes, stray hairs, small scars, or distracting background elements. For permanent features, we take a conservative approach, subtly minimizing rather than removing entirely. We can discuss specific concerns during your consultation."
  }, {
    question: "How long does the editing process take?",
    answer: "Standard editing for individual sessions is typically completed within 3-5 business days. For larger team sessions, editing may take 5-7 business days. Rush editing services are available for an additional fee if you need your images more quickly."
  }]
}, {
  icon: <Book className="h-5 w-5 text-primary" />,
  title: "Additional Resources",
  questions: [{
    question: "Do you provide guides on how to use our headshots effectively?",
    answer: "Yes, we provide all clients with a digital guide on how to effectively use your professional headshots across various platforms, including specific image size recommendations for LinkedIn, company websites, email signatures, and print materials. For enterprise clients, we also offer custom workshops on leveraging your visual brand."
  }, {
    question: "Where can I find instructional videos for preparation?",
    answer: "We have a resource library on our website with instructional videos covering topics like 'How to Tie Different Knots,' 'Basic Grooming Tips for Photoshoots,' and 'Posture Tips for Professional Portraits.' These resources are available to all booked clients through a special client portal."
  }]
}];
const CorporateHeadshotsFAQ: React.FC = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="w-full max-w-4xl mx-auto backdrop-blur-sm p-6 shadow-sm border border-primary/5 rounded bg-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#003c72]">
        Corporate Headshots FAQ
      </h2>
      
      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => <div key={categoryIndex} className="bg-white/80 rounded-lg overflow-hidden shadow-sm border border-slate-100">
            <div className="bg-slate-50 px-4 py-3 flex items-center gap-2">
              {category.icon}
              <h3 className="font-medium text-lg text-slate-800">{category.title}</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((faq, index) => <AccordionItem key={index} value={`${categoryIndex}-faq-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-gray-800 py-4 hover:text-primary px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 px-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>)}
      </div>
    </motion.div>;
};
export default CorporateHeadshotsFAQ;