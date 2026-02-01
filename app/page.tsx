import type { Metadata } from 'next'
import { generatePageMetadata } from '@/utils/server-translations'
import HeaderApp from '@/components/layout/HeaderApp'
import HeroSection from '@/components/feature/home/HeroSection'
import AboutsUs from '@/components/feature/home/AboutsUs'
import TopDestinations from '@/components/feature/home/TopDestinations'
import FooterApp from '@/components/layout/FooterApp'

export function generateMetadata(): Metadata {
  return generatePageMetadata('home')
}

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <HeaderApp />
      <main id="main-content" className="w-full flex-grow">
        <HeroSection />
        <AboutsUs />
        <ServicesUs />
        <TopDestinations />
      </main>
      <FooterApp />
    </div>
  )
}