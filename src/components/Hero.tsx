
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-blue-200/30 blur-3xl"></div>
        <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/30 to-primary/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-200/20 to-blue-200/30 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="text-center px-4 max-w-5xl backdrop-blur-sm py-12 rounded-2xl">
          <div className="mb-3 flex justify-center">
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider">
              PHOTOGRAPHY REDEFINED
            </div>
          </div>
          
          <h1 className="flex flex-col text-5xl md:text-7xl lg:text-8xl font-serif italic font-bold mb-2 tracking-tight animate-fadeIn">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Welcome to</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">Candid Captures</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-serif italic mt-4 animate-fadeIn delay-300 max-w-3xl mx-auto">
            Preserving your precious moments with elegance
          </p>
          
          <div className="mt-8 mb-10 max-w-3xl mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition duration-500"></div>
            <p className="relative text-xl md:text-3xl font-semibold text-white animate-fadeIn delay-500 px-8 py-4 rounded-xl bg-primary/90 backdrop-blur-sm border border-blue-100/40 shadow-lg">
              "Every Click Tells Your Unique Story — Moments Capture, Memories Forever"
            </p>
          </div>
          
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-2 animate-fadeIn delay-300"></div>
          
          <div className="mt-10 animate-fadeIn delay-700 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border border-white/10"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
