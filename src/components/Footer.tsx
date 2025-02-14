
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/candidcapture_photogrphy?igsh=MWE3OWg1dmlwODZ2eQ==", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container mx-auto px-4">
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
