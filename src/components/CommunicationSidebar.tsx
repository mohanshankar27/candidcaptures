
import { useState } from "react";
import { Phone, Mail, MessageSquare, X, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const CommunicationSidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeContact, setActiveContact] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const phoneNumber = "9632288815";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const email = "candidcapture4@gmail.com";

  const contactOptions = [
    {
      id: "contact",
      icon: MessageSquare,
      label: "Contact Us",
      bgColor: "bg-[#7c6dfe]",
      action: () => setIsDrawerOpen(true),
    },
    {
      id: "call",
      icon: Phone,
      label: "Call Us",
      bgColor: "bg-[#65d875]",
      action: () => window.location.href = `tel:+91${phoneNumber}`,
    },
    {
      id: "email",
      icon: Mail,
      label: "Email Us",
      bgColor: "bg-[#ff6b6b]",
      action: () => window.location.href = `mailto:${email}`,
    }
  ];

  const handleContactClick = (id: string, action: () => void) => {
    setActiveContact(id);
    setTimeout(() => {
      action();
      setTimeout(() => setActiveContact(null), 300);
    }, 200);
  };

  return (
    <>
      {/* Vertical Contact Button Sidebar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-0">
        {contactOptions.map((option) => (
          <motion.button
            key={option.id}
            className={`flex items-center justify-center gap-2 px-3 py-4 ${option.bgColor} text-white 
                      hover:translate-x-0 transition-all duration-300 first:rounded-tl-md last:rounded-bl-md
                      ${activeContact === option.id ? 'translate-x-0' : 'translate-x-14'}`}
            initial={{ x: 52 }}
            animate={{ x: 0 }}
            whileHover={{ x: -20 }}
            onClick={() => handleContactClick(option.id, option.action)}
          >
            <option.icon className="w-5 h-5" />
            <span className="text-xs font-medium rotate-180" style={{ writingMode: 'vertical-rl' }}>
              {option.label}
            </span>
            <span className="absolute right-full top-1/2 -translate-y-1/2 h-full w-5 bg-transparent"></span>
          </motion.button>
        ))}
      </div>

      {/* Contact Drawer Component */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className={`${isMobile ? 'max-h-[85vh]' : 'max-w-3xl mx-auto'}`}>
          <div className="bg-gradient-to-r from-[#7c6dfe] to-[#6d5fd6] text-white p-8 rounded-t-xl">
            <DrawerHeader className="p-0 mb-4">
              <DrawerTitle className="text-2xl font-bold">Get In Touch</DrawerTitle>
              <DrawerDescription className="text-white/80">
                We'd love to hear from you! How can we help?
              </DrawerDescription>
            </DrawerHeader>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div className="text-lg font-semibold text-gray-800">Contact Information</div>
                
                <div className="space-y-4">
                  {[
                    { icon: Phone, title: "Call Us", value: "+91 9632288815", action: `tel:+91${phoneNumber}`, color: "bg-green-100 text-green-600" },
                    { icon: MessageSquare, title: "WhatsApp", value: "Chat on WhatsApp", action: whatsappUrl, color: "bg-emerald-100 text-emerald-600" },
                    { icon: Mail, title: "Email", value: email, action: `mailto:${email}`, color: "bg-red-100 text-red-600" },
                    { icon: MapPin, title: "Visit Our Studio", value: "Uttarahalli, Bangalore", action: "https://g.co/kgs/YwbJx5W", color: "bg-blue-100 text-blue-600" }
                  ].map((item, idx) => (
                    <a 
                      key={idx}
                      href={item.action}
                      target={item.action.startsWith('http') ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className={`p-2 rounded-full ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.value}</div>
                      </div>
                      <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="text-lg font-semibold text-gray-800 mb-4">Send a Message</div>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7c6dfe]/50"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7c6dfe]/50"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows={3}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7c6dfe]/50 resize-none"
                  ></textarea>
                  <Button 
                    className="w-full bg-[#7c6dfe] hover:bg-[#6d5fd6] text-white font-medium py-6"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-4 top-4 rounded-full bg-white/20 text-white hover:bg-white/30 hover:text-white"
            onClick={() => setIsDrawerOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CommunicationSidebar;
