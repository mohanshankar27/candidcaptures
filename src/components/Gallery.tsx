const Gallery = () => {
  const images = [
    {
      url: "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
      alt: "Romantic beach bonfire photoshoot with fairy lights and colorful flags",
    },
    {
      url: "/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png",
      alt: "Traditional ceremony with floral garlands and festive lighting",
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