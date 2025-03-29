
import React from 'react';

// Component to provide necessary CSS styling for 3D transforms
const StyleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .transform-rotate-y-180 {
            transform: rotateY(180deg);
          }
          .is-flipped .flip-card-inner {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </>
  );
};

export default StyleProvider;
