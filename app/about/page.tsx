"use client"

import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import CoreValues from '@/components/feature/about/CoreValues'
import TeamGuides from '@/components/feature/about/TeamGuides'
import FleetSection from '@/components/feature/about/FleetSection'
import AboutCTA from '@/components/feature/about/AboutCTA'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function AboutPage() {
  usePageTitle('about')

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col" suppressHydrationWarning={true}>
      <HeaderApp />
      <main className="w-full flex-grow">
        <div className="w-full">
          <CoreValues />
          <TeamGuides />
          <FleetSection />
          <AboutCTA />
        </div>
      </main>
      <FooterApp />
    </div>
  )
}