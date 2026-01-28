'use client'

import { useParams } from 'next/navigation'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import { getDestinationBySlug } from '@/data/destinations'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { translateDestinationData } from '@/utils/translation.utils'

export default function DestinationDetailPage() {
  const { t } = useTranslation()
  const params = useParams()
  const slug = params.slug as string
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
        <HeaderApp />
        <main className="w-full py-12 sm:py-20 flex-grow px-6 md:px-20 lg:px-24 xl:px-32">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t('destinationDetail.notFound.title')}</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              {t('destinationDetail.notFound.description')}
            </p>
            <Link href="/destinations">
              <button className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-sm sm:text-base">
                {t('destinationDetail.notFound.backButton')}
              </button>
            </Link>
          </div>
        </main>
        <FooterApp />
      </div>
    )
  }

  // Translate destination data
  const translatedDestination = translateDestinationData(destination, t)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'Challenging': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <HeaderApp />
      
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${translatedDestination.image}')` }}
        ></div>
        <div className="relative z-20 w-full h-full flex flex-col justify-center px-6 md:px-20 lg:px-24 xl:px-32">
          <ScrollAnimation animation="fade" delay={100}>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
              <span className="bg-primary px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white">
                {translatedDestination.category}
              </span>
              <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${getDifficultyColor(translatedDestination.difficulty)}`}>
                {translatedDestination.difficulty}
              </span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade" delay={200}>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
              {translatedDestination.name}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade" delay={300}>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-2xl">
              {translatedDestination.subtitle}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade" delay={400}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-white">
              <div className="flex items-center gap-1 sm:gap-2">
                <Icon name="schedule" size="sm" />
                <span className="text-xs sm:text-sm md:text-base">{translatedDestination.duration}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Icon name="wb_sunny" size="sm" />
                <span className="text-xs sm:text-sm md:text-base">{translatedDestination.bestTime}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Icon name="location_on" size="sm" />
                <span className="text-xs sm:text-sm md:text-base">{translatedDestination.region}</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <main className="w-full py-8 sm:py-12 md:py-16 lg:py-20 flex-grow px-6 md:px-20 lg:px-24 xl:px-32">
        <div className="w-full">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade" delay={100}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">{t('destinationDetail.about')} {translatedDestination.name}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                  {translatedDestination.description}
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade" delay={200}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">{t('destinationDetail.highlights')}</h3>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {translatedDestination.highlights.map((highlight, index) => (
                    <ScrollAnimation key={index} animation="card" delay={250 + (index * 100)}>
                      <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white dark:bg-background-dark rounded-lg border border-gray-100 dark:border-white/10 hover:border-primary/20 transition-all">
                        <Icon name="check_circle" size="sm" className="text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">{highlight}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-1">
              <ScrollAnimation animation="scale" delay={300}>
                <div className="bg-white dark:bg-background-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 dark:border-white/10 lg:sticky lg:top-24">
                  <ScrollAnimation animation="fade" delay={350}>
                    <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{t('destinationDetail.planYourVisit')}</h3>
                  </ScrollAnimation>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <ScrollAnimation animation="slide-right" delay={400}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t('destinationDetail.duration')}</span>
                        <span className="font-semibold text-sm sm:text-base">{translatedDestination.duration}</span>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="slide-right" delay={450}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t('destinationDetail.bestTime')}</span>
                        <span className="font-semibold text-sm sm:text-base">{translatedDestination.bestTime}</span>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="slide-right" delay={500}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t('destinationDetail.difficulty')}</span>
                        <span className={`px-2 py-1 rounded text-xs sm:text-sm font-medium ${getDifficultyColor(translatedDestination.difficulty)}`}>
                          {translatedDestination.difficulty}
                        </span>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="slide-right" delay={550}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t('destinationDetail.region')}</span>
                        <span className="font-semibold text-sm sm:text-base">{translatedDestination.region}</span>
                      </div>
                    </ScrollAnimation>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <ScrollAnimation animation="scale" delay={600}>
                      <Link href={`/booking?destination=${encodeURIComponent(destination.name)}&region=${encodeURIComponent(destination.region)}&category=${encodeURIComponent(destination.category)}&duration=${encodeURIComponent(destination.duration)}&difficulty=${encodeURIComponent(destination.difficulty)}&bestTime=${encodeURIComponent(destination.bestTime)}`}>
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 sm:py-3 rounded-lg font-bold transition-all text-sm sm:text-base">
                          {t('destinationDetail.viewRelatedTours')}
                        </button>
                      </Link>
                    </ScrollAnimation>
                    {/* <ScrollAnimation animation="scale" delay={650}>
                      <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 sm:py-3 rounded-lg font-bold transition-all text-sm sm:text-base">
                        {t('destinationDetail.customItinerary')}
                      </button>
                    </ScrollAnimation> */}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation animation="fade" delay={400}>
            <div className="mt-8 sm:mt-12 md:mt-16 text-center">
              <Link href="/destinations">
                <button className="inline-flex items-center gap-1 sm:gap-2 text-primary hover:text-primary/80 font-semibold text-sm sm:text-base">
                  <Icon name="arrow_back" size="sm" />
                  {t('destinationDetail.backToDestinations')}
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </main>
      
      <FooterApp />
    </div>
  )
}