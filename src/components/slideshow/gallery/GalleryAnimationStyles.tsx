
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
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes rotate3d {
          0% { transform: rotate3d(0, 1, 0, 0deg); }
          100% { transform: rotate3d(0, 1, 0, 360deg); }
        }
        
        @keyframes depth-shift {
          0% { transform: translateZ(0px); }
          50% { transform: translateZ(30px); }
          100% { transform: translateZ(0px); }
        }
        
        @keyframes color-shift {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(5deg); }
          100% { filter: hue-rotate(0deg); }
        }
        
        .animate-shine {
          animation: shine 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-rotate3d {
          animation: rotate3d 20s linear infinite;
        }
        
        .animate-depth-shift {
          animation: depth-shift 8s ease-in-out infinite;
        }
        
        .animate-color-shift {
          animation: color-shift 10s ease-in-out infinite;
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
        
        /* 3D Card Effect Classes */
        .card-3d-container {
          perspective: 1500px;
          transform-style: preserve-3d;
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .card-3d:hover {
          transform: rotateY(5deg) rotateX(2deg) translateZ(10px);
        }
        
        .card-3d-face {
          backface-visibility: hidden;
        }
        
        .card-3d-shadow {
          position: absolute;
          top: 5%;
          left: 5%;
          width: 90%;
          height: 90%;
          background: rgba(0,0,0,0.2);
          filter: blur(20px);
          transform: translateZ(-50px) rotateX(80deg);
          transform-style: preserve-3d;
          opacity: 0.5;
        }
        
        /* Elementor Swiper Advanced Styles */
        .elementor-main-swiper {
          overflow: hidden;
          width: 100%;
          perspective: 1500px;
        }
        
        .swiper-wrapper {
          display: flex;
          align-items: center;
          perspective: 1500px;
          transform-style: preserve-3d;
          position: relative;
          z-index: 1;
          transition: transform 0.6s;
        }
        
        .swiper-slide {
          transition: all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
          transform-origin: center center;
          transform-style: preserve-3d;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }
        
        .elementor-swiper-slide {
          transition: all 0.7s ease-in-out;
          backface-visibility: hidden;
          will-change: transform, opacity, box-shadow;
        }
        
        .swiper-coverflow .swiper-wrapper {
          perspective: 1200px;
        }
        
        .swiper-3d {
          perspective: 1500px;
        }
        
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }
        
        .swiper-3d .swiper-slide-shadow-left {
          background-image: linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0));
        }
        
        .swiper-3d .swiper-slide-shadow-right {
          background-image: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0));
        }
        
        .swiper-3d .swiper-slide-shadow-top {
          background-image: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0));
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }
        
        .swiper-3d .swiper-slide-shadow-bottom {
          background-image: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0));
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }
        
        .active-slide-zoom {
          transform: scale(1.05) translateZ(40px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
          z-index: 2;
        }
        
        .prev-slide-position {
          transform: translateX(-20%) rotateY(20deg) translateZ(-100px);
          filter: brightness(0.7);
          z-index: 1;
        }
        
        .next-slide-position {
          transform: translateX(20%) rotateY(-20deg) translateZ(-100px);
          filter: brightness(0.7);
          z-index: 1;
        }
        
        .far-slide-position {
          transform: scale(0.8) translateZ(-200px);
          filter: brightness(0.5) blur(1px);
          opacity: 0.6;
          z-index: 0;
        }
        
        .bg-gradient-gold {
          background: linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(252,211,77,0.1) 50%, rgba(251,191,36,0.1) 100%);
        }
        
        .text-shadow-gold {
          text-shadow: 0 0 2px rgba(251,191,36,0.3), 0 0 4px rgba(251,191,36,0.2);
        }
        
        /* Advanced 3D gallery effects */
        .gallery-reflection {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%);
          transform: rotateX(180deg) translateY(60%);
          opacity: 0.5;
          filter: blur(1px);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
        }
        
        .carousel-3d-container {
          perspective: 2000px;
        }
        
        .carousel-3d-stage {
          transform-style: preserve-3d;
          transition: transform 0.5s;
        }
        
        .slide-caption-3d {
          transform: translateZ(20px);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
        }
      `}
    </style>
  );
};

export default GalleryAnimationStyles;
