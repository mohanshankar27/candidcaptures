
import { ExternalLink, Camera } from "lucide-react";
import { ParticleButton } from "./ui/particle-button";

const WeddingPhotos = () => {
  const photoGalleries = [
    {
      title: "Wedding Photoshoot",
      description: "Beautiful moments from our wedding photography sessions",
      image: "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png", 
      link: "https://photos.google.com/share/AF1QipMFmTIEYszMPXvYaD_NuynOGVrs45W8UEXeVlRrNO1bNuMOs84Ka4Z4Fig8pAPEgQ/photo/AF1QipNzfHamfCW0cnCc74SKSYo_gGXozV7Usz8YVNNI?key=MUV5cHFRNHNvSmtDeml2Vi1ESTJuR0NzQS11UHl3",
      icon: <Camera className="w-4 h-4" />
    },
    {
      title: "Pre-Wedding Photoshoot",
      description: "Capture the love and excitement before the big day",
      image: "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
      link: "https://photos.google.com/share/AF1QipMFmTIEYszMPXvYaD_NuynOGVrs45W8UEXeVlRrNO1bNuMOs84Ka4Z4Fig8pAPEgQ/photo/AF1QipMeb26RqTnwrFsKRc10TdGTQeCUg4OOUZGAPKMw?key=MUV5cHFRNHNvSmtDeml2Vi1ESTJuR0NzQS11UHl3",
      icon: <Camera className="w-4 h-4" />
    }
  ];

  return (
    <section id="wedding-photos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Photo Shoots</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-12">
            Browse our exclusive collection of wedding and pre-wedding photoshoots that capture the beauty, emotion, and joy of special moments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {photoGalleries.map((gallery, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl">
                <div className="aspect-[4/3] w-full relative">
                  <img 
                    src={gallery.image} 
                    alt={gallery.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ParticleButton 
                      asChild 
                      variant="default" 
                      size="lg" 
                      className="flex items-center gap-2 text-base"
                      onSuccess={() => window.open(gallery.link, '_blank', 'noopener noreferrer')}
                    >
                      <a className="flex items-center gap-2">
                        View Gallery
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </ParticleButton>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {gallery.icon}
                    {gallery.title}
                  </h3>
                  <p className="text-muted-foreground">{gallery.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Timeless Memories</h3>
              <p>Our photo shoots are designed to capture the essence of your special moments with a perfect blend of candid and posed photography.</p>
            </div>
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Professional Experience</h3>
              <p>With years of experience in photography, we know how to capture the unique story of your celebration and create lasting memories.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPhotos;
