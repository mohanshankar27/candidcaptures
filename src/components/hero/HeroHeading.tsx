
import React from "react";

const HeroHeading = () => {
  return (
    <h1 className="flex flex-col text-5xl md:text-7xl lg:text-8xl font-serif italic font-bold mb-2 tracking-tight animate-fadeIn">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Welcome to</span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">Candid Captures</span>
    </h1>
  );
};

export default HeroHeading;
