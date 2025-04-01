
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ParticleButton } from '@/components/ui/particle-button';
import { motion } from 'framer-motion';
import { Camera, Gift } from 'lucide-react';
import RunningScrawl from '@/components/gallery/RunningScrawl';

// Define a type for category items
interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  route: string;
}

// Category data
const categories: CategoryItem[] = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Capturing your special day with elegance and emotion.',
    image: '/lovable-uploads/38c938f6-27b6-4b7c-80c8-02a42c8cf9d3.png',
    route: '/categories/wedding'
  },
  {
    id: 'portrait',
    title: 'Portrait Photography',
    description: 'Professional portraits that showcase personality and character.',
    image: '/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png',
    route: '/categories/portrait'
  },
  {
    id: 'event',
    title: 'Event Photography',
    description: 'Preserving the moments that matter at your events.',
    image: '/lovable-uploads/8b3e3260-20a8-4a51-ac28-59e1f1b41bb2.png',
    route: '/categories/event'
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    description: 'High-quality images for your business and brand.',
    image: '/lovable-uploads/d5af9480-02f6-4601-98cd-5bd10840f0c8.png',
    route: '/categories/commercial'
  }
];

// Animation variants for the cards
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Categories = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <RunningScrawl message="Explore Our Photography Categories • Premium Photo Services • Book Your Session Today" />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Photography Categories</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our range of specialized photography services, each crafted with attention to detail and artistic vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="relative h-60 overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCategory === category.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-muted-foreground mb-5">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <ParticleButton
                      variant="default"
                      size="sm"
                      className="text-sm"
                      successDuration={500}
                      onSuccess={() => navigate(category.route)}
                    >
                      Explore {category.title.split(' ')[0]}
                    </ParticleButton>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate('/services')}
                      className="text-sm text-muted-foreground"
                    >
                      {index % 2 === 0 ? <Camera className="h-4 w-4 mr-1" /> : <Gift className="h-4 w-4 mr-1" />}
                      View Services
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <ParticleButton
              variant="outline"
              size="lg"
              className="mx-auto"
              successDuration={800}
              onSuccess={() => navigate('/services')}
            >
              View All Photography Services
            </ParticleButton>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
