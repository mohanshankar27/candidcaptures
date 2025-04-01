
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ParticleButtonDemo } from '@/components/ui/particle-button-demo';

const ButtonDemo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Interactive Buttons Demo</h1>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            This page demonstrates our interactive ParticleButton component with various styles and configurations.
          </p>
          
          <ParticleButtonDemo />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ButtonDemo;
