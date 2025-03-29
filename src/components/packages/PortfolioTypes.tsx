
import React from 'react';

interface PortfolioTypesProps {
  types: string[];
}

const PortfolioTypes: React.FC<PortfolioTypesProps> = ({ types }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-3 text-[#333333]">Portfolio Types We Specialize In</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {types.map((type, i) => (
          <div key={i} className="bg-primary/5 p-3 rounded-lg text-center text-slate-700 border border-primary/10">
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTypes;
