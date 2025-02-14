
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-secondary py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10"
              asChild
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
