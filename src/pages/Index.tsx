
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import CommunicationSidebar from "@/components/CommunicationSidebar";
import OurServices from "@/components/OurServices";
import WorkflowPipeline from "@/components/workflow/WorkflowPipeline";
import MenuBarDemo from "@/components/MenuBarDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CommunicationSidebar />
      <Hero />
      <div className="container mx-auto px-4 py-8 mt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-[#ea384c] font-serif">
            Explore Our Services
          </h2>
          <p className="text-slate-600 mt-2">
            Discover our premium photography packages
          </p>
        </div>
        <MenuBarDemo />
      </div>
      <Gallery />
      <OurServices />
      <WorkflowPipeline />
      <PhotoSlideshow />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
