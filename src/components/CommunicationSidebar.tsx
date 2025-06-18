
import { useState } from "react";
import { Phone, Mail, MessageSquare, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

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
      color: "bg-blue-500 text-white"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      action: () => window.open(whatsappUrl, "_blank"),
      color: "bg-green-500 text-white"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: email,
      action: () => window.location.href = `mailto:${email}`,
      color: "bg-red-500 text-white"
    }
  ];

  // Floating trigger button
  const FloatingTrigger = () => (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <Button
        onClick={() => setIsOpen(true)}
        className="group flex flex-col items-center gap-2 px-3 py-6 bg-white shadow-lg hover:bg-primary/10 text-primary rounded-full transition-all duration-300 hover:scale-105"
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM8 9H16C16.55 9 17 9.45 17 10C17 10.55 16.55 11 16 11H8C7.45 11 7 10.55 7 10C7 9.45 7.45 9 8 9ZM16 14H8C7.45 14 7 13.55 7 13C7 12.45 7.45 12 8 12H16C16.55 12 17 12.45 17 13C17 13.55 16.55 14 16 14ZM8 8H16C16.55 8 17 7.55 17 7C17 6.45 16.55 6 16 6H8C7.45 6 7 6.45 7 7C7 7.55 7.45 8 8 8Z"
            />
          </svg>
        </div>
        <span className="font-medium text-xs whitespace-nowrap">Contact Us</span>
      </Button>
    </div>
  );

  return (
    <>
      <FloatingTrigger />
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[300px] sm:w-[350px] bg-white p-0 overflow-y-auto">
          <SheetHeader className="bg-gradient-to-r from-primary to-primary/60 text-white p-6">
            <SheetTitle className="text-white text-2xl">Contact Us</SheetTitle>
            <SheetDescription className="text-white/90">
              Choose how you would like to reach us
            </SheetDescription>
          </SheetHeader>
          
          <div className="p-6 space-y-6">
            {contactOptions.map((option, index) => (
              <div 
                key={index} 
                onClick={option.action}
                className="flex items-center space-x-4 p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors"
              >
                <div className={`p-3 rounded-full ${option.color}`}>
                  <option.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </div>
            ))}
            
            <Separator />
            
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Visit Our Studio</h4>
              <p className="text-sm text-muted-foreground">
                Uttarahalli<br />
                Bangalore, Karnataka, 560061<br />
                India
              </p>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://g.co/kgs/YwbJx5W" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 rounded-lg border bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="p-2 bg-white rounded-full">
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
                  <p className="font-medium">Leave a Review on Google</p>
                  <p className="text-xs text-muted-foreground">Share your experience with others</p>
                </div>
              </a>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
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
