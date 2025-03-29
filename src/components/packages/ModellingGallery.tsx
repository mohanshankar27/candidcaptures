
import React from 'react';

const ModellingGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <img 
        src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
        alt="Modelling Portfolio" 
        className="w-full h-64 object-cover rounded-md col-span-3 md:col-span-2"
      />
      <div className="grid grid-cols-1 gap-4">
        <img 
          src="/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png" 
          alt="Modelling Portfolio" 
          className="w-full h-[120px] object-cover rounded-md"
        />
        <img 
          src="/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png" 
          alt="Modelling Portfolio" 
          className="w-full h-[120px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ModellingGallery;
