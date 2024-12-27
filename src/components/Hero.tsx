const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1623244307563-f9ade3df13c9")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative text-center text-white z-10 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Capturing Life's Genuine Moments</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Professional candid photography that tells your authentic story
        </p>
      </div>
    </section>
  );
};

export default Hero;