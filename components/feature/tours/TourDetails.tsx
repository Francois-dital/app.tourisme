'use client'

import { notFound } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import TourDetailHero from '@/components/feature/tour-detail/TourDetailHero'
import TourDetailBreadcrumb from '@/components/feature/tour-detail/TourDetailBreadcrumb'
import TourDetailOverview from '@/components/feature/tour-detail/TourDetailOverview'
import TourDetailContent from '@/components/feature/tour-detail/TourDetailContent'
import { translateTourData } from '@/utils/translation.utils'
import { usePageTitle } from '@/hooks/usePageTitle'
import { type TourData } from '@/data/tours'

interface TourDetailsProps {
  tour: TourData | null
}

export default function TourDetails({ tour }: TourDetailsProps) {
  const { t } = useTranslation()

  usePageTitle('tourDetail', tour?.title)

  if (!tour) {
    notFound()
  }

  const translatedTour = translateTourData(tour, t)

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
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