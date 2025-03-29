
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import WeddingSlideshow from "@/components/WeddingSlideshow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <PhotoSlideshow />
      <About />
      <WeddingSlideshow />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
