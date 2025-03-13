
import { 
  Heart, Camera, Users, ShoppingBag, Utensils, Building, Video, 
  Baby, Star, User, Image, Gift, Flower, Key, Lightbulb, Mail, 
  MapPin, Music, Package, Phone, Settings, Shield, Tag, Tv
} from 'lucide-react';
import React from 'react';

export interface Service {
  name: string;
  icon: React.ReactNode;
  description: string;
  benefits?: string[];
  pricing?: string;
  external?: boolean;
  href?: string;
}

const servicesList: Service[] = [
  { 
    name: 'Artists / Celebrities', 
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    description: 'Premium photography services for artists and celebrities, capturing their unique personality and brand identity with stunning visuals that make a statement.',
    benefits: [
      'Luxury studio or location options',
      'Advanced lighting techniques',
      'Image rights negotiation',
      'Express editing services',
      'Personal branding consultation'
    ],
    pricing: 'Custom quotes based on requirements'
  },
  { 
    name: 'Concept shoot', 
    icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
    description: 'Bring your creative vision to life with our concept photography services. We work closely with you to translate your ideas into powerful visual stories.',
    benefits: [
      'Creative consultation',
      'Prop and set arrangement',
      'Specialized lighting techniques',
      'Advanced post-processing'
    ],
    pricing: 'Custom quotes based on concept requirements'
  },
  { 
    name: 'Corporate & Short Videos', 
    icon: <Video className="w-5 h-5 text-red-500" />,
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
    name: 'Corporate Headshots', 
    icon: <User className="w-5 h-5 text-blue-500" />,
    description: 'Professional headshots for corporate teams and individuals that convey confidence and approachability, perfect for websites, LinkedIn, and marketing materials.',
    benefits: [
      'On-site photography options',
      'Consistent style across team',
      'Quick turnaround',
      'Digital touch-ups included',
      'Corporate branding integration'
    ],
    pricing: 'Starting at ₹2,500 per person with group discounts'
  },
  { 
    name: 'E-Commerce & Catalogues', 
    icon: <ShoppingBag className="w-5 h-5 text-purple-500" />,
    description: 'Comprehensive photography services for e-commerce platforms and product catalogues with consistent styling and high-quality imagery that boosts conversions.',
    benefits: [
      'Bulk product photography',
      'Styling and arrangement',
      'Background options',
      'Format optimization for various platforms',
      'Integration ready files'
    ],
    pricing: 'Starting at ₹800 per product with package options'
  },
  { 
    name: 'Event Photography', 
    icon: <Users className="w-5 h-5 text-green-500" />,
    description: 'Capture the energy and important moments of your corporate events, celebrations, and gatherings with our professional event photography services.',
    benefits: [
      'Multiple photographer options',
      'Quick preview delivery',
      'Coverage of key moments',
      'Indoor and outdoor expertise',
      'Same-day highlights available'
    ],
    pricing: 'Starting at ₹15,000 for 4-hour coverage'
  },
  { 
    name: 'Family Portraits', 
    icon: <Users className="w-5 h-5 text-orange-500" />,
    description: 'Beautiful, timeless family portraits that capture connections and personalities in studio settings or meaningful locations of your choice.',
    benefits: [
      'Family grouping guidance',
      'Kid-friendly photography approach',
      'Multiple generation options',
      'Print packages available',
      'Digital album included'
    ],
    pricing: 'Starting at ₹6,000 per session'
  },
  { 
    name: 'Fashion Photography', 
    icon: <Camera className="w-5 h-5 text-pink-500" />,
    description: 'Creative and technical fashion photography services for designers, boutiques, and fashion brands that highlight style and craftsmanship.',
    benefits: [
      'Styling collaboration',
      'Model coordination options',
      'Location or studio setups',
      'Editorial quality results',
      'Magazine-ready editing'
    ],
    pricing: 'Starting at ₹18,000 per collection'
  },
  { 
    name: 'Food Photography', 
    icon: <Utensils className="w-5 h-5 text-amber-500" />,
    description: 'Appetizing food photography for restaurants, menus, cookbooks, and food brands that showcases culinary creations in their best light.',
    benefits: [
      'Food styling expertise',
      'Props and background options',
      'Quick shooting to maintain freshness',
      'Menu-package discounts',
      'Social media optimized images'
    ],
    pricing: 'Starting at ₹1,500 per dish'
  },
  { 
    name: 'Makeup shoot', 
    icon: <Music className="w-5 h-5 text-rose-400" />,
    description: 'Specialized photography for makeup artists and beauty professionals to showcase their work with high-quality, detailed images.',
    benefits: [
      'Macro photography for fine details',
      'Before and after comparisons',
      'Color-accurate editing',
      'Portfolio-ready images'
    ],
    pricing: 'Starting at ₹7,000 per session'
  },
  { 
    name: 'Maternity Photography', 
    icon: <Heart className="w-5 h-5 text-pink-400" />,
    description: 'Elegant maternity photography sessions that celebrate the beauty of pregnancy with artistic and intimate portraits.',
    benefits: [
      'Partner and family inclusion',
      'Wardrobe consultation',
      'Comfortable poses and guidance',
      'Indoor or outdoor options',
      'Timeline photo series available'
    ],
    pricing: 'Starting at ₹8,000 per session'
  },
  { 
    name: 'Matrimonial Portfolios', 
    icon: <Heart className="w-5 h-5 text-red-400" />,
    description: 'Professional portraits specifically designed for matrimonial profiles that present you in an authentic and appealing way.',
    benefits: [
      'Multiple outfit options',
      'Natural and posed shots',
      'Quick delivery for profile use',
      'Digital touch-ups included',
      'Perfect for all matrimonial platforms'
    ],
    pricing: 'Starting at ₹5,000 per portfolio'
  },
  { 
    name: 'Modelling & Artist Portfolios', 
    icon: <User className="w-5 h-5 text-teal-500" />,
    description: 'Comprehensive portfolio development for models and artists featuring diverse looks, styles, and concepts for agency submission and client presentations.',
    benefits: [
      'Agency submission guidance',
      'Various concept shots',
      'Look development',
      'Digital portfolio formatting',
      'Industry standard deliverables'
    ],
    pricing: 'Starting at ₹12,000 for basic portfolio'
  },
  { 
    name: 'Naming Ceremony', 
    icon: <Gift className="w-5 h-5 text-emerald-500" />,
    description: "Document your child's naming ceremony with professional photography that captures all the meaningful moments and traditions of this important celebration.",
    benefits: [
      'Ceremony coverage',
      'Family group photos',
      'Detail shots of decorations and rituals',
      'Quick preview delivery'
    ],
    pricing: 'Starting at ₹12,000 for full ceremony coverage'
  },
  { 
    name: 'Portraits & Portfolios', 
    icon: <User className="w-5 h-5 text-indigo-500" />,
    description: 'Professional portrait sessions for individuals seeking quality headshots and personal branding images for various professional and personal uses.',
    benefits: [
      'Personalized consultation',
      'Multiple setting options',
      'Digital and print deliverables',
      'LinkedIn and social media optimization',
      'Personal branding guidance'
    ],
    pricing: 'Starting at ₹4,000 per session'
  },
  { 
    name: 'Pre-wedding photoshoot', 
    icon: <Heart className="w-5 h-5 text-pink-600" />,
    description: "Tell your love story through beautiful pre-wedding photography. We'll capture your chemistry in stunning locations that reflect your personality as a couple.",
    benefits: [
      'Location scouting assistance',
      'Multiple outfit changes',
      'Professional editing',
      'Same-day preview of selected shots'
    ],
    pricing: 'Starting at ₹15,000 for a half-day shoot'
  },
  { 
    name: 'Pre-wedding Photoshoot Gallery', 
    icon: <Camera className="w-5 h-5 text-cyan-500" />,
    description: 'Explore our pre-wedding photoshoot collections that capture the romance and excitement before your big day.',
    external: true,
    href: "https://photos.google.com/share/AF1QipMFmTIEYszMPXvYaD_NuynOGVrs45W8UEXeVlRrNO1bNuMOs84Ka4Z4Fig8pAPEgQ/photo/AF1QipMeb26RqTnwrFsKRc10TdGTQeCUg4OOUZGAPKMw?key=MUV5cHFRNHNvSmtDeml2Vi1ESTJuR0NzQS11UHl3"
  },
  { 
    name: 'Product Photography', 
    icon: <ShoppingBag className="w-5 h-5 text-cyan-500" />,
    description: 'Detailed product photography that highlights features and craftsmanship for marketing materials, websites, and sales presentations.',
    benefits: [
      'White background options',
      'Lifestyle product shots',
      'Detail focus photography',
      '360-degree rotation available',
      'E-commerce ready formats'
    ],
    pricing: 'Starting at ₹1,200 per product'
  },
  { 
    name: 'Product shoot', 
    icon: <Tag className="w-5 h-5 text-slate-500" />,
    description: 'Showcase your products with professional photography that highlights features, quality, and details that matter to your customers.',
    benefits: [
      'Custom backgrounds and props',
      'Detail and feature focus shots',
      'Creative composition',
      'Product grouping options'
    ],
    pricing: 'Starting at ₹1,200 per product with packages available'
  },
  { 
    name: 'Special Services', 
    icon: <Star className="w-5 h-5 text-purple-400" />,
    description: 'Custom photography solutions for unique requirements and specialized projects beyond our standard service offerings.',
    benefits: [
      'Personalized consultation',
      'Custom project planning',
      'Specialized equipment when needed',
      'Flexible scheduling options',
      'Tailored to your unique needs'
    ],
    pricing: 'Custom quotes based on project scope'
  },
  { 
    name: 'Toddler & Children', 
    icon: <Baby className="w-5 h-5 text-blue-400" />,
    description: 'Playful and natural photography sessions for toddlers and children that capture their personality, joy, and milestone moments.',
    benefits: [
      'Child-friendly environment',
      'Patience and experience with kids',
      'Activity-based photography',
      'Family inclusion options',
      'Growth timeline packages'
    ],
    pricing: 'Starting at ₹5,000 per session'
  },
  { 
    name: 'Wedding Photography', 
    icon: <Heart className="w-5 h-5 text-red-600" />,
    description: 'Capture the most important day of your life with our professional wedding photography services. We focus on candid moments and emotions that tell your unique love story.',
    benefits: [
      'Full day coverage',
      'Professional editing',
      'Online gallery',
      'High-resolution digital files',
      'Print options available'
    ],
    pricing: 'Starting at ₹25,000 for full day coverage'
  }
];

export default servicesList;
