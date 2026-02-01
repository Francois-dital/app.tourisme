import type { Metadata } from 'next'

// Import translations directly
const enTranslations = require('@/data/translations/en.json')
const frTranslations = require('@/data/translations/fr.json')

type TranslationKey = string
type Language = 'en' | 'fr'

// Function to get translation on server side
function getServerTranslation(key: TranslationKey, language: Language = 'fr'): string {
  const translations = language === 'en' ? enTranslations : frTranslations
  
  // Navigate through nested keys (e.g., "nav.home")
  const keys = key.split('.')
  let value = translations
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return typeof value === 'string' ? value : key
}

// Metadata translations - Default to French for SEO consistency
const metadataTranslations = {
  home: {
    title: 'Accueil',
    description: 'ELMADAGASCAR - Votre spécialiste des circuits 4x4 à Madagascar. Découvrez la Grande Île avec nos guides locaux expérimentés.'
  },
  about: {
    title: 'À Propos',
    description: 'Découvrez ELMADAGASCAR, votre agence de voyage spécialisée dans les circuits 4x4 à Madagascar. Guides locaux expérimentés, véhicules équipés et expériences authentiques.'
  },
  tours: {
    title: 'Circuits & Tours',
    description: 'Découvrez Madagascar à travers nos circuits et tours expertement conçus. De la forêt tropicale aux plages, explorez la biodiversité unique de l\'île.'
  },
  tourDetail: {
    title: 'Détail du Circuit',
    description: 'Découvrez les détails de ce circuit Madagascar avec ELMADAGASCAR. Itinéraire complet, prix, durée et réservation.'
  },
  destinations: {
    title: 'Destinations',
    description: 'Explorez les plus belles destinations de Madagascar avec ELMADAGASCAR. Parcs nationaux, réserves naturelles, plages paradisiaques et sites uniques.'
  },
  destinationDetail: {
    title: 'Détail de la Destination',
    description: 'Explorez cette destination Madagascar en détail avec ELMADAGASCAR. Informations complètes, activités et circuits disponibles.'
  },
  booking: {
    title: 'Réservation',
    description: 'Réservez votre circuit aventure à Madagascar avec ELMADAGASCAR. Formulaire de réservation simple et assistance personnalisée.'
  }
}

// Generate metadata for a specific page (defaults to French for SEO)
export function generatePageMetadata(
  pageKey: keyof typeof metadataTranslations,
  customTitle?: string,
  customDescription?: string
): Metadata {
  const pageTranslations = metadataTranslations[pageKey]
  
  const title = customTitle || pageTranslations.title
  const description = customDescription || pageTranslations.description
  
  return {
    title,
    description,
  }
}

export { getServerTranslation }