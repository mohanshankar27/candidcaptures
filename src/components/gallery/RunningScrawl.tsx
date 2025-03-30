
import React from 'react';
import { motion } from 'framer-motion';

interface RunningScrawlProps {
  message: string;
}

const RunningScrawl: React.FC<RunningScrawlProps> = ({ message }) => {
  return (
    <div className="w-full bg-[#ea384c] py-2 overflow-hidden">
      <div className="relative">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="whitespace-nowrap inline-block"
        >
          <span className="text-white font-semibold text-lg tracking-wider font-akaya">
            {message} • {message} • {message} • {message} • {message} • {message} •
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default RunningScrawl;
