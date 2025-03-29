
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TeamMembersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the passionate professionals behind CANDID CAPTURE who make your photography dreams come true.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Sophia Martinez" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">Sophia Martinez</h3>
              <p className="text-primary mb-3">Lead Photographer</p>
              <p className="text-gray-600">
                With over 10 years of experience, Sophia specializes in wedding photography and portrait sessions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Michael Chen" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-primary mb-3">Creative Director</p>
              <p className="text-gray-600">
                Michael's artistic vision and technical expertise help create unique and stunning visual stories.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="Team Members" />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">Our Talented Team</h3>
              <p className="text-primary mb-3">Photography Specialists</p>
              <p className="text-gray-600">
                Our diverse team of photographers, editors, and designers work together to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
