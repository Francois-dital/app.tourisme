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
    image: '/images/destinations/anakao.jpg',
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
    image: '/images/destinations/ranomafana.jpg',
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
    image: '/images/destinations/tana.jpg',
    highlights: [
      'Rova Palace complex',
      'Ambohimanga sacred hill',
      'Traditional Malagasy markets',
      'Terraced rice field landscapes'
    ],
    bestTime: 'Year-round',
    difficulty: 'Easy',
    duration: '1-2 Days'
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