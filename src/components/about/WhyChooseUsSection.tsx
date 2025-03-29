
import React from "react";
import SectionHeader from "./common/SectionHeader";
import FeaturesList from "./whyChooseUs/FeaturesList";

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Choose Us"
            description="We're committed to providing an exceptional photography experience from start to finish."
          />
          
          <FeaturesList />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
