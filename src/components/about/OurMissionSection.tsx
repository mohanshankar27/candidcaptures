
import React from "react";
import { Camera, Heart, Star } from "lucide-react";

const OurMissionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At CANDID CAPTURE, our mission is to preserve your most precious moments through authentic photography that tells your unique story. We believe that every person, every family, and every occasion has a beautiful narrative worth capturing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">
                <Camera className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Capture Moments</h3>
              <p className="text-gray-600">
                We focus on capturing the authentic, unscripted moments that make life beautiful and worth remembering.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">
                <Heart className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Emotions</h3>
              <p className="text-gray-600">
                Our photography aims to evoke emotions and tell stories that resonate with you for years to come.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">
                <Star className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Preserve Memories</h3>
              <p className="text-gray-600">
                We provide high-quality photographs that preserve your precious memories for generations to enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
