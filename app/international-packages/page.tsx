"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Users, Calendar, IndianRupee } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EnquiryForm } from "@/components/EnquiryForm";

const internationalPackages = [
  {
    id: 1,
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: 49999,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    category: "beach",
    persons: "2",
    highlights: ["Private Villa", "Water Sports", "Temple Visit"],
  },
  {
    id: 2,
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    duration: "6 Days / 5 Nights",
    price: 79999,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    category: "luxury",
    persons: "2",
    highlights: ["Desert Safari", "Burj Khalifa", "Dubai Mall"],
  },
  {
    id: 3,
    title: "Swiss Alps Explorer",
    location: "Switzerland",
    duration: "8 Days / 7 Nights",
    price: 89999,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    category: "adventure",
    persons: "2",
    highlights: ["Mountain Train", "Skiing", "Lake Cruise"],
  },
  {
    id: 4,
    title: "Singapore Family Fun",
    location: "Singapore",
    duration: "5 Days / 4 Nights",
    price: 69999,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    category: "family",
    persons: "2",
    highlights: ["Universal Studios", "Marina Bay", "Night Safari"],
  },
  {
    id: 5,
    title: "Thailand Beach Hopping",
    location: "Thailand",
    duration: "6 Days / 5 Nights",
    price: 69999,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    category: "beach",
    persons: "2",
    highlights: ["Island Tour", "Thai Massage", "Night Market"],
  },
  {
    id: 6,
    title: "Paris Romance",
    location: "France",
    duration: "7 Days / 6 Nights",
    price: 79999,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    category: "luxury",
    persons: "2",
    highlights: ["Eiffel Tower", "Louvre Museum", "River Seine Cruise"],
  },
];

export default function InternationalPackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredPackages = internationalPackages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "all" || pkg.category === category;
    const price = pkg.price;
    const matchesPrice = priceRange === "all" ||
      (priceRange === "under100k" && price < 100000) ||
      (priceRange === "100k-150k" && price >= 100000 && price <= 150000) ||
      (priceRange === "above150k" && price > 150000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <section
  className="relative h-[600px] bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80")',
  }}
>
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        Global Adventures Await
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300">
        Embark on unforgettable journeys to exotic international destinations with our exclusive packages.
      </p>
     
    </div>
  </div>
</section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">International Tour Packages</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the world with our exclusive international packages
          </p>
        </div>

        {/* Filters */}
        <Card className="mt-8 p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <Input
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="beach">Beach</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="family">Family</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under100k">Under ₹1,00,000</SelectItem>
                <SelectItem value="100k-150k">₹1,00,000 - ₹1,50,000</SelectItem>
                <SelectItem value="above150k">Above ₹1,50,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Package Listings */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${pkg.image})` }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {pkg.location}
                </div>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {pkg.duration}
                </div>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                  <Users className="mr-1 h-4 w-4" />
                  {pkg.persons} Persons
                </div>
                <div className="mt-4">
                  <h4 className="font-medium">Highlights:</h4>
                  <ul className="mt-2 space-y-1">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4" />
                    <span className="text-2xl font-bold">
                      {pkg.price.toLocaleString()}
                    </span>
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
          ))}
        </div>
      </div>
    </div>
  );
}