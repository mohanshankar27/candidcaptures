
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-background">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-2 tracking-tight animate-fadeIn">
            Welcome to Candid Captures
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mt-8 animate-fadeIn delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
