'use client'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface PageTitleTranslations {
  [key: string]: {
    fr: string
    en: string
  }
}

const pageTitles: PageTitleTranslations = {
  home: {
    fr: 'Accueil',
    en: 'Home'
  },
  about: {
    fr: 'À Propos',
    en: 'About'
  },
  tours: {
    fr: 'Circuits & Tours',
    en: 'Circuits & Tours'
  },
  destinations: {
    fr: 'Destinations',
    en: 'Destinations'
  },
  booking: {
    fr: 'Réservation',
    en: 'Booking'
  },
  tourDetail: {
    fr: 'Détail du Circuit',
    en: 'Tour Details'
  },
  destinationDetail: {
    fr: 'Détail de la Destination',
    en: 'Destination Details'
  }
}

export function usePageTitle(pageKey: keyof typeof pageTitles, customTitle?: string) {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language as 'fr' | 'en'

  useEffect(() => {
    const title = customTitle || pageTitles[pageKey]?.[currentLanguage] || pageTitles[pageKey]?.fr
    if (title) {
      document.title = `${title} | ELMADAGASCAR`
    }
  }, [pageKey, customTitle, currentLanguage])
}