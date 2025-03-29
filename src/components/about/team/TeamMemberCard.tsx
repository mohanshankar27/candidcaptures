
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  fallback: string;
}

const TeamMemberCard = ({ name, role, description, imageSrc, fallback }: TeamMemberCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
      <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/20">
        <AvatarImage src={imageSrc} alt={name} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary mb-3">{role}</p>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default TeamMemberCard;
