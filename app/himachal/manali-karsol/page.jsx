'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, Check, X, Info, ShoppingCart, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Static Trip Details
const trip = {
  _id: 'manali-kasol-3n4d',
  title: '3 Night - 4 Days Manali-Kasol Adventure',
  description:
    'Embark on an unforgettable journey through the scenic beauty of Manali and Kasol. Explore snow-capped mountains, serene valleys, and vibrant local culture. This trip includes visits to Solang Valley, Atal Tunnel, Sissu, Kasol Market, Manikaran Gurudwara, and more, with adventure activities and cozy stays.',
  destination: 'Manali, Kasol, Himachal Pradesh',
  price: 5500, // Starting price for quad sharing from Delhi/Chandigarh
  duration: 4,
  images: [
    '/images/manali-kasol-1.jpg',
    '/images/manali-kasol-2.jpg',
    '/images/manali-kasol-3.jpg',
    '/images/manali-kasol-4.jpg',
  ],
  featured: true,
  itinerary: [
    {
      day: 0,
      title: 'Departure to Manali',
      description:
        'All travelers and trip captain will assemble at the pickup point. Departure in AC Deluxe Vehicle for an overnight journey to Manali.',
      activities: [
        'Assemble at pickup point (Jaipur: 11 AM at Narayan Singh Circle, Delhi: 7:30 PM at Rohini Sec 18 Metro Station, Chandigarh: 12-1 AM at Sohana Gurudwara)',
        'Overnight journey in AC Deluxe Vehicle',
      ],
    },
    {
      day: 1,
      title: 'Manali Local Sightseeing',
      description:
        'Reach Manali in the morning, check into the hotel, and take some rest. Explore local attractions including Hadimba Temple, Mall Road, Old Manali Cafes, and Jogini Waterfall (if time permits).',
      activities: [
        'Check into hotel and rest',
        'Visit Hadimba Temple',
        'Explore Mall Road and Old Manali Cafes',
        'Visit Van Vihar',
        'Visit Jogini Waterfall (if time permits)',
        'Dinner and briefing for the next day',
      ],
    },
    {
      day: 2,
      title: 'Solang, Atal Tunnel, Sissu',
      description:
        'Wake up, have breakfast, and head to Solang Valley, Atal Tunnel, and Sissu Valley. Enjoy snow activities and adventure sports like ropeway, zipline, and mountain biking (self-paid).',
      activities: [
        'Visit Solang Valley',
        'Explore Atal Tunnel',
        'Visit Sissu Valley',
        'Enjoy adventure activities (self-paid)',
        'Return to hotel, dinner, bonfire, and music',
      ],
    },
    {
      day: 3,
      title: 'Arrival at Kasol Camps',
      description:
        'Check out from the hotel after breakfast and depart for Kasol. Stop at Kullu/Bhuntar for rafting and paragliding (self-paid). Reach Kasol by evening and check into camps.',
      activities: [
        'Check out from hotel',
        'Stop at Kullu/Bhuntar for rafting and paragliding (self-paid)',
        'Check into Kasol camps',
        'Dinner with music and bonfire',
      ],
    },
    {
      day: 4,
      title: 'Manikaran Gurudwara, Kasol & Departure',
      description:
        'Wake up to a beautiful view, have breakfast, and check out from camps. Visit Manikaran Gurudwara, Chalal Trek, Kasol Market, and riverside cafes. Depart from Kasol by evening.',
      activities: [
        'Visit Manikaran Gurudwara',
        'Explore Chalal Trek',
        'Visit Kasol Market and riverside cafes',
        'Visit Nature Park Kasol',
        'Depart from Kasol by evening',
        'Reach respective locations by next morning (Day 5)',
      ],
    },
  ],
  inclusions: [
    'Accommodation (2 nights in Manali, 1 night in Kasol)',
    '6 meals (3 breakfasts & 3 dinners)',
    'Travel to/from in AC Vehicle',
    'All local sightseeing as per the itinerary',
    'Bonfire and music',
    'Trip captain & all permits',
  ],
  exclusions: [
    'Entrance fees of any monument or activity',
    'Any personal expenses',
    'Anything not mentioned in the itinerary',
    'Rafting and paragliding costs',
  ],
  faqs: [
    {
      question: 'What are the pickup points and times?',
      answer:
        'Pickup points are: Jaipur at 11 AM (Narayan Singh Circle), Delhi at 7:30 PM (Rohini Sec 18 Metro Station), and Chandigarh at 12-1 AM (Sohana Gurudwara). For Jaipur members, travel to/from Delhi is in a Volvo AC bus, and the rest is in a Force Traveller.',
    },
    {
      question: 'What is the booking process?',
      answer:
        'Step 1: Fill the form (shared via WhatsApp). Step 2: Pay an advance booking amount of INR 2000 per person and share the screenshot. Step 3: Receive a confirmation receipt/invoice via WhatsApp/Email. Step 4: Your booking is confirmed.',
    },
    {
      question: 'What are the pricing options?',
      answer:
        'Pricing varies by room sharing and pickup location: Quad Sharing (Delhi/Chandigarh: INR 5500, Jaipur: INR 6500), Triple Sharing (Delhi/Chandigarh: INR 6000, Jaipur: INR 7000), Double Sharing (Delhi/Chandigarh: INR 6500, Jaipur: INR 7500). Prices are not valid from 20 Dec to 5 Jan and 1 May to 30 June.',
    },
    {
      question: 'What is the cancellation policy?',
      answer:
        'The advance amount is non-refundable. Full payment must be made while boarding. If you cancel on the same day or 1 day before the trip, the full amount is payable. No refunds for unavailed inclusions.',
    },
    {
      question: 'Are adventure activities included?',
      answer:
        'Adventure activities like rafting, paragliding, ropeway, zipline, and mountain biking are self-paid and not included in the package price.',
    },
  ],
};

