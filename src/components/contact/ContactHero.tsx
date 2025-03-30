
import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-blue-500/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We'd love to hear from you! Whether you have a question about our services, 
            pricing, or just want to say hello, we're here to help.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Photography</span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Weddings</span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Events</span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Portraits</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
