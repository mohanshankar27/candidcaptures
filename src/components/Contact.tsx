import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Map from './Map';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'candidcapture4@gmail.com',
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white via-slate-50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Get in Touch
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Contact us today.
          </p>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/contact" className="flex items-center">
              Visit Contact Page
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-1 bg-gradient-to-r from-primary via-blue-500 to-primary/70"></div>
            <div className="grid md:grid-cols-2 gap-0">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-11"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white h-11 font-medium"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </CardContent>

              <CardContent className="bg-gray-50 p-6 md:p-8 space-y-6">
                <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full text-primary mr-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Email</h4>
                      <a href="mailto:candidcapture4@gmail.com" className="text-primary hover:underline">
                        candidcapture4@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full text-primary mr-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Phone</h4>
                      <a href="tel:+919632288815" className="text-primary hover:underline">
                        +91 9632288815
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full text-primary mr-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Location</h4>
                      <p className="text-gray-600">
                        Uttarahalli, Bangalore<br />
                        Karnataka, 560061
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 h-40 md:h-48 overflow-hidden rounded-md">
                  <Map className="h-full w-full" />
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
