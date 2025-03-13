
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import WeddingPhotos from "@/components/WeddingPhotos";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <WeddingPhotos />
      <Reviews />
      <CTA />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