export default function TripDetails() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${trip.title} has been added to your cart`,
    });
  };

  return (
    <div className="container mx-auto px-4 pt-28 pb-16 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Trip Images */}
        <div className="sticky top-32 self-start">
          <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={trip.images[activeImageIndex]}
              alt={trip.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
            {trip.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md transition-all ${
                  index === activeImageIndex
                    ? 'ring-2 ring-blue-600 ring-offset-2'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={image}
                  alt={`${trip.title} - view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Trip Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {trip.title}
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-6 flex items-center">
            <MapPin className="h-5 w-5 mr-1" /> {trip.destination}
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
            {trip.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg flex flex-col items-center text-center">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Duration</span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">{trip.duration} Days</span>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg flex flex-col items-center text-center">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Group Size</span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Max 12</span>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg flex flex-col items-center text-center">
              <Camera className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Activities</span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">10+</span>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg flex flex-col items-center text-center">
              <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Departures</span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Weekly</span>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex justify-between items-center mb-8">
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                ₹{trip.price.toLocaleString()}
                <span className="text-base font-normal text-gray-500 dark:text-gray-400 ml-1">
                  per person
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                *Starting price for quad sharing from Delhi/Chandigarh. Prices vary by sharing and pickup location.
              </p>
            </div>
            <Button 
              size="lg" 
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Book Now
            </Button>
          </div>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-12">
            <Info className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            Interested in a private tour or custom itinerary? 
            <a href="/contact" className="ml-1 text-blue-600 dark:text-blue-400 hover:underline">
              Contact us
            </a>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
          Detailed Itinerary
        </h2>
        <div className="space-y-10">
          {trip.itinerary.map((day) => (
            <div key={day.day} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
              <div className="absolute left-[-13px] top-0 bg-blue-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm font-medium">
                {day.day}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {day.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                {day.description}
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3 text-lg">
                  Activities:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {day.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
          What's Included & Excluded
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Check className="h-6 w-6 text-green-500 mr-2" />
              Inclusions
            </h3>
            <ul className="space-y-3">
              {trip.inclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <X className="h-6 w-6 text-red-500 mr-2" />
              Exclusions
            </h3>
            <ul className="space-y-3">
              {trip.exclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          Trip Locations
        </h2>
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <MapPin className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Interactive map available after booking
            </p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          {trip.title} takes place in {trip.destination}. The itinerary covers key attractions like Solang Valley, Atal Tunnel, Sissu, Kasol Market, and Manikaran Gurudwara, along with hidden gems. All transportation between locations is included. Detailed maps and GPS coordinates will be provided in your pre-departure information.
        </p>
      </section>

      {/* FAQs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {trip.faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12 rounded-2xl">
        <div className="md:flex items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Experience {trip.title}?
            </h2>
            <p className="text-white/90 text-lg">
              Secure your spot now or contact us with any questions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-white/90"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Book Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20"
              asChild
            >
              <a href="/contact">Ask a Question</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}