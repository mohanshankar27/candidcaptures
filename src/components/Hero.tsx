
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-background">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-bold text-primary mb-2 tracking-tight animate-fadeIn">
            Welcome to Candid Captures
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-serif italic mt-4 animate-fadeIn delay-300">
            Preserving your precious moments with elegance
          </p>
          
          <div className="mt-8 mb-10 max-w-3xl mx-auto">
            <p className="text-xl md:text-3xl font-semibold text-[#6E59A5] bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeIn delay-500 px-6 py-3 rounded-lg shadow-sm border border-purple-100">
              "Where Every Click Tells Your Unique Story — Moments Frozen, Memories Forever"
            </p>
          </div>
          
          <div className="h-1 w-24 bg-primary mx-auto mt-2 animate-fadeIn delay-300"></div>
          
          <div className="mt-10 animate-fadeIn delay-700">
            <Button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
