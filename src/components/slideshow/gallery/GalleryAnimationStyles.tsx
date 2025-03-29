
const GalleryAnimationStyles = () => {
  return (
    <style>
      {`
        @keyframes shine {
          0% { transform: translateX(-200%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes pulseGlow {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .animate-shine {
          animation: shine 4s ease-in-out infinite;
        }
        
        .golden-light-effect {
          box-shadow: 0 0 25px 5px rgba(251,191,36,0.6), 0 0 15px 2px rgba(251,191,36,0.4) inset;
          opacity: 0.8;
          z-index: 1;
          animation: pulseGlow 4s ease-in-out infinite;
        }
        
        .golden-border-glow {
          border: 2px solid rgba(251,191,36,0.2);
          box-shadow: 0 0 15px rgba(251,191,36,0.5), 0 0 5px rgba(251,191,36,0.3) inset;
          animation: pulseGlow 4s ease-in-out infinite;
        }
        
        .swiper-container {
          overflow: hidden;
          width: 100%;
        }
        
        .swiper-wrapper {
          display: flex;
          align-items: center;
          perspective: 1500px;
          transform-style: preserve-3d;
        }
        
        .swiper-slide {
          transition: transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
          transform-origin: center center;
          transform-style: preserve-3d;
        }
        
        .bg-gradient-gold {
          background: linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(252,211,77,0.1) 50%, rgba(251,191,36,0.1) 100%);
        }
        
        .text-shadow-gold {
          text-shadow: 0 0 2px rgba(251,191,36,0.3), 0 0 4px rgba(251,191,36,0.2);
        }
      `}
    </style>
  );
};

export default GalleryAnimationStyles;
