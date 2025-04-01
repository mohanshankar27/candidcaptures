
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { ParticleButton } from '@/components/ui/particle-button';
import { useNavigate } from 'react-router-dom';
import RunningScrawl from '@/components/gallery/RunningScrawl';
import { commercialGalleryItems } from '@/data/gallery-data';

const Commercial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <RunningScrawl message="Commercial Photography • Product Images • Food Photography • Real Estate • Corporate Branding" />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Commercial Photography</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our commercial photography services provide businesses with high-quality visual content
              that strengthens brands, showcases products, and engages customers.
            </p>
          </div>

          <InteractiveBentoGallery
            mediaItems={commercialGalleryItems}
            title="Commercial Photography Collection"
            description="Explore our commercial work — drag to rearrange, click to view"
          />

          <div className="mt-12 text-center">
            <ParticleButton 
              variant="default" 
              size="lg"
              className="mx-auto"
              successDuration={800}
              onSuccess={() => navigate('/pricing')}
            >
              Get Commercial Photography Quote
            </ParticleButton>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Commercial;
