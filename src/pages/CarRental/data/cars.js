export const CAR_TERMS = {
  slab12h: {
    durationHours: 12,
    durationLabel: "12 Hours",
    kmLimit: 200,
    kmLimitLabel: "200 KM Limit",
  },

  slab24h: {
    durationHours: 24,
    durationLabel: "24 Hours (Full Day)",
    kmLimit: 300,
    kmLimitLabel: "300 KM Limit",
  },

  slab6h: {
    durationHours: 6,
    durationLabel: "6 Hours",
    kmLimit: 120,
    kmLimitLabel: "120 KM Limit",
  },

  pickupLocation:
    "Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan (281121)",

  standardExtraKm: 10,
  premiumExtraKm: 12,

  // Driver Charges
  standardDriverCharge: 1000,
  premiumDriverCharge: 1200,
};

export const CAR_CATEGORIES = [
  { id: "all", label: "All Vehicles" },
  { id: "premium", label: "Premium Cars" },
  { id: "standard", label: "Standard Cars" },
  { id: "two-wheeler", label: "Two-Wheelers / Activa" },
];

export const CAR_FLEET = [
  // =========================================================
  // PREMIUM CARS - TOP
  // =========================================================

  {
    id: "scorpio-s11",
    name: "Mahindra Scorpio S11 Classic",
    category: "premium",
    categoryBadge: "Rugged Premium SUV",
    type: "suv",

    // Internal pricing - shown only during booking
    price12h: 2000,
    price24h: 4500,
    price6h: 1500,

    extraKmRate: 12,
    kmLimit12h: 200,
    kmLimit24h: 300,
    kmLimit6h: 120,

    seats: "7 Seater",
    fuel: "Diesel",
    transmission: "Manual",

    image: "/images/car-rental/scorpio-s11.png",

    features: [
      "7-Passenger Capacity",
      "Braj & Parikrama Master",
      "Heavy Duty Chilled AC",
      "Self-Drive / Outstation",
    ],

    driverCharge: 1200,
    isPopular: true,
  },

  {
    id: "scorpio-n",
    name: "Mahindra Scorpio N",
    category: "premium",
    categoryBadge: "Luxury SUV",
    type: "suv",

    // Internal pricing - shown only during booking
    price12h: 3000,
    price24h: 6500,

    extraKmRate: 12,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "7 Seater",
    fuel: "Diesel",
    transmission: "Automatic/Manual",

    image: "/images/car-rental/scorpio-n.png",

    features: [
      "Commanding Stance",
      "Premium Leatherette Seats",
      "Advanced Safety & Power",
      "Commanding Driving Seat",
    ],

    driverCharge: 1200,
    isPopular: true,
  },

  {
    id: "thar",
    name: "Mahindra Thar 4x4",
    category: "premium",
    categoryBadge: "Iconic Off-Roader",
    type: "suv",

    // Internal pricing - shown only during booking
    price12h: 3500,
    price24h: 5500,
    price6h: 2000,

    extraKmRate: 12,
    kmLimit12h: 200,
    kmLimit24h: 300,
    kmLimit6h: 120,

    seats: "4 Seater",
    fuel: "Diesel/Petrol",
    transmission: "4x4 Manual",

    image: "/images/car-rental/thar.png",

    features: [
      "4x4 Adventure Capability",
      "Convertible/Hard Top",
      "Unmatched Road Presence",
      "Iconic Off-Road Styling",
    ],

    driverCharge: 1200,
    isPopular: true,
  },

  {
    id: "creta",
    name: "Hyundai Creta",
    category: "premium",
    categoryBadge: "Executive SUV",
    type: "suv",

    // Internal pricing - shown only during booking
    price12h: 3000,
    price24h: 4500,

    extraKmRate: 12,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Diesel/Petrol",
    transmission: "Automatic/Manual",

    image: "/images/car-rental/creta.png",

    features: [
      "Panoramic Sunroof",
      "Smooth High-Speed Gliding",
      "Executive Comfort",
      "Spacious Trunk",
    ],

    driverCharge: 1200,
    isPopular: true,
  },

  {
    id: "seltos",
    name: "Kia Seltos",
    category: "premium",
    categoryBadge: "Premium SUV",
    type: "suv",

    // Internal pricing - shown only during booking
    price12h: 3000,
    price24h: 4500,

    extraKmRate: 12,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Diesel/Petrol",
    transmission: "Manual/Auto",

    image: "/images/car-rental/seltos.png",

    features: [
      "Digital Cockpit",
      "Air Purifier & Audio",
      "Spacious Family Cabin",
      "Smooth Suspension",
    ],

    driverCharge: 1200,
  },

  {
    id: "mg-hector",
    name: "MG Hector",
    category: "premium",
    categoryBadge: "Luxury Internet SUV",
    type: "suv",

    // Internal pricing - shown only during booking
    price12h: 3000,
    price24h: 5000,

    extraKmRate: 12,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Diesel/Petrol",
    transmission: "Manual",

    image: "/images/car-rental/hector.png",

    features: [
      "Massive 14-inch Screen",
      "Unrivaled Rear Lounge Space",
      "Panoramic Skyroof",
      "Premium Leather Interiors",
    ],

    driverCharge: 1200,
  },

  {
    id: "verna",
    name: "Hyundai Verna",
    category: "premium",
    categoryBadge: "Luxury Sedan",
    type: "sedan",

    // Internal pricing - shown only during booking
    price12h: 3000,
    price24h: 4500,

    extraKmRate: 12,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Petrol/Diesel",
    transmission: "Cruise Control",

    image: "/images/car-rental/verna.png",

    features: [
      "Aerodynamic Luxury",
      "Cushioned VIP Seating",
      "Large Luggage Space",
      "Smooth Highway Gliding",
    ],

    driverCharge: 1200,
  },

  // =========================================================
  // STANDARD CARS
  // =========================================================

  {
    id: "baleno",
    name: "Maruti Suzuki Baleno",
    category: "standard",
    categoryBadge: "Standard Hatchback",
    type: "hatchback",

    // Internal pricing - shown only during booking
    price12h: 2500,
    price24h: 3500,

    extraKmRate: 10,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Petrol",
    transmission: "Manual",

    image: "/images/car-rental/baleno.png",

    features: [
      "Chilled Dual AC",
      "Music System / Bluetooth",
      "200 KM / 300 KM Limit",
      "Comfortable Hatchback",
    ],

    driverCharge: 1000,
    isPopular: true,
  },

  {
    id: "i20",
    name: "Hyundai i20",
    category: "standard",
    categoryBadge: "Premium Hatchback",
    type: "hatchback",

    // Internal pricing - shown only during booking
    price12h: 1500,
    price24h: 3000,
    price6h: 1000,

    extraKmRate: 10,
    kmLimit12h: 200,
    kmLimit24h: 300,
    kmLimit6h: 120,

    seats: "5 Seater",
    fuel: "Petrol",
    transmission: "Manual",

    image: "/images/car-rental/i20.png",

    features: [
      "Touchscreen Display",
      "Compact City Maneuvering",
      "Power Windows",
      "Clean Sanitized Cabin",
    ],

    driverCharge: 1000,
    isPopular: true,
  },

  {
    id: "glanza",
    name: "Toyota Glanza",
    category: "standard",
    categoryBadge: "Standard Hatchback",
    type: "hatchback",

    // Internal pricing - shown only during booking
    price12h: 2500,
    price24h: 3500,

    extraKmRate: 10,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Petrol",
    transmission: "Manual",

    image: "/images/car-rental/glanza.png",

    features: [
      "High Fuel Efficiency",
      "Smooth Suspension",
      "Spacious Cabin",
      "Toyota Reliability",
    ],

    driverCharge: 1000,
  },

  {
    id: "fronx",
    name: "Maruti Suzuki Fronx",
    category: "standard",
    categoryBadge: "Compact Crossover",
    type: "suv",

    // Internal pricing - shown only during booking
    price12h: 2500,
    price24h: 3500,

    extraKmRate: 10,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Petrol",
    transmission: "Manual",

    image: "/images/car-rental/fronx.png",

    features: [
      "High Ground Clearance",
      "Modern Crossover Styling",
      "Crisp Chilled AC",
      "Smart Infotainment",
    ],

    driverCharge: 1000,
  },

  {
    id: "swift",
    name: "Maruti Suzuki Swift",
    category: "standard",
    categoryBadge: "Standard Hatchback",
    type: "hatchback",

    // Internal pricing - shown only during booking
    price12h: 2500,
    price24h: 3500,

    extraKmRate: 10,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Petrol",
    transmission: "Manual",

    image: "/images/car-rental/swift.png",

    features: [
      "Quick Acceleration",
      "Easy Temple Lane Parking",
      "Power Steering",
      "Comfortable Seating",
    ],

    driverCharge: 1000,
  },

  {
    id: "swift-dzire",
    name: "Maruti Suzuki Dzire",
    category: "standard",
    categoryBadge: "Compact Sedan",
    type: "sedan",

    // Internal pricing - shown only during booking
    price12h: 2500,
    price24h: 3500,

    extraKmRate: 10,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Petrol",
    transmission: "Manual",

    image: "/images/car-rental/dzire.png",

    features: [
      "Spacious Boot for Bags",
      "Comfortable Rear Legroom",
      "Smooth Highway Ride",
      "Premium Sedan Comfort",
    ],

    driverCharge: 1000,
    isPopular: true,
  },

  {
    id: "venue",
    name: "Hyundai Venue",
    category: "standard",
    categoryBadge: "Compact SUV",
    type: "suv",

    // Internal pricing - shown only during booking
    price12h: 2500,
    price24h: 3500,

    extraKmRate: 10,
    kmLimit12h: 200,
    kmLimit24h: 300,

    seats: "5 Seater",
    fuel: "Petrol",
    transmission: "Manual",

    image: "/images/car-rental/venue.png",

    features: [
      "Connected Infotainment",
      "Comfortable Ergonomics",
      "Great City Ride",
      "Compact SUV Stance",
    ],

    driverCharge: 1000,
  },

  // =========================================================
  // TWO-WHEELER
  // NO DRIVER
  // =========================================================

  {
    id: "activa",
    name: "Honda Activa 6G / 125",
    category: "two-wheeler",
    categoryBadge: "Scooter / Two-Wheeler",
    type: "scooter",

    // Internal pricing - shown only during booking
    price12h: 600,
    price24h: 1000,

    extraKmRate: 0,
    kmLimit12h: 100,
    kmLimit24h: 150,

    seats: "2 Seater",
    fuel: "Petrol",
    transmission: "Automatic",

    image: "/images/car-rental/activa.png",

    features: [
      "Effortless Temple Darshan Mobility",
      "Fits Through Narrow Vrindavan Gallis",
      "Helmet Included",
      "Super Economical",
    ],

    driverCharge: 0,
    isPopular: true,
  },
];