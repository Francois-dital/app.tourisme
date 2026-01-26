'use client'

import { useState, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import DestinationsFilters from '@/components/feature/destinations/DestinationsFilters'
import DestinationsGrid from '@/components/feature/destinations/DestinationsGrid'
import { destinationsData, Destination } from '@/data/destinations'

function useIsClient() {
  const [isClient, setIsClient] = useState(false)
  
  if (typeof window !== 'undefined' && !isClient) {
    setTimeout(() => setIsClient(true), 0)
  }
  
  return isClient
}

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
  
  const shuffledDestinations = useMemo(() => {
    if (!isClient) return []
    return shuffleArray(destinationsData)
  }, [isClient])

  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([])

  const currentFilteredDestinations = useMemo(() => {
    if (!isClient) return []
    if (filteredDestinations.length === 0) return shuffledDestinations
    return filteredDestinations
  }, [isClient, shuffledDestinations, filteredDestinations])

  const handleFilterChange = useCallback((destinations: Destination[]) => {
    setFilteredDestinations(destinations)
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <HeaderApp />
      <main className="w-full pb-12 sm:pb-20 flex-grow container-padding">
        {isClient ? (
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-12 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">
                {t('destinations.title')}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
                {t('destinations.subtitle')}
              </p>
            </div>
            <DestinationsFilters 
              onFilterChange={handleFilterChange} 
              baseDestinations={shuffledDestinations}
            />
            <DestinationsGrid destinations={currentFilteredDestinations} />
          </div>
        ) : (
          <div className="py-12 sm:py-24 max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                {t('destinations.title')}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
                {t('destinations.subtitle')}
              </p>
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-primary"></div>
              </div>
            </div>
          </div>
        )}
      </main>
      <FooterApp />
    </div>
  )
}