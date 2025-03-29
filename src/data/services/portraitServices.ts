import { Service } from '@/types/serviceTypes';

const portraitServices: Service[] = [
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
    name: 'New Born Baby Shoot',
    description: "Capture those precious first days and weeks of your baby's life with our professional newborn photography. We create gentle, timeless portraits in a safe and comfortable setting.",
    benefits: [
      'Trained in newborn safety',
      'Soothing environment for baby',
      'Custom props and accessories',
      'Parent and sibling portraits included',
      'Flexible scheduling for newborns'
    ],
    pricing: 'Starting at ₹8,560 per session'
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
    name: 'Naming Ceremony',
    description: "Document your child's naming ceremony with professional photography that captures all the meaningful moments and traditions of this important celebration.",
    benefits: [
      'Ceremony coverage',
      'Family group photos',
      'Detail shots of decorations and rituals',
      'Quick preview delivery'
    ],
    pricing: 'Starting at ₹12,000 for full ceremony coverage'
  }
];

export default portraitServices;
