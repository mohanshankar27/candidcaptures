
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export interface BookingCTAProps {
  title: string;
  description?: string;
  ctaText: string;
}

const BookingCTA: React.FC<BookingCTAProps> = ({ title, description, ctaText }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 text-center">
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      {description && <p className="text-slate-600 mb-4">{description}</p>}
      <Button onClick={() => navigate('/contact')} className="px-6">
        {ctaText}
      </Button>
    </div>
  );
};

export default BookingCTA;
