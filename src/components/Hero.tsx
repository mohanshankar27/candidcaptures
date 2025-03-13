
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
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight animate-fadeIn">
            Welcome to Candid Captures
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mt-8 animate-fadeIn delay-300"></div>
        </div>
      </div>
      
      <Carousel className="w-full" opts={{ loop: true }}>
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
                  <div className="absolute inset-0 bg-black/60" />
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
