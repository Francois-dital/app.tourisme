'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import DestinationsFilters from '@/components/feature/destinations/DestinationsFilters'
import DestinationsGrid from '@/components/feature/destinations/DestinationsGrid'
import { destinationsData, Destination } from '@/data/destinations'
import { usePageTitle } from '@/hooks/usePageTitle'

function shuffleArray<T>(array: T[], seed: number = 1): T[] {
  const shuffled = [...array]
  let random = seed
  const seededRandom = () => {
    random = (random * 9301 + 49297) % 233280
    return random / 233280
  }
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
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
    return shuffleArray(destinationsData, 12345)
  }, [])

  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([])
  const [hasActiveFilters, setHasActiveFilters] = useState(false)

  const currentFilteredDestinations = useMemo(() => {
    if (!hasActiveFilters) return shuffledDestinations
    return filteredDestinations
  }, [shuffledDestinations, filteredDestinations, hasActiveFilters])

  const handleFilterChange = useCallback((destinations: Destination[], hasFilters: boolean) => {
    setFilteredDestinations(destinations)
    setHasActiveFilters(hasFilters)
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <HeaderApp />
      <main className="w-full pb-12 sm:pb-20 flex-grow">
        <div className="w-full" style={{ opacity: isClient ? 1 : 0.5 }}>
          <DestinationsFilters 
            onFilterChange={handleFilterChange} 
            baseDestinations={shuffledDestinations}
          />
          <DestinationsGrid destinations={currentFilteredDestinations} />
        </div>
      </main>
      <FooterApp />
    </div>
  )
}