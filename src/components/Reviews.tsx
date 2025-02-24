
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Dhanu Dhanu",
    role: "Client",
    content: "Sathya Prakash is an absolutely brilliant fantastic photographer so friendly and professional. His interaction with adults and children is absolutely brilliant. I have received photo and video with the quantity but the quality in each photo. Sathya make our day was captured with amazing photos. Candid capture photography team was very friendly they will understand the customer thought..... 100% I highly recommend my friend and family to Sathya for any function...... All the best for Candid Capture photography....",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    initials: "DD",
    rating: 5
  },
  {
    id: 2,
    name: "Pavana N",
    role: "Client",
    content: "Sathya Prakash. M. S best photographer. While there are so many photographers out there, its hard to choose the best right i saw the Candid Capture Photography in my sister engagement & pre-wedding shoot the pictures & video are amazing. All the event are well captured & pre-wedding shoot was really like a Hindi movie look..... Photo & video are high quality.. Tq for candid capture Photography team all the best....",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    initials: "PN"
  },
  {
    id: 3,
    name: "Manjunath M S",
    role: "Client",
    content: "I have saw the Candid Capture photography in my cousin engagement. Sathya is excellent photographer highly professional i saw the passion in his work. Candid Capture Photography team was very friendly they will truly captured the all fun and emotions in event there ideas are mind blowing and guests have been thrilled with there photos..... Tq so much sathya u have bought josh to event by ur photography......",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    initials: "MS"
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
        <div className="max-w-6xl mx-auto">
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
                  <Card className="bg-white h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={review.image} alt={review.name} />
                          <AvatarFallback className="text-lg">{review.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{review.name}</h3>
                          <p className="text-sm text-gray-600">{review.role}</p>
                          {review.rating && (
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(review.rating)].map((_, index) => (
                                <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 line-clamp-6">{review.content}</p>
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
