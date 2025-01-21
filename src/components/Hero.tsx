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
      title: "Pre-wedding Concept",
      image: "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
      description: "Creating magical moments with creative lighting and props",
    },
    {
      title: "Family Photography",
      image: "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
      description: "Capturing precious family moments and celebrations",
    },
    {
      title: "Baby Chef Photography",
      image: "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
      description: "Adorable themed photoshoots for your little ones",
    },
    {
      title: "Haldi Ceremony",
      image: "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
      description: "Capturing the vibrant traditions and joyous moments of the Haldi ceremony",
    }
  ];

  return (
    <section id="home" className="min-h-screen relative">
      <Carousel className="w-full h-screen">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${slide.image}")`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-between text-white z-10 animate-fadeIn py-20">
                  <h2 className="text-4xl md:text-6xl font-bold">{slide.title}</h2>
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto text-center bg-black/30 p-4 rounded-lg">
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