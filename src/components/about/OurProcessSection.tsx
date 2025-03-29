
import React from "react";

const OurProcessSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a structured approach to ensure we deliver the best possible results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We start with a detailed consultation to understand your vision and preferences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-600">
                We meticulously plan every aspect of the shoot to ensure we capture exactly what you want.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Photoshoot</h3>
              <p className="text-gray-600">
                Our skilled photographers work to capture the perfect moments during your shoot.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Delivery</h3>
              <p className="text-gray-600">
                We provide professionally edited images in your preferred format in a timely manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
