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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin, Users, Star } from "lucide-react";

const tourPackages = [
  // Indian Destinations
  {
    id: 1,
    title: "Magical Kerala Backwaters",
    location: "Kerala, India",
    duration: "6 Days / 5 Nights",
    price: 35999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    type: "domestic",
    category: "nature",
  },
  {
    id: 2,
    title: "Royal Rajasthan Tour",
    location: "Rajasthan, India",
    duration: "8 Days / 7 Nights",
    price: 45999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    type: "domestic",
    category: "cultural",
  },
  {
    id: 3,
    title: "Himalayan Adventure",
    location: "Himachal Pradesh, India",
    duration: "5 Days / 4 Nights",
    price: 29999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    type: "domestic",
    category: "adventure",
  },
  // International Destinations
  {
    id: 4,
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: 89999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    type: "international",
    category: "beach",
  },
  {
    id: 5,
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    duration: "6 Days / 5 Nights",
    price: 129999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    type: "international",
    category: "luxury",
  },
  {
    id: 6,
    title: "Swiss Alps Explorer",
    location: "Switzerland",
    duration: "8 Days / 7 Nights",
    price: 199999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    type: "international",
    category: "adventure",
  },
];

export default function PackagesPage() {
  const [date, setDate] = useState<Date>();
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesType = type === "all" || pkg.type === type;
    const matchesCategory = category === "all" || pkg.category === category;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Tour Packages</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Discover amazing destinations in India and around the world
          </p>
        </div>

        {/* Filters */}
        <Card className="mt-8 p-6">
          <div className="grid gap-6 md:grid-cols-4">
            <Input
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="domestic">Domestic</SelectItem>
                <SelectItem value="international">International</SelectItem>
              </SelectContent>
            </Select>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="beach">Beach</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="nature">Nature</SelectItem>
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </Card>

        {/* Package Listings */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${pkg.image})` }}
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{pkg.title}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">{pkg.rating}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {pkg.location}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {pkg.duration}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">/person</span>
                  </div>
                  <Button asChild>
                    <a href={`/packages/${pkg.id}`}>View Details</a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}