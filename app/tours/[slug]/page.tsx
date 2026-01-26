'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import TourDetailHero from '@/components/feature/tour-detail/TourDetailHero'
import TourDetailBreadcrumb from '@/components/feature/tour-detail/TourDetailBreadcrumb'
import TourDetailOverview from '@/components/feature/tour-detail/TourDetailOverview'
import TourDetailContent from '@/components/feature/tour-detail/TourDetailContent'
import { getTourBySlug } from '@/data/tours'

export default function TourDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const tour = getTourBySlug(slug)

  if (!tour) {
    notFound()
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main className="w-full pb-20">
        <TourDetailBreadcrumb tourTitle={tour.title} />
        <TourDetailHero tour={tour} />
        <TourDetailOverview tour={tour} />
        <TourDetailContent tour={tour} />
      </main>
      <FooterApp />
    </div>
  )
}