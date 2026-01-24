'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

const regions = [
  { name: 'All Regions', active: true },
  { name: 'East Coast', active: false },
  { name: 'Southern Highlands', active: false },
  { name: 'West & Tsingy', active: false },
]

export default function ToursFilters() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions')
  const [duration, setDuration] = useState(11)

  return (
    <section className="py-8 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
        Tours & Circuits Catalog
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between border-b border-[#e0e7e0] dark:border-white/10 pb-6">
        {/* Region Filters */}
        <div className="flex gap-2 flex-wrap">
          {regions.map((region) => (
            <Button
              key={region.name}
              variant={selectedRegion === region.name ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedRegion(region.name)}
              className={`h-10 px-4 ${
                selectedRegion === region.name 
                  ? 'bg-primary text-[#111811]' 
                  : 'bg-[#f0f4f0] dark:bg-white/10 hover:bg-[#e2e8e2] dark:hover:bg-white/20'
              }`}
            >
              {region.name}
              {region.name !== 'All Regions' && (
                <Icon name="expand_more" className="ml-2" size="sm" />
              )}
            </Button>
          ))}
        </div>

        {/* Duration Slider */}
        <div className="w-full lg:max-w-xs flex items-center gap-4 bg-white dark:bg-background-dark p-3 rounded-xl border border-[#e0e7e0] dark:border-white/10">
          <span className="text-sm font-semibold whitespace-nowrap">Duration</span>
          <div className="flex-1 h-1 bg-[#dbe6db] dark:bg-white/10 rounded-full relative">
            <div 
              className="absolute inset-y-0 left-0 bg-primary rounded-full"
              style={{ width: `${(duration / 20) * 100}%` }}
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 size-4 rounded-full bg-primary ring-4 ring-primary/20 cursor-pointer"
              style={{ left: `${(duration / 20) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold bg-primary/20 text-primary px-2 py-1 rounded">
            {duration} Days
          </span>
        </div>
      </div>
    </section>
  )
}