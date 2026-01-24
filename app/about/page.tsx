import type { Metadata } from 'next'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import CoreValues from '@/components/feature/about/CoreValues'
import TeamGuides from '@/components/feature/about/TeamGuides'
import FleetSection from '@/components/feature/about/FleetSection'
import AboutCTA from '@/components/feature/about/AboutCTA'

export const metadata: Metadata = {
  title: 'Who We Are & Our Fleet | ELMADAGASCAR Tours',
  description: 'Meet our expert local guides and discover our rugged fleet. Professional tourism with authentic experiences, safety first, and deep local expertise in Madagascar.',
}

export default function AboutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main>
        <CoreValues />
        <TeamGuides />
        <FleetSection />
        <AboutCTA />
      </main>
      <FooterApp />
    </div>
  )
}