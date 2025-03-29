
import React from "react";
import { Heart } from "lucide-react";

const OurStorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded with a passion for authentic storytelling, CANDID CAPTURE has evolved into a premier photography studio specializing in capturing life's most precious moments with artistry and emotion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that photography is more than just taking pictures – it's about creating visual narratives that evoke emotions and preserve memories for generations to come.
            </p>
            
            <div className="flex items-center space-x-2 text-primary">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">Authentic moments, beautifully captured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
