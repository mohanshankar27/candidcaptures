
import React, { lazy, Suspense, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import { Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

interface PricePackageItem {
  title: string;
  id: string;
  description?: string;
}

const pricePackages: PricePackageItem[] = [
  { 
    title: 'New Born, Toddlers, and younger children',
    id: 'new-born',
    description: 'Capture precious moments of your little ones with our specialized photography sessions.'
  },
  {
    title: 'Wedding Photography',
    id: 'wedding',
    description: 'Comprehensive packages to capture your special day from start to finish.'
  },
  { 
    title: 'Family Portrait Sessions', 
    id: 'family',
    description: 'Create lasting memories with professional family portraits that tell your unique story.'
  },
  { 
    title: 'Corporate Head-shot Sessions', 
    id: 'corporate',
    description: 'Professional headshots for business profiles, websites and marketing materials.'
  },
  { 
    title: 'Maternity Photography Sessions', 
    id: 'maternity',
    description: 'Celebrate the journey to motherhood with elegant and intimate maternity portraits.'
  },
  { 
    title: 'Matrimonial / Dating Portfolio Sessions', 
    id: 'matrimonial',
    description: 'Stand out with professional portraits designed specifically for matrimonial profiles.'
  },
  { 
    title: 'Modelling Portfolios & Polaroids', 
    id: 'modelling',
    description: 'Professional portfolio shoots to showcase your versatility and unique look to agencies.'
  },
  { 
    title: 'Event Photography Pricing', 
    id: 'event',
    description: 'Comprehensive coverage of corporate events, parties, and special occasions.'
  },
];

// Images for the carousel - these are shared across the site
const packageImages = [
  '/lovable-uploads/b977d3f5-fd63-468d-ac7f-09766c3ab6c1.png',
  '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
  '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
  '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
  '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
  '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png'
];

const PricePackages: React.FC = () => {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  // Initialize image loading state
  React.useEffect(() => {
    setImagesLoaded(new Array(packageImages.length).fill(false));
  }, []);

  const handlePackageClick = (pkg: PricePackageItem) => {
    // First navigate to the package page
    navigate(`/packages/${pkg.id}`);
    
    // Then scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle image loading
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="mt-16 mb-12">
      <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-primary/10 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <Package className="h-6 w-6 text-[#ea384c]" />
          <h2 className="text-3xl font-light text-[#ea384c]">Packages & Price Lists</h2>
        </div>
        
        <p className="text-slate-600 mb-8">
          Explore our range of photography packages designed to meet your specific needs. 
          Click on any package to view detailed pricing and what's included.
        </p>
        
        {/* Optimized image carousel */}
        <div className="mb-8 relative">
          <Carousel className="w-full">
            <CarouselContent>
              {packageImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl h-48 md:h-64">
                      <img 
                        src={image} 
                        alt={`Package preview ${index + 1}`}
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding={index < 2 ? "sync" : "async"}
                        onLoad={() => handleImageLoad(index)}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        width="400"
                        height="300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
              <CarouselNext className="right-2" />
            </div>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="left-2" />
            </div>
          </Carousel>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {pricePackages.map((pkg, index) => (
            <div 
              key={index}
              className="group border border-slate-200 hover:border-primary/20 rounded-lg p-4 transition-all duration-200 hover:shadow-md bg-white/50"
            >
              <div 
                className="cursor-pointer"
                onClick={() => handlePackageClick(pkg)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-slate-800 group-hover:text-[#ea384c] transition-colors">
                    {pkg.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#ea384c] transition-all transform group-hover:translate-x-1" />
                </div>
                
                {pkg.description && (
                  <p className="text-slate-600 text-sm mb-3">{pkg.description}</p>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-[#ea384c] hover:bg-[#ea384c]/10 hover:text-[#ea384c] p-0 h-auto mt-1"
                  onClick={() => handlePackageClick(pkg)}
                >
                  View pricing details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricePackages;
