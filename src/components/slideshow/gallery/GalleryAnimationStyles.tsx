
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
          animation: shine 3s ease-in-out infinite;
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
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          transform-origin: center center;
          transform-style: preserve-3d;
        }
      `}
    </style>
  );
};

export default GalleryAnimationStyles;
