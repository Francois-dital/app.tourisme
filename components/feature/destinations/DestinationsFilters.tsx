'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/Badge'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { destinationsData, Destination, availableTypes, getTypeVariant } from '@/data/destinations'
import { Icon } from '@/components/ui'

interface DestinationsFiltersProps {
  onFilterChange?: (filteredDestinations: Destination[], hasActiveFilters: boolean) => void
  baseDestinations?: Destination[]
}

export default function DestinationsFilters({ onFilterChange, baseDestinations }: DestinationsFiltersProps) {
  const { t } = useTranslation()
  const [selectedRegion, setSelectedRegion] = useState('All Regions')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const sourceDestinations = baseDestinations || destinationsData

  const regions = [
    { key: 'all', value: 'All Regions' },
    { key: 'northern', value: 'Northern Madagascar' },
    { key: 'east', value: 'East Coast' },
    { key: 'west', value: 'West Coast' },
    { key: 'southern', value: 'Southern Highlands' },
    { key: 'central', value: 'Central Highlands' },
  ]

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value)
  }

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const clearAllTypes = () => {
    setSelectedTypes([])
  }

  useEffect(() => {
    let filteredDestinations = sourceDestinations
    
    const hasFilters = selectedRegion !== 'All Regions' || selectedTypes.length > 0
    
    if (selectedRegion !== 'All Regions') {
      filteredDestinations = filteredDestinations.filter(destination => 
        destination.region === selectedRegion
      )
    }
    
    if (selectedTypes.length > 0) {
      filteredDestinations = filteredDestinations.filter(destination => 
        selectedTypes.every(type => destination.types.includes(type))
      )
    }
    
    if (onFilterChange) {
      onFilterChange(filteredDestinations, hasFilters)
    }
  }, [selectedRegion, selectedTypes, onFilterChange, sourceDestinations])

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
        <div className="w-full space-y-8 border-b border-[#e0e7e0] dark:border-white/10 pb-8">
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {t('destinations.filters.filterByRegion')}
            </label>
            <div className="relative">
              <select
                value={selectedRegion}
                onChange={handleRegionChange}
                className="w-full md:w-auto min-w-[250px] px-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/20 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm hover:shadow-md appearance-none cursor-pointer"
              >
                {regions.map((region) => (
                  <option key={region.key} value={region.value}>
                    {t(`destinations.filters.regions.${region.key}`)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t('destinations.filters.filterByType')}
              </label>
              {selectedTypes.length > 0 && (
                <button
                  onClick={clearAllTypes}
                  className="text-sm text-primary hover:text-primary/80 font-medium transition-colors px-3 py-1 rounded-lg hover:bg-primary/10"
                >
                  <Icon name="close" size="sm" className="ml-auto text-primary" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {availableTypes.map((type) => (
                <Badge
                  key={type}
                  variant={selectedTypes.includes(type) ? getTypeVariant(type) : 'default'}
                  size="md"
                  className={`cursor-pointer transition-all capitalize select-none ${
                    selectedTypes.includes(type) 
                      ? 'ring-2 ring-offset-2 ring-current shadow-md transform scale-105' 
                      : 'hover:scale-105 hover:shadow-sm'
                  }`}
                  onClick={() => handleTypeToggle(type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
