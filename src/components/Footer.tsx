
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Heart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/candidcapture_photogrphy?igsh=MWE3OWg1dmlwODZ2eQ==", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/candid-capture-a475052b1/", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  const services = [
    { name: "Wedding Photography", href: "/services", state: { selectedService: "Wedding Photography" } },
    { name: "Product Shoot", href: "/services", state: { selectedService: "Product Photography" } },
    { name: "Maternity Shoot", href: "/services", state: { selectedService: "Maternity Photography" } },
    { name: "Newborn Shoot", href: "/services", state: { selectedService: "Newborn Photography" } },
    { name: "Concept Shoot", href: "/services", state: { selectedService: "Concept Photography" } },
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary/60 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary mb-4 inline-block border-b-2 border-primary pb-1">
              Candid Capture
            </h3>
            <p className="text-gray-700 text-sm">
              We capture your precious moments with our lenses, creating timeless memories that last forever.
            </p>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-5 w-5 text-primary" />
              <p className="text-base">Any Query Please Feel Free Contact Us</p>
            </div>
            <a 
              href="tel:+919632288815" 
              className="inline-block text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Mob: +91 96322 88815
            </a>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name} className="group flex items-center">
                  <ArrowRight className="h-3 w-3 text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Our Services</h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service.name} className="group flex items-center">
                  <ArrowRight className="h-3 w-3 text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link 
                    to={service.href}
                    state={service.state}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h4>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <p className="text-gray-600">
                123 Photographer Lane,<br />
                Bangalore, Karnataka<br />
                India - 560001
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a 
                href="mailto:info@candidcapture.com" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                info@candidcapture.com
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 opacity-30" />
        
        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="rounded-full bg-white shadow hover:shadow-md hover:scale-110 hover:bg-primary/5 transition-all duration-300"
                asChild
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </a>
              </Button>
            ))}
          </div>
          
          <p className="text-center text-gray-600 text-sm flex items-center gap-1">
            © {currentYear} Candid Capture. Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
