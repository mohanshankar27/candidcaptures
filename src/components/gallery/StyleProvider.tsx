
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
          
          /* Enhanced 3D effects */
          .flip-card-inner {
            transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.3);
          }
          
          .flip-card-front, .flip-card-back {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            position: absolute;
            width: 100%;
            height: 100%;
            transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .flip-card-front {
            z-index: 2;
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
            z-index: 1;
          }
          
          .flip-card:hover .flip-card-inner {
            box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.25);
          }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes cardGlow {
            0% { box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.3); }
            50% { box-shadow: 0 20px 50px -10px rgba(251, 191, 36, 0.3); }
            100% { box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.3); }
          }
          
          .flip-card-inner {
            animation: cardGlow 6s ease-in-out infinite;
          }
          
          .is-flipped .flip-card-inner {
            animation: cardGlow 3s ease-in-out infinite;
          }
        `}
      </style>
    </>
  );
};

export default StyleProvider;
