
import { allAvailableImages } from './imagePool';

// Map of service names to 6 unique images per service using indices from allAvailableImages
export const serviceImageIndices: Record<string, number[]> = {
  'Artists / Celebrities': [0, 1, 2, 3, 4, 5],
  'Concept shoot': [16, 17, 18, 19, 20, 15],
  'Corporate & Short Videos': [12, 13, 0, 1, 2, 3],
  'E-Commerce & Catalogues': [22, 10, 11, 13, 0, 1], // Updated first index to use an alternative image
  'Event Photography': [34, 5, 6, 7, 10, 2],
  'Family Portraits': [39, 8, 10, 11, 12, 13],
  'Fashion Photography': [30, 31, 21, 22, 23, 28],
  'Food Photography': [1, 3, 5, 7, 9, 11],
  'Makeup shoot': [12, 0, 2, 4, 6, 8],
  'Maternity Photography': [13, 1, 3, 5, 7, 9],
  'Matrimonial Portfolios': [10, 12, 0, 2, 4, 6],
  'Modelling & Artist Portfolios': [11, 13, 1, 3, 5, 7],
  'Portraits & Portfolios': [9, 11, 13, 1, 3, 5],
  'Product Photography': [51, 9, 11, 13, 1, 3], // Updated first index to use the new pharmaceutical product image
  'Special Services': [53, 6, 8, 10, 12, 0], // Updated first index to use the new traditional cultural diorama image
  'Toddler & Children': [2, 4, 6, 8, 10, 12],
  'Wedding Photography': [3, 5, 7, 9, 11, 13],
  'New Born Baby Shoot': [29, 30, 31, 32, 33, 34]
};

// Convert indices to actual image URLs
export const serviceImagesByIndex = Object.entries(serviceImageIndices).reduce((acc, [serviceName, indices]) => {
  acc[serviceName] = indices.map(index => allAvailableImages[index]);
  return acc;
}, {} as Record<string, string[]>);
