
import { Service } from '@/types/serviceTypes';
import photographyServices from './photographyServices';
import specialtyServices from './specialtyServices';
import portraitServices from './portraitServices';
import productServices from './productServices';
import specialServices from './specialServices';

const servicesList: Service[] = [
  ...photographyServices,
  ...specialtyServices,
  ...portraitServices,
  ...productServices,
  ...specialServices
];

export default servicesList;
