
interface GalleryIndicatorsProps {
  count: number;
  activeIndex: number;
  onIndicatorClick: (index: number) => void;
}

const GalleryIndicators = ({ 
  count, 
  activeIndex, 
  onIndicatorClick 
}: GalleryIndicatorsProps) => {
  return (
    <div className="flex justify-center mt-4 gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all ${
            activeIndex === index ? "bg-orange-500 w-4" : "bg-gray-300"
          }`}
          onClick={() => onIndicatorClick(index)}
        />
      ))}
    </div>
  );
};

export default GalleryIndicators;
