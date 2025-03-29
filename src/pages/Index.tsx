
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import WeddingSlideshow from "@/components/WeddingSlideshow";
import GoogleReviewButton from "@/components/GoogleReviewButton";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <GoogleReviewButton />
      <WhatsAppButton />
      <Hero />
      <Gallery />
      <PhotoSlideshow />
      <WeddingSlideshow />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
