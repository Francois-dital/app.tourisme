export interface TourDay {
  day: number
  title: string
  icon: string
  description: string
  dayRange?: string
  accommodation?: {
    name: string
    image: string
  }
}

export interface TourData {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  duration: string
  price: {
    solo: string
    group: string
  }
  region: string
  category: string
  image: string
  label?: string
  labelColor?: 'primary' | 'secondary' | 'success'
  included: string[]
  excluded: string[]
  itinerary: TourDay[]
}

export const toursData: TourData[] = [
  {
    id: 1,
    slug: 'east-madagascar-tour',
    title: 'East Madagascar Tour',
    subtitle: 'Rainforest & Wildlife Discovery',
    description: 'Please note that the itinerary can be fully customized according to your needs. A legendary 11-day journey through the verdant rainforests of Andasibe, discovering rare orchid species and spotting the iconic Indri lemurs in their natural habitat.',
    duration: '11 Days',
    price: {
      solo: '1.900 €',
      group: '1.800 €'
    },
    region: 'East Coast',
    category: 'Nature & Wildlife',
    image: '/images/tours/east-madagascar.jpg',
    label: 'Best Seller',
    labelColor: 'primary',
    included: [
      'Professional Transport: Private 4x4 vehicle with dedicated driver-guide',
      'All fuel, road tolls, and driver\'s subsistence',
      'Water Transfers & Navigation: Private boat transfers on Pangalanes Canal',
      'Ferry tickets for crossing to Sainte Marie',
      'Accommodation during the trip with daily breakfast',
      'Bottles mineral waters',
      'Wildlife & National Parks: Entrance fees for all parks',
      'Mandatory local park guides at each site',
      'Specialized boat excursion to see the Aye-Aye lemur',
      'Domestic Flight: One-way airfare from Sainte Marie back to Antananarivo'
    ],
    excluded: [
      'International Travel: Flights from your home country to Antananarivo and return',
      'Madagascar Entry Visa: Approximately €35',
      'Daily Meals & Drinks: Lunch and Dinner during the trip',
      'Alcoholic beverages, sodas',
      'Sainte Marie Optional Activities: Humpback Whale Safari ($40–$60 per person, July–September)',
      'Scooter or bicycle rentals for island exploration',
      'Travel insurance (highly recommended)',
      'Personal laundry and items of a personal nature',
      'Anything not mentioned under \'Included\''
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Antananarivo (Tana)',
        icon: 'flight_land',
        description: 'Land at Ivato International Airport, Tana. We will greet you at Ivato Airport and transfer you to your hotel. Meet your guide and transfer to hotel. Optional city tour: Independence Avenue, Rova Palace, lemur\'s park, the Queen\'s staircase and d\'Andohalo Cathedrale. Dinner at a local restaurant.',
        accommodation: {
          name: 'Hotel in Tana',
          image: '/images/tours/antananarivo-2.jpg'
        }
      },
      {
        day: 2,
        title: 'Antananarivo – Andasibe',
        icon: 'directions_car',
        description: 'Depart from the capital city, Antananarivo, heading east along the winding National Road 2. Stop at the Peyrieras Reptile Reserve in Marozevo to observe dozens of species of chameleons, leaf-tailed geckos, and butterflies. Upon reaching Andasibe, you will head out for a guided night walk to catch the reflective eyes of tiny mouse lemurs, sleeping chameleons, and endemic frogs.',
        accommodation: {
          name: 'Hotel in Andasibe',
          image: '/images/tours/andasibe.jpg'
        }
      },
      {
        day: 3,
        title: 'Andasibe (Analamazaotra) – Manambato',
        icon: 'forest',
        description: 'Morning: Hike in the Analamazaotra National Park to find the Indri-Indri, the largest living lemur, known for its haunting, whale-like song. Afternoon: Drive further east to Manambato, located on the shores of Lake Rasoabe.',
        accommodation: {
          name: 'Lakeside hotel at Manambato',
          image: '/images/tours/manambato.jpeg'
        }
      },
      {
        day: 4,
        title: 'Crossing to Ankanin\'ny Nofy',
        icon: 'sailing',
        description: 'Morning: Board a boat for a scenic transfer on the Pangalanes Canal to the Ankanin\'ny Nofy peninsula (the "Nest of Dreams"). Afternoon: Relax by the white sand lake beaches or walk through local fishing villages. Evening: Night boat excursion to see the Aye-Aye, Madagascar\'s rarest and most bizarre nocturnal primate.',
        accommodation: {
          name: 'Palmarium Hotel',
          image: '/images/tours/akanin-ny-nofy.jpg'
        }
      },
      {
        day: 5,
        title: 'Palmarium Reserve Exploration',
        icon: 'park',
        description: 'Morning: Visit the Palmarium Private Park. This is one of the few places where you can get very close to various lemur species (Macacos, Coronatus, Indri). Afternoon: Discover the local flora, including carnivorous Pitcher plants and rare orchids.',
        accommodation: {
          name: 'Palmarium Hotel',
          image: '/images/tours/akanin-ny-nofy-palmarium-tamatave.jpg'
        }
      },
      {
        day: 6,
        title: 'Ankanin\'ny Nofy – Tamatave (Toamasina)',
        icon: 'sailing',
        description: 'Morning: A long, peaceful boat ride north along the Pangalanes Canal. Observe life along the riverbanks: bamboo rafts, local commuters, and washing stations. Afternoon: Arrival at the river port of Tamatave. Take a Pousse-Pousse (rickshaw) tour of the city and visit the "Bazar Be" market for spices and vanilla.',
        accommodation: {
          name: 'Hotel in Tamatave',
          image: '/images/tours/akanin-ny-nofy-palmarium.jpg'
        }
      },
      {
        day: 7,
        title: 'Tamatave – Mahambo – Sainte-Marie',
        icon: 'ferry',
        description: 'Morning: Drive north along the coast to the village of Mahambo. Midday: Board the ferry (e.g., El Condor) for a 2.5-hour crossing to the island of Sainte-Marie (Nosy Boraha). Evening: Arrival on the island and transfer to your beachfront bungalow.',
        accommodation: {
          name: 'Hotel in Sainte Marie',
          image: '/images/tours/sainte-marie.jpeg'
        }
      },
      {
        day: 8,
        title: 'Sainte-Marie (Island Paradise) - Day 1',
        icon: 'beach_access',
        description: 'Activities to choose from: Île aux Nattes (take a traditional pirogue to this tiny, car-free island), Pirate Cemetery (visit the world\'s only official pirate cemetery), Whale Watching (if traveling between July and September), Exploration (rent a scooter or bicycle to explore the lush interior and hidden coves).',
        accommodation: {
          name: 'Hotel in Sainte Marie',
          image: '/images/tours/sainte-marie-island-paradise.jpg'
        }
      },
      {
        day: 9,
        title: 'Sainte-Marie (Island Paradise) - Day 2',
        icon: 'scuba_diving',
        description: 'Continue exploring Sainte-Marie with more activities: snorkeling, beach relaxation, cultural visits, or adventure excursions around the island.',
        accommodation: {
          name: 'Hotel in Sainte Marie',
          image: '/images/tours/sainte-marie-island-paradise-2.jpg'
        }
      },
      {
        day: 10,
        title: 'Sainte-Marie – Antananarivo (Flight)',
        icon: 'flight_takeoff',
        description: 'Morning: Enjoy a final tropical breakfast or a swim in the lagoon. Afternoon: Transfer to the airport for your domestic flight (Tsaradia) back to Antananarivo. Evening: Farewell dinner at a restaurant in the upper city of Tana.',
        accommodation: {
          name: 'Hotel in Tana',
          image: '/images/tours/sainte-marie-sky.jpg'
        }
      },
      {
        day: 11,
        title: 'Antananarivo – Departure',
        icon: 'flight_takeoff',
        description: 'Morning: Visit the Queen\'s Palace (Rova) for a lesson in Malagasy history and a 360-degree view of the city. Afternoon: Last-minute souvenir shopping at the Digue Market (artisanal crafts) before your transfer to Ivato International Airport.'
      }
    ]
  },
  {
    id: 2,
    slug: 'south-madagascar-tour',
    title: 'South Madagascar Tour',
    subtitle: 'The RN7 Route',
    description: 'Please note that the itinerary can be fully customized according to your needs. A legendary 9-day journey from the bustling capital to the white sands of the Mozambique Channel, crossing the soul of the Red Island.',
    duration: '9 Days',
    price: {
      solo: '1.600 €',
      group: '1.500 €'
    },
    region: 'Southern Highlands',
    category: 'Nature & Adventure',
    image: '/images/tours/south-madagascar.jpg',
    included: [
      'Private vehicle with driver and fuel provided during the journey',
      'Airport transfers in Antananarivo',
      'Domestic flight: Tuléar ↔ Antananarivo',
      'Accommodation: hotels, lodges, and beachfront bungalows as mentioned',
      'Daily breakfast, selected lunches and dinners (as specified)',
      'Guided tours and excursions in National Parks (Anja, Ranomafana, Isalo)',
      'Boat transfer to/from Anakao',
      'Cultural visits (Zafimaniry woodcraft, Vezo village)',
      'Entrance fees to parks and reserves',
      'Professional English-speaking and experienced guide',
      'Mineral water during the trip'
    ],
    excluded: [
      'International flights to/from Madagascar',
      'Visa and travel insurance',
      'Meals not specified in the itinerary',
      'Personal expenses (souvenirs, tips, phone/internet charges)',
      'Optional activities not listed in the itinerary (extra hikes, diving, or excursions)',
      'Alcoholic drinks and soft drinks unless included in meals',
      'Any additional services outside the program'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Antananarivo (Tana)',
        icon: 'flight_land',
        description: 'Land at Ivato International Airport, Tana. We will greet you at Ivato Airport and transfer you to your hotel. Meet your guide and transfer to hotel. Optional city tour: Independence Avenue, Rova Palace, lemur\'s park, the Queen\'s staircase and d\'Andohalo Cathedrale. Dinner at a local restaurant.',
        accommodation: {
          name: 'Hotel in Tana',
          image: '/images/tours/antananarivo-2.jpg'
        }
      },
      {
        day: 2,
        title: 'Tana to Antsirabe',
        icon: 'directions_car',
        description: 'Leave the capital early in the morning and head south. Stop at Ambatolampy to see local artisans forge aluminum pots by hand. Continue to Antsirabe, a city known for its "Pousse-Pousse" (rickshaws) and gemstones. We can accompany you to the Ranch du Bonheur in Antsirabe for a horseback ride if you are interested. Visit local crafts markets (miniatures, gemstones). Optional pousse-pousse (rickshaw) tour in the city.',
        accommodation: {
          name: 'Hotel in Antsirabe',
          image: '/images/tours/antsirabe.jpg'
        }
      },
      {
        day: 3,
        title: 'Antsirabe to Ranomafana',
        icon: 'forest',
        description: 'Leave Antsirabe in the morning and go to Ranomafana. Transition from the red-clay houses of the highlands to the dense tropical rainforest of Ranomafana. Stop in Ambositra for Zafimaniry woodcraft visit. Evening relaxation at lodge.',
        accommodation: {
          name: 'Lodge near Ranomafana National Park',
          image: '/images/tours/ranomafana.jpeg'
        }
      },
      {
        day: 4,
        title: 'Ranomafana Exploration',
        icon: 'hiking',
        description: 'Guided hike in Ranomafana National Park. Spot endemic wildlife: golden bamboo lemurs, sifakas, and exotic birds. Visit natural hot springs after hiking.',
        accommodation: {
          name: 'Same lodge near Ranomafana',
          image: '/images/tours/ranomafana-2.jpg'
        }
      },
      {
        day: 5,
        title: 'Ranomafana to Isalo',
        icon: 'landscape',
        description: 'Leave Ranomafana and go to Isalo. Anja Reserve: A community-run park where Ring-tailed lemurs (King Julien!) are extremely easy to spot. Scenic drive through the highlands and small villages. Evening: Sunset over Isalo\'s sandstone formations.',
        accommodation: {
          name: 'Lodge near Isalo',
          image: '/images/tours/isao-lodge.jpg'
        }
      },
      {
        day: 6,
        title: 'Isalo to Tuléar',
        icon: 'hiking',
        description: 'Morning visit at Isalo National Park which is a majestic landscape of eroded Jurassic sandstone, deep canyons, and hidden oases. Morning hike in Isalo (optional: Canyon des Singes & Natural Pools). Then Drive to Tuléar.',
        accommodation: {
          name: 'Hotel in Tuléar',
          image: '/images/tours/tulear-hotel.jpg'
        }
      },
      {
        day: 7,
        title: 'Tuléar – Anakao',
        icon: 'sailing',
        description: 'Breakfast in hotel; transfer to the port and boarding on a moto-boat and navigation to Anakao for about 1h30; at the arrival set up in hotel (standard room) or similar; rest of the day at your disposal for swimming in the reef clear water and individual visits; full-board in hotel.',
        accommodation: {
          name: 'Lodge in Anakao',
          image: '/images/tours/anakao-hotel.jpg'
        }
      },
      {
        day: 8,
        title: 'Anakao Exploration',
        icon: 'scuba_diving',
        description: 'Snorkeling or diving in coral reefs. Visit local Vezo fishing village. Optional boat trip to Nosy Ve for birdwatching. Sunset on the beach.',
        accommodation: {
          name: 'Same lodge in Anakao',
          image: '/images/tours/anakao.jpeg'
        }
      },
      {
        day: 9,
        title: 'Anakao to Tuléar then back to Tana',
        icon: 'flight_takeoff',
        description: 'Morning boat back to Tuléar. Fly from Tuléar to Antananarivo (~1.5 hours). Optional last-minute souvenir shopping. Transfer to Ivato Airport for departure.'
      }
    ]
  },
  {
    id: 3,
    slug: 'west-madagascar-tour',
    title: 'West Madagascar Tour',
    subtitle: 'Baobab & Tsingy Adventure',
    description: 'Please note that the itinerary can be fully customized according to your needs. A photographer\'s dream. Witness the Avenue of Baobabs at sunset and hike the surreal limestone labyrinths of Tsingy de Bemaraha.',
    duration: '9 Days',
    price: {
      solo: '1.600 €',
      group: '1.500 €'
    },
    region: 'West Coast',
    category: 'Adventure & Photography',
    image: '/images/tours/west-madagascar.jpg',
    label: 'Adventure',
    labelColor: 'secondary',
    included: [
      'Everything above (Fuel, Ferries, and Return fees)',
      'Accommodation during the tour',
      'Meals: Just all of the breakfast during the tour',
      'Drinks: Bottled water',
      'Entry Fees: All National Park tickets and the mandatory local guides for the Tsingy',
      'Special Equipment: Harnesses and helmets for the Big Tsingy hike',
      'Domestic ticket flight: From Morondava to Tana'
    ],
    excluded: [
      'International flights to/from Madagascar',
      'Visa and travel insurance',
      'Meals not specified in the itinerary (Lunch and dinner)',
      'Personal expenses (souvenirs, tips, phone/internet charges)',
      'Optional activities not listed in the itinerary (extra hikes, diving, or excursions)',
      'Alcoholic drinks and soft drinks unless included in meals',
      'Any additional services outside the program'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Antananarivo (Tana)',
        icon: 'flight_land',
        description: 'Land at Ivato International Airport, Tana. We will greet you at Ivato Airport and transfer you to your hotel. Meet your guide and transfer to hotel. Optional city tour: Independence Avenue, Rova Palace, lemur\'s park, the Queen\'s staircase and d\'Andohalo Cathedrale. Dinner at a local restaurant.',
        accommodation: {
          name: 'Hotel in Tana',
          image: '/images/tours/antananarivo-2.jpg'
        }
      },
      {
        day: 2,
        title: 'Tana - Antsirabe',
        icon: 'directions_car',
        description: 'Leave the capital early in the morning and head south. Stop at Ambatolampy to see local artisans forge aluminum pots by hand. Continue to Antsirabe, a city known for its "Pousse-Pousse" (rickshaws) and gemstones. We can accompany you to the Ranch du Bonheur in Antsirabe for a horseback ride if you are interested. Visit local crafts markets (miniatures, gemstones). Optional pousse-pousse (rickshaw) tour in the city.',
        accommodation: {
          name: 'Hotel in Antsirabe',
          image: '/images/tours/antsirabe.jpg'
        }
      },
      {
        day: 3,
        title: 'Antsirabe - Morondava',
        icon: 'directions_car',
        description: 'After breakfast, drive to Morondava. A long but scenic transition from the green highlands to the dry western plains. Stop 1: Miandrivazo: A hot, lively town perfect for a lunch break at Princesse de la Tsiribihina. Evening: Arrival in Morondava. Enjoy the sea breeze.',
        accommodation: {
          name: 'Hotel in Morondava',
          image: '/images/tours/morondava.jpg'
        }
      },
      {
        day: 4,
        title: 'Morondava - Bekopaka',
        icon: 'ferry',
        description: 'Take breakfast and then go to the Tsingy. Stop 1: Belo-sur-Tsiribihina: After crossing the river by ferry, stop for lunch at the famous Mad Zebu—unexpected high-end cuisine in a remote village. Stop 2: Manambolo River Crossing: The second ferry crossing as you approach the village of Bekopaka.',
        accommodation: {
          name: 'Hotel at Tsingy de Bemaraha',
          image: '/images/tours/tsingy-de-bemaraha.jpeg'
        }
      },
      {
        day: 5,
        title: 'The Big Tsingy',
        icon: 'climbing',
        description: 'Main Activity: 1-hour drive to the Grand Tsingy. You will wear a climbing harness to navigate limestone needles, narrow canyons, and the famous suspension bridge over the razor-sharp rocks. Wildlife: Look for the Decken\'s Sifaka (white lemur) and the Giant Coua bird.',
        accommodation: {
          name: 'Same hotel at Tsingy de Bemaraha',
          image: '/images/tours/tsingy.jpg'
        }
      },
      {
        day: 6,
        title: 'Petit Tsingy & Manambolo Gorge',
        icon: 'kayaking',
        description: 'Morning: A traditional pirogue (dugout canoe) trip on the Manambolo River to see ancient Vazimba tombs and river caves. Afternoon: Explore the Petit Tsingy, which offers a different perspective on the rock formations with less intense climbing.',
        accommodation: {
          name: 'Same hotel at Tsingy de Bemaraha',
          image: '/images/tours/tsingy-de-bemaraha.jpeg'
        }
      },
      {
        day: 7,
        title: 'Bekopaka - Morondava',
        icon: 'park',
        description: 'Stop 1: Baobab Amoureux: Two ancient baobabs twisted together in a permanent "hug." Stop 2: Kirindy Forest (Optional): If you leave Bekopaka very early, you can squeeze in a quick walk here to look for the Fossa (Madagascar\'s top predator).',
        accommodation: {
          name: 'Hotel in Morondava',
          image: '/images/tours/morondava-hotel.jpg'
        }
      },
      {
        day: 8,
        title: 'Morondava – Tana',
        icon: 'sailing',
        description: 'Morning: Visit the Betania Fishing Village by pirogue to see the traditional Vezo way of life. Then, leave Morondava and go to the airport of Morondava to take the domestic flight back to Tana.',
        accommodation: {
          name: 'Hotel in Morondava',
          image: '/images/tours/morondava-betania.jpg'
        }
      },
      {
        day: 9,
        title: 'Morondava - Tana',
        icon: 'flight_takeoff',
        description: 'After breakfast, go to the airport to take your international flight back.'
      }
    ]
  },
  {
    id: 4,
    slug: 'north-madagascar-tour',
    title: 'North Madagascar Tour',
    subtitle: 'Rainforest & Island Paradise',
    description: 'Please note that the itinerary can be fully customized according to your needs. Discover the call of the Indri in Andasibe rainforest, then escape to the tropical paradise of Nosy Be with its pristine beaches and marine reserves.',
    duration: '10 Days',
    price: {
      solo: '1.900 €',
      group: '1.800 €'
    },
    region: 'Northern Madagascar',
    category: 'Nature & Beach',
    image: '/images/tours/north-madagascar.jpg',
    label: 'Popular',
    labelColor: 'success',
    included: [
      'Accommodation: All nights in hotels/lodges with breakfast',
      'Transport (Ground): Private 4x4 or comfortable car for the Tana – Andasibe – Tana loop',
      'Fuel and insurance for the vehicle',
      'Airport transfers (Tana and Nosy Be)',
      'Domestic flights (Tana - Nosy Be - Tana)',
      'Boat Transfers: All boat trips to Nosy Iranja, Nosy Komba, Nosy Tanikely, and Nosy Sakatia',
      'Guided Activities: Certified local guides in Andasibe (Analamazaotra) and Vakona',
      'Entry fees to all National Parks and Private Reserves mentioned',
      'Tour leader/boat crew for island excursions',
      'Excursion Specifics: Picnic lunches during the full-day boat trips (Iranja, Komba/Tanikely)',
      'Snorkeling gear (mask, snorkel, fins) for Nosy Tanikely and Sakatia',
      'Water bottle during the day trips'
    ],
    excluded: [
      'Flights: International flights to/from Madagascar',
      'Visa Fees: Roughly €35 / $37 for stays under 30 days (payable at the airport upon arrival)',
      'Meals: Luncheons on "driving days" or "free days" in Tana/Nosy Be',
      'Dinners (if your hotel is booked on a "Bed & Breakfast" basis)',
      'Drinks: All beverages (soda, beer, wine, and bottled water outside of excursions)',
      'Tips (Gratuities): It is customary to tip your main driver, boat crew, and park guides (Approx. €5–10 per day per guide)',
      'Personal Expenses: Souvenirs (silk in Tana, wood carvings in Komba, spices/vanilla), laundry, and phone/data credit',
      'Travel Insurance: Highly recommended (repatriation, medical, and flight cancellation)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Antananarivo',
        icon: 'flight_land',
        description: 'Meet at the airport and transfer to your hotel. Relax or take a short walk in the capital to adjust to the local rhythm.',
        accommodation: {
          name: 'Hotel in Antananarivo',
          image: '/images/tours/antananarivo-2.jpg'
        }
      },
      {
        day: 2,
        title: 'Tana to Andasibe-Mantadia (The Rainforest)',
        icon: 'directions_car',
        description: 'Morning: Drive East (approx. 4 hours) through highland scenery and local villages. Afternoon: Visit the Vakona Private Reserve (Lemur Island) where you can interact closely with several lemur species. Evening: Enjoy a night walk along the park boundaries to spot nocturnal lemurs (mouse lemurs) and sleeping chameleons.',
        accommodation: {
          name: 'Hotel in Andasibe',
          image: '/images/tours/andasibe.jpg'
        }
      },
      {
        day: 3,
        title: 'The Call of the Indri & Return to Tana',
        icon: 'forest',
        description: 'Morning: Guided hike in Analamazaotra National Park to find the Indri-Indri, the largest lemur in the world, known for its haunting whale-like song. Afternoon: Drive back to Antananarivo (approx. 4 hours).',
        accommodation: {
          name: 'Hotel in Antananarivo',
          image: '/images/tours/analamazaotra.jpg'
        }
      },
      {
        day: 4,
        title: 'Flight to Nosy Be',
        icon: 'flight_takeoff',
        description: 'Morning: Domestic flight from Tana to Nosy Be. Afternoon: Transfer to your hotel. Visit the local market in Hell-Ville for spices and ylang-ylang oil.',
        accommodation: {
          name: 'Hotel in Nosy Be',
          image: '/images/tours/nosy-be.jpg'
        }
      },
      {
        day: 5,
        title: 'Nosy Komba & Nosy Tanikely',
        icon: 'sailing',
        description: 'Nosy Komba: Visit the "Island of Lemurs" to see the black lemurs and local woodcarvings. Nosy Tanikely: Head to this marine reserve for world-class snorkeling. The water is crystal clear with turtles and coral reefs.',
        accommodation: {
          name: 'Hotel in Nosy Be',
          image: '/images/tours/nosy-komba.jpg'
        }
      },
      {
        day: 6,
        title: 'The Paradise of Nosy Iranja',
        icon: 'beach_access',
        description: 'Day Trip: A scenic boat ride to the "Turtle Island." Highlight: Walk the famous white sandbank connecting the two islets. It is the most photographed spot in Madagascar.',
        accommodation: {
          name: 'Hotel in Nosy Be',
          image: '/images/tours/nosy-iranja.jpg'
        }
      },
      {
        day: 7,
        title: 'Nosy Sakatia (The Orchid Island)',
        icon: 'scuba_diving',
        description: 'Activity: A peaceful day on Sakatia. Explore the botanical trails and snorkel with giant green sea turtles in their natural feeding grounds.',
        accommodation: {
          name: 'Hotel in Nosy Be',
          image: '/images/tours/nosy-sakatia.jpeg'
        }
      },
      {
        day: 8,
        title: 'Mont Passot & Crater Lakes',
        icon: 'landscape',
        description: 'Morning: Leisure time on the beach. Late Afternoon: Drive to Mont Passot, the island\'s highest point. The View: Enjoy a 360-degree sunset over the volcanic lakes and the Mozambique Channel.',
        accommodation: {
          name: 'Hotel in Nosy Be',
          image: '/images/tours/mont-passot.jpg'
        }
      },
      {
        day: 9,
        title: 'Return to the Capital',
        icon: 'flight_takeoff',
        description: 'Morning: Last swim or souvenir shopping. Afternoon: Flight back to Antananarivo. Evening: Farewell dinner at a local restaurant like Le Carré or La Varangue.',
        accommodation: {
          name: 'Hotel in Antananarivo',
          image: '/images/tours/antananarivo.jpg'
        }
      },
      {
        day: 10,
        title: 'Final Departure',
        icon: 'flight_takeoff',
        description: 'Activity: Transfer to Ivato International Airport for your flight home.'
      }
    ]
  }
]

export function getAllTours() {
  return toursData
}

export function getTourBySlug(slug: string): TourData | undefined {
  return toursData.find(tour => tour.slug === slug)
}

export function getToursByRegion(region: string): TourData[] {
  if (region === 'All Regions') return toursData
  return toursData.filter(tour => tour.region === region)
}

export function getToursByDuration(maxDuration: number): TourData[] {
  return toursData.filter(tour => {
    const duration = parseInt(tour.duration.split(' ')[0])
    return duration <= maxDuration
  })
}