import { TourData } from '@/data/tours'
import { Destination } from '@/data/destinations'

export function translateTourData(tour: TourData, t: (key: string) => string): TourData {
  const tourKey = getTourTranslationKey(tour.slug)
  
  if (!tourKey) return tour // Return original if no translation key found
  
  return {
    ...tour,
    title: t(`toursData.${tourKey}.title`),
    subtitle: t(`toursData.${tourKey}.subtitle`),
    description: t(`toursData.${tourKey}.description`),
    region: t(`toursData.${tourKey}.region`),
    category: t(`toursData.${tourKey}.category`),
    label: tour.label ? t(`toursData.${tourKey}.label`) : tour.label
  }
}

export function translateDestinationData(destination: Destination, t: (key: string) => string): Destination {
  // For now, return original data - we can add destination translations later
  return destination
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