'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { TourData } from '@/data/tours'

interface TourDetailOverviewProps {
  tour: TourData
}

export default function TourDetailOverview({ tour }: TourDetailOverviewProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap justify-between items-end gap-6 px-6 md:px-20 lg:px-24 xl:px-32 py-10">
      <div className="flex flex-col gap-3">
        <ScrollAnimation animation="fade" delay={100}>
          <h2 className="text-[#111811] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
            {t('tourDetail.overview')}
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade" delay={200}>
          <div className="flex flex-wrap gap-4">
            <ScrollAnimation animation="slide-right" delay={250}>
              <span className="flex items-center gap-1.5 text-[#618961] dark:text-[#a0c0a0] text-sm font-semibold">
                <Icon name="schedule" />
                {tour.duration} / {parseInt(tour.duration.split(' ')[0]) - 1} {t('tourDetail.nights')}
              </span>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={300}>
              <span className="flex items-center gap-1.5 text-[#618961] dark:text-[#a0c0a0] text-sm font-semibold">
                <Icon name="nature_people" />
                {tour.category}
              </span>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={350}>
              <span className="flex items-center gap-1.5 text-[#618961] dark:text-[#a0c0a0] text-sm font-semibold">
                <Icon name="edit_note" />
                {t('tourDetail.customizable')}
              </span>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
      
      <ScrollAnimation animation="scale" delay={400}>
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 h-12 px-6 bg-[#f0f4f0] dark:bg-white/10 hover:bg-primary hover:text-[#111811] hover:scale-105 transition-all"
        >
          <Icon name="download" />
          <span>{t('tourDetail.downloadPdf')}</span>
        </Button>
      </ScrollAnimation>
    </div>
  )
}