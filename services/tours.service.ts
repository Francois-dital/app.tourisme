import { Tour, Vehicle } from "@/types/tour.types";

export const toursData: Tour[] = [
  {
    id: 1,
    title: "The Baobab Quest",
    price: "$1,250",
    duration: "8 Days",
    maxGuests: "Max 6",
    category: "Western Circuit",
    description: "Explore the legendary Avenue of Baobabs and the needle-like limestone pinnacles of Tsingy.",
    image: "/images/tour-baobab.jpg"
  },
  {
    id: 2,
    title: "Turquoise Waters",
    price: "$1,580",
    duration: "10 Days",
    maxGuests: "Max 4",
    category: "Northern Paradise",
    description: "Relax in Nosy Be, explore Diego Suarez, and discover the unique Amber Mountain National Park.",
    image: "/images/tour-nosy-be.jpg"
  },
  {
    id: 3,
    title: "The Great South",
    price: "$1,890",
    duration: "12 Days",
    maxGuests: "Max 8",
    category: "Southern Trail",
    description: "A journey through the RN7, visiting Antsirabe, Ranomafana, and the breathtaking Isalo National Park.",
    image: "/images/tour-isalo.jpg"
  }
];

export const vehiclesData: Vehicle[] = [
  {
    id: 1,
    title: "Land Cruiser Series",
    category: "Heavy Duty Off-road",
    image: "/images/about-image.jpg",
    features: [
      { icon: "groups", text: "4 Passengers + Expert Driver" },
      { icon: "ac_unit", text: "Full Air Conditioning System" },
      { icon: "luggage", text: "Spacious Luggage Compartment" },
      { icon: "satellite_alt", text: "Safety GPS Tracking Enabled" }
    ]
  },
  {
    id: 2,
    title: "Hilux Double Cabin",
    category: "Rugged Performance",
    image: "/images/hero-background-1.jpg",
    features: [
      { icon: "groups", text: "3 Passengers + Expert Driver" },
      { icon: "ac_unit", text: "Optimized Climate Control" },
      { icon: "work_outline", text: "Extra Large Cargo Capacity" },
      { icon: "health_and_safety", text: "First Aid Kit & Emergency Gear" }
    ]
  },
  {
    id: 3,
    title: "Safari Wagon",
    category: "Premium Comfort",
    image: "/images/tour-baobab.jpg",
    features: [
      { icon: "groups", text: "6 Passengers + Expert Driver" },
      { icon: "visibility", text: "Panoramic Observation Roof" },
      { icon: "battery_charging_full", text: "Charging Ports for Devices" },
      { icon: "kitchen", text: "Mini Cooling Box for Drinks" }
    ]
  }
];

export class ToursService {
  static getAllTours(): Tour[] {
    return toursData;
  }

  static getTourById(id: number): Tour | undefined {
    return toursData.find(tour => tour.id === id);
  }

  static getAllVehicles(): Vehicle[] {
    return vehiclesData;
  }

  static getVehicleById(id: number): Vehicle | undefined {
    return vehiclesData.find(vehicle => vehicle.id === id);
  }
}