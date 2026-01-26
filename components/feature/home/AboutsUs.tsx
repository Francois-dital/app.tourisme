'use client'

import { FeatureCard } from '@/components/ui/FeatureCard'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function AboutsUs() {
  const { t } = useTranslation()

  const features = [
    {
      icon: 'person_pin_circle',
      title: t('aboutUs.features.guides.title'),
      description: t('aboutUs.features.guides.description')
    },
    {
      icon: 'edit_calendar',
      title: t('aboutUs.features.tailored.title'),
      description: t('aboutUs.features.tailored.description')
    },
    {
      icon: 'eco',
      title: t('aboutUs.features.sustainable.title'),
      description: t('aboutUs.features.sustainable.description')
    }
  ]

  return (
    <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32">
      <ScrollAnimation animation="fade" delay={100}>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              {t('aboutUs.subtitle')}
            </h3>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              {t('aboutUs.title')}
            </h2>
            <div className="h-1.5 w-24 bg-primary mt-6 rounded-full" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-md text-lg italic">
            "{t('aboutUs.quote')}"
          </p>
        </div>
      </ScrollAnimation>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <ScrollAnimation 
            key={index}
            animation="card" 
            delay={200 + (index * 100)}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}