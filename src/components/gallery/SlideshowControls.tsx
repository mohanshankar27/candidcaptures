
import React from 'react';

interface SlideshowControlsProps {
  onPrev: () => void;
  onNext: () => void;
  activeIndex: number;
  totalSlides: number;
}

const SlideshowControls = ({ onPrev, onNext, activeIndex, totalSlides }: SlideshowControlsProps) => {
  return (
    <div className="flex flex-col items-center mt-10 gap-6">
      <div className="flex items-center gap-2 mb-1">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <div 
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === idx ? "w-6 bg-gradient-to-r from-orange-400 to-orange-500" : "w-1.5 bg-orange-200"
            }`}
          />
        ))}
      </div>
      
      <div className="flex justify-center gap-5">
        <button 
          onClick={onPrev}
          className="h-12 w-12 rounded-full bg-white text-primary hover:bg-orange-50 border border-orange-100 shadow-md flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button 
          onClick={onNext}
          className="h-12 w-12 rounded-full bg-white text-primary hover:bg-orange-50 border border-orange-100 shadow-md flex items-center justify-center transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SlideshowControls;
