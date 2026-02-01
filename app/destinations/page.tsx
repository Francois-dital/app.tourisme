'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import DestinationsFilters from '@/components/feature/destinations/DestinationsFilters'
import DestinationsGrid from '@/components/feature/destinations/DestinationsGrid'
import { destinationsData, Destination } from '@/data/destinations'
import { usePageTitle } from '@/hooks/usePageTitle'

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
  const [isClient, setIsClient] = useState(false)
  
  usePageTitle('destinations')
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  const shuffledDestinations = useMemo(() => {
    if (!isClient) return []
    return shuffleArray(destinationsData)
  }, [isClient])

  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([])
  const [hasActiveFilters, setHasActiveFilters] = useState(false)

  const currentFilteredDestinations = useMemo(() => {
    if (!isClient) return []
    // Si aucun filtre n'est actif, montrer toutes les destinations
    if (!hasActiveFilters) return shuffledDestinations
    // Si des filtres sont actifs, montrer les résultats filtrés (même si vide)
    return filteredDestinations
  }, [isClient, shuffledDestinations, filteredDestinations, hasActiveFilters])

  const handleFilterChange = useCallback((destinations: Destination[], hasFilters: boolean) => {
    setFilteredDestinations(destinations)
    setHasActiveFilters(hasFilters)
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <HeaderApp />
      <main className="w-full pb-12 sm:pb-20 flex-grow">
        {isClient ? (
          <div className="w-full">
            <DestinationsFilters 
              onFilterChange={handleFilterChange} 
              baseDestinations={shuffledDestinations}
            />
            <DestinationsGrid destinations={currentFilteredDestinations} />
          </div>
        ) : (
          <div className="py-12 sm:py-24 w-full">
            <div className="text-center">
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