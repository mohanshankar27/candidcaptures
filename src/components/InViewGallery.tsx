
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function InViewGallery() {
  const navigate = useNavigate();
  
  // Updated gallery images with their corresponding service categories
  const galleryImagesWithCategories = [
    { src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Concept shoot' },
    { src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Wedding Photography' },
    { src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Fashion Photography' },
    { src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Product Photography' },
    { src: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Event Photography' },
    { src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Family Portraits' },
    { src: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Food Photography' },
    { src: 'https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Maternity Photography' },
    { src: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Matrimonial Portfolios' },
    { src: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'New Born Baby Shoot' },
    { src: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Toddler & Children' },
    { src: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200', category: 'Special Services' },
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
