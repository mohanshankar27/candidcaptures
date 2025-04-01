
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HamburgerButton } from '@/components/ui/hamburger-button';

const HamburgerButtonDemo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Animated Hamburger Button Demo</h1>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            This page demonstrates our animated hamburger button component with a clean, interactive animation.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="p-8 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm border border-amber-100/20">
              <HamburgerButton />
            </div>
            
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-xl font-semibold mb-4">Usage</h2>
              <p className="text-muted-foreground mb-4">
                The HamburgerButton is a self-contained component that manages its own open/closed state and
                provides an animated hamburger menu icon that transforms on click.
              </p>
              <pre className="bg-slate-900 text-slate-50 p-4 rounded-md text-left text-sm overflow-auto">
                {`import { HamburgerButton } from '@/components/ui/hamburger-button';

// Use in your component
<HamburgerButton />`}
              </pre>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HamburgerButtonDemo;
