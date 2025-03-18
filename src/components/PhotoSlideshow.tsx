
import { memo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import servicesList from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

// Map service names to appropriate images
const serviceImages = {
  'Concept shoot': "/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png",
  'Corporate & Short Videos': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'Corporate Headshots': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'E-Commerce & Catalogues': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
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
  const [activeGroup, setActiveGroup] = useState(0);
  
  // Group services for featured showcase
  const featuredServices = [
    serviceThumbnails.slice(0, 6),
    serviceThumbnails.slice(6, 12),
    serviceThumbnails.slice(12)
  ];

  const navigateToServices = (serviceName: string) => {
    navigate('/services');
    
    const matchingService = servicesList.find(service => service.name === serviceName);
    
    if (matchingService) {
      console.log(`Navigating to service: ${serviceName}`);
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
    <section id="gallery" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/3 w-40 h-40 rounded-full bg-primary blur-3xl"></div>
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
            className="inline-flex items-center gap-1 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            EXQUISITE COLLECTION
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-5xl font-serif italic font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
          >
            Our Photography Collection
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6"
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
                        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4 bg-white">
                        <div className="flex flex-col items-center justify-center">
                          <h3 className="text-primary font-serif italic text-xl font-medium mb-2 text-center">
                            {service.name}
                          </h3>
                          <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-blue-400 mb-2"></div>
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
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-primary/10 hover:bg-primary/20 text-primary" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-primary/10 hover:bg-primary/20 text-primary" />
            </div>
          </Carousel>
        </motion.div>
        
        {/* Featured Groups */}
        <div className="mt-16">
          <div className="flex justify-center mb-8 space-x-2">
            {featuredServices.map((_, index) => (
              <Button
                key={index}
                variant={activeGroup === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveGroup(index)}
                className={activeGroup === index ? "bg-primary text-white" : "text-primary"}
              >
                Group {index + 1}
              </Button>
            ))}
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6"
            key={activeGroup} // Force re-render for animation
          >
            {featuredServices[activeGroup].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className="transform transition-all duration-500 hover:scale-105"
              >
                <Card 
                  className="group cursor-pointer overflow-hidden transition-all duration-500 bg-white shadow-md hover:shadow-xl border-none"
                  onClick={() => navigateToServices(service.name)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <div className="w-full h-full overflow-hidden bg-white">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <CardContent className="pt-3 pb-3 px-3 text-center bg-white">
                    <h3 className="text-primary font-serif italic text-sm font-medium">
                      {service.name}
                    </h3>
                    <div className="h-0.5 w-0 group-hover:w-1/2 bg-gradient-to-r from-primary to-blue-400 mx-auto mt-1 transition-all duration-300"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(PhotoSlideshow);
