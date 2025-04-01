
import { useState } from "react";
import { Phone, Mail, MessageSquare, X, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

const CommunicationSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "9632288815";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const email = "candidcapture4@gmail.com";

  const contactOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "+91 9632288815",
      action: () => window.location.href = `tel:+91${phoneNumber}`,
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      action: () => window.open(whatsappUrl, "_blank"),
      color: "from-green-400 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: email,
      action: () => window.location.href = `mailto:${email}`,
      color: "from-red-400 to-red-600"
    }
  ];

  // Floating trigger button with animation
  const FloatingTrigger = () => (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-center gap-2 px-3 py-6 bg-gradient-to-br from-primary/90 to-primary shadow-lg hover:shadow-primary/20 text-white rounded-full transition-all duration-300"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
          </div>
          <span className="font-medium text-xs whitespace-nowrap">Contact Us</span>
        </Button>
        
        {/* Pulsing effect */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </span>
      </motion.div>
    </div>
  );

  return (
    <>
      <FloatingTrigger />
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[300px] sm:w-[380px] p-0 overflow-y-auto border-l border-primary/10">
          <SheetHeader className="bg-gradient-to-r from-primary to-primary/80 text-white p-8">
            <SheetTitle className="text-white text-2xl font-bold">Get In Touch</SheetTitle>
            <SheetDescription className="text-white/90 mt-2">
              We'd love to hear from you. Choose your preferred contact method.
            </SheetDescription>
          </SheetHeader>
          
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              {contactOptions.map((option, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={option.action}
                  className="flex items-center space-x-4 p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md cursor-pointer border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`p-3 rounded-full bg-gradient-to-br ${option.color} text-white shadow-inner`}>
                    <option.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{option.title}</h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                  <div className="text-primary opacity-70">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Separator className="my-6 bg-gray-200" />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3 text-gray-800">
                <MapPin className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Visit Our Studio</h4>
              </div>
              <p className="text-gray-600 text-sm pl-8">
                Uttarahalli<br />
                Bangalore, Karnataka, 560061<br />
                India
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <a 
                href="https://g.co/kgs/YwbJx5W" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="p-2 bg-white rounded-full shadow-sm">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" 
                      fill="#4285F4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Review Us on Google</p>
                  <p className="text-xs text-gray-600">Share your experience with us</p>
                </div>
              </a>
            </motion.div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CommunicationSidebar;
