import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Search, Star, Clock, Shield, Heart, Award } from "lucide-react";
import { DestinationCarousel } from "@/components/DestinationCarousel";

const featuredPackages = [
  {
    title: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    price: "₹35,999",
    duration: "5 Days",
    location: "Kerala, India",
  },
  {
    title: "Rajasthan Heritage",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    price: "₹45,999",
    duration: "7 Days",
    location: "Rajasthan, India",
  },
  {
    title: "Bali Paradise",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    price: "₹89,999",
    duration: "6 Days",
    location: "Bali, Indonesia",
  },
  {
    title: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    price: "₹199,999",
    duration: "8 Days",
    location: "Switzerland",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "An unforgettable experience! The Kerala package exceeded all our expectations. The service was impeccable.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    location: "Delhi",
    text: "The Bali trip was perfectly organized. Every detail was taken care of. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    location: "Bangalore",
    text: "Our Switzerland tour was magical. The itinerary was well-planned and the accommodations were excellent.",
    rating: 5,
  },
];

export default function Home() {

  const featuredDestinations = [
    {
      id: 1,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80",
      price: "₹75,000",
      duration: "5 Days"
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80",
      price: "₹35,000",
      duration: "4 Days"
    },
    {
      id: 3,
      name: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80",
      price: "₹1,25,000",
      duration: "7 Days"
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Discover Amazing Travel Packages
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300">
              Explore the best of India and international destinations with our curated travel packages.
            </p>
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/indian-packages">Indian Packages</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg ">
                <Link href="/international-packages">International Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

  {/* Featured Destinations */}
      <section className="py-16 bg-background ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Destinations
          </h2>
          <DestinationCarousel destinations={featuredDestinations} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the difference with our premium travel services
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Safe Travel",
                description: "Your safety is our top priority with trusted partners and 24/7 support",
              },
              {
                icon: Clock,
                title: "Flexible Bookings",
                description: "Easy rescheduling and cancellation options for peace of mind",
              },
              {
                icon: Heart,
                title: "Personalized Service",
                description: "Customized packages tailored to your preferences and needs",
              },
              {
                icon: Award,
                title: "Best Price Guarantee",
                description: "Competitive prices and exclusive deals for our customers",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <feature.icon className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Featured Packages</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {featuredPackages.map((pkg, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${pkg.image})` }}
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{pkg.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pkg.location}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <p className="text-lg font-bold">{pkg.price}</p>
                          <p className="text-sm text-muted-foreground">
                            {pkg.duration}
                          </p>
                        </div>
                        <Button>View Details</Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Read about experiences from our satisfied travelers
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Get exclusive travel deals and updates delivered to your inbox
            </p>
            <div className="mt-8 max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}