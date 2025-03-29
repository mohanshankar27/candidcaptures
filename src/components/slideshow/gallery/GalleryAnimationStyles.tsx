
const GalleryAnimationStyles = () => {
  return (
    <style>
      {`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          60% { transform: translateX(150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
        
        .animate-shine {
          animation: shine 3s ease-out infinite;
        }
        
        .swiper-container {
          overflow: hidden;
          width: 100%;
        }
        
        .swiper-wrapper {
          display: flex;
          align-items: center;
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        
        .swiper-slide {
          transition: transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1);
          transform-origin: center center;
          transform-style: preserve-3d;
        }
      `}
    </style>
  );
};

export default GalleryAnimationStyles;
