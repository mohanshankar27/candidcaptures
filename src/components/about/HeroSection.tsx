
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We are passionate about capturing the beauty of life's most precious moments. Our team of skilled photographers is dedicated to creating stunning visual narratives that you'll cherish forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
