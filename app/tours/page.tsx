'use client'

import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import ToursIntro from '@/components/feature/tours/ToursIntro'
import ToursGrid from '@/components/feature/tours/ToursGrid'
import { toursData } from '@/data/tours'

export default function ToursPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <HeaderApp />
      <main className="w-full pb-12 sm:pb-20 flex-grow container-padding">
        <div className="max-w-7xl mx-auto">
          <ToursIntro />
          <ToursGrid tours={toursData} />
        </div>
      </main>
      <FooterApp />
    </div>
  )
}