
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ParticleButton } from '@/components/ui/particle-button';
import { Camera, Heart, Party, Building } from 'lucide-react';
import RunningScrawl from '@/components/gallery/RunningScrawl';
import { motion } from 'framer-motion';
import { InView } from '@/components/ui/in-view';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Wedding Photography",
      description: "Capturing the magic and emotions of your special day with elegant and timeless photography.",
      icon: <Heart className="w-8 h-8 text-primary/80" />,
      path: "/categories/wedding",
      image: "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png"
    },
    {
      title: "Portrait Photography",
      description: "Professional portraits that capture personality and character for individuals, families, and businesses.",
      icon: <Camera className="w-8 h-8 text-primary/80" />,
      path: "/categories/portrait",
      image: "/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png"
    },
    {
      title: "Event Photography",
      description: "Comprehensive coverage of your special events, from corporate functions to private celebrations.",
      icon: <Party className="w-8 h-8 text-primary/80" />,
      path: "/categories/event",
      image: "/lovable-uploads/0abd204c-da72-4a05-87ae-39929aeedd9f.png"
    },
    {
      title: "Commercial Photography",
      description: "High-quality commercial photography for products, real estate, food, and corporate branding.",
      icon: <Building className="w-8 h-8 text-primary/80" />,
      path: "/categories/commercial",
      image: "/lovable-uploads/469e56bd-78fb-4a44-b55c-04dfba69656b.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <RunningScrawl message="Photography Services • Wedding • Portrait • Event • Commercial • Family • Fashion" />

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <InView
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Photography Categories</h1>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore our range of professional photography services tailored to meet your specific needs and capture your special moments.
              </p>
            </InView>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => (
              <InView
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewOptions={{ once: true, threshold: 0.2 }}
              >
                <motion.div 
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2">
                    {category.icon}
                  </div>
                  <div className="p-6 relative z-10 -mt-12 bg-white dark:bg-gray-800 rounded-t-3xl">
                    <h2 className="text-2xl font-bold text-primary mb-3">{category.title}</h2>
                    <p className="text-muted-foreground mb-5">{category.description}</p>
                    <ParticleButton
                      variant="default"
                      size="sm"
                      className="w-full"
                      successDuration={800}
                      onSuccess={() => navigate(category.path)}
                    >
                      Explore {category.title}
                    </ParticleButton>
                  </div>
                </motion.div>
              </InView>
            ))}
          </div>

          <div className="text-center">
            <InView
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="mb-6 text-muted-foreground">
                Looking for a comprehensive overview of all our services?
              </p>
              <ParticleButton
                variant="outline"
                size="lg"
                successDuration={800}
                onSuccess={() => navigate('/services')}
              >
                View All Services
              </ParticleButton>
            </InView>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
