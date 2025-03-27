
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Users, Award, Clock, ThumbsUp } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-36 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-orange-50 to-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-serif italic font-bold text-primary mb-6">
                About Candid Capture
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 mb-8">
                We capture the essence of your most precious moments with creativity, 
                passion, and professional expertise.
              </p>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full opacity-30 blur-3xl"></div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
                  alt="Candid Capture Team" 
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif italic font-bold text-primary mb-6">Our Story</h2>
                <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Founded on the passion for capturing life's authentic moments, Candid Capture 
                  has grown from a small photography enthusiast's dream into a full-service 
                  photography studio.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe photography is not just about what your eyes see - it's about what your 
                  soul feels. Our mission is to preserve the genuine emotions and connections of 
                  each moment, creating timeless memories you can revisit for years to come.
                </p>
                <p className="text-gray-700">
                  Every shoot is approached with creativity, technical excellence, and a deep 
                  understanding of what makes each client's story unique. We pride ourselves on 
                  building relationships that go beyond the lens.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-serif italic font-bold text-primary mb-4">Our Values</h2>
              <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-gray-700">
                The core principles that guide everything we do at Candid Capture
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Camera className="h-8 w-8 text-primary" />,
                  title: "Authenticity",
                  description: "We capture real moments, real emotions, and real connections. No forced poses or fake smiles."
                },
                {
                  icon: <Heart className="h-8 w-8 text-primary" />,
                  title: "Passion",
                  description: "We pour our hearts into every shoot, treating each client's story with the care it deserves."
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Connection",
                  description: "We build relationships with our clients to understand their vision and bring it to life."
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: "Excellence",
                  description: "We constantly refine our craft to deliver the highest quality photographs."
                },
                {
                  icon: <Clock className="h-8 w-8 text-primary" />,
                  title: "Timeliness",
                  description: "We respect deadlines and deliver your precious memories promptly."
                },
                {
                  icon: <ThumbsUp className="h-8 w-8 text-primary" />,
                  title: "Customer Focus",
                  description: "Your satisfaction is our top priority in every interaction."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/80 hover:bg-white">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="mb-4 inline-flex p-3 rounded-full bg-orange-100">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-serif italic font-bold text-primary mb-4">Meet Our Team</h2>
              <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-gray-700">
                The passionate professionals behind Candid Capture's magic
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Morgan",
                  role: "Lead Photographer",
                  image: "/lovable-uploads/5d90fcb0-8d52-441c-92d9-ab63b40d0b9c.png",
                  description: "Specializes in wedding photography with over 10 years of experience capturing love stories."
                },
                {
                  name: "Sam Rivera",
                  role: "Portrait Specialist",
                  image: "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
                  description: "Expert in bringing out the unique personality of every individual in portrait sessions."
                },
                {
                  name: "Jordan Lee",
                  role: "Event Photographer",
                  image: "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
                  description: "Captures the energy and emotion of special events from corporate functions to celebrations."
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-orange-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 max-w-xs mx-auto">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
