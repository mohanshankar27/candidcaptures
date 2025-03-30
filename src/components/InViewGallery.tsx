
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import servicesList from "@/data/servicesList";

export function InViewGallery() {
  const navigate = useNavigate();
  
  // Updated gallery images with their corresponding service categories
  const galleryImagesWithCategories = [
    { src: '/lovable-uploads/fb13bae7-33ad-4972-b884-47d4f113d139.png', category: 'Concept shoot' },
    { src: '/lovable-uploads/d3ea53b8-be87-48d7-bfab-5846b813948e.png', category: 'Wedding Photography' },
    { src: '/lovable-uploads/702c4c46-bfdd-4ecf-a98c-37ccd7b5f7b4.png', category: 'Fashion Photography' },
    { src: '/lovable-uploads/fd7df534-2749-42ba-bfa7-6188fb3daf76.png', category: 'Product Photography' },
    { src: '/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png', category: 'Event Photography' },
    { src: '/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png', category: 'Family Portraits' },
    { src: '/lovable-uploads/9c986aa2-6da0-4710-b9f7-c6195506ba38.png', category: 'Food Photography' },
    { src: '/lovable-uploads/8b3e3260-20a8-4a51-ac28-59e1f1b41bb2.png', category: 'Maternity Photography' },
    { src: '/lovable-uploads/0ef8c636-5a0e-4fe4-aedb-03f82bc3c8d4.png', category: 'Matrimonial Portfolios' },
    { src: '/lovable-uploads/6066b255-5f3a-4f05-b2b7-f144098189da.png', category: 'New Born Baby Shoot' },
    { src: '/lovable-uploads/fe26bc26-2a66-4dfb-aeb8-db5490eeaea9.png', category: 'Toddler & Children' },
    { src: '/lovable-uploads/43b3b2f5-3919-44f7-8575-f1e18682bf73.png', category: 'Special Services' },
    { src: '/lovable-uploads/4b2215ec-b75e-423e-812a-6e97df0f3f51.png', category: 'Makeup shoot' },
    { src: '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png', category: 'Portraits & Portfolios' },
    { src: '/lovable-uploads/507c487a-ec87-4401-ace4-4b27d7bcd2e0.png', category: 'Creative Makeup' },
    { src: '/lovable-uploads/cad21907-840a-459a-8e84-261e5dd02084.png', category: 'Artists / Celebrities' },
    { src: '/lovable-uploads/c564d2e1-cf57-4560-aedd-4c9d12a5ba2b.png', category: 'Modelling & Artist Portfolios' },
    { src: '/lovable-uploads/38c938f6-27b6-4b7c-80c8-02a42c8cf9d3.png', category: 'Corporate & Short Videos' },
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
