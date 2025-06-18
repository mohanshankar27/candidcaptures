
import { Service } from '@/types/serviceTypes';
import photographyServices from './photographyServices';
import specialtyServices from './specialtyServices';
import portraitServices from './portraitServices';
import productServices from './productServices';

const servicesList: Service[] = [
  ...photographyServices,
  ...specialtyServices,
  ...portraitServices,
  ...productServices
];

export default servicesList;
