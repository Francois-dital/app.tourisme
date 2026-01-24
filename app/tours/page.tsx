'use client'

import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import ToursIntro from '@/components/feature/tours/ToursIntro'
import ToursGrid from '@/components/feature/tours/ToursGrid'
import { toursData } from '@/data/tours'

export default function ToursPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main className="w-full pb-20">
        <ToursIntro />
        <ToursGrid tours={toursData} />
      </main>
      <FooterApp />
    </div>
  )
}