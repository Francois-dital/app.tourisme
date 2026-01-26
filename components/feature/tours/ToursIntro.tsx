'use client'

import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { Icon } from '@/components/ui/Icon'
import { toursData } from '@/data/tours'
import { useTranslation } from 'react-i18next'

export default function ToursIntro() {
  const { t } = useTranslation()
  const totalTours = toursData.length
  const regions = [...new Set(toursData.map(tour => tour.region))]
  const avgDuration = Math.round(
    toursData.reduce((sum, tour) => sum + parseInt(tour.duration.split(' ')[0]), 0) / totalTours
  )

  const stats = [
    {
      icon: 'explore',
      number: totalTours,
      label: t('toursIntro.stats.tours.label'),
      description: t('toursIntro.stats.tours.description')
    },
    {
      icon: 'location_on',
      number: regions.length,
      label: t('toursIntro.stats.regions.label'),
      description: t('toursIntro.stats.regions.description')
    },
    {
      icon: 'schedule',
      number: avgDuration,
      label: t('toursIntro.stats.duration.label'),
      description: t('toursIntro.stats.duration.description')
    },
    {
      icon: 'star',
      number: 100,
      label: t('toursIntro.stats.satisfaction.label'),
      description: t('toursIntro.stats.satisfaction.description')
    }
  ]

  return (
    <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32">
      <div className="w-full max-w-4xl mx-auto text-center mb-16">
        <ScrollAnimation animation="fade" delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('toursIntro.title')}
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade" delay={200}>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('toursIntro.description')}
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade" delay={300}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="info" size="sm" />
            {t('toursIntro.customizable')}
          </div>
        </ScrollAnimation>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <ScrollAnimation 
            key={stat.label}
            animation="scale" 
            delay={400 + (index * 100)}
          >
            <div className="text-center p-6 bg-white dark:bg-background-dark rounded-2xl border border-gray-100 dark:border-white/10 hover:border-primary/20 transition-all stat-card">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4 icon-bounce">
                <Icon name={stat.icon} size="md" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1 counter-animation">
                {stat.number}{stat.label === t('toursIntro.stats.satisfaction.label') ? '%' : ''}
              </div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.description}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation animation="fade" delay={800}>
        <div className="w-full grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center">
              <Icon name="verified" size="sm" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t('toursIntro.features.guides.title')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('toursIntro.features.guides.description')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
              <Icon name="settings" size="sm" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t('toursIntro.features.customizable.title')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('toursIntro.features.customizable.description')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center">
              <Icon name="support_agent" size="sm" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t('toursIntro.features.support.title')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('toursIntro.features.support.description')}
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}