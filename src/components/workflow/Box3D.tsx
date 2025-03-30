
import React from "react";
import { motion } from "framer-motion";

interface Box3DProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Box3D: React.FC<Box3DProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group ${className}`}
    >
      <div className="transform transition-all duration-500 group-hover:translate-y-[-10px] group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] group-hover:scale-105">
        {children}
        
        {/* Reflection effect */}
        <div className="reflection" />
      </div>
    </motion.div>
  );
};

export default Box3D;
