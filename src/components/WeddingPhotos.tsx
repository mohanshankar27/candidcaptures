
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const WeddingPhotos = () => {
  return (
    <section id="wedding-photos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Wedding Photo Shoot</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            Browse our exclusive collection of wedding photoshoots that capture the beauty, emotion, and joy of special moments.
          </p>
          
          <div className="flex justify-center mb-10">
            <Button asChild className="flex items-center gap-2 text-base">
              <a 
                href="https://photos.google.com/share/AF1QipMFmTIEYszMPXvYaD_NuynOGVrs45W8UEXeVlRrNO1bNuMOs84Ka4Z4Fig8pAPEgQ/photo/AF1QipNzfHamfCW0cnCc74SKSYo_gGXozV7Usz8YVNNI?key=MUV5cHFRNHNvSmtDeml2Vi1ESTJuR0NzQS11UHl3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Wedding Photoshoot
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Timeless Memories</h3>
              <p>Our wedding photo shoots are designed to capture the essence of your special day with a perfect blend of candid and posed moments.</p>
            </div>
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Professional Experience</h3>
              <p>With years of experience in wedding photography, we know how to capture the unique story of your celebration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPhotos;
