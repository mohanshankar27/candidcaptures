
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
  delay?: number;
  isFounder?: boolean;
}

const TeamMember = ({ name, role, image, description, delay = 0, isFounder = false }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-medium mb-1">{name}</h3>
      {isFounder ? (
        <div className="flex flex-col items-center">
          <p className="text-primary font-medium mb-1">{role}</p>
          <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">Founder</span>
        </div>
      ) : (
        <p className="text-primary font-medium mb-3">{role}</p>
      )}
      <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
    </motion.div>
  );
};

export default TeamMember;
