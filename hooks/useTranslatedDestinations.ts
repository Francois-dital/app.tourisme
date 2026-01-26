'use client'

import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Destination } from '@/data/destinations'

export function useTranslatedDestinations(destinations: Destination[]) {
  const { t, i18n } = useTranslation()

  const translatedDestinations = useMemo(() => {
    return destinations.map(destination => {
      // Essayer de récupérer les traductions pour cette destination
      const translationKey = `destinations.data.${destination.slug}`
      
      // Vérifier si les traductions existent
      const hasTranslation = i18n.exists(`${translationKey}.name`)
      
      if (hasTranslation) {
        return {
          ...destination,
          name: t(`${translationKey}.name`),
          subtitle: t(`${translationKey}.subtitle`),
          description: t(`${translationKey}.description`),
          highlights: destination.highlights.map((_, index) => 
            t(`${translationKey}.highlights.${index}`)
          )
        }
      }
      
      // Si pas de traduction, retourner les données originales
      return destination
    })
  }, [destinations, t, i18n])

  return translatedDestinations
}