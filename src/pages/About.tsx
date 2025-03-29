
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import OurStorySection from "@/components/about/OurStorySection";
import TeamMembersSection from "@/components/about/TeamMembersSection";
import OurMissionSection from "@/components/about/OurMissionSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import OurProcessSection from "@/components/about/OurProcessSection";
import CTASection from "@/components/about/CTASection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <HeroSection />
        <OurStorySection />
        <TeamMembersSection />
        <OurMissionSection />
        <WhyChooseUsSection />
        <OurProcessSection />
        <CTASection />
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
