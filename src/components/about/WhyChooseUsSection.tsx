
import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're committed to providing an exceptional photography experience from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Team</h3>
                <p className="text-gray-600">
                  Our team of experienced photographers has the expertise and artistic vision to create stunning photographs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
                <p className="text-gray-600">
                  We use top-of-the-line cameras, lenses, and lighting to ensure exceptional image quality for every shoot.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
                <p className="text-gray-600">
                  We create a comfortable, enjoyable environment for every client, resulting in natural, authentic photographs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
                <p className="text-gray-600">
                  We understand the excitement of seeing your photos, so we commit to delivering your images promptly.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Creative Approach</h3>
                <p className="text-gray-600">
                  Our unique artistic approach helps us see beauty in every moment, creating images that stand out.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority, and we work closely with you to ensure we meet and exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
