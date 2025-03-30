
import { Service } from '@/data/services';
import { serviceImagesByIndex } from './constants/serviceIndices';

// Import specialized image providers
import { getFashionPhotographyImages } from './imageProviders/FashionPhotographyProvider';
import { getEventPhotographyImages } from './imageProviders/EventPhotographyProvider';
import { getFamilyPortraitsImages } from './imageProviders/FamilyPortraitsProvider';
import { 
  getFoodPhotographyImages,
  getWeddingPhotographyImages,
  getConceptShootImages,
  getSpecialServicesImages
} from './imageProviders/SpecialtyServicesProvider';
import {
  getCorporateVideosImages,
  getCorporateHeadshotsImages,
  getMakeupShootImages
} from './imageProviders/CorporateServicesProvider';
import {
  getMaternityPhotographyImages,
  getMatrimonialPortfoliosImages,
  getNewBornBabyShootImages,
  getToddlerChildrenImages
} from './imageProviders/FamilyServicesProvider';

export const getServiceImages = (service: Service): string[] => {
  // Return specialized image sets for specific services
  switch(service.name) {
    case 'Fashion Photography':
      return getFashionPhotographyImages();
    case 'Event Photography':
      return getEventPhotographyImages();
    case 'Family Portraits':
      return getFamilyPortraitsImages();
    case 'Food Photography':
      return getFoodPhotographyImages();
    case 'Wedding Photography':
      return getWeddingPhotographyImages();
    case 'Concept shoot':
      return getConceptShootImages();
    case 'Special Services':
      return getSpecialServicesImages();
    case 'Corporate & Short Videos':
      return getCorporateVideosImages();
    case 'Corporate Headshots':
      return getCorporateHeadshotsImages();
    case 'Makeup shoot':
      return getMakeupShootImages();
    case 'Maternity Photography':
      return getMaternityPhotographyImages();
    case 'Matrimonial Portfolios':
      return getMatrimonialPortfoliosImages();
    case 'New Born Baby Shoot':
      return getNewBornBabyShootImages();
    case 'Toddler & Children':
      return getToddlerChildrenImages();
    default:
      // Return the service-specific images or default to a generic set
      return serviceImagesByIndex[service.name] || Array(6).fill('/placeholder.svg');
  }
};
