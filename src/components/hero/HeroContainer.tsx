
import React from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const HeroContainer = () => {
  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default HeroContainer;
