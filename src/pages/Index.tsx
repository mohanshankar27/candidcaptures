
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import CommunicationSidebar from "@/components/CommunicationSidebar";
import OurServices from "@/components/OurServices";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CommunicationSidebar />
      <Hero />
      <Gallery />
      <OurServices />
      <PhotoSlideshow />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
