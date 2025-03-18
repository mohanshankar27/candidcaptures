
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-24 bg-gradient-to-b from-secondary to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              About US
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 animate-fadeIn">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary">The CANDID CAPTURE Way</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                CANDID CAPTURE is not just about what your eyes see. it's more about what your soul feels, 
                capturing memories of present happiness to cherish in the future. We aim to make you feel 
                free and happy through our photography.
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary">Authentic Moments</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                I believe in capturing authentic moments that tell genuine stories. My candid photography
                style focuses on the natural, unposed moments that make life beautiful.
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary">Your Story, Beautifully Told</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Whether it's a family gathering, a wedding, or everyday life, I'm passionate about
                preserving these genuine moments for you to cherish forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
