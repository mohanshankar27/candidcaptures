
import { motion } from 'framer-motion';

const GlowElements = () => {
  return (
    <>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/40 via-amber-300/30 to-orange-400/30 blur-3xl opacity-50"></div>
      
      <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100/40 via-amber-200/30 to-orange-300/20 blur-3xl opacity-40"></div>
      
      <div className="absolute -bottom-40 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-orange-300/40 via-amber-400/30 to-orange-400/40 blur-3xl opacity-60"></div>
      
      {/* Stable central glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-amber-300/20 via-orange-400/10 to-amber-200/20 blur-3xl opacity-30"></div>
    </>
  );
};

export default GlowElements;
