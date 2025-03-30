
import React from 'react';

const ElementorStyles = () => {
  return (
    <style>
      {`
        .elementor-main-swiper {
          overflow: hidden;
          position: relative;
          transform-style: preserve-3d;
          width: 100%;
        }
        
        .swiper-coverflow .swiper-wrapper {
          perspective: 2000px;
        }
        
        .swiper-3d .swiper-slide {
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        .swiper-watch-progress .swiper-slide {
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .swiper-initialized {
          overflow: hidden;
          position: relative;
        }
        
        .swiper-horizontal {
          touch-action: pan-y;
        }
        
        .swiper-pointer-events {
          touch-action: pan-y;
        }
        
        .elementor-swiper-wrapper {
          display: flex;
          align-items: center;
          transform-style: preserve-3d;
          transition: transform 0.2s;
          width: 100%;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        #glimpse {
          transform-style: preserve-3d;
          perspective: 3000px;
        }
        
        #glimpse::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(251,191,36,0.05) 0%, rgba(251,191,36,0) 70%);
          pointer-events: none;
        }
        
        .container-fluid {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }
        
        .carousel-3d-container {
          width: 100vw;
          max-width: 100vw;
          margin-left: calc(-50vw + 50%);
          padding: 0;
        }
        
        @media (min-width: 1400px) {
          .carousel-3d-container {
            padding: 0;
          }
        }
        
        .golden-border-glow {
          box-shadow: 0 0 15px 2px rgba(251,191,36,0.3);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        
        .card-3d-face:hover .golden-border-glow {
          opacity: 1;
        }
      `}
    </style>
  );
};

export default ElementorStyles;
