
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Sathya Prakash",
    role: "Lead Photographer",
    description: "With over 10 years of experience, Sathya specializes in wedding photography and portrait sessions.",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    fallback: "SP"
  },
  {
    id: 2,
    name: "Puneeth",
    role: "Lead Photographer",
    description: "Puneeth's artistic vision and technical expertise help create unique and stunning visual stories.",
    imageSrc: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    fallback: "PK"
  },
  {
    id: 3,
    name: "Raju",
    role: "Lead Videography",
    description: "Raju brings motion and emotion together, creating cinematic films that capture the essence of every moment.",
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    fallback: "RJ"
  },
  {
    id: 4,
    name: "Varun",
    role: "Marketing Head",
    description: "Varun ensures our clients find the perfect photography solutions for their needs and manages our client relationships.",
    imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    fallback: "VN"
  }
];

const TeamList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
