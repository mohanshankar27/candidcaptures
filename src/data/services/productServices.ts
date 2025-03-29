
import { Service } from '@/types/serviceTypes';

const productServices: Service[] = [
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
  }
];

export default productServices;
