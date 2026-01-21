export interface Tour {
  id: number;
  title: string;
  price: string;
  duration: string;
  maxGuests: string;
  category: string;
  description: string;
  image: string;
}

export interface Vehicle {
  id: number;
  title: string;
  category: string;
  image: string;
  features: VehicleFeature[];
}

export interface VehicleFeature {
  icon: string;
  text: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  details: string;
}