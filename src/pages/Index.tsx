
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CommunicationSidebar from "@/components/CommunicationSidebar";
import WhatsAppButton from "@/components/WhatsAppButton";
import OurServices from "@/components/OurServices";
import WorkflowPipeline from "@/components/workflow/WorkflowPipeline";
import { InViewGallery } from "@/components/InViewGallery";
import DynamicSlideshow from "@/components/DynamicSlideshow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CommunicationSidebar />
      <WhatsAppButton />
      <Hero />
      <Gallery />
      <OurServices />
      <WorkflowPipeline />
      <InViewGallery />
      <DynamicSlideshow />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
