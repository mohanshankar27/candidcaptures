
import { Award, Camera, Heart, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              About Us
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-600 mt-6">
              CANDID CAPTURE is not just about capturing images, it's about capturing memories that tell your unique story.
            </p>
          </div>
          
          {/* Main content - Two columns on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left column - Image */}
            <div className="rounded-lg overflow-hidden shadow-xl relative">
              <div className="golden-border-glow absolute inset-0 rounded-lg z-10 pointer-events-none"></div>
              <img 
                src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
                alt="Wedding photography" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right column - Text content */}
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Our Story</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded with a passion for authentic storytelling through images, CANDID CAPTURE 
                has evolved into a premier photography studio that specializes in capturing life's most 
                precious moments with artistry and emotion.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that photography is more than just taking pictures – it's about creating 
                visual narratives that evoke emotions and preserve memories for generations to come.
              </p>
              
              <div className="flex items-center space-x-2 text-primary">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Authentic moments, beautifully captured</span>
              </div>
              
              <Button asChild className="mt-4 w-fit">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Premium Equipment</h4>
              </div>
              <p className="text-gray-600">
                We use top-of-the-line cameras, lenses, and lighting to ensure exceptional image quality for every shoot.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Creative Vision</h4>
              </div>
              <p className="text-gray-600">
                Our unique artistic approach helps us see beauty in every moment, creating images that stand out.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Personalized Experience</h4>
              </div>
              <p className="text-gray-600">
                We create a comfortable, enjoyable environment for every client, resulting in natural, authentic photographs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Award-Winning Team</h4>
              </div>
              <p className="text-gray-600">
                Our photographers have been recognized for their exceptional work in various photography competitions.
              </p>
            </div>
            
            <div className="md:col-span-2 bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-semibold text-primary mb-3">Our Mission</h4>
              <p className="text-gray-700 mb-4">
                At CANDID CAPTURE, our mission is to preserve your most precious moments through 
                authentic photography that tells your unique story. We believe that every person, every 
                family, and every occasion has a beautiful narrative worth capturing.
              </p>
              <Button variant="outline" asChild className="bg-white">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
