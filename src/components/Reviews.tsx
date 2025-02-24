
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    name: "Dhanu Dhanu",
    role: "Client",
    content: "Sathya Prakash is an absolutely brilliant fantastic photographer so friendly and professional. His interaction with adults and children is absolutely brilliant. I have received photo and video with the quantity but the quality in each photo. Sathya make our day was captured with amazing photos. Candid capture photography team was very friendly they will understand the customer thought..... 100% I highly recommend my friend and family to Sathya for any function...... All the best for Candid Capture photography....",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    initials: "DD"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Wedding Client",
    content: "Outstanding photography skills and great communication throughout the event. The candid moments captured were priceless.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    initials: "MC"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Corporate Event",
    content: "Transformed our corporate event into beautiful memories. The final photos exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    initials: "ED"
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Pre-wedding Shoot",
    content: "Delivered high-quality photos and innovative concepts that made our pre-wedding shoot special.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    initials: "AT"
  }
];

const Reviews = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                          <AvatarImage src={review.image} alt={review.name} />
                          <AvatarFallback>{review.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{review.name}</h3>
                          <p className="text-sm text-gray-600">{review.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.content}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
