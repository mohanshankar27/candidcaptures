
import { Service } from '@/types/serviceTypes';

const specialtyServices: Service[] = [
  { 
    name: 'Concept shoot',
    description: 'Bring your creative vision to life with our concept photography services. We specialize in elaborate cultural themes, artistic makeup, and traditional Indian costumes and celebrations. Our team works closely with you to translate your ideas into powerful visual stories.',
    benefits: [
      'Creative consultation',
      'Prop and set arrangement',
      'Specialized lighting techniques',
      'Advanced post-processing',
      'Cultural costume styling',
      'Artistic makeup application',
      'Traditional setup coordination'
    ],
    pricing: 'Custom quotes based on concept requirements, starting at ₹15,000'
  },
  { 
    name: 'Corporate & Short Videos',
    description: 'Professional video services for corporate communications, events, promotions, and social media content that elevate your brand message and engage your audience.',
    benefits: [
      'Scriptwriting assistance',
      'Professional sound recording',
      'Motion graphics options',
      'Multiple format deliverables',
      'Social media optimization'
    ],
    pricing: 'Starting at ₹20,000 for short videos'
  },
  { 
    name: 'Makeup shoot',
    description: 'Specialized photography for makeup artists and beauty professionals to showcase their work with high-quality, detailed images.',
    benefits: [
      'Macro photography for fine details',
      'Before and after comparisons',
      'Color-accurate editing',
      'Portfolio-ready images'
    ],
    pricing: 'Starting at ₹7,000 per session'
  }
];

export default specialtyServices;
