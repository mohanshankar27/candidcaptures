import React from 'react';

export interface Service {
  name: string;
  description: string;
  benefits?: string[];
  pricing?: string;
  external?: boolean;
  href?: string;
}

const servicesList: Service[] = [
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
    name: 'Corporate Headshots',
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
    name: 'Naming Ceremony',
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
    name: 'New Born Baby Shoot',
    description: "Capture those precious first days and weeks of your baby's life with our professional newborn photography. We create gentle, timeless portraits in a safe and comfortable setting.",
    benefits: [
      'Trained in newborn safety',
      'Soothing environment for baby',
      'Custom props and accessories',
      'Parent and sibling portraits included',
      'Flexible scheduling for newborns'
    ],
    pricing: 'Starting at ₹8,000 per session'
  },
  { 
    name: 'Product Photography',
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
