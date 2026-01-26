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
      <main className="w-full pb-12 sm:pb-20 flex-grow px-6 md:px-20 lg:px-24 xl:px-32">
        <div className="w-full">
          <ToursIntro />
          <ToursGrid tours={toursData} />
        </div>
      </main>
      <FooterApp />
    </div>
  )
}