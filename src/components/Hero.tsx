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
      title: "",
      image: "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
      description: "Creating magical moments with creative lighting and props",
    },
    {
      title: "",
      image: "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
      description: "Capturing precious family moments and celebrations",
    },
    {
      title: "",
      image: "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
      description: "Adorable themed photoshoots for your little ones",
    },
    {
      title: "",
      image: "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
      description: "Capturing the vibrant traditions and joyous moments of the Haldi ceremony",
    }
  ];

  return (
    <section id="home" className="min-h-screen relative">
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
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white z-10 animate-fadeIn">
                    <h2 className="text-4xl md:text-6xl font-bold text-shadow-lg">{slide.title}</h2>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-white">
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto text-center font-light tracking-wide">
                    {slide.description}
                  </p>
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