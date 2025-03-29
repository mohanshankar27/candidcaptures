
import React from "react";
import FeatureItem from "./FeatureItem";

// Features data
const features = [
  {
    id: 1,
    title: "Professional Team",
    description: "Our team of experienced photographers has the expertise and artistic vision to create stunning photographs."
  },
  {
    id: 2,
    title: "Premium Equipment",
    description: "We use top-of-the-line cameras, lenses, and lighting to ensure exceptional image quality for every shoot."
  },
  {
    id: 3,
    title: "Personalized Experience",
    description: "We create a comfortable, enjoyable environment for every client, resulting in natural, authentic photographs."
  },
  {
    id: 4,
    title: "Quick Turnaround",
    description: "We understand the excitement of seeing your photos, so we commit to delivering your images promptly."
  },
  {
    id: 5,
    title: "Creative Approach",
    description: "Our unique artistic approach helps us see beauty in every moment, creating images that stand out."
  },
  {
    id: 6,
    title: "Customer Satisfaction",
    description: "Your satisfaction is our priority, and we work closely with you to ensure we meet and exceed your expectations."
  }
];

const FeaturesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature) => (
        <FeatureItem
          key={feature.id}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesList;
