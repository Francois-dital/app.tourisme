'use client'

import { useEffect, useState } from 'react'
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
  const [isClient, setIsClient] = useState(false)
  const currentLanguage = i18n.language as 'fr' | 'en'

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const title = customTitle || pageTitles[pageKey]?.[currentLanguage] || pageTitles[pageKey]?.fr
    if (title && typeof document !== 'undefined') {
      document.title = `${title} | ELMADAGASCAR`
    }
  }, [pageKey, customTitle, currentLanguage, isClient])
}