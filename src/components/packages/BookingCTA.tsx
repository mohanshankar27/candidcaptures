
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export interface BookingCTAProps {
  title: string;
  description?: string;
  ctaText?: string;
  serviceType?: string;
}

const BookingCTA: React.FC<BookingCTAProps> = ({ 
  title, 
  description, 
  ctaText = "Book Now", 
  serviceType 
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 text-center">
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      {description && <p className="text-slate-600 mb-4">{description}</p>}
      {!description && serviceType && (
        <p className="text-slate-600 mb-4">
          Ready to capture your {serviceType}? Contact us today to discuss your photography needs 
          and book your session.
        </p>
      )}
      <Button onClick={() => navigate('/contact')} className="px-6">
        {ctaText}
      </Button>
    </div>
  );
};

export default BookingCTA;
