const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      alt: "Nature candid shot 1",
    },
    {
      url: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      alt: "Nature candid shot 2",
    },
    {
      url: "https://images.unsplash.com/photo-1439886183900-e79ec0057170",
      alt: "Nature candid shot 3",
    },
    {
      url: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      alt: "Nature candid shot 4",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group aspect-[4/3]"
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