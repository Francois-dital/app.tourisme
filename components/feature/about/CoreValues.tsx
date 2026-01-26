'use client'

import { FeatureCard } from '@/components/ui/FeatureCard'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function CoreValues() {
  const { t } = useTranslation()

  const coreValues = [
    {
      icon: 'eco',
      title: t('about.coreValues.authenticity.title'),
      description: t('about.coreValues.authenticity.description')
    },
    {
      icon: 'verified_user',
      title: t('about.coreValues.safety.title'),
      description: t('about.coreValues.safety.description')
    },
    {
      icon: 'travel_explore',
      title: t('about.coreValues.expertise.title'),
      description: t('about.coreValues.expertise.description')
    }
  ]

  return (
    <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32">
      <ScrollAnimation animation="fade" delay={100}>
        <div className="flex flex-col gap-4 text-center md:text-left mb-16">
          <h2 className="text-[#111811] dark:text-white tracking-light text-3xl font-bold leading-tight md:text-4xl md:font-black">
            {t('about.coreValues.title')}
          </h2>
          <p className="text-[#618961] dark:text-white/70 text-lg font-normal leading-normal max-w-[720px]">
            {t('about.coreValues.subtitle')}
          </p>
        </div>
      </ScrollAnimation>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coreValues.map((value, index) => (
          <ScrollAnimation 
            key={index}
            animation="card" 
            delay={200 + (index * 100)}
          >
            <FeatureCard
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}