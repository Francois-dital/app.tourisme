'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { destinationsData, Destination } from '@/data/destinations'

interface DestinationsFiltersProps {
  onFilterChange?: (filteredDestinations: Destination[]) => void
  baseDestinations?: Destination[]
}

export default function DestinationsFilters({ onFilterChange, baseDestinations }: DestinationsFiltersProps) {
  const { t } = useTranslation()
  const [selectedRegion, setSelectedRegion] = useState('All Regions')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')

  // Utiliser les destinations de base fournies ou les données par défaut
  const sourceDestinations = baseDestinations || destinationsData

  // Définir les régions et catégories avec leurs clés de traduction
  const regions = [
    { key: 'all', value: 'All Regions' },
    { key: 'northern', value: 'Northern Madagascar' },
    { key: 'east', value: 'East Coast' },
    { key: 'west', value: 'West Coast' },
    { key: 'southern', value: 'Southern Highlands' },
    { key: 'central', value: 'Central Highlands' },
  ]

  const categories = [
    { key: 'all', value: 'All Categories' },
    { key: 'rainforest', value: 'Rainforest' },
    { key: 'coastal', value: 'Coastal' },
    { key: 'adventure', value: 'Adventure' },
    { key: 'cultural', value: 'Cultural' },
    { key: 'nature', value: 'Nature' },
    { key: 'natureWildlife', value: 'Nature & Wildlife' },
    { key: 'natureCultural', value: 'Nature & Cultural' },
    { key: 'natureCoastal', value: 'Nature & Coastal' },
  ]

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  useEffect(() => {
    let filteredDestinations = sourceDestinations
    
    // Filtrer par région
    if (selectedRegion !== 'All Regions') {
      filteredDestinations = filteredDestinations.filter(destination => 
        destination.region === selectedRegion
      )
    }
    
    // Filtrer par catégorie
    if (selectedCategory !== 'All Categories') {
      filteredDestinations = filteredDestinations.filter(destination => 
        destination.category === selectedCategory
      )
    }
    
    if (onFilterChange) {
      onFilterChange(filteredDestinations)
    }
  }, [selectedRegion, selectedCategory, onFilterChange, sourceDestinations])

  return (
    <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32">
      <ScrollAnimation animation="fade" delay={100}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          {t('destinations.filters.title')}
        </h1>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade" delay={200}>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-center">
          {t('destinations.filters.subtitle')}
        </p>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade" delay={300}>
        <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center border-b border-[#e0e7e0] dark:border-white/10 pb-8">
          <div className="w-full md:w-auto min-w-[200px]">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {t('destinations.filters.filterByRegion')}
            </label>
            <select
              value={selectedRegion}
              onChange={handleRegionChange}
              className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              {regions.map((region) => (
                <option key={region.key} value={region.value}>
                  {t(`destinations.filters.regions.${region.key}`)}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-auto min-w-[200px]">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {t('destinations.filters.filterByType')}
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              {categories.map((category) => (
                <option key={category.key} value={category.value}>
                  {t(`destinations.filters.categories.${category.key}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
