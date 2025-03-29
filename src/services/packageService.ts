
import { packageList, PackageItem } from '@/utils/packageData';

export const getPackageTitle = (packageId: string | undefined): string => {
  const foundPackage = packageList.find(pkg => pkg.id === packageId);
  return foundPackage ? foundPackage.title : 'Photography Package';
};

export const getCurrentPackageIndex = (packageId: string | undefined): number => {
  return packageList.findIndex(pkg => pkg.id === packageId);
};

export const getAdjacentPackages = (packageId: string | undefined) => {
  const currentPackageIndex = getCurrentPackageIndex(packageId);
  
  const prevPackage = currentPackageIndex > 0 ? packageList[currentPackageIndex - 1] : null;
  const nextPackage = currentPackageIndex < packageList.length - 1 ? packageList[currentPackageIndex + 1] : null;
  
  return { prevPackage, nextPackage };
};

export const shouldShowGeneralFAQ = (packageId: string | undefined): boolean => {
  return packageId !== 'corporate' && packageId !== 'matrimonial' && packageId !== 'modelling';
};
