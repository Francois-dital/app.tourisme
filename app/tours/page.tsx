'use client'

import { useState, useCallback } from 'react'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import ToursFilters from '@/components/feature/tours/ToursFilters'
import ToursGrid from '@/components/feature/tours/ToursGrid'
import ToursPagination from '@/components/feature/tours/ToursPagination'
import { toursData, TourData } from '@/data/tours'

export default function ToursPage() {
  const [filteredTours, setFilteredTours] = useState<TourData[]>(toursData)

  const handleFilterChange = useCallback((tours: TourData[]) => {
    setFilteredTours(tours)
  }, [])

  // Only show pagination if there are more than 6 tours
  const showPagination = filteredTours.length > 6

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main className="max-w-7xl mx-auto pb-20">
        <ToursFilters onFilterChange={handleFilterChange} />
        <ToursGrid tours={filteredTours} />
        {showPagination && <ToursPagination />}
      </main>
      <FooterApp />
    </div>
  )
}