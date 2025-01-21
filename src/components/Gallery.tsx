const Gallery = () => {
  const images = [
    {
      url: "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
      alt: "Studio portrait with dramatic lighting against dark background",
    },
    {
      url: "/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png",
      alt: "Black and white portrait with dramatic lighting",
    },
    {
      url: "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
      alt: "Artistic bridal preparation photoshoot with dramatic lighting",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;