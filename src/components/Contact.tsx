
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Map from './Map';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-akaya">
            Ready to capture your special moments? Let's discuss how we can create beautiful memories together.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-primary/80 to-primary/30 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Contact Form - 7 columns on medium screens */}
          <div className="md:col-span-7">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="h-2 bg-gradient-to-r from-primary via-blue-500 to-primary/70"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 h-12 rounded-md border-gray-200 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 h-12 rounded-md border-gray-200 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-all font-medium text-base flex items-center justify-center gap-2 h-12"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info - 5 columns on medium screens */}
          <div className="md:col-span-5 space-y-6">
            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <a href="mailto:candidcapture4@gmail.com" className="text-primary hover:underline">
                        candidcapture4@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+919632288815" className="text-primary hover:underline">
                        +91 9632288815
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Uttarahalli<br />
                        Bangalore, Karnataka, 560061<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden shadow-lg border-0 h-60">
              <Map className="h-full w-full" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
