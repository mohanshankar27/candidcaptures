
import { motion } from 'framer-motion';

const LightRays = () => {
  return (
    <>
      {/* Static light rays */}
      <div className="absolute top-0 left-1/3 w-0.5 h-40 bg-gradient-to-b from-amber-300/20 via-orange-300/10 to-transparent skew-x-12 opacity-30"></div>
      
      <div className="absolute top-20 right-1/4 w-0.5 h-32 bg-gradient-to-b from-amber-300/15 via-orange-200/10 to-transparent -skew-x-12 opacity-25"></div>
      
      {/* Static central light ray */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-1 h-96 bg-gradient-to-b from-amber-300/30 via-orange-300/25 to-transparent opacity-40"></div>
      
      <div className="absolute top-60 left-2/3 w-0.5 h-24 bg-gradient-to-b from-amber-200/25 via-orange-200/20 to-transparent skew-x-6 opacity-30"></div>
      
      {/* Static additional light beams */}
      <div className="absolute top-1/3 right-1/3 w-0.5 h-60 bg-gradient-to-b from-amber-200/15 via-orange-300/10 to-transparent -skew-x-3 opacity-20"></div>
      
      <div className="absolute bottom-1/3 left-1/3 w-0.5 h-40 bg-gradient-to-t from-amber-300/20 via-orange-200/15 to-transparent skew-x-3 opacity-25"></div>
    </>
  );
};

export default LightRays;
