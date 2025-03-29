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
import PackageHeader from './packages/PackageHeader';

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

const packageImages = [
  '/lovable-uploads/a97ae0b1-6394-488d-a9f4-d17321650970.png',
  '/lovable-uploads/e330db14-6a26-4ead-b79f-e9aed137fc84.png',
  '/lovable-uploads/1f924edb-9819-4bbc-91ac-8bdb224ff48e.png',
  '/lovable-uploads/28516f95-c696-478a-a1ca-2643222d0648.png',
  '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png'
];

const PricePackages: React.FC = () => {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  React.useEffect(() => {
    setImagesLoaded(new Array(packageImages.length).fill(false));
  }, []);

  const handlePackageClick = (pkg: PricePackageItem) => {
    navigate(`/packages/${pkg.id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
        <PackageHeader title="Packages & Price Lists" />
        
        <p className="text-slate-600 mb-8">
          Explore our range of photography packages designed to meet your specific needs. 
          Click on any package to view detailed pricing and what's included.
        </p>
        
        <div className="mb-8 relative overflow-hidden rounded-xl">
          <Carousel 
            className="w-full" 
            opts={{ 
              loop: true,
              align: "start"
            }}
          >
            <CarouselContent>
              {packageImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl h-52 md:h-64 lg:h-72 shadow-md border border-orange-100 bg-slate-50">
                      <img 
                        src={image} 
                        alt={`Package preview ${index + 1}`}
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding={index < 2 ? "sync" : "async"}
                        onLoad={() => handleImageLoad(index)}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        width="400"
                        height="300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-orange-100 hover:bg-orange-200 text-orange-600 border-orange-200" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-orange-100 hover:bg-orange-200 text-orange-600 border-orange-200" />
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
