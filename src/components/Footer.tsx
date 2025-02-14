
import { Facebook, Instagram, Linkedin, Youtube, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/candidcapture_photogrphy?igsh=MWE3OWg1dmlwODZ2eQ==", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/candid-capture-a475052b1/", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-2">|| Jai Shri Ram ||</h3>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Phone className="h-5 w-5" />
            <p className="text-lg">Any Query Please Feel Free Contact Us</p>
          </div>
          <a 
            href="tel:+919632288815" 
            className="inline-block mt-2 text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Mob: +91 96322 88815
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              className="rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 hover:bg-primary/5 transition-all duration-300"
              asChild
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" strokeWidth={1.5} />
              </a>
            </Button>
          ))}
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
