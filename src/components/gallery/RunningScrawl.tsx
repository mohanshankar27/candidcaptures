
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface RunningScrawlProps {
  message: string;
}

const RunningScrawl: React.FC<RunningScrawlProps> = ({ message }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full bg-[#ea384c] py-2 overflow-hidden will-change-transform">
      <div className="relative">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: isMobile ? 15 : 30, // Significantly faster on mobile for better performance
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="whitespace-nowrap inline-block will-change-transform"
          style={{
            containIntrinsicSize: "auto 100%", // Performance hint for browser
            contentVisibility: "auto", // Optimization for off-screen content
          }}
        >
          <span className="text-white font-semibold text-lg tracking-wider font-arjulian">
            {message} • {message} • {message} •
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default RunningScrawl;
