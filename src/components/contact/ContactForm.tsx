
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        service: formData.service,
        message: formData.message,
        to_email: 'candidcapture4@gmail.com',
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        subject: '', 
        service: '', 
        message: '' 
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Message Not Sent",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-primary to-primary/70 text-white">
        <CardTitle className="text-2xl">Send Us a Message</CardTitle>
        <CardDescription className="text-white/90">
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-11"
              />
            </div>
            
            <div>
              <Input
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="h-11"
                required
              />
            </div>
          </div>
          
          <div>
            <Select 
              value={formData.service} 
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Service You're Interested In" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wedding">Wedding Photography</SelectItem>
                <SelectItem value="product">Product Photography</SelectItem>
                <SelectItem value="makeup">Makeup Photography</SelectItem>
                <SelectItem value="concept">Concept Photography</SelectItem>
                <SelectItem value="maternity">Maternity Photography</SelectItem>
                <SelectItem value="newborn">Newborn Photography</SelectItem>
                <SelectItem value="naming">Naming Ceremony</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="resize-none"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white h-11 font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
