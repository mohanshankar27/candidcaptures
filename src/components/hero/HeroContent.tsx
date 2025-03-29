
import React from "react";
import HeroHeading from "./HeroHeading";
import HeroTagline from "./HeroTagline";
import HeroQuote from "./HeroQuote";
import HeroActions from "./HeroActions";

const HeroContent = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
      <div className="text-center px-4 max-w-5xl backdrop-blur-sm py-12 rounded-2xl">
        <div className="mb-3 flex justify-center">
          <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider">
            PHOTOGRAPHY REDEFINED
          </div>
        </div>
        
        <HeroHeading />
        <HeroTagline />
        <HeroQuote />
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-2 animate-fadeIn delay-300"></div>
        
        <HeroActions />
      </div>
    </div>
  );
};

export default HeroContent;
