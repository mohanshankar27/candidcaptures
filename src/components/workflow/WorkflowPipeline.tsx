
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Camera, PaintRoller, Package } from "lucide-react";

const WorkflowPipeline = () => {
  const stages = [
    {
      id: "planning",
      name: "Pre Planning",
      icon: <Calendar className="h-8 w-8 text-white" />,
      description: "We take time to understand your needs and plan every detail of the shoot.",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "shoot",
      name: "On Shoot",
      icon: <Camera className="h-8 w-8 text-white" />,
      description: "Our professional team captures perfect shots with state-of-the-art equipment.",
      color: "from-green-600 to-green-800"
    },
    {
      id: "processing",
      name: "Post Processing",
      icon: <PaintRoller className="h-8 w-8 text-white" />,
      description: "Expert editing enhances your photos with careful attention to detail.",
      color: "from-orange-600 to-orange-800"
    },
    {
      id: "delivery",
      name: "Deliver",
      icon: <Package className="h-8 w-8 text-white" />,
      description: "Receive your beautifully finished photos in your preferred format.",
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
              Our systematic approach ensures consistent, high-quality results for every project.
            </p>
          </div>

          <div className="perspective-[1200px] transform-style-preserve-3d">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0"
            >
              {stages.map((stage, index) => (
                <React.Fragment key={stage.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group w-full md:w-1/4 relative"
                  >
                    {/* 3D Stage Box */}
                    <div className="transform transition-all duration-500 group-hover:translate-y-[-10px] group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] group-hover:scale-105">
                      <div className={`relative bg-gradient-to-br ${stage.color} p-6 rounded-xl shadow-xl h-full min-h-[240px] flex flex-col items-center justify-center text-center border border-white/10`}>
                        {/* Glowing background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Number bubble */}
                        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                        
                        {/* Icon */}
                        <div className="mb-4 p-4 bg-black/30 rounded-full">
                          {stage.icon}
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-xl font-bold text-white mb-2">{stage.name}</h3>
                        <p className="text-white/80 text-sm">{stage.description}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow between steps */}
                  {index < stages.length - 1 && (
                    <div className="hidden md:block transform-style-preserve-3d">
                      <ArrowRight className="h-8 w-8 text-primary transform transition-transform group-hover:translate-x-2" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
            
            {/* Reflective surface */}
            <div className="mt-6 h-12 bg-gradient-to-b from-black/10 to-transparent w-full rounded-lg opacity-50 blur-sm transform scale-y-[-0.5] translate-y-[-20px] hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowPipeline;
