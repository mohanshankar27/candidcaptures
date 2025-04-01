
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import WhatsAppButton from "@/components/WhatsAppButton";
import CommunicationSidebar from "@/components/CommunicationSidebar";
import { Toaster } from "@/components/ui/toaster";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ContactHero />
        <div className="bg-gradient-to-b from-white via-slate-50 to-primary/5">
          <div className="container mx-auto py-16 px-4">
            <div className="grid lg:grid-cols-2 gap-10">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <CommunicationSidebar />
      <Toaster />
      <Footer />
    </>
  );
};

export default Contact;
