
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroActions = () => {
  return (
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
  );
};

export default HeroActions;
