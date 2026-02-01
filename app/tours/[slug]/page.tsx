import { notFound } from 'next/navigation'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import TourDetailHero from '@/components/feature/tour-detail/TourDetailHero'
import TourDetailBreadcrumb from '@/components/feature/tour-detail/TourDetailBreadcrumb'
import TourDetailOverview from '@/components/feature/tour-detail/TourDetailOverview'
import TourDetailContent from '@/components/feature/tour-detail/TourDetailContent'
import { getAllTours, getTourBySlug } from '@/data/tours'
import { translateTourData } from '@/utils/translation.utils'
import { generatePageMetadata } from '@/utils/server-translations'
import { t } from 'i18next'

export function generateStaticParams() {
  const tours = getAllTours()

  return tours.map(tour => ({
    slug: tour.slug,
  }))
}

export function generateMetadata() {
  return generatePageMetadata('tourDetail')
}

export default function TourDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const tour = getTourBySlug(params.slug)

  if (!tour) {
    notFound()
  }

  const translatedTour = translateTourData(tour, t)

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <HeaderApp />
      <main className="w-full pb-20">
        <TourDetailBreadcrumb tourTitle={translatedTour.title} />
        <TourDetailHero tour={translatedTour} />
        <TourDetailOverview tour={translatedTour} />
        <TourDetailContent tour={translatedTour} />
      </main>
      <FooterApp />
    </div>
  )
}
