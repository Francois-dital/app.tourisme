'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { destinationsData, getDestinationsByRegion } from '@/data/destinations'

const regions = [
  { name: 'All Regions', active: true },
  { name: 'Northern Madagascar', active: false },
  { name: 'East Coast', active: false },
  { name: 'West Coast', active: false },
  { name: 'Southern Highlands', active: false },
  { name: 'Central Highlands', active: false },
]

const categories = [
  { name: 'All Categories', active: true },
  { name: 'Rainforest', active: false },
  { name: 'Coastal', active: false },
  { name: 'Adventure', active: false },
  { name: 'Cultural', active: false },
]

interface DestinationsFiltersProps {
  onFilterChange?: (filteredDestinations: any[]) => void
}

export default function DestinationsFilters({ onFilterChange }: DestinationsFiltersProps) {
  const [selectedRegion, setSelectedRegion] = useState('All Regions')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  // Apply filters whenever region or category changes
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
    <section className="py-24 px-6 md:px-20">
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
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between border-b border-[#e0e7e0] dark:border-white/10 pb-8">
          {/* Region Filters */}
          <div className="w-full lg:w-auto">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Filter by Region</h3>
            <div className="flex gap-2 flex-wrap">
              {regions.map((region) => (
                <Button
                  key={region.name}
                  variant={selectedRegion === region.name ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => handleRegionChange(region.name)}
                  className={`h-10 px-4 ${
                    selectedRegion === region.name 
                      ? 'bg-primary text-white' 
                      : 'bg-[#f0f4f0] dark:bg-white/10 hover:bg-[#e2e8e2] dark:hover:bg-white/20'
                  }`}
                >
                  {region.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="w-full lg:w-auto">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Filter by Type</h3>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => handleCategoryChange(category.name)}
                  className={`h-10 px-4 ${
                    selectedCategory === category.name 
                      ? 'bg-primary text-white' 
                      : 'bg-[#f0f4f0] dark:bg-white/10 hover:bg-[#e2e8e2] dark:hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}