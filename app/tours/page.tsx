import type { Metadata } from 'next'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import ToursHeader from '@/components/feature/tours/ToursHeader'
import ToursFilters from '@/components/feature/tours/ToursFilters'
import ToursGrid from '@/components/feature/tours/ToursGrid'
import ToursPagination from '@/components/feature/tours/ToursPagination'

export const metadata: Metadata = {
  title: 'Tours & Circuits Overview | ELMADAGASCAR Tours',
  description: 'Discover Madagascar through our curated tours and expertly led circuits. From rainforests to beaches, explore the island\'s unique biodiversity.',
}

export default function ToursPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main className="max-w-7xl mx-auto pb-20">
        <ToursHeader />
        <ToursFilters />
        <ToursGrid />
        <ToursPagination />
      </main>
      <FooterApp />
    </div>
  )
}