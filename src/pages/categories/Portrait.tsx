
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { ParticleButton } from '@/components/ui/particle-button';
import { useNavigate } from 'react-router-dom';
import RunningScrawl from '@/components/gallery/RunningScrawl';
import { portraitGalleryItems } from '@/data/gallery-data';

const Portrait = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <RunningScrawl message="Portrait Photography • Professional Headshots • Family Portraits • Creative Sessions" />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Portrait Photography</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our portrait photography services capture personality and character through thoughtful composition,
              lighting, and personalized sessions tailored to your needs.
            </p>
          </div>

          <InteractiveBentoGallery
            mediaItems={portraitGalleryItems}
            title="Portrait Photography Collection"
            description="Explore our portrait photography portfolio — drag to rearrange, click to view"
          />

          <div className="mt-12 text-center">
            <ParticleButton 
              variant="default" 
              size="lg"
              className="mx-auto"
              successDuration={800}
              onSuccess={() => navigate('/pricing')}
            >
              View Portrait Packages
            </ParticleButton>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portrait;
