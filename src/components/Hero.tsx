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
      title: "Wedding Photography",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
      description: "Capturing your special moments with elegance",
    },
    {
      title: "Pre-wedding Photoshoot",
      image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f",
      description: "Creating beautiful memories before the big day",
    },
    {
      title: "E-commerce Shoot",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      description: "Professional product photography for your business",
    },
    {
      title: "Model Shoot",
      image: "https://images.unsplash.com/photo-1618375531912-867984bdfd87",
      description: "Capturing your best angles",
    },
    {
      title: "Product Shoot",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description: "Showcase your products professionally",
    },
    {
      title: "Makeup Shoot",
      image: "https://images.unsplash.com/photo-1596704017704-2fcd0b0e4ebf",
      description: "Highlighting your beauty transformations",
    },
    {
      title: "Concept Shoot",
      image: "https://images.unsplash.com/photo-1533158628620-7e35717d36e8",
      description: "Bringing creative ideas to life",
    },
    {
      title: "Maternity Shoot",
      image: "https://images.unsplash.com/photo-1544126592-807ade215a0b",
      description: "Celebrating the journey of motherhood",
    },
    {
      title: "Newborn Shoot",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
      description: "Capturing precious first moments",
    },
    {
      title: "Naming Ceremony",
      image: "https://images.unsplash.com/photo-1587614298171-a331d8a8a766",
      description: "Documenting traditional celebrations",
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
                <div className="relative h-full flex flex-col items-center justify-center text-white z-10 animate-fadeIn">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto text-center">
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