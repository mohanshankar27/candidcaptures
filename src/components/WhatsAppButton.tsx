
import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "9632288815";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed right-4 bottom-24 transform z-40">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button
            className="group flex flex-col items-center gap-2 px-3 py-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-green-500/20"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.3929 4.6156C17.3148 2.51293 14.5484 1.32 11.6032 1.32C5.81286 1.32 1.11765 6.04822 1.11765 11.8847C1.11765 13.8074 1.60916 15.6795 2.53705 17.3168L1 23L6.77695 21.4895C8.34504 22.3467 10.1502 22.8031 11.9935 22.8031H11.9984C17.7839 22.8031 22.5 18.0749 22.5 12.2384C22.5 9.25829 21.4709 6.71827 19.3929 4.6156ZM11.6032 20.9683C9.95518 20.9683 8.34013 20.5318 6.93555 19.7152L6.59656 19.5152L3.16387 20.3847L4.03738 17.0094L3.82166 16.6553C2.92483 15.1947 2.44823 13.5473 2.44823 11.8847C2.44823 6.9547 6.51309 2.9104 11.608 2.9104C14.0502 2.9104 16.3426 3.92577 18.0619 5.67491C19.781 7.42406 20.8353 9.7569 20.8304 12.2384C20.8304 17.1781 16.6982 20.9683 11.6032 20.9683ZM16.5389 14.2916C16.2693 14.1539 14.9393 13.4945 14.6893 13.4056C14.4393 13.3168 14.2549 13.2724 14.0705 13.5473C13.8861 13.8173 13.3701 14.4323 13.2051 14.622C13.0449 14.8066 12.8799 14.8314 12.6102 14.6937C11.2411 14.0047 10.3394 13.4599 9.43281 11.9197C9.1877 11.4977 9.80525 11.5372 10.3838 10.3816C10.4714 10.1917 10.4273 10.0293 10.3642 9.8865C10.3012 9.7438 9.70306 8.40246 9.4776 7.85751C9.25701 7.32729 9.03151 7.40244 8.8615 7.3926C8.70139 7.38276 8.51699 7.38276 8.33259 7.38276C8.14819 7.38276 7.85377 7.4469 7.60378 7.72166C7.35378 7.99643 6.6554 8.65584 6.6554 10.0023C6.6554 11.3487 7.62833 12.6458 7.75929 12.8354C7.89516 13.025 9.68853 15.8219 12.4405 17.0144C14.1205 17.7578 14.7969 17.8219 15.651 17.698C16.1866 17.6239 17.2646 17.044 17.49 16.4102C17.7155 15.7764 17.7155 15.2314 17.6524 15.1277C17.5941 15.0141 17.4096 14.9449 17.1399 14.8071L16.5389 14.2916Z" 
                />
              </svg>
            </div>
            <span className="font-medium text-xs whitespace-nowrap">WhatsApp Us</span>
            <MessageSquare className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </a>
        
        {/* Pulsing effect */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </motion.div>
    </div>
  );
};

export default WhatsAppButton;
