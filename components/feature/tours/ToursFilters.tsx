'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { toursData, getToursByRegion, getToursByDuration } from '@/data/tours'

const regions = [
  { name: 'All Regions', active: true },
  { name: 'North', active: false },
  { name: 'South', active: false },
  { name: 'East', active: false },
  { name: 'West', active: false },
]

interface ToursFiltersProps {
  onFilterChange?: (filteredTours: any[]) => void
}

export default function ToursFilters({ onFilterChange }: ToursFiltersProps) {
  const [selectedRegion, setSelectedRegion] = useState('All Regions')
  const [duration, setDuration] = useState(11)

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(e.target.value))
  }

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region)
  }

  // Apply filters whenever region or duration changes
  useEffect(() => {
    let filteredTours = getToursByRegion(selectedRegion)
    filteredTours = filteredTours.filter(tour => {
      const tourDuration = parseInt(tour.duration.split(' ')[0])
      return tourDuration <= duration
    })
    
    if (onFilterChange) {
      onFilterChange(filteredTours)
    }
  }, [selectedRegion, duration, onFilterChange])

  return (
    <section className="py-24 px-6 md:px-20">
      <ScrollAnimation animation="fade" delay={100}>
        <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
          Tours & Circuits Catalog
        </h2>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade" delay={200}>
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between border-b border-[#e0e7e0] dark:border-white/10 pb-6">
          {/* Region Filters */}
          <div className="flex gap-2 flex-wrap">
            {regions.map((region) => (
              <Button
                key={region.name}
                variant={selectedRegion === region.name ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => handleRegionChange(region.name)}
                className={`h-10 px-4 ${
                  selectedRegion === region.name 
                    ? 'bg-primary text-[#111811]' 
                    : 'bg-[#f0f4f0] dark:bg-white/10 hover:bg-[#e2e8e2] dark:hover:bg-white/20'
                }`}
              >
                {region.name}
              </Button>
            ))}
          </div>

          {/* Duration Slider */}
          <div className="w-full lg:max-w-xs flex items-center gap-4 bg-white dark:bg-background-dark p-3 rounded-xl border border-[#e0e7e0] dark:border-white/10">
            <span className="text-sm font-semibold whitespace-nowrap">Duration</span>
            <div className="flex-1 relative">
              <input
                type="range"
                min="1"
                max="20"
                value={duration}
                onChange={handleDurationChange}
                className="w-full h-1 bg-[#dbe6db] dark:bg-white/10 rounded-full appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #0df259 0%, #0df259 ${(duration / 20) * 100}%, #dbe6db ${(duration / 20) * 100}%, #dbe6db 100%)`
                }}
              />
            </div>
            <span className="text-xs font-bold bg-primary/20 text-primary px-2 py-1 rounded">
              {duration} Days
            </span>
          </div>
        </div>
      </ScrollAnimation>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #0df259;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(13, 242, 89, 0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #0df259;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 4px rgba(13, 242, 89, 0.2);
        }
      `}</style>
    </section>
  )
}