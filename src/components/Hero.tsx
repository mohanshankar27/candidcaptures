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
    },
    {
      title: "Traditional Wedding Portrait",
      image: "/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png",
      description: "Elegant portraits capturing the essence of traditional wedding attire and customs",
    },
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