
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Lead Photographer",
    description: "With over 10 years of experience, Sophia specializes in wedding photography and portrait sessions.",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    fallback: "SM"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Creative Director",
    description: "Michael's artistic vision and technical expertise help create unique and stunning visual stories.",
    imageSrc: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    fallback: "MC"
  },
  {
    id: 3,
    name: "Our Talented Team",
    role: "Photography Specialists",
    description: "Our diverse team of photographers, editors, and designers work together to deliver exceptional results.",
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    fallback: "TM"
  }
];

const TeamList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.id}
          name={member.name}
          role={member.role}
          description={member.description}
          imageSrc={member.imageSrc}
          fallback={member.fallback}
        />
      ))}
    </div>
  );
};

export default TeamList;
