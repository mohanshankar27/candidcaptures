
import React from "react";

const HeroQuote = () => {
  return (
    <div className="mt-8 mb-10 max-w-3xl mx-auto relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition duration-500"></div>
      <p className="relative text-xl md:text-3xl font-semibold text-white animate-fadeIn delay-500 px-8 py-4 rounded-xl bg-primary/90 backdrop-blur-sm border border-blue-100/40 shadow-lg">
        "Every Click Tells Your Unique Story — Moments Capture, Memories Forever"
      </p>
    </div>
  );
};

export default HeroQuote;
