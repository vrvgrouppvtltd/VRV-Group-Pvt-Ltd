// Content for the three ServiceCards on the landing page.
// `image` paths match the public/images/services/ folder — drop the
// actual photos in there and these will pick them up automatically.
const services = [
  {
    id: 'tours-travel',
    title: 'Tours & Travel',
    tagline: 'Explore Vrindavan & Braj',
    description:
      'Darshan and sightseeing tours, pilgrimage packages, and family trips planned by people who know these streets.',
    image: '/images/services/tours.png',
    cta: 'Explore Tours',
    href: '/tours',
  },
  {
    id: 'car-rental',
    title: 'Car Rental',
    tagline: 'Book your ride',
    description:
      'A wide range of cars with driver, for local sightseeing or outstation travel — booked in minutes.',
    image: '/images/services/car-rental.jpg',
    cta: 'Book a Car',
    href: '/car-rental',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    tagline: 'Find your property',
    description:
      'Buy, sell, or rent residential and commercial properties and plots — legally verified, and locally trusted.',
    image: '/images/services/real-estate.png',
    cta: 'Explore Properties',
    href: '/real-estate',
  },
]

export default services
