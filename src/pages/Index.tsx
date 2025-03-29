
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CommunicationSidebar from "@/components/CommunicationSidebar";
import OurServices from "@/components/OurServices";
import SingleImageSlideshow from "@/components/SingleImageSlideshow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CommunicationSidebar />
      <Hero />
      <Gallery />
      <OurServices />
      <SingleImageSlideshow />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
