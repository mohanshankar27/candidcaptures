
import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-gray-700 max-w-3xl mx-auto font-akaya">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
