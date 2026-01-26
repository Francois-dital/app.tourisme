'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function AboutCTA() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32 max-w-full bg-primary">
      <div className="w-full text-center flex flex-col gap-8 items-center">
        <ScrollAnimation animation="fade" delay={100}>
          <h2 className="text-[#111811] text-3xl md:text-5xl font-black leading-tight">
            {t('about.cta.title')}
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade" delay={200}>
          <p className="text-[#111811]/80 text-lg md:text-xl font-medium">
            {t('about.cta.subtitle')}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animation="scale" delay={300}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#111811] text-[#111811] px-10 py-4 rounded-full hover:bg-[#111811] hover:text-white"
              >
                {t('about.cta.button')}
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}