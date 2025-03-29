
import { motion } from 'framer-motion';

const ShimmerEffects = () => {
  return (
    <>
      {/* Static ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-amber-100/3 to-transparent opacity-40"></div>
      
      {/* Static middle highlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-200/10 via-amber-300/20 to-orange-200/10 blur-3xl opacity-20"></div>
      
      {/* Static shimmer layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/5 via-orange-200/2 to-transparent opacity-10"></div>
      
      {/* Static light reflection effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-12 blur-md opacity-10"></div>
      
      {/* Static gold dust effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/2 via-transparent to-transparent opacity-30"></div>
    </>
  );
};

export default ShimmerEffects;
