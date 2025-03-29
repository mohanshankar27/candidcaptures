
import { Camera, Heart, Star, Users, Award, CheckCircle, CameraOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">About Us</h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We are passionate about capturing the beauty of life's most precious moments. Our team of skilled photographers is dedicated to creating stunning visual narratives that you'll cherish forever.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Left column - Image */}
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
                    alt="Photography team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Right column - Text content */}
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Story</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Founded with a passion for authentic storytelling, CANDID CAPTURE has evolved into a premier photography studio specializing in capturing life's most precious moments with artistry and emotion.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We believe that photography is more than just taking pictures – it's about creating visual narratives that evoke emotions and preserve memories for generations to come.
                  </p>
                  
                  <div className="flex items-center space-x-2 text-primary">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">Authentic moments, beautifully captured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  At CANDID CAPTURE, our mission is to preserve your most precious moments through authentic photography that tells your unique story. We believe that every person, every family, and every occasion has a beautiful narrative worth capturing.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">
                    <Camera className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Capture Moments</h3>
                  <p className="text-gray-600">
                    We focus on capturing the authentic, unscripted moments that make life beautiful and worth remembering.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">
                    <Heart className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Create Emotions</h3>
                  <p className="text-gray-600">
                    Our photography aims to evoke emotions and tell stories that resonate with you for years to come.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">
                    <Star className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Preserve Memories</h3>
                  <p className="text-gray-600">
                    We provide high-quality photographs that preserve your precious memories for generations to enjoy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  We're committed to providing an exceptional photography experience from start to finish.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Team</h3>
                    <p className="text-gray-600">
                      Our team of experienced photographers has the expertise and artistic vision to create stunning photographs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
                    <p className="text-gray-600">
                      We use top-of-the-line cameras, lenses, and lighting to ensure exceptional image quality for every shoot.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
                    <p className="text-gray-600">
                      We create a comfortable, enjoyable environment for every client, resulting in natural, authentic photographs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600">
                      We understand the excitement of seeing your photos, so we commit to delivering your images promptly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Creative Approach</h3>
                    <p className="text-gray-600">
                      Our unique artistic approach helps us see beauty in every moment, creating images that stand out.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                    <p className="text-gray-600">
                      Your satisfaction is our priority, and we work closely with you to ensure we meet and exceed your expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Our Process</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  We follow a structured approach to ensure we deliver the best possible results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Consultation</h3>
                  <p className="text-gray-600">
                    We start with a detailed consultation to understand your vision and preferences.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Planning</h3>
                  <p className="text-gray-600">
                    We meticulously plan every aspect of the shoot to ensure we capture exactly what you want.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Photoshoot</h3>
                  <p className="text-gray-600">
                    Our skilled photographers work to capture the perfect moments during your shoot.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Delivery</h3>
                  <p className="text-gray-600">
                    We provide professionally edited images in your preferred format in a timely manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Ready to Capture Your Special Moments?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Let's work together to create beautiful memories that will last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/services">Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
