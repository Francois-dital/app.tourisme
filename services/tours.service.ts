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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM2CleJKvrxlHy9HDsgAEuGLPvVkDNxvBEZVuz56FJH4DEyK0qU60elX7dTEwzNJdVni8d_rXeqoMA6I6s4wFsFrYZwsNPaieLPRNl6115WYIQ691MFpiEpof199y8vmFdKql3vo1btBwnfJ_XJECAvBJxXKnbiCwMZSEVDZSEQ_0QMIzoegEx3tWDqyeXZBnSsii7UXHH75mxIrUXDrt6hDX5DENIWF9kEq4Cs8vXHiVIcsmjZvYgbyH5UQGFhpeNMIrc4sHgyg"
  },
  {
    id: 2,
    title: "Turquoise Waters",
    price: "$1,580",
    duration: "10 Days",
    maxGuests: "Max 4",
    category: "Northern Paradise",
    description: "Relax in Nosy Be, explore Diego Suarez, and discover the unique Amber Mountain National Park.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNwK0_c4i1s_Jbu09HC9qQ4u3syvOX0bRPAJTs8xXXAmj1w_Q6RsrU5Cwm27PY46aMf1sOlWPST_uHxRi776U1L4ttUXqd2NcgJKzfWxfb92YOfTwvDFrxFSURnkq5mqVJm_hZAunFdccPoo8DFoI6zlOrx8gD_7lpojtSavsYUs-IirNRVl2WF93EgonxcxO7H2yWqtvjyEeJPWb6C95gMhgQEbgcIWv-pTTulEj1lCCgZV7SfzKsjPuCgaHxWKhfu1n-cGhYaw"
  },
  {
    id: 3,
    title: "The Great South",
    price: "$1,890",
    duration: "12 Days",
    maxGuests: "Max 8",
    category: "Southern Trail",
    description: "A journey through the RN7, visiting Antsirabe, Ranomafana, and the breathtaking Isalo National Park.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDac_7dFHcyjSMT08-fmIZm1bnSH2hFCIDgOnNfz5T9X0uxvtPzN9ralySVkne5xvAnqPenqNX98lRmoy5ThKET-IDXASSkoxj4IRBqU9-5Pq9htVME79h62-4EXAbWrRrZ0RwGscUgb93--XhrsPa44ZhMnfLaTvlRpcmUsKEDvSxzqtHPGQ-L9X0RnpLjQp6dVssZr3oBA9Z5DJxFUHNSUspB6o9HYVx2kRy5VrmkU-w-wvcnBNvghfrlGWBRjUiw59fm6H1GFQ"
  }
];

export const vehiclesData: Vehicle[] = [
  {
    id: 1,
    title: "Land Cruiser Series",
    category: "Heavy Duty Off-road",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBngE__fhx7sk9xmejKdNgFo6HibXxlXolo1z0CsYn9FRPF-P4F0FRpiU3dL6SGXBHzPpOQy1xbMLvyXCMTRjp4TM-oNQTjyrOTqx3lqMg2b0bSq3b-Xosqkx9UGJsV-2bBoga0NL8mwRhQxCwfzzg6J7lGftbN79pG4bgKZudTvYyttgmf-Zte4VqQ2BK0I8SckVimM53QtIYNYEicPz-4d46V10LhjQ41Ewa5pgPMJQrL6OGsYgvla4JTjWCCAaqa9yzFk7b7eg",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKeqdvq3uvFaOmbI17dnFmOQgINV1gmzkfPzJ7lpvsMjFIQSWowUWtxUNS19AJqZZI3xeVVhZEqwW4KIeuMPjNyNMSbqmFbVwQV9SRMymb65MWYUPfqb-anfI5HlhfxV5N-qMae8u4xLBktZH06n9qr7nTWoqj1toKBuVvcEwaLXIeJ9KpVajWXjaLSPAz81WQLHPOWHeLl7kBDAalukzDbuNdisDEmD5c_pF36koY5TInd93zvbHW2CXzd8-_szS1qq9P7bAm6Q",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM2CleJKvrxlHy9HDsgAEuGLPvVkDNxvBEZVuz56FJH4DEyK0qU60elX7dTEwzNJdVni8d_rXeqoMA6I6s4wFsFrYZwsNPaieLPRNl6115WYIQ691MFpiEpof199y8vmFdKql3vo1btBwnfJ_XJECAvBJxXKnbiCwMZSEVDZSEQ_0QMIzoegEx3tWDqyeXZBnSsii7UXHH75mxIrUXDrt6hDX5DENIWF9kEq4Cs8vXHiVIcsmjZvYgbyH5UQGFhpeNMIrc4sHgyg",
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