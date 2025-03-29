
export interface PackageItem {
  id: string;
  title: string;
}

export const packageList: PackageItem[] = [
  { id: 'new-born', title: 'New Born, Toddlers, and younger children' },
  { id: 'wedding', title: 'Wedding Photography' },
  { id: 'family', title: 'Family Portrait Sessions' },
  { id: 'corporate', title: 'Corporate Head-shot Sessions' },
  { id: 'maternity', title: 'Maternity Photography Sessions' },
  { id: 'matrimonial', title: 'Matrimonial / Dating Portfolio Sessions' },
  { id: 'modelling', title: 'Modelling Portfolios & Polaroids' },
  { id: 'event', title: 'Event Photography Pricing' },
];

export const getPackageComponent = (packageId: string | undefined) => {
  switch (packageId) {
    case 'new-born':
      return 'NewBornPackage';
    case 'wedding':
      return 'WeddingPackage';
    case 'family':
      return 'FamilyPackage';
    case 'corporate':
      return 'CorporatePackage';
    case 'maternity':
      return 'MaternityPackage';
    case 'matrimonial':
      return 'MatrimonialPackage';
    case 'modelling':
      return 'ModellingPackage';
    case 'event':
      return 'EventPackage';
    default:
      return null;
  }
};
