import { memo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import servicesList from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import ServicesGrid from './ServicesGrid';

// Map service names to appropriate images
const serviceImages = {
  'Concept shoot': "/lovable-uploads/5faf55b4-c582-4816-aa3b-99e8faa9a73d.png", // Updated to feature the cultural outfit photo
  'Corporate & Short Videos': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'Corporate Headshots': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'E-Commerce & Catalogues': "/lovable-uploads/3346c7fa-c327-4873-a6e2-35da082a7f6e.png", // Updated to new catalogue image
  'Event Photography': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Family Portraits': "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  'Fashion Photography': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Food Photography': "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png",
  'Makeup shoot': "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
  'Maternity Photography': "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
  'Matrimonial Portfolios': "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
  'Naming Ceremony': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'New Born Baby Shoot': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'Product Photography': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
  'Product shoot': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Special Services': "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  'Toddler & Children': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Wedding Photography': "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png"
};

// Create service thumbnails with proper image mapping
const serviceThumbnails = servicesList.map(service => ({
  name: service.name,
  image: serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png"
}));

const PhotoSlideshow = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const navigateToServices = (serviceName: string) => {
    const matchingService = servicesList.find(service => service.name === serviceName);
    
    if (matchingService) {
      console.log(`Navigating to service: ${serviceName}`);
      // Navigate to services page and pass the selected service name through state
      navigate('/services', { state: { selectedService: serviceName } });
    }
  };

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange-200 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-orange-100 blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/3 w-40 h-40 rounded-full bg-orange-300 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-1 px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            EXQUISITE COLLECTION
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-5xl font-serif italic font-bold mb-6 text-primary"
          >
            Our Photography Collection
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-gray-600 text-lg font-serif italic"
          >
            Each image tells a story, each moment captured becomes eternal
          </motion.p>
        </motion.div>
        
        {/* Featured Services Carousel */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <Carousel 
            opts={{ 
              loop: true,
              align: "start"
            }}
            className="w-full"
          >
            <CarouselContent>
              {serviceThumbnails.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 h-full"
                  >
                    <Card 
                      className="overflow-hidden group cursor-pointer transition-all duration-500 bg-white shadow-xl h-full border-none"
                      onClick={() => navigateToServices(service.name)}
                    >
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.7 }}
                          className="w-full h-full"
                        >
                          <img 
                            src={service.image} 
                            alt={service.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                      <CardContent className="p-4 bg-white">
                        <div className="flex flex-col items-center justify-center">
                          <h3 className="text-primary font-serif italic text-xl font-medium mb-2 text-center">
                            {service.name}
                          </h3>
                          <motion.div 
                            className="h-0.5 w-12 bg-gradient-to-r from-orange-400 to-orange-300 mb-2"
                            whileHover={{ width: "4rem" }}
                          ></motion.div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-xs text-primary/70 font-medium hover:text-primary transition-colors"
                          >
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 space-x-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-orange-100 hover:bg-orange-200 text-orange-600" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-orange-100 hover:bg-orange-200 text-orange-600" />
            </div>
          </Carousel>
        </motion.div>
        
        {/* Services Grid - Arranged in rows of 4 */}
        <div className="mt-16">          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-7xl mx-auto"
          >
            <ServicesGrid 
              services={servicesList} 
              onServiceClick={(service) => navigateToServices(service.name)} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(PhotoSlideshow);
