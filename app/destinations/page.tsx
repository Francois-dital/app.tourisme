'use client'

import { useState, useCallback } from 'react'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import DestinationsFilters from '@/components/feature/destinations/DestinationsFilters'
import DestinationsGrid from '@/components/feature/destinations/DestinationsGrid'
import { destinationsData, Destination } from '@/data/destinations'

export default function DestinationsPage() {
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinationsData)

  const handleFilterChange = useCallback((destinations: Destination[]) => {
    setFilteredDestinations(destinations)
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main className="max-w-7xl mx-auto pb-20">
        <DestinationsFilters onFilterChange={handleFilterChange} />
        <DestinationsGrid destinations={filteredDestinations} />
      </main>
      <FooterApp />
    </div>
  )
}