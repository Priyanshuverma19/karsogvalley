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
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EnquiryForm } from "@/components/EnquiryForm";

const indianPackages = [
  {
    id: 1,
    title: "Kerala Backwaters Bliss",
    location: "Kerala",
    duration: "5 Days / 4 Nights",
    price: 19999,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    category: "nature",
    persons: "2",
    highlights: ["Houseboat Stay", "Ayurveda Spa", "Beach Visit"],
  },
  {
    id: 2,
    title: "Royal Rajasthan Tour",
    location: "Rajasthan",
    duration: "7 Days / 6 Nights",
    price: 25999,
    image: "https://images.unsplash.com/photo-1718923088525-5e38c837c800?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cultural",
    persons: "2",
    highlights: ["Palace Stay", "Desert Safari", "Folk Dance"],
  },
  {
    id: 3,
    title: "Goa Beach Paradise",
    location: "Goa",
    duration: "4 Days / 3 Nights",
    price: 20999,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    category: "beach",
    persons: "2",
    highlights: ["Water Sports", "Beach Parties", "Cruise"],
  },
  {
    id: 4,
    title: "Himalayan Adventure",
    location: "Himachal Pradesh",
    duration: "6 Days / 5 Nights",
    price: 25999,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    category: "adventure",
    persons: "2",
    highlights: ["Trekking", "Camping", "River Rafting"],
  },
  {
    id: 5,
    title: "Golden Triangle",
    location: "Delhi-Agra-Jaipur",
    duration: "6 Days / 5 Nights",
    price: 30999,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    category: "cultural",
    persons: "2",
    highlights: ["Taj Mahal", "Amber Fort", "Qutub Minar"],
  },
  {
    id: 6,
    title: "Kashmir Paradise",
    location: "Kashmir",
    duration: "7 Days / 6 Nights",
    price: 29999,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    persons: "2",
    highlights: ["Shikara Ride", "Gondola Ride", "Mughal Gardens"],
  },
];

export default function IndianPackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredPackages = indianPackages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "all" || pkg.category === category;
    const price = pkg.price;
    const matchesPrice = priceRange === "all" ||
      (priceRange === "under30k" && price < 30000) ||
      (priceRange === "30k-50k" && price >= 30000 && price <= 50000) ||
      (priceRange === "above50k" && price > 50000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <section
  className="relative h-[600px] bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80")',
  }}
>
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        Explore Incredible India
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300">
        Discover the rich culture, heritage, and natural beauty with our curated Indian travel packages.
      </p>
      
    </div>
  </div>
</section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Indian Tour Packages</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the incredible diversity of India with our curated packages
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
                <SelectItem value="nature">Nature</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="beach">Beach</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under30k">Under ₹30,000</SelectItem>
                <SelectItem value="30k-50k">₹30,000 - ₹50,000</SelectItem>
                <SelectItem value="above50k">Above ₹50,000</SelectItem>
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