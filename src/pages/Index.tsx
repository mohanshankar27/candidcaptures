
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PhotoSlideshow from "@/components/PhotoSlideshow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PhotoSlideshow />
      <Gallery />
      <CTA />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
