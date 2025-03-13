import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceContent from '@/components/ServiceContent';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Heart, Camera, Users, ShoppingBag, ChevronRight, Menu, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicesList = [
  { 
    name: 'Wedding Photography', 
    icon: <Heart className="w-5 h-5" />,
    description: 'Capture the most important day of your life with our professional wedding photography services. We focus on candid moments and emotions that tell your unique love story.',
    benefits: [
      'Full day coverage',
      'Professional editing',
      'Online gallery',
      'High-resolution digital files',
      'Print options available'
    ],
    pricing: 'Starting at ₹25,000 for full day coverage'
  },
  { 
    name: 'Wedding Photoshoot Gallery', 
    icon: <Camera className="w-5 h-5" />,
    description: 'View our wedding photography portfolio showcasing our best work from various wedding ceremonies and celebrations.',
    external: true,
    href: "https://photos.google.com/share/AF1QipMFmTIEYszMPXvYaD_NuynOGVrs45W8UEXeVlRrNO1bNuMOs84Ka4Z4Fig8pAPEgQ/photo/AF1QipNzfHamfCW0cnCc74SKSYo_gGXozV7Usz8YVNNI?key=MUV5cHFRNHNvSmtDeml2Vi1ESTJuR0NzQS11UHl3"
  },
  { 
    name: 'Pre-wedding Photoshoot Gallery', 
    icon: <Camera className="w-5 h-5" />,
    description: 'Explore our pre-wedding photoshoot collections that capture the romance and excitement before your big day.',
    external: true,
    href: "https://photos.google.com/share/AF1QipMFmTIEYszMPXvYaD_NuynOGVrs45W8UEXeVlRrNO1bNuMOs84Ka4Z4Fig8pAPEgQ/photo/AF1QipMeb26RqTnwrFsKRc10TdGTQeCUg4OOUZGAPKMw?key=MUV5cHFRNHNvSmtDeml2Vi1ESTJuR0NzQS11UHl3"
  },
  { 
    name: 'Pre-wedding photoshoot', 
    icon: <Heart className="w-5 h-5" />,
    description: "Tell your love story through beautiful pre-wedding photography. We'll capture your chemistry in stunning locations that reflect your personality as a couple.",
    benefits: [
      'Location scouting assistance',
      'Multiple outfit changes',
      'Professional editing',
      'Same-day preview of selected shots'
    ],
    pricing: 'Starting at ₹15,000 for a half-day shoot'
  },
  { 
    name: 'E-commerce shoot', 
    icon: <ShoppingBag className="w-5 h-5" />,
    description: 'Elevate your online store with professional e-commerce photography that showcases your products in the best light, increasing conversion rates and customer trust.',
    benefits: [
      'White/custom background options',
      'Multiple angles per product',
      'Lifestyle product shots available',
      'Quick turnaround time'
    ],
    pricing: 'Starting at ₹1,000 per product with volume discounts available'
  },
  { 
    name: 'Model shoot', 
    icon: <Users className="w-5 h-5" />,
    description: 'Professional model photography for portfolios, agency submissions, or promotional work. We highlight your unique features and help you create a compelling portfolio.',
    benefits: [
      'Professional makeup artist options',
      'Studio or location settings',
      'Digital and print formats',
      'Portfolio consultation'
    ],
    pricing: 'Starting at ₹8,000 for a 2-hour session'
  },
  { 
    name: 'Product shoot', 
    icon: <ShoppingBag className="w-5 h-5" />,
    description: 'Showcase your products with professional photography that highlights features, quality, and details that matter to your customers.',
    benefits: [
      'Custom backgrounds and props',
      'Detail and feature focus shots',
      'Creative composition',
      'Product grouping options'
    ],
    pricing: 'Starting at ₹1,200 per product with packages available'
  },
  { 
    name: 'Makeup shoot', 
    icon: <Camera className="w-5 h-5" />,
    description: 'Specialized photography for makeup artists and beauty professionals to showcase their work with high-quality, detailed images.',
    benefits: [
      'Macro photography for fine details',
      'Before and after comparisons',
      'Color-accurate editing',
      'Portfolio-ready images'
    ],
    pricing: 'Starting at ₹7,000 per session'
  },
  { 
    name: 'Concept shoot', 
    icon: <Camera className="w-5 h-5" />,
    description: 'Bring your creative vision to life with our concept photography services. We work closely with you to translate your ideas into powerful visual stories.',
    benefits: [
      'Creative consultation',
      'Prop and set arrangement',
      'Specialized lighting techniques',
      'Advanced post-processing'
    ],
    pricing: 'Custom quotes based on concept requirements'
  },
  { 
    name: 'Maternity shoot', 
    icon: <Heart className="w-5 h-5" />,
    description: 'Celebrate the beauty of motherhood with our maternity photography sessions, creating timeless memories of this special time in your life.',
    benefits: [
      'Indoor or outdoor settings',
      'Partner and family inclusion options',
      'Gentle posing guidance',
      'Wardrobe consultation'
    ],
    pricing: 'Starting at ₹8,000 for a 2-hour session'
  },
  { 
    name: 'Newborn shoot', 
    icon: <Heart className="w-5 h-5" />,
    description: "Capture the precious early days of your baby's life with our gentle, safe newborn photography sessions.",
    benefits: [
      'Safe baby handling practices',
      'Comfortable studio environment',
      'Family poses included',
      'Props and wraps provided'
    ],
    pricing: 'Starting at ₹10,000 per session'
  },
  { 
    name: 'Naming Ceremony', 
    icon: <Heart className="w-5 h-5" />,
    description: "Document your child's naming ceremony with professional photography that captures all the meaningful moments and traditions of this important celebration.",
    benefits: [
      'Ceremony coverage',
      'Family group photos',
      'Detail shots of decorations and rituals',
      'Quick preview delivery'
    ],
    pricing: 'Starting at ₹12,000 for full ceremony coverage'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesList[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleServiceClick = (service) => {
    if (service.external && service.href) {
      window.open(service.href, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedService(service);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 md:hidden">Our Services</h1>
          
          <div className="md:hidden mb-4">
            <Button 
              variant="outline"
              className="flex items-center justify-between w-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="flex items-center gap-2">
                {selectedService.icon}
                <span>{selectedService.name}</span>
              </span>
              <Menu className="h-5 w-5" />
            </Button>
            
            {isMenuOpen && (
              <div className="mt-2 border rounded-md shadow-md bg-background">
                {servicesList.map((service) => (
                  <button
                    key={service.name}
                    className={`flex items-center gap-2 w-full px-4 py-3 text-left hover:bg-muted transition-colors ${
                      selectedService.name === service.name ? 'bg-muted font-medium' : ''
                    }`}
                    onClick={() => handleServiceClick(service)}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                    {service.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="hidden md:block">
            <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100vh-200px)] border rounded-lg overflow-hidden">
              <ResizablePanel defaultSize={25} minSize={20} maxSize={30}>
                <div className="h-full overflow-y-auto border-r">
                  <div className="p-4 font-semibold text-lg border-b">Our Services</div>
                  <div className="divide-y">
                    {servicesList.map((service) => (
                      <button
                        key={service.name}
                        className={`flex items-center justify-between w-full p-4 text-left hover:bg-muted transition-colors ${
                          selectedService.name === service.name ? 'bg-muted font-medium' : ''
                        }`}
                        onClick={() => handleServiceClick(service)}
                      >
                        <div className="flex items-center gap-2">
                          {service.icon}
                          <span>{service.name}</span>
                        </div>
                        {service.external ? (
                          <ExternalLink className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </ResizablePanel>
              
              <ResizableHandle withHandle />
              
              <ResizablePanel defaultSize={75}>
                <div className="h-full overflow-y-auto">
                  <ServiceContent service={selectedService} />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
          
          <div className="md:hidden mt-6">
            <ServiceContent service={selectedService} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
