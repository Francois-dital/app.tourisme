import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { use } from 'react'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import TourDetailHero from '@/components/feature/tour-detail/TourDetailHero'
import TourDetailBreadcrumb from '@/components/feature/tour-detail/TourDetailBreadcrumb'
import TourDetailOverview from '@/components/feature/tour-detail/TourDetailOverview'
import TourDetailContent from '@/components/feature/tour-detail/TourDetailContent'
import { getTourBySlug } from '@/data/tours'

interface TourDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  
  if (!tour) {
    return {
      title: 'Tour Not Found | ELMADAGASCAR Tours'
    }
  }

  return {
    title: `${tour.title} | ELMADAGASCAR Tours`,
    description: tour.description,
  }
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = use(params)
  const tour = getTourBySlug(slug)

  if (!tour) {
    notFound()
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main className="max-w-7xl mx-auto pb-20">
        <TourDetailBreadcrumb tourTitle={tour.title} />
        <TourDetailHero tour={tour} />
        <TourDetailOverview tour={tour} />
        <TourDetailContent tour={tour} />
      </main>
      <FooterApp />
    </div>
  )
}