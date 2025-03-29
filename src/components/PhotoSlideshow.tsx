
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

const PhotoSlideshow = () => {
  const location = useLocation();
  
  // Check if we're on the services page
  const isServicesPage = location.pathname === '/services';
  
  // Don't render this component on the services page or anywhere else
  return null;
};

export default memo(PhotoSlideshow);
