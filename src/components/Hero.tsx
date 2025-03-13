
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const slides = [
    {
      title: "Capturing Life's Beautiful Moments",
      image: "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
      description: "Creating magical moments with creative lighting and props",
    },
    {
      title: "Family & Celebrations",
      image: "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
      description: "Capturing precious family moments and celebrations",
    },
    {
      title: "Little Ones",
      image: "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
      description: "Adorable themed photoshoots for your little ones",
    },
    {
      title: "Traditional Ceremonies",
      image: "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
      description: "Capturing the vibrant traditions and joyous moments of the Haldi ceremony",
    }
  ];

  return (
    <section id="home" className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full z-10 pt-24 md:pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-black/50 backdrop-blur-sm px-8 py-6 rounded-lg animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Welcome to Candid Capture</h2>
            <p className="text-white text-lg md:text-xl">Where Every Moment Becomes a Timeless Memory</p>
          </div>
        </div>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden">
                <div
                  className="h-screen w-full bg-cover bg-center transform scale-105 animate-ken-burns"
                  style={{
                    backgroundImage: `url("${slide.image}")`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white z-10 animate-fadeIn px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-shadow-lg mb-6 text-center">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-center font-light">
                      {slide.description}
                    </p>
                    <div className="mt-8">
                      <a
                        href="#contact"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default Hero;
