
import React from "react";
import TeamList from "./team/TeamList";
import SectionHeader from "./common/SectionHeader";

const TeamMembersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Team"
            description="Meet the passionate professionals behind CANDID CAPTURE who make your photography dreams come true."
          />
          
          <TeamList />
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
