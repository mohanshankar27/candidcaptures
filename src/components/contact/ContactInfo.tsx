
import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Map from "@/components/Map";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden shadow-md border-0">
        <CardContent className="p-0">
          <div className="h-64">
            <Map className="h-full w-full" />
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-5">
        <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
        <p className="text-gray-600">
          We're here to answer any questions you may have about our photography services. Reach out to us and we'll respond as soon as we can.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Email</h4>
              <a href="mailto:candidcapture4@gmail.com" className="text-primary hover:underline">
                candidcapture4@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Phone</h4>
              <a href="tel:+919632288815" className="text-primary hover:underline">
                +91 96322 88815
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Location</h4>
              <p className="text-gray-600">
                Uttarahalli, Bangalore<br />
                Karnataka, 560061
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Business Hours</h4>
              <p className="text-gray-600">
                Monday - Saturday: 9AM - 7PM<br />
                Sunday: By Appointment
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium text-gray-800 mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="bg-primary/5 p-5 rounded-lg mt-6">
          <h4 className="font-medium text-gray-800 mb-2">Studio Availability</h4>
          <p className="text-gray-600 text-sm">
            Our studio is available for bookings 7 days a week. We recommend scheduling your session at least 2 weeks in advance to ensure availability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
