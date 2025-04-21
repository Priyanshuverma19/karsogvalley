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

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EnquiryForm } from "@/components/EnquiryForm";

const featuredPackages = [
  {
    title: "Shimla & Manali Delight",
    image: "https://images.unsplash.com/photo-1593183981460-e9276b5a5587?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹25,999",
    duration: "6 Days",
    location: "Shimla & Manali, Himachal Pradesh",
  },
  {
    title: "Spiti Valley Adventure",
    image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹42,999",
    duration: "7 Days",
    location: "Spiti Valley, Himachal Pradesh",
  },
  {
    title: "Dharamshala & Dalhousie Escape",
    image: "https://images.unsplash.com/photo-1622225074638-1d80c0388697?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹29,499",
    duration: "6 Days",
    location: "Dharamshala & Dalhousie, Himachal Pradesh",
  },
  {
    title: "Kasol & Kheerganga Trek",
    image: "https://images.unsplash.com/photo-1643042725188-42df82135f1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹19,999",
    duration: "5 Days",
    location: "Kasol & Kheerganga, Himachal Pradesh",
  },
  {
    title: "Complete Himachal Tour",
    image: "https://images.unsplash.com/photo-1692719058797-2954b100c8fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹54,999",
    duration: "10 Days",
    location: "Shimla, Manali, Dalhousie, Dharamshala",
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
const featuredInternationalPackages = [
  {
    title: "Paris Getaway",
    location: "France",
    price: "₹1,4990",
    duration: "5 Nights / 6 Days",
    image: "https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=xk0x1gAs_jzAnM9fj9fNzvtFbkDBW0zOev_uGRDr6wg=",
  },
  {
    title: "Bali Escape",
    location: "Indonesia",
    price: "₹8990",
    duration: "6 Nights / 7 Days",
    image: "https://media.istockphoto.com/id/1043561584/photo/tropical-island-wallpaper.webp?a=1&b=1&s=612x612&w=0&k=20&c=QY19g7SUSDyw5nJly_l2yuz8mLp69q6FEuFr9hoSXMg=",
  },
  {
    title: "Swiss Adventure",
    location: "Switzerland",
    price: "₹1,7990",
    duration: "7 Nights / 8 Days",
    image: "https://images.unsplash.com/photo-1544986588-da9de4fb3021?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export default function Home() {

  const featuredDestinations = [
    {
      id: 1,
      name: "Shimla",
      image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹5,000",
      duration: "3 Days"
    },
    {
      id: 2,
      name: "Kasol",
      image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹35,00",
      duration: "2 Days"
    },
    {
      id: 3,
      name: "Manali",
      image: "https://images.unsplash.com/photo-1620720970374-5b7e67e1e610?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹25,00",
      duration: "4 Days"
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/banner4.png")',
        }}
      >
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Discover Amazing Travel Packages
            </h1> */}
            {/* <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300">
              Explore the best of India and international destinations with our curated travel packages.
            </p> */}
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
              {/* <Button asChild size="lg" className="text-lg">
                <Link href="/indian-packages">Indian Packages</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg ">
                <Link href="/international-packages">International Packages</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>



   

      {/* Featured Packages */}
      <section className="py-16 bg-muted">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-8">Himachal Packages</h2>

    {/* Make the carousel wrapper relative */}
    <div className="relative">
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
                       <Sheet>
                              <SheetTrigger asChild>
                                <Button >Quick Enquiry</Button>
                              </SheetTrigger>
                              <SheetContent>
                                <SheetHeader>
                                  <SheetTitle>Quick Enquiry</SheetTitle>
                                </SheetHeader>
                                <div className="mt-6">
                                  <EnquiryForm />
                                </div>
                              </SheetContent>
                            </Sheet>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Position buttons absolutely and bring them inside the container */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
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


      {/* International packages  */}
      <section className="py-16 bg-muted">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-8">International Packages</h2>

    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {featuredInternationalPackages.map((pkg, index) => (
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
                    <Sheet>
            <SheetTrigger asChild>
              <Button >Quick Enquiry</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Quick Enquiry</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </SheetContent>
          </Sheet>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
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