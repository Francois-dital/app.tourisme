import { TourData } from '@/data/tours'
import { Destination } from '@/data/destinations'

export function translateTourData(tour: TourData, t: (key: string) => string): TourData {
  const tourKey = getTourTranslationKey(tour.slug)
  
  if (!tourKey) return tour // Return original if no translation key found
  
  // Translate itinerary if translations exist
  const translatedItinerary = tour.itinerary.map((item, index) => {
    const dayKey = `day${index + 1}`
    const titleKey = `toursData.${tourKey}.itinerary.${dayKey}.title`
    const descriptionKey = `toursData.${tourKey}.itinerary.${dayKey}.description`
    const accommodationKey = `toursData.${tourKey}.itinerary.${dayKey}.accommodation`
    
    // Check if translation exists, otherwise use original
    const translatedTitle = t(titleKey)
    const translatedDescription = t(descriptionKey)
    const translatedAccommodation = t(accommodationKey)
    
    return {
      ...item,
      title: translatedTitle !== titleKey ? translatedTitle : item.title,
      description: translatedDescription !== descriptionKey ? translatedDescription : item.description,
      accommodation: item.accommodation ? {
        ...item.accommodation,
        name: translatedAccommodation !== accommodationKey ? translatedAccommodation : item.accommodation.name
      } : item.accommodation
    }
  })
  
  return {
    ...tour,
    title: t(`toursData.${tourKey}.title`),
    subtitle: t(`toursData.${tourKey}.subtitle`),
    description: t(`toursData.${tourKey}.description`),
    region: t(`toursData.${tourKey}.region`),
    category: t(`toursData.${tourKey}.category`),
    label: tour.label ? t(`toursData.${tourKey}.label`) : tour.label,
    itinerary: translatedItinerary
  }
}

export function translateDestinationData(destination: Destination, t: (key: string) => string): Destination {
  const destinationKey = getDestinationTranslationKey(destination.slug)
  
  if (!destinationKey) {
    // Pour les destinations sans traduction complète, on peut au moins traduire certains éléments
    return {
      ...destination,
      // Garder les données originales mais on pourrait ajouter des traductions partielles ici
      // Par exemple, traduire les catégories communes
      category: translateCategory(destination.category, t),
      region: translateRegion(destination.region, t)
    }
  }
  
  return {
    ...destination,
    name: t(`destinations.data.${destinationKey}.name`),
    subtitle: t(`destinations.data.${destinationKey}.subtitle`),
    description: t(`destinations.data.${destinationKey}.description`),
    highlights: destination.highlights.map((_, index) => 
      t(`destinations.data.${destinationKey}.highlights.${index}`)
    ),
    category: translateCategory(destination.category, t),
    region: translateRegion(destination.region, t),
    bestTime: translateBestTime(destination.bestTime, t),
    difficulty: translateDifficulty(destination.difficulty, t) as 'Easy' | 'Moderate' | 'Challenging',
    duration: translateDuration(destination.duration, t)
  }
}

// Fonctions helper pour traduire les catégories et régions communes
function translateCategory(category: string, t: (key: string) => string): string {
  const categoryMap: Record<string, string> = {
    'Rainforest': 'destinations.filters.categories.rainforest',
    'Coastal': 'destinations.filters.categories.coastal',
    'Adventure': 'destinations.filters.categories.adventure',
    'Cultural': 'destinations.filters.categories.cultural',
    'Nature': 'destinations.filters.categories.nature',
    'Nature & Wildlife': 'destinations.filters.categories.natureWildlife',
    'Nature & Cultural': 'destinations.filters.categories.natureCultural',
    'Nature & Coastal': 'destinations.filters.categories.natureCoastal'
  }
  
  return categoryMap[category] ? t(categoryMap[category]) : category
}

function translateRegion(region: string, t: (key: string) => string): string {
  const regionMap: Record<string, string> = {
    'Northern Madagascar': 'destinations.filters.regions.northern',
    'East Coast': 'destinations.filters.regions.east',
    'West Coast': 'destinations.filters.regions.west',
    'Southern Highlands': 'destinations.filters.regions.southern',
    'Central Highlands': 'destinations.filters.regions.central'
  }
  
  return regionMap[region] ? t(regionMap[region]) : region
}

function translateBestTime(bestTime: string, t: (key: string) => string): string {
  // Map common time periods to translation keys
  const timeMap: Record<string, string> = {
    'April - November': 'common.months.aprilNovember',
    'May - October': 'common.months.mayOctober',
    'March - November': 'common.months.marchNovember',
    'Year-round': 'common.months.yearRound',
    'Dry season': 'common.months.drySeason',
    'Rainy season': 'common.months.rainySeason'
  }
  
  return timeMap[bestTime] ? t(timeMap[bestTime]) : bestTime
}

function translateDifficulty(difficulty: string, t: (key: string) => string): string {
  const difficultyMap: Record<string, string> = {
    'Easy': 'destinations.grid.difficulty.easy',
    'Moderate': 'destinations.grid.difficulty.moderate',
    'Challenging': 'destinations.grid.difficulty.challenging'
  }
  
  return difficultyMap[difficulty] ? t(difficultyMap[difficulty]) : difficulty
}

function translateDuration(duration: string, t: (key: string) => string): string {
  // Map common durations to translation keys
  const durationMap: Record<string, string> = {
    '1-2 Days': 'common.duration.oneTwoDays',
    '2-3 Days': 'common.duration.twoThreeDays',
    '3-4 Days': 'common.duration.threeFourDays',
    '4-5 Days': 'common.duration.fourFiveDays',
    '1 Day': 'common.duration.oneDay',
    '2 Days': 'common.duration.twoDays',
    '3 Days': 'common.duration.threeDays',
    '1 Week': 'common.duration.oneWeek'
  }
  
  return durationMap[duration] ? t(durationMap[duration]) : duration
}

function getTourTranslationKey(slug: string): string | null {
  const keyMap: Record<string, string> = {
    'east-madagascar-tour': 'eastMadagascar',
    'south-madagascar-tour': 'southMadagascar',
    'west-madagascar-tour': 'westMadagascar',
    'north-madagascar-tour': 'northMadagascar'
  }
  
  return keyMap[slug] || null
}

function getDestinationTranslationKey(slug: string): string | null {
  const keyMap: Record<string, string> = {
    'andasibe-mantadia': 'andasibe-mantadia',
    'nosy-be-archipelago': 'nosy-be-archipelago',
    'avenue-baobabs': 'avenue-baobabs',
    'tsingy-bemaraha': 'tsingy-bemaraha',
    'isalo-national-park': 'isalo-national-park',
    'anakao-beach': 'anakao-beach',
    'ranomafana-national-park': 'ranomafana-national-park',
    'sainte-marie-island': 'sainte-marie-island',
    'antananarivo-highlands': 'antananarivo-highlands',
    'antsirabe': 'antsirabe',
    'nosy-iranja': 'nosy-iranja',
    'nosy-tanikely': 'nosy-tanikely',
    'nosy-komba': 'nosy-komba',
    // Ajouter toutes les destinations restantes
    'pangalanes-canal': 'pangalanes-canal',
    'tamatave-toamasina': 'tamatave-toamasina',
    'manambato-lake': 'manambato-lake',
    'ankarinny-nofy': 'ankarinny-nofy',
    'miandrivazo': 'miandrivazo',
    'bekopaka-tsingy': 'bekopaka-tsingy',
    'ambatolampy': 'ambatolampy',
    'ambositra': 'ambositra',
    'tulear-toliara': 'tulear-toliara',
    'anja-reserve': 'anja-reserve',
    'nosy-sakatia': 'nosy-sakatia',
    'mont-passot': 'mont-passot',
    'hell-ville': 'hell-ville',
    'morondava-coast': 'morondava-coast'
  }
  
  return keyMap[slug] || null
}