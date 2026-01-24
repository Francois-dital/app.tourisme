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
    description: 'A legendary 11-day journey through the verdant rainforests of Andasibe, discovering rare orchid species and spotting the iconic Indri lemurs in their natural habitat.',
    duration: '11 Days',
    price: {
      solo: '1.900 €',
      group: '1.800 €'
    },
    region: 'East Coast',
    category: 'Nature & Wildlife',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcNreVX7MOlfHFW3qmvh1p0to3EUkyThdufxpx9DuId__F8VFhIe3If3cv1bMYiqBHY3QYbC5iOMJcQ9kStcnpVsHfMiTxvvLp1c7w2ZSqxvT9_YMoMu4mYX_xbfcvD8T2wn5x9RAxS0nx3L_nmP1rbT51ylApDsRinGX407DTEc4DXh5Z9aNIsvI6du3i-ie9Fgb0p-9bjRxsI3jpwzZUfb9TBhxM6zruCe02UVabI5_w3TfiAkC7yOYf2BaSv-_rliGZSGRLtVJr',
    label: 'Best Seller',
    labelColor: 'primary',
    included: [
      'Private 4x4 vehicle with fuel',
      'Expert English/French guide',
      'All National Park entry fees',
      'Mid-range accommodation (B&B)',
      'Airport transfers',
      'Mineral water'
    ],
    excluded: [
      'International & Domestic flights',
      'Travel Insurance',
      'Personal tips & beverages',
      'Meals not specified',
      'Optional activities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Antananarivo',
        icon: 'flight_land',
        description: 'Welcome to Madagascar! Upon arrival at Ivato International Airport, you\'ll be greeted by your driver-guide. Transfer to your hotel in the city center.',
        accommodation: {
          name: 'Hotel Colbert (or similar)',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 2,
        title: 'Tana to Andasibe',
        icon: 'directions_car',
        description: 'Drive east through beautiful landscapes to Andasibe-Mantadia National Park. Visit the Vakona Forest Lodge to see rescued lemurs up close.'
      },
      {
        day: 3,
        title: 'Andasibe National Park',
        icon: 'forest',
        description: 'Early morning trek to hear the haunting call of the Indri Indri lemur. Explore the rainforest and discover endemic wildlife and plants.',
        dayRange: '03-04'
      }
    ]
  },
  {
    id: 2,
    slug: 'south-madagascar-tour',
    title: 'South Madagascar Tour',
    subtitle: 'The RN7 Route',
    description: 'A legendary 9-day journey from the bustling capital to the white sands of the Mozambique Channel, crossing the soul of the Red Island.',
    duration: '9 Days',
    price: {
      solo: '1.600 €',
      group: '1.500 €'
    },
    region: 'Southern Highlands',
    category: 'Nature & Adventure',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTuBMPdiIwJRLNxdhif84dC3jt4unOLSa6HHY1mqaeZAuXtXHhmm5jOZWnmVZ9fEJuG0cxpjON_3TIweHnzxB6nWqsG3EfDrPFLJAES5pTnnpkXV9FZfL_osgZnFSPHa_Ky3CsAMnwyCjzGNFwl5cR84jgRlR1Ixp4JYXbuTI6CCrgxpUnmtWlymGarzl4IUm_Q-zDJFrX97aPG55vehE-mrmR30qxwNDuwrU1XgN56Akdw0vKxJ64x417deTmUUkMrcOsB4Vp1H1P',
    included: [
      'Private vehicle, fuel, driver',
      'Airport transfers',
      'Domestic flight Tuléar ↔ Antananarivo',
      'Accommodation',
      'Guided park visits',
      'Boat transfers',
      'Entrance fees',
      'English-speaking guide',
      'Mineral water'
    ],
    excluded: [
      'International flights',
      'Visa & insurance',
      'Meals not specified',
      'Personal expenses',
      'Optional activities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Antananarivo (Tana)',
        icon: 'flight_land',
        description: 'Arrival at Ivato International Airport, welcome by the team and transfer to hotel. Optional city tour (Independence Avenue, Rova Palace, Lemur\'s Park, Queen\'s Staircase, Andohalo Cathedral). Dinner at a local restaurant.',
        accommodation: {
          name: 'Hotel in Tana',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 2,
        title: 'Tana to Antsirabe',
        icon: 'directions_car',
        description: 'Stop at Ambatolampy (aluminum craft), visit Antsirabe city, Ranch du Bonheur (horseback ride – optional), local markets, pousse-pousse tour.',
        accommodation: {
          name: 'Hotel in Antsirabe',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 3,
        title: 'Antsirabe to Ranomafana',
        icon: 'forest',
        description: 'Stop in Ambositra (Zafimaniry woodcraft), scenic drive to rainforest.',
        accommodation: {
          name: 'Lodge near Ranomafana National Park',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 4,
        title: 'Ranomafana Exploration',
        icon: 'hiking',
        description: 'Guided hike in Ranomafana National Park, endemic wildlife, natural hot springs.'
      },
      {
        day: 5,
        title: 'Ranomafana to Isalo',
        icon: 'landscape',
        description: 'Visit Anja Reserve, scenic drive, sunset at Isalo.',
        accommodation: {
          name: 'Lodge near Isalo',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmbuqBG999ts3wmQEM6ECQHrKi5u2M7hAD54CJtxnfn6i6-GrLAIm6Mbno2LOU2XxbOSbPiTmNLIkUXE9YnLW_jH1LZUECUCrgF2lxB-67Q4FqzbXJtbZvLEFkl3djZkTijuE1hI5S4N0QTyAliG9FwNFrfjcsVrErEr3khqEU-6TNeVP3J8Y6krd2Djdn4uv6q1M8BocLWrCoswdKLe96u1rADHrZZUvNecN4Q0orkK4xoyjZBi7_AQ9wmbG4IyYKxISygeu71cUE'
        }
      },
      {
        day: 6,
        title: 'Isalo to Tuléar',
        icon: 'hiking',
        description: 'Morning hike in Isalo National Park, drive to Tuléar.',
        accommodation: {
          name: 'Hotel in Tuléar',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 7,
        title: 'Tuléar to Anakao',
        icon: 'sailing',
        description: 'Boat transfer to Anakao, beach time, swimming and relaxation.',
        accommodation: {
          name: 'Lodge in Anakao',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVRLXIEipOiOcZM_z4kT35IF5O29isnro5_eM3iyAsL_kd0H4TSuKTqv_ejQ_SkRV5OuntLvHs-RMgtmCZ8_xn-j54CvQGBt-gjfo-IF09_u_SwaEJH05YNT4455orV1bwGQC9nX1XJUMC40zrnojbKZLSIE9sVk9OoQ3mOKdbbrjmsOoHXKjyBc599fkONUTK1gUO9EbTqEoxyCsZsTo8kXhK8RmHQkEzmtLYbGA7_-n49StsHVgE_osxWW3XfJrY13A8F9NKY9S4'
        }
      },
      {
        day: 8,
        title: 'Anakao Exploration',
        icon: 'scuba_diving',
        description: 'Snorkeling/diving, Vezo village visit, optional Nosy Ve trip, sunset.'
      },
      {
        day: 9,
        title: 'Anakao – Tuléar – Antananarivo',
        icon: 'flight_takeoff',
        description: 'Boat back to Tuléar and domestic flight to Tana. End of tour.'
      }
    ]
  },
  {
    id: 3,
    slug: 'baobab-tsingy-route',
    title: 'The Baobab & Tsingy Route',
    subtitle: 'South West Madagascar Adventure',
    description: 'A photographer\'s dream. Witness the Avenue of Baobabs at sunset and hike the surreal limestone labyrinths of Tsingy de Bemaraha.',
    duration: '9 Days',
    price: {
      solo: '1.600 €',
      group: '1.500 €'
    },
    region: 'West & Tsingy',
    category: 'Adventure & Photography',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRXtTarNBZ8RkfHrMq0zeeLTFvD4o8d6yyGb4XohGvkiYQarCP_oqHJ2BFY2idO8Ok1ltiOJaQ8RKG6iSba3JatukELqgPGw7IzSByz-X-dmR7L1gY1wmt3LUYW4WVRLdFgg9qTBWwGFckDGoVgXpDaChi0Q_5zp75mdfTcwlohODzeXHtsyA7mxHMJyIoxwmGGJjmvPnFHlIQ8X0aCz9bygIfwUgrB3gGNFICKjgio8QEnbj6hKPSmakpLipkQ2KSqttt3rXcI0jx',
    label: 'Adventure',
    labelColor: 'secondary',
    included: [
      'Fuel, ferries, return fees',
      'Accommodation',
      'Breakfast',
      'Bottled water',
      'National Park entrance fees & guides',
      'Tsingy safety equipment',
      'Domestic flight Morondava → Tana'
    ],
    excluded: [
      'International flights',
      'Visa & insurance',
      'Lunch & dinner',
      'Personal expenses',
      'Optional activities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Antananarivo (Tana)',
        icon: 'flight_land',
        description: 'Arrival at Ivato Airport, welcome, hotel transfer, optional city tour.',
        accommodation: {
          name: 'Hotel in Tana',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 2,
        title: 'Tana to Antsirabe',
        icon: 'directions_car',
        description: 'Stop at Ambatolampy, Antsirabe city tour, crafts and pousse-pousse.',
        accommodation: {
          name: 'Hotel in Antsirabe',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 3,
        title: 'Antsirabe to Morondava',
        icon: 'directions_car',
        description: 'Scenic drive, stop at Miandrivazo.',
        accommodation: {
          name: 'Hotel in Morondava',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 4,
        title: 'Morondava to Bekopaka',
        icon: 'ferry',
        description: 'Ferry crossings, lunch at Belo-sur-Tsiribihina, arrival at Tsingy.',
        accommodation: {
          name: 'Hotel near Tsingy de Bemaraha',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 5,
        title: 'Big Tsingy Exploration',
        icon: 'climbing',
        description: 'Climbing with harness, suspension bridge, wildlife spotting.'
      },
      {
        day: 6,
        title: 'Petit Tsingy & Manambolo Gorge',
        icon: 'kayaking',
        description: 'Pirogue trip, caves, Petit Tsingy hike.'
      },
      {
        day: 7,
        title: 'Bekopaka to Morondava',
        icon: 'park',
        description: 'Baobab Amoureux, optional Kirindy Forest.',
        accommodation: {
          name: 'Hotel in Morondava',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 8,
        title: 'Morondava to Tana',
        icon: 'sailing',
        description: 'Vezo fishing village visit, domestic flight to Tana.',
        accommodation: {
          name: 'Hotel in Morondava',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      },
      {
        day: 9,
        title: 'Morondava – Departure',
        icon: 'flight_takeoff',
        description: 'Transfer to airport for international flight.'
      }
    ]
  },
  {
    id: 4,
    slug: 'nosy-be-beach-getaway',
    title: 'Nosy Be Beach Getaway',
    subtitle: 'Tropical Paradise Escape',
    description: 'Relax on the white sand beaches of Nosy Be. Snorkel in turquoise waters and visit the fragrant ylang-ylang plantations.',
    duration: '7 Days',
    price: {
      solo: '1.200 €',
      group: '990 €'
    },
    region: 'North Coast',
    category: 'Beach & Relaxation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVRLXIEipOiOcZM_z4kT35IF5O29isnro5_eM3iyAsL_kd0H4TSuKTqv_ejQ_SkRV5OuntLvHs-RMgtmCZ8_xn-j54CvQGBt-gjfo-IF09_u_SwaEJH05YNT4455orV1bwGQC9nX1XJUMC40zrnojbKZLSIE9sVk9OoQ3mOKdbbrjmsOoHXKjyBc599fkONUTK1gUO9EbTqEoxyCsZsTo8kXhK8RmHQkEzmtLYbGA7_-n49StsHVgE_osxWW3XfJrY13A8F9NKY9S4',
    included: [
      'Airport transfers',
      'Beachfront accommodation',
      'Boat excursions',
      'Snorkeling equipment',
      'Island hopping tours',
      'Local guide'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Meals not specified',
      'Personal expenses',
      'Spa treatments'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Nosy Be',
        icon: 'flight_land',
        description: 'Arrival at Fascene Airport, transfer to beachfront resort.',
        accommodation: {
          name: 'Beachfront Resort',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVRLXIEipOiOcZM_z4kT35IF5O29isnro5_eM3iyAsL_kd0H4TSuKTqv_ejQ_SkRV5OuntLvHs-RMgtmCZ8_xn-j54CvQGBt-gjfo-IF09_u_SwaEJH05YNT4455orV1bwGQC9nX1XJUMC40zrnojbKZLSIE9sVk9OoQ3mOKdbbrjmsOoHXKjyBc599fkONUTK1gUO9EbTqEoxyCsZsTo8kXhK8RmHQkEzmtLYbGA7_-n49StsHVgE_osxWW3XfJrY13A8F9NKY9S4'
        }
      }
    ]
  },
  {
    id: 5,
    slug: 'northern-explorer-circuit',
    title: 'Northern Explorer Circuit',
    subtitle: 'Remote Wilderness Adventure',
    description: 'Venture to the remote north. Discover the Emerald Sea, the Amber Mountain, and the unique Red Tsingy formations.',
    duration: '14 Days',
    price: {
      solo: '2.000 €',
      group: '1.850 €'
    },
    region: 'North Coast',
    category: 'Adventure & Exploration',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYsQ3-mtXuWdHS0tOSxHAvR-XfSQ9Xugk_toceeFw6zcgLx21LjPnlPrd1O-7rwPBE84zJEMYR8fKKSuNr5k2--GaFI31vcgv2ics8OpI4gIkrdoo2-32u3A2hldLCS5Yo7_s4ErWtfAwfOthGvi_yd3Z86hqGCPRm6VHytGN6LWTZ0j_hLxl1kkgmyt5khBGHEY1ul8oO-d-iyKgdYy1H7DoTg9fQrRGtphLassRcdDz_gUGx7XOandQln5jYAcIWny6LgSGJkMs4',
    included: [
      'Private 4x4 vehicle',
      'Professional guide',
      'All accommodations',
      'Park entrance fees',
      'Domestic flights',
      'Meals as specified'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Optional activities',
      'Tips and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Antananarivo',
        icon: 'flight_land',
        description: 'Welcome to Madagascar! Transfer to hotel and briefing.',
        accommodation: {
          name: 'Hotel in Tana',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoc1k_S4rzR6pJKU6jS8M44UaoyqLi0_NiO25SKnG_kICxNNT9EXqvFPEY_6vsvTg9cXLMnY8-vRp3ZKcZjo3K7vcZkhqdGyC4eyLhYzTqUTfg--NzZp2O2DewAYti9u4FXgoojhYm5wScVP5RiN_15-b3CBO-7puOPVOMgJ8vm8XLGikTAViXGl8H3WrRR8E6FzVDr9xb-D5CND09dRBJkI6RSplMyXfew4ggTNEorpgrJz5rQOJq61ckYhyRisWXocEYrhRXFGl'
        }
      }
    ]
  }
]

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