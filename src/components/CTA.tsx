import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Capture Your Special Moments?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's create beautiful memories together. Book a session now and let's discuss how we can tell your story through stunning photographs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleBookNow}
            size="lg"
            className="text-lg px-8"
          >
            Book Now
            <ArrowRight className="ml-2" />
          </Button>
          <a
            href="#gallery"
            className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors"
          >
            View Portfolio <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;