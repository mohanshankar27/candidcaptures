
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function InViewGallery() {
  const navigate = useNavigate();
  
  // Gallery images with their corresponding service categories
  const galleryImagesWithCategories = [
    { src: '/lovable-uploads/0abd204c-da72-4a05-87ae-39929aeedd9f.png', category: 'Concept shoot' },
    { src: '/lovable-uploads/0da1d025-7654-4fe8-928f-c4b58b4f6a2c.png', category: 'Wedding Photography' },
    { src: '/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png', category: 'Fashion Photography' },
    { src: '/lovable-uploads/0ef8c636-5a0e-4fe4-aedb-03f82bc3c8d4.png', category: 'Product Photography' },
    { src: '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png', category: 'Event Photography' },
    { src: '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png', category: 'Family Portraits' },
    { src: '/lovable-uploads/3346c7fa-c327-4873-a6e2-35da082a7f6e.png', category: 'Food Photography' },
    { src: '/lovable-uploads/335052c1-47b5-40f4-88c9-f69b5ae52ebb.png', category: 'Maternity Photography' },
    { src: '/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png', category: 'Matrimonial Portfolios' },
    { src: '/lovable-uploads/38c938f6-27b6-4b7c-80c8-02a42c8cf9d3.png', category: 'New Born Baby Shoot' },
    { src: '/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png', category: 'Toddler & Children' },
    { src: '/lovable-uploads/432982f3-f8c4-40d8-b5da-0c55198c9d7b.png', category: 'Special Services' },
  ];

  const handleImageClick = (category: string) => {
    // Navigate to the Services page with the selected service category
    navigate('/services', { state: { selectedService: category } });
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-arjulian">
            Glimpse of Our Work
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-akaya">
            Click on any image to explore that photography category
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <InView
            viewOptions={{ once: true, margin: "0px 0px -150px 0px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.09 },
              },
            }}
          >
            <div className="columns-2 gap-4 sm:columns-3 md:columns-4">
              {galleryImagesWithCategories.map((item, index) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  }}
                  key={index}
                  className="mb-4 relative group cursor-pointer"
                  onClick={() => handleImageClick(item.category)}
                >
                  <img
                    src={item.src}
                    alt={`${item.category} sample`}
                    className="w-full rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                    <div className="text-white flex flex-col items-center">
                      <Camera size={24} />
                      <span className="text-sm mt-2">View {item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </InView>
        </div>
      </div>
    </div>
  );
}
