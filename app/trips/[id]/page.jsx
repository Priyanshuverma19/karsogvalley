'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, Check, X, Info, ShoppingCart, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { notFound } from 'next/navigation';

// Static Trip Data (you can move this to a separate file or database later)
const trips = [
  {
    _id: 'manali-kasol-3n4d',
    title: '3 Night - 4 Days Manali-Kasol Adventure',
    destination: 'Manali, Kasol, Himachal Pradesh',
    price: 5500,
    duration: 4,
    description: 'Embark on an unforgettable journey through the scenic beauty of Manali and Kasol...',
    images: [
      '/shikari3.jpeg',
      '/shikari2.jpeg',
      '/shikari1.jpeg',
      '/shikari4.jpeg',
      '/shikari5.jpeg',
    ],
    itinerary: [
      // Same as in your original TripDetails component
      {
        day: 0,
        title: 'Departure to Manali',
        description: 'All travelers and trip captain will assemble at the pickup point...',
        activities: [
          'Assemble at pickup point...',
          'Overnight journey in AC Deluxe Vehicle',
        ],
      },
      // ... other days
    ],
    inclusions: [
      'Accommodation (2 nights in Manali, 1 night in Kasol)',
      '6 meals (3 breakfasts & 3 dinners)',
      // ... other inclusions
    ],
    exclusions: [
      'Entrance fees of any monument or activity',
      'Any personal expenses',
      // ... other exclusions
    ],
    faqs: [
      {
        question: 'What are the pickup points and times?',
        answer: 'Pickup points are: Jaipur at 11 AM...',
      },
      // ... other FAQs
    ],
  },
  {
    _id: 'karsog-shikari-devi-3n4d',
    title: '3 Night - 4 Days Karsog-Shikari Devi',
    destination: 'Karsog, Himachal Pradesh',
    price: 7500,
    duration: 4,
    description: 'Discover the serene beauty of Karsog Valley and the spiritual Shikari Devi Temple...',
    images: [
      '/shikari3.jpeg',
      '/shikari2.jpeg',
      '/shikari1.jpeg',
      '/shikari4.jpeg',
      '/shikari5.jpeg',
    ],
    itinerary: [
      {
        day: 0,
        title: 'Departure to Karsog',
        description: 'Assemble at Chandigarh for an overnight journey to Karsog.',
        activities: [
          'Assemble at Chandigarh (Sohana Gurudwara, 12-1 AM)',
          'Overnight journey in AC Deluxe Vehicle',
        ],
      },
      {
        day: 1,
        title: 'Arrival and Local Exploration',
        description: 'Arrive in Karsog, check into hotel/camps, and explore local attractions.',
        activities: [
          'Check into accommodation',
          'Visit local temples and markets',
          'Dinner and bonfire',
        ],
      },
      {
        day: 2,
        title: 'Shikari Devi Trek',
        description: 'Trek to Shikari Devi Temple, enjoy panoramic views.',
        activities: [
          'Breakfast and departure for trek',
          'Visit Shikari Devi Temple',
          'Return to accommodation, dinner',
        ],
      },
      {
        day: 3,
        title: 'Karsog Valley Exploration',
        description: 'Explore nearby villages and nature trails.',
        activities: [
          'Visit nearby villages',
          'Nature walks and photography',
          'Dinner and music',
        ],
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Check out after breakfast and depart for Chandigarh.',
        activities: [
          'Breakfast and checkout',
          'Depart for Chandigarh',
          'Arrive by evening',
        ],
      },
    ],
    inclusions: [
      'Accommodation (3 nights in Karsog)',
      '6 meals (3 breakfasts & 3 dinners)',
      'Travel from/to Chandigarh in AC Vehicle',
      'Trip captain & permits',
    ],
    exclusions: [
      'Entrance fees or activity costs',
      'Personal expenses',
      'Anything not mentioned in itinerary',
    ],
    faqs: [
      {
        question: 'What is the pickup point?',
        answer: 'Pickup and drop-off at Chandigarh (Sohana Gurudwara, 12-1 AM).',
      },
      {
        question: 'What is included in the price?',
        answer: 'The price includes accommodation, 6 meals, transportation, and permits.',
      },
    ],
  },
  {
    _id: 'narkanda-sarahan-2n3d',
    title: '2 Night - 3 Days Narkanda-Sarahan',
    destination: 'Narkanda, Sarahan, Himachal Pradesh',
    price: 6000,
    duration: 3,
    description: 'Experience the charm of Narkanda and the divine Bhimakali Temple in Sarahan...',
    images: [
      '/sarahan1.jpeg',
      '/sarahan2.jpeg',
      '/sarahan3.jpeg',
      '/sarahan4.jpeg',
      '/sarahan5.jpeg',
    ],
    itinerary: [
      {
        day: 0,
        title: 'Departure to Narkanda',
        description: 'Assemble at Chandigarh for an overnight journey to Narkanda.',
        activities: [
          'Assemble at Chandigarh (Sohana Gurudwara, 12-1 AM)',
          'Overnight journey in AC Deluxe Vehicle',
        ],
      },
      {
        day: 1,
        title: 'Narkanda Exploration',
        description: 'Arrive in Narkanda, check into hotel, and explore local attractions.',
        activities: [
          'Check into hotel',
          'Visit Hatu Peak',
          'Explore local markets',
          'Dinner',
        ],
      },
      {
        day: 2,
        title: 'Sarahan Visit',
        description: 'Travel to Sarahan, visit Bhimakali Temple, and return to Narkanda.',
        activities: [
          'Breakfast and departure to Sarahan',
          'Visit Bhimakali Temple',
          'Return to Narkanda, dinner',
        ],
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Check out after breakfast and depart for Chandigarh.',
        activities: [
          'Breakfast and checkout',
          'Depart for Chandigarh',
          'Arrive by evening',
        ],
      },
    ],
    inclusions: [
      'Accommodation (2 nights in Narkanda)',
      '4 meals (2 breakfasts & 2 dinners)',
      'Travel from/to Chandigarh in AC Vehicle',
      'Trip captain & permits',
    ],
    exclusions: [
      'Entrance fees or activity costs',
      'Personal expenses',
      'Anything not mentioned in itinerary',
    ],
    faqs: [
      {
        question: 'What is the pickup point?',
        answer: 'Pickup and drop-off at Chandigarh (Sohana Gurudwara, 12-1 AM).',
      },
      {
        question: 'What is included in the price?',
        answer: 'The price includes accommodation, 4 meals, transportation, and permits.',
      },
    ],
  },
  {
    _id: 'tirthan-jibhi-jalori-3n4d',
    title: '3 Night - 4 Days Tirthan-Jibhi-Jalori',
    destination: 'Tirthan Valley, Himachal Pradesh',
    price: 8000,
    duration: 4,
    description: 'Immerse yourself in the pristine beauty of Tirthan Valley, Jibhi, and Jalori Pass...',
    images: [
      '/jalori1.jpeg',
      '/jalori2.jpeg',
      '/jalori3.jpeg',
      '/jalori4.jpeg',
      '/jalori5.jpeg',
    ],
    itinerary: [
      {
        day: 0,
        title: 'Departure to Tirthan',
        description: 'Assemble at Chandigarh for an overnight journey to Tirthan Valley.',
        activities: [
          'Assemble at Chandigarh (Sohana Gurudwara, 12-1 AM)',
          'Overnight journey in AC Deluxe Vehicle',
        ],
      },
      {
        day: 1,
        title: 'Tirthan Valley Arrival',
        description: 'Arrive in Tirthan, check into camps, and explore the valley.',
        activities: [
          'Check into camps',
          'Explore Tirthan River and local trails',
          'Dinner and bonfire',
        ],
      },
      {
        day: 2,
        title: 'Jibhi and Jalori Pass',
        description: 'Visit Jibhi Waterfall and trek to Jalori Pass.',
        activities: [
          'Breakfast and departure to Jibhi',
          'Visit Jibhi Waterfall',
          'Trek to Jalori Pass',
          'Return to camps, dinner',
        ],
      },
      {
        day: 3,
        title: 'Tirthan Exploration',
        description: 'Explore Great Himalayan National Park and local villages.',
        activities: [
          'Visit Great Himalayan National Park',
          'Explore nearby villages',
          'Dinner and music',
        ],
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Check out after breakfast and depart for Chandigarh.',
        activities: [
          'Breakfast and checkout',
          'Depart for Chandigarh',
          'Arrive by evening',
        ],
      },
    ],
    inclusions: [
      'Accommodation (3 nights in Tirthan/Jibhi)',
      '6 meals (3 breakfasts & 3 dinners)',
      'Travel from/to Chandigarh in AC Vehicle',
      'Trip captain & permits',
    ],
    exclusions: [
      'Entrance fees or activity costs',
      'Personal expenses',
      'Anything not mentioned in itinerary',
    ],
    faqs: [
      {
        question: 'What is the pickup point?',
        answer: 'Pickup and drop-off at Chandigarh (Sohana Gurudwara, 12-1 AM).',
      },
      {
        question: 'What is included in the price?',
        answer: 'The price includes accommodation, 6 meals, transportation, and permits.',
      },
    ],
  },
];

export default function TripDetails({ params }) {
  const trip = trips.find((t) => t._id === params.id);

  if (!trip) {
    notFound();
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: 'Added to cart',
      description: `${trip.title} has been added to your cart`,
    });
  };

  return (
    <div className="container mx-auto px-4 pt-28 pb-16 max-w-7xl">
      {/* Same JSX as your original TripDetails component */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
  {/* Image Section */}
  <div className="lg:sticky lg:top-32 self-start">
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

  {/* Content Section */}
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
          *Starting price for quad sharing from Chandigarh.
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
      <a href="/contact" className="ml- brom-1 text-blue-600 dark:text-blue-400 hover:underline">
        Contact us
      </a>
    </div>
  </div>
</div>

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
          {trip.title} takes place in {trip.destination}. Detailed maps and GPS coordinates will be provided in your pre-departure information.
        </p>
      </section>

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