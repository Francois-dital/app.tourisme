'use client'

import { useState, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import DestinationsFilters from '@/components/feature/destinations/DestinationsFilters'
import DestinationsGrid from '@/components/feature/destinations/DestinationsGrid'
import { destinationsData, Destination } from '@/data/destinations'

// Hook personnalisé pour détecter si on est côté client
function useIsClient() {
  const [isClient, setIsClient] = useState(false)
  
  // Utiliser un effet vide pour déclencher le re-render côté client
  if (typeof window !== 'undefined' && !isClient) {
    // Ce code s'exécute uniquement côté client
    setTimeout(() => setIsClient(true), 0)
  }
  
  return isClient
}

// Fonction pour mélanger un tableau de manière aléatoire (Fisher-Yates shuffle)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function DestinationsPage() {
  const { t } = useTranslation()
  const isClient = useIsClient()
  
  // Mélanger les destinations uniquement côté client
  const shuffledDestinations = useMemo(() => {
    if (!isClient) return [] // Retourner vide côté serveur
    return shuffleArray(destinationsData)
  }, [isClient])

  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([])

  // Mettre à jour les destinations filtrées quand les destinations mélangées changent
  const currentFilteredDestinations = useMemo(() => {
    if (!isClient) return []
    if (filteredDestinations.length === 0) return shuffledDestinations
    return filteredDestinations
  }, [isClient, shuffledDestinations, filteredDestinations])

  const handleFilterChange = useCallback((destinations: Destination[]) => {
    setFilteredDestinations(destinations)
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main className="w-full pb-20">
        {isClient ? (
          <>
            <DestinationsFilters 
              onFilterChange={handleFilterChange} 
              baseDestinations={shuffledDestinations}
            />
            <DestinationsGrid destinations={currentFilteredDestinations} />
          </>
        ) : (
          <div className="py-24 px-6 md:px-20 lg:px-24 xl:px-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('destinations.title')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                {t('destinations.subtitle')}
              </p>
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            </div>
          </div>
        )}
      </main>
      <FooterApp />
    </div>
  )
}
