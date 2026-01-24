'use client'

import { useState, useEffect } from 'react'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { destinationsData, getDestinationsByRegion } from '@/data/destinations'

const regions = [
  'All Regions',
  'Northern Madagascar',
  'East Coast',
  'West Coast',
  'Southern Highlands',
  'Central Highlands',
]

const categories = [
  'All Categories',
  'Rainforest',
  'Coastal',
  'Adventure',
  'Cultural',
  'Nature',
  'Nature & Wildlife',
  'Nature & Cultural',
  'Nature & Coastal',
]

interface DestinationsFiltersProps {
  onFilterChange?: (filteredDestinations: any[]) => void
}

export default function DestinationsFilters({ onFilterChange }: DestinationsFiltersProps) {
  const [selectedRegion, setSelectedRegion] = useState('All Regions')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  useEffect(() => {
    let filteredDestinations = getDestinationsByRegion(selectedRegion)
    
    if (selectedCategory !== 'All Categories') {
      filteredDestinations = filteredDestinations.filter(destination => 
        destination.category === selectedCategory
      )
    }
    
    if (onFilterChange) {
      onFilterChange(filteredDestinations)
    }
  }, [selectedRegion, selectedCategory, onFilterChange])

  return (
    <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32">
      <ScrollAnimation animation="fade" delay={100}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Discover Madagascar's Destinations
        </h1>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade" delay={200}>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-center">
          From pristine rainforests to dramatic landscapes, explore the unique biodiversity and endemic species 
          that make Madagascar the world's eighth continent.
        </p>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade" delay={300}>
        <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center border-b border-[#e0e7e0] dark:border-white/10 pb-8">
          <div className="w-full md:w-auto min-w-[200px]">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Filter by Region
            </label>
            <select
              value={selectedRegion}
              onChange={handleRegionChange}
              className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-auto min-w-[200px]">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Filter by Type
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}