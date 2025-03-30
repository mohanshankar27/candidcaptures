
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Camera, PaintRoller, Package } from "lucide-react";
import "./WorkflowStyles.css";

const WorkflowPipeline = () => {
  const stages = [
    {
      id: "planning",
      name: "Pre-Planning",
      icon: <Calendar className="h-8 w-8 text-white" />,
      description: "We plan and analyze client requirements",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "shoot",
      name: "On Shoot",
      icon: <Camera className="h-8 w-8 text-white" />,
      description: "We capture the precise moments",
      color: "from-green-600 to-green-800"
    },
    {
      id: "processing",
      name: "Post Processing",
      icon: <PaintRoller className="h-8 w-8 text-white" />,
      description: "Enhancing your moments",
      color: "from-orange-600 to-orange-800"
    },
    {
      id: "delivery",
      name: "Delivered",
      icon: <Package className="h-8 w-8 text-white" />,
      description: "Get a lifetime moment as deliverables",
      color: "from-purple-600 to-purple-800"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Workflow Matters A Lot</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide high quality services since 2010
            </p>
          </div>

          <div className="perspective-[1200px]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline Progress Bar */}
              <div className="hidden md:block absolute top-[80px] left-[60px] right-[60px] h-1 bg-gray-300 z-0">
                <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: '100%' }}></div>
              </div>

              {/* Timeline Points */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-8">
                {stages.map((stage, index) => (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group w-full md:w-1/4 relative text-center"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute top-[74px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-600 z-10"></div>
                    
                    {/* Stage Name */}
                    <h3 className="text-xl font-bold text-gray-800 mb-8">{stage.name}</h3>
                    
                    {/* 3D Box with Icon */}
                    <div className="transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] group-hover:scale-105 mb-6">
                      <div className={`mx-auto bg-gradient-to-br ${stage.color} p-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                        {stage.icon}
                      </div>
                      
                      {/* Reflection effect */}
                      <div className="reflection"></div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600">{stage.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowPipeline;
