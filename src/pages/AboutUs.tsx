
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import TeamMember from "@/components/TeamMember";
import GoogleReview from "@/components/GoogleReview"; // Replace PerformanceMonitor with GoogleReview

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const teamMembers = [
    {
      name: "Sathya Prakash",
      role: "Creative Director",
      image: "/lovable-uploads/b0d50296-3c5f-41b2-afcf-af58d024d712.png",
      description: "Visionary photographer with a passion for capturing life's authentic moments and building Candid Capture from the ground up.",
      isFounder: true
    },
    {
      name: "Puneeth K",
      role: "Lead Photographer",
      image: "/lovable-uploads/5d90fcb0-8d52-441c-92d9-ab63b40d0b9c.png",
      description: "Specializes in wedding photography with over 10 years of experience capturing love stories."
    },
    {
      name: "Raju",
      role: "Lead Video Grapher",
      image: "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
      description: "Expert in capturing cinematic moments with a keen eye for detail and storytelling through video."
    },
    {
      name: "Varun",
      role: "Marketing & Communication Head",
      image: "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
      description: "Leads our brand strategy and client communications, ensuring we connect with our audience effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-36 pb-20">
        {/* Hero Section */}
        <section className="relative bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                About Us
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700">
                We are passionate photographers dedicated to capturing your most precious moments with 
                creativity and professional expertise.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Who We Are</h2>
                <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded on the passion for capturing life's authentic moments, Candid Capture 
                  has grown from a small photography enthusiast's dream into a full-service 
                  photography studio.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We believe photography is not just about what your eyes see - it's about what your 
                  soul feels. Our mission is to preserve the genuine emotions and connections of 
                  each moment, creating timeless memories you can revisit for years to come.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  CANDID CAPTURE is a brand that aims to express a feeling, 
                  a story and a memory through photography. We mainly focus on candid photography 
                  that brings out the authentic emotions and true personalities of our subjects.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <img 
                  src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
                  alt="Candid Capture Team" 
                  className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
                />
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png" 
                  alt="Photography Process" 
                  className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Approach</h2>
                <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Every photo tells a story. We approach each project with an open mind and 
                  a desire to truly understand what makes your story unique. We believe in building 
                  a relationship with our clients that goes beyond just taking pictures.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our photographers work closely with you to understand your vision, preferences, 
                  and expectations. We pride ourselves on our attention to detail and our ability 
                  to capture the essence of every moment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether it's a wedding, a family gathering, or a corporate event, we bring our 
                  technical expertise and creative vision to ensure that your photographs are 
                  not just images, but treasured memories that will last a lifetime.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Philosophy</h2>
              <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Authenticity</h3>
                <p className="text-gray-700">
                  We believe in capturing real moments, real emotions, and real connections. 
                  Our candid approach focuses on the natural, unposed moments that make life beautiful.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Creativity</h3>
                <p className="text-gray-700">
                  We approach each project with a fresh perspective and a creative mindset. 
                  We're always exploring new techniques and ideas to bring a unique touch to your photographs.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in everything we do. From the initial consultation to 
                  the final delivery, we're committed to providing an exceptional experience and superior results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Meet Our Team</h2>
              <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-gray-700">
                The passionate professionals behind Candid Capture's magic
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  description={member.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Ready to Work With Us?</h2>
              <p className="text-gray-700 mb-8">
                Let's create beautiful memories together. Contact us today to discuss your photography needs.
              </p>
              <a 
                href="/#contact" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <GoogleReview /> {/* Replace PerformanceMonitor with GoogleReview */}
    </div>
  );
};

export default AboutUs;
