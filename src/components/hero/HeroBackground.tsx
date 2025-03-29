
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-blue-200/30 blur-3xl"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/30 to-primary/20 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-200/20 to-blue-200/30 blur-3xl"></div>
    </div>
  );
};

export default HeroBackground;
