import HeaderApp from '@/components/layout/HeaderApp'
import HeroSection from '@/components/feature/home/HeroSection'
import AboutsUs from '@/components/feature/home/AboutsUs'
import TopTours from '@/components/feature/home/TopTours'
import FooterApp from '@/components/layout/FooterApp'

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main>
        <HeroSection />
        <AboutsUs />
        <TopTours />
      </main>
      <FooterApp />
    </div>
  )
}