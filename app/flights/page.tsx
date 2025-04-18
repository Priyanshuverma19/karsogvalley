"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Plane,
  ArrowRight,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mockFlights = [
  {
    id: 1,
    airline: "IndiGo",
    flightNumber: "6E-1234",
    departure: "Delhi",
    arrival: "Mumbai",
    departureTime: "06:00",
    arrivalTime: "08:10",
    duration: "2h 10m",
    price: 4999,
    stops: 0,
  },
  {
    id: 2,
    airline: "Air India",
    flightNumber: "AI-4321",
    departure: "Delhi",
    arrival: "Mumbai",
    departureTime: "08:30",
    arrivalTime: "10:45",
    duration: "2h 15m",
    price: 5499,
    stops: 0,
  },
  {
    id: 3,
    airline: "Vistara",
    flightNumber: "UK-8765",
    departure: "Delhi",
    arrival: "Mumbai",
    departureTime: "14:15",
    arrivalTime: "17:00",
    duration: "2h 45m",
    price: 6299,
    stops: 1,
  },
];

export default function FlightsPage() {
  const [date, setDate] = useState<Date>();
  const [passengers, setPassengers] = useState("1");

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search Form */}
        <Card className="p-6">
          <div className="grid gap-6 md:grid-cols-5">
            <div>
              <Input
                type="text"
                placeholder="From"
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="To"
                className="w-full"
              />
            </div>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
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
            <div>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger>
                  <SelectValue placeholder="Passengers" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Passenger" : "Passengers"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Search Flights</Button>
          </div>
        </Card>

        {/* Flight Listings */}
        <div className="mt-8 space-y-4">
          {mockFlights.map((flight) => (
            <Card key={flight.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{flight.airline}</h3>
                    <p className="text-sm text-muted-foreground">
                      {flight.flightNumber}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <p className="text-xl font-semibold">{flight.departureTime}</p>
                    <p className="text-sm text-muted-foreground">
                      {flight.departure}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-muted-foreground">
                      {flight.duration}
                    </p>
                    <div className="relative mt-2">
                      <div className="absolute inset-y-1/2 h-[2px] w-32 bg-border" />
                      <ArrowRight className="relative z-10 h-4 w-4" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {flight.stops === 0 ? "Non-stop" : `${flight.stops} stop`}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold">{flight.arrivalTime}</p>
                    <p className="text-sm text-muted-foreground">
                      {flight.arrival}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹{flight.price}</p>
                  <Button className="mt-2">Select</Button>
                </div>
              </div>

              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="details">
                  <AccordionTrigger>Flight Details</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold">Baggage</h4>
                        <p className="text-sm text-muted-foreground">
                          Cabin: 7 kg
                          <br />
                          Check-in: 15 kg
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Amenities</h4>
                        <p className="text-sm text-muted-foreground">
                          Meal Service
                          <br />
                          Entertainment
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Cancellation</h4>
                        <p className="text-sm text-muted-foreground">
                          Cancellation fee applies
                          <br />
                          Free date change
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}