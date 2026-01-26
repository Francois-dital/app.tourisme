export interface Destination {
  id: number
  slug: string
  name: string
  subtitle: string
  description: string
  region: string
  category: string
  image: string
  highlights: string[]
  bestTime: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  duration: string
}

export const destinationsData: Destination[] = [
  {
    id: 1,
    slug: 'andasibe-mantadia',
    name: 'Andasibe-Mantadia',
    subtitle: 'Home of the Indri Indri',
    description: 'Experience the haunting calls of Madagascar\'s largest lemur in this pristine rainforest reserve, just 3 hours from Antananarivo.',
    region: 'East Coast',
    category: 'Rainforest',
    image: '/images/destinations/andasibe.jpg',
    highlights: [
      'Indri Indri lemur encounters',
      'Night walks with nocturnal species',
      'Vakona Forest Lodge lemur island',
      'Endemic orchids and plants'
    ],
    bestTime: 'April - November',
    difficulty: 'Easy',
    duration: '2-3 Days'
  },
  {
    id: 2,
    slug: 'nosy-be-archipelago',
    name: 'Nosy Be Archipelago',
    subtitle: 'Crystal clear waters & reefs',
    description: 'The scented island paradise with pristine beaches, coral reefs, and the famous ylang-ylang plantations.',
    region: 'Northern Madagascar',
    category: 'Coastal',
    image: '/images/destinations/nosy-be.jpg',
    highlights: [
      'Nosy Iranja white sandbank',
      'Snorkeling at Nosy Tanikely',
      'Ylang-ylang plantations',
      'Black lemurs of Nosy Komba'
    ],
    bestTime: 'May - October',
    difficulty: 'Easy',
    duration: '4-7 Days'
  },
  {
    id: 3,
    slug: 'avenue-baobabs',
    name: 'Avenue of the Baobabs',
    subtitle: 'Iconic sunset landscapes',
    description: 'Madagascar\'s most photographed location featuring ancient baobab trees creating magical silhouettes at sunset.',
    region: 'West Coast',
    category: 'Adventure',
    image: '/images/destinations/baobabs.jpg',
    highlights: [
      'Sunset photography at Baobab Alley',
      'Ancient baobab trees over 800 years old',
      'Kirindy Forest wildlife',
      'Traditional Sakalava culture'
    ],
    bestTime: 'April - November',
    difficulty: 'Easy',
    duration: '1-2 Days'
  },
  {
    id: 4,
    slug: 'tsingy-bemaraha',
    name: 'Tsingy de Bemaraha',
    subtitle: 'Stone forest adventure',
    description: 'Navigate through razor-sharp limestone pinnacles in this UNESCO World Heritage site, home to unique endemic species.',
    region: 'West Coast',
    category: 'Adventure',
    image: '/images/destinations/tsingy.jpg',
    highlights: [
      'Grand Tsingy climbing adventure',
      'Suspension bridges over stone forest',
      'Decken\'s Sifaka lemurs',
      'Manambolo River caves'
    ],
    bestTime: 'April - November',
    difficulty: 'Challenging',
    duration: '2-3 Days'
  },
  {
    id: 5,
    slug: 'isalo-national-park',
    name: 'Isalo National Park',
    subtitle: 'Madagascar\'s Grand Canyon',
    description: 'Dramatic sandstone formations, hidden oases, and natural swimming pools in Madagascar\'s most spectacular landscape.',
    region: 'Southern Highlands',
    category: 'Adventure',
    image: '/images/destinations/isalo.jpg',
    highlights: [
      'Canyon des Singes hiking',
      'Natural swimming pools',
      'Ring-tailed lemur encounters',
      'Spectacular sunset viewpoints'
    ],
    bestTime: 'March - November',
    difficulty: 'Moderate',
    duration: '2-3 Days'
  },
  {
    id: 6,
    slug: 'anakao-beach',
    name: 'Anakao Beach',
    subtitle: 'Pristine southern coast',
    description: 'Untouched white sand beaches with crystal clear waters, perfect for snorkeling and experiencing Vezo fishing culture.',
    region: 'Southern Highlands',
    category: 'Coastal',
    image: '/images/destinations/anakao.jpeg',
    highlights: [
      'Pristine white sand beaches',
      'Vezo fishing village culture',
      'Coral reef snorkeling',
      'Nosy Ve bird sanctuary'
    ],
    bestTime: 'March - November',
    difficulty: 'Easy',
    duration: '2-4 Days'
  },
  {
    id: 7,
    slug: 'ranomafana-national-park',
    name: 'Ranomafana National Park',
    subtitle: 'Hot springs & golden bamboo lemurs',
    description: 'Lush rainforest sanctuary famous for its natural hot springs and the rare golden bamboo lemur discovery.',
    region: 'Southern Highlands',
    category: 'Rainforest',
    image: '/images/destinations/ranomafana.jpeg',
    highlights: [
      'Golden bamboo lemur spotting',
      'Natural hot springs',
      'Diverse bird species',
      'Medicinal plant discoveries'
    ],
    bestTime: 'April - November',
    difficulty: 'Moderate',
    duration: '2-3 Days'
  },
  {
    id: 8,
    slug: 'antananarivo-highlands',
    name: 'Antananarivo & Central Highlands',
    subtitle: 'Culture & terraced rice fields',
    description: 'Explore Madagascar\'s cultural heart with royal palaces, traditional markets, and stunning highland landscapes.',
    region: 'Central Highlands',
    category: 'Cultural',
    image: '/images/destinations/antananarivo.jpg',
    highlights: [
      'Rova Palace complex',
      'Ambohimanga sacred hill',
      'Traditional Malagasy markets',
      'Terraced rice field landscapes'
    ],
    bestTime: 'Year-round',
    difficulty: 'Easy',
    duration: '1-2 Days'
  },
  {
    id: 9,
    slug: 'sainte-marie-island',
    name: 'Sainte-Marie Island',
    subtitle: 'Pirate history & whale watching',
    description: 'Tropical island paradise with pirate history, pristine beaches, and spectacular humpback whale watching from July to September.',
    region: 'East Coast',
    category: 'Coastal',
    image: '/images/destinations/sainte-marie.jpeg',
    highlights: [
      'Humpback whale watching (July-September)',
      'World\'s only official pirate cemetery',
      'Île aux Nattes car-free island',
      'Pristine beaches and lagoons'
    ],
    bestTime: 'May - October (Whales: July-September)',
    difficulty: 'Easy',
    duration: '2-4 Days'
  },
  {
    id: 10,
    slug: 'pangalanes-canal',
    name: 'Pangalanes Canal',
    subtitle: 'Waterway journey through villages',
    description: 'A network of natural and man-made waterways connecting lakes, rivers, and coastal lagoons along Madagascar\'s east coast.',
    region: 'East Coast',
    category: 'Cultural',
    image: '/images/destinations/canal des pangalanes-nosy varika-mahanoro.jpeg',
    highlights: [
      'Boat journeys through traditional villages',
      'Ankanin\'ny Nofy peninsula',
      'Local fishing communities',
      'Lush tropical scenery'
    ],
    bestTime: 'April - November',
    difficulty: 'Easy',
    duration: '1-3 Days'
  },
  {
    id: 11,
    slug: 'antsirabe',
    name: 'Antsirabe',
    subtitle: 'Thermal city & rickshaw capital',
    description: 'Madagascar\'s thermal city known for its volcanic crater lakes, "Pousse-Pousse" rickshaws, and gemstone markets.',
    region: 'Central Highlands',
    category: 'Cultural',
    image: '/images/destinations/antsirabe.jpg',
    highlights: [
      'Pousse-pousse (rickshaw) rides',
      'Thermal springs and crater lakes',
      'Gemstone and craft markets',
      'Horseback riding at Ranch du Bonheur'
    ],
    bestTime: 'Year-round',
    difficulty: 'Easy',
    duration: '1-2 Days'
  },
  {
    id: 12,
    slug: 'morondava-coast',
    name: 'Morondava Coast',
    subtitle: 'Gateway to baobabs & tsingy',
    description: 'Coastal town serving as the gateway to the Avenue of Baobabs and Tsingy de Bemaraha, with beautiful beaches and Vezo culture.',
    region: 'West Coast',
    category: 'Coastal',
    image: '/images/destinations/morondava.jpg',
    highlights: [
      'Gateway to Avenue of Baobabs',
      'Betania Fishing Village visits',
      'Beautiful coastal beaches',
      'Vezo fishing culture'
    ],
    bestTime: 'April - November',
    difficulty: 'Easy',
    duration: '1-2 Days'
  },
  {
    id: 13,
    slug: 'tamatave-toamasina',
    name: 'Tamatave (Toamasina)',
    subtitle: 'Major port & spice markets',
    description: 'Madagascar\'s main seaport with vibrant markets, colonial architecture, and access to the Pangalanes Canal.',
    region: 'East Coast',
    category: 'Cultural',
    image: '/images/destinations/tamatave.jpeg',
    highlights: [
      'Bazar Be market for spices and vanilla',
      'Colonial architecture',
      'Pousse-pousse city tours',
      'Access to Pangalanes Canal'
    ],
    bestTime: 'April - November',
    difficulty: 'Easy',
    duration: '1-2 Days'
  },
  {
    id: 14,
    slug: 'manambato-lake',
    name: 'Manambato & Lake Rasoabe',
    subtitle: 'Lakeside tranquility',
    description: 'Peaceful lakeside village on the shores of Lake Rasoabe, serving as a departure point for Pangalanes Canal journeys.',
    region: 'East Coast',
    category: 'Nature',
    image: '/images/destinations/manambato.jpeg',
    highlights: [
      'Tranquil lakeside setting',
      'Gateway to Pangalanes Canal',
      'Bird watching opportunities',
      'Relaxed atmosphere'
    ],
    bestTime: 'April - November',
    difficulty: 'Easy',
    duration: '1-2 Days'
  },
  {
    id: 15,
    slug: 'ankarinny-nofy',
    name: 'Ankanin\'ny Nofy',
    subtitle: 'The "Nest of Dreams"',
    description: 'Peninsula in the Pangalanes Canal known as the "Nest of Dreams," home to the Palmarium Private Park and rare wildlife.',
    region: 'East Coast',
    category: 'Nature & Wildlife',
    image: '/images/destinations/akanin-ny-nofy.jpg',
    highlights: [
      'Palmarium Private Park with close lemur encounters',
      'Aye-Aye nocturnal lemur sightings',
      'White sand lake beaches',
      'Carnivorous Pitcher plants and rare orchids'
    ],
    bestTime: 'April - November',
    difficulty: 'Easy',
    duration: '2-3 Days'
  },
  {
    id: 16,
    slug: 'miandrivazo',
    name: 'Miandrivazo',
    subtitle: 'Gateway to Tsiribihina River',
    description: 'Hot, lively town on the banks of the Tsiribihina River, known as a starting point for river expeditions.',
    region: 'West Coast',
    category: 'Adventure',
    image: '/images/destinations/miandrivazo.jpg',
    highlights: [
      'Tsiribihina River access',
      'Local cuisine at Princesse de la Tsiribihina',
      'Traditional Malagasy town life',
      'Gateway to western adventures'
    ],
    bestTime: 'April - November',
    difficulty: 'Easy',
    duration: '1 Day'
  },
  {
    id: 17,
    slug: 'bekopaka-tsingy',
    name: 'Bekopaka (Tsingy Base)',
    subtitle: 'Base for Tsingy exploration',
    description: 'Small village serving as the base camp for exploring both the Grand and Petit Tsingy de Bemaraha.',
    region: 'West Coast',
    category: 'Adventure',
    image: '/images/destinations/bekopaka-tsingy.jpeg',
    highlights: [
      'Access to Grand and Petit Tsingy',
      'Manambolo River pirogue trips',
      'Traditional village life',
      'Stargazing opportunities'
    ],
    bestTime: 'April - November',
    difficulty: 'Moderate',
    duration: '2-3 Days'
  },
  {
    id: 18,
    slug: 'ambatolampy',
    name: 'Ambatolampy',
    subtitle: 'Aluminum craftsmanship',
    description: 'Town famous for its traditional aluminum pot craftsmanship, where artisans forge pots by hand using recycled materials.',
    region: 'Central Highlands',
    category: 'Cultural',
    image: '/images/destinations/ambatolampy.jpg',
    highlights: [
      'Traditional aluminum pot workshops',
      'Handcraft demonstrations',
      'Local artisan culture',
      'Highland scenery'
    ],
    bestTime: 'Year-round',
    difficulty: 'Easy',
    duration: 'Half Day'
  },
  {
    id: 19,
    slug: 'ambositra',
    name: 'Ambositra',
    subtitle: 'Woodcraft capital',
    description: 'Heart of Madagascar\'s woodcraft industry, home to the Zafimaniry people and their UNESCO-recognized woodcarving traditions.',
    region: 'Central Highlands',
    category: 'Cultural',
    image: '/images/destinations/ambositra.jpg',
    highlights: [
      'Zafimaniry woodcraft workshops',
      'UNESCO intangible cultural heritage',
      'Intricate wooden sculptures',
      'Highland architecture'
    ],
    bestTime: 'Year-round',
    difficulty: 'Easy',
    duration: '1-2 Days'
  },
  {
    id: 20,
    slug: 'tulear-toliara',
    name: 'Tuléar (Toliara)',
    subtitle: 'Southern coastal city',
    description: 'Vibrant coastal city in southern Madagascar, gateway to Anakao beach and the spiny desert region.',
    region: 'Southern Highlands',
    category: 'Coastal',
    image: '/images/destinations/tulear.jpg',
    highlights: [
      'Gateway to Anakao and southern beaches',
      'Local markets and culture',
      'Arboretum d\'Antsokay botanical garden',
      'Coastal seafood cuisine'
    ],
    bestTime: 'March - November',
    difficulty: 'Easy',
    duration: '1-2 Days'
  },
  {
    id: 21,
    slug: 'anja-reserve',
    name: 'Anja Community Reserve',
    subtitle: 'Ring-tailed lemur haven',
    description: 'Community-run reserve where ring-tailed lemurs are easily spotted among impressive granite rock formations.',
    region: 'Southern Highlands',
    category: 'Nature & Wildlife',
    image: '/images/destinations/anja-reserve.jpeg',
    highlights: [
      'Close encounters with ring-tailed lemurs',
      'Community-run conservation project',
      'Granite rock formations',
      'Local guide experiences'
    ],
    bestTime: 'March - November',
    difficulty: 'Moderate',
    duration: 'Half Day'
  },
  {
    id: 22,
    slug: 'nosy-iranja',
    name: 'Nosy Iranja',
    subtitle: 'Turtle Island & sandbank',
    description: 'Two small islands connected by a spectacular white sandbank that appears at low tide, known as "Turtle Island".',
    region: 'Northern Madagascar',
    category: 'Coastal',
    image: '/images/destinations/nosy-iranja.jpg',
    highlights: [
      'Iconic white sandbank walk',
      'Sea turtle nesting sites',
      'Crystal clear snorkeling waters',
      'Most photographed spot in Madagascar'
    ],
    bestTime: 'May - October',
    difficulty: 'Easy',
    duration: 'Day Trip'
  },
  {
    id: 23,
    slug: 'nosy-tanikely',
    name: 'Nosy Tanikely',
    subtitle: 'Marine reserve snorkeling',
    description: 'Protected marine reserve with exceptional snorkeling opportunities among coral reefs, sea turtles, and tropical fish.',
    region: 'Northern Madagascar',
    category: 'Coastal',
    image: '/images/destinations/nosy-tanikely.jpg',
    highlights: [
      'World-class snorkeling and diving',
      'Sea turtle encounters',
      'Protected coral reefs',
      'Lighthouse and island walk'
    ],
    bestTime: 'May - October',
    difficulty: 'Easy',
    duration: 'Day Trip'
  },
  {
    id: 24,
    slug: 'nosy-komba',
    name: 'Nosy Komba',
    subtitle: 'Island of Lemurs',
    description: 'Volcanic island known for its black lemurs, traditional woodcarving villages, and relaxed atmosphere.',
    region: 'Northern Madagascar',
    category: 'Nature & Cultural',
    image: '/images/destinations/nosy-komba.jpg',
    highlights: [
      'Black lemur encounters',
      'Traditional woodcarving villages',
      'Volcanic island scenery',
      'Local handicraft markets'
    ],
    bestTime: 'May - October',
    difficulty: 'Easy',
    duration: 'Day Trip'
  },
  {
    id: 25,
    slug: 'nosy-sakatia',
    name: 'Nosy Sakatia',
    subtitle: 'Orchid Island',
    description: 'Peaceful island known as the "Orchid Island" for its rich flora, with opportunities to snorkel with giant green sea turtles.',
    region: 'Northern Madagascar',
    category: 'Nature & Coastal',
    image: '/images/destinations/nosy-sakatia.jpeg',
    highlights: [
      'Snorkeling with giant green sea turtles',
      'Orchid and botanical trails',
      'Peaceful, less-crowded beaches',
      'Rich marine biodiversity'
    ],
    bestTime: 'May - October',
    difficulty: 'Easy',
    duration: 'Day Trip'
  },
  {
    id: 26,
    slug: 'mont-passot',
    name: 'Mont Passot',
    subtitle: 'Sunset over crater lakes',
    description: 'Highest point on Nosy Be offering 360-degree panoramic views of the island\'s volcanic crater lakes and the Mozambique Channel.',
    region: 'Northern Madagascar',
    category: 'Nature',
    image: '/images/destinations/mont-passot.jpg',
    highlights: [
      'Spectacular sunset viewpoints',
      '360-degree island panoramas',
      'Volcanic crater lakes',
      'Photography opportunities'
    ],
    bestTime: 'Year-round',
    difficulty: 'Easy',
    duration: 'Half Day'
  },
  {
    id: 27,
    slug: 'hell-ville',
    name: 'Hell-Ville (Andoany)',
    subtitle: 'Nosy Be main town',
    description: 'Main town of Nosy Be, known for its vibrant market selling spices, vanilla, and ylang-ylang essential oils.',
    region: 'Northern Madagascar',
    category: 'Cultural',
    image: '/images/destinations/hell-ville-andoany.jpg',
    highlights: [
      'Spice and vanilla markets',
      'Ylang-ylang essential oil',
      'Colonial architecture',
      'Local restaurants and cafes'
    ],
    bestTime: 'Year-round',
    difficulty: 'Easy',
    duration: 'Half Day'
  }
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinationsData.find(destination => destination.slug === slug)
}

export function getDestinationsByRegion(region: string): Destination[] {
  if (region === 'All Regions') return destinationsData
  return destinationsData.filter(destination => destination.region === region)
}

export function getDestinationsByCategory(category: string): Destination[] {
  if (category === 'All Categories') return destinationsData
  return destinationsData.filter(destination => destination.category === category)
}