'use client'

import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import { Icon } from '@/components/ui/Icon'
import { Badge } from '@/components/ui/Badge'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { translateDestinationData } from '@/utils/translation.utils'
import { usePageTitle } from '@/hooks/usePageTitle'
import { getTypeVariant } from '@/data/destinations'

export default function DestinationDetailPage({ destination }: any) {
  const { t } = useTranslation()

  usePageTitle('destinationDetail', destination?.name)

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

  const getDifficultyTranslation = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return t('destinations.grid.difficulty.easy')
      case 'Moderate': return t('destinations.grid.difficulty.moderate')
      case 'Challenging': return t('destinations.grid.difficulty.challenging')
      default: return difficulty
    }
  }

  // Structured Data pour la destination
  const destinationStructuredData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": translatedDestination.name,
    "description": translatedDestination.description,
    "url": `https://elmadagascar-tours.com/destinations/${translatedDestination.slug}`,
    "image": translatedDestination.image,
    "address": {
      "@type": "Place",
      "name": translatedDestination.region,
      "addressCountry": "MG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "MG"
    },
    "touristType": translatedDestination.types,
    "availableLanguage": ["French", "English"]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(destinationStructuredData)
        }}
      />
      
      <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
        <HeaderApp />
        
        {/* Hero Section - Full height minus header */}
        <section className="relative h-[calc(100vh-120px)] overflow-hidden">
          <Image
            src={translatedDestination.image}
            alt={`${translatedDestination.name} - ${translatedDestination.subtitle} - Madagascar`}
            fill
            sizes="100vw"
            quality={90}
            priority
            className="object-cover"
          />
          
          {/* Improved gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent"></div>
          
          <div className="relative z-20 w-full h-full flex flex-col justify-end px-6 md:px-20 lg:px-24 xl:px-32 pb-12">
            <ScrollAnimation animation="fade" delay={100}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                {/* Afficher tous les types au lieu de limiter à 3 */}
                {translatedDestination.types.map((type, idx) => (
                  <Badge 
                    key={idx}
                    variant={getTypeVariant(type)}
                    size="sm"
                    className="capitalize shadow-lg"
                  >
                    {type}
                  </Badge>
                ))}
                <Badge 
                  variant={translatedDestination.difficulty === 'Easy' ? 'success' : translatedDestination.difficulty === 'Moderate' ? 'warning' : 'default'}
                  size="sm"
                  className="backdrop-blur-sm bg-white/95 dark:bg-black/95 shadow-lg"
                >
                  {getDifficultyTranslation(translatedDestination.difficulty)}
                </Badge>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade" delay={200}>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg text-shadow">
                {translatedDestination.name}
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade" delay={300}>
              <p className="text-gray-100 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-3xl drop-shadow-md">
                {translatedDestination.subtitle}
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade" delay={400}>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <Icon name="schedule" size="sm" />
                  <span className="text-sm sm:text-base">{translatedDestination.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <Icon name="wb_sunny" size="sm" />
                  <span className="text-sm sm:text-base">{translatedDestination.bestTime}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <Icon name="location_on" size="sm" />
                  <span className="text-sm sm:text-base">{translatedDestination.region}</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <main className="w-full py-8 sm:py-12 md:py-16 lg:py-20 flex-grow px-6 md:px-20 lg:px-24 xl:px-32">
          <div className="w-full">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12 lg:items-start">
              {/* Main Content - Combined About and Highlights */}
              <div className="lg:col-span-2">
                <ScrollAnimation animation="fade" delay={100}>
                  <div className="bg-white dark:bg-background-dark rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/10 h-full flex flex-col">
                    {/* About Section */}
                    <div className="mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                        <Icon name="info" className="text-primary" />
                        {t('destinationDetail.about')} {translatedDestination.name}
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {translatedDestination.description}
                      </p>
                    </div>

                    {/* Highlights Section */}
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                        <Icon name="star" className="text-primary" />
                        {t('destinationDetail.highlights')}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {translatedDestination.highlights.map((highlight, index) => (
                          <ScrollAnimation key={index} animation="card" delay={250 + (index * 100)}>
                            <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:border-primary/20 transition-all h-full">
                              <Icon name="check_circle" size="sm" className="text-primary flex-shrink-0 mt-1" />
                              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{highlight}</span>
                            </div>
                          </ScrollAnimation>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <ScrollAnimation animation="scale" delay={300}>
                  <div className="bg-white dark:bg-background-dark rounded-2xl p-6 border border-gray-100 dark:border-white/10 lg:sticky lg:top-24 h-full flex flex-col">
                    <ScrollAnimation animation="fade" delay={350}>
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <Icon name="event_note" className="text-primary" />
                        {t('destinationDetail.planYourVisit')}
                      </h3>
                    </ScrollAnimation>
                    
                    <div className="space-y-4 mb-6">
                      <ScrollAnimation animation="slide-right" delay={400}>
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Icon name="schedule" size="sm" className="text-primary" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('destinationDetail.duration')}</span>
                          </div>
                          <span className="font-semibold text-sm">{translatedDestination.duration}</span>
                        </div>
                      </ScrollAnimation>
                      
                      <ScrollAnimation animation="slide-right" delay={450}>
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Icon name="wb_sunny" size="sm" className="text-primary" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('destinationDetail.bestTime')}</span>
                          </div>
                          <span className="font-semibold text-sm">{translatedDestination.bestTime}</span>
                        </div>
                      </ScrollAnimation>
                      
                      <ScrollAnimation animation="slide-right" delay={500}>
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Icon name="trending_up" size="sm" className="text-primary" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('destinationDetail.difficulty')}</span>
                          </div>
                          <Badge 
                            variant={translatedDestination.difficulty === 'Easy' ? 'success' : translatedDestination.difficulty === 'Moderate' ? 'warning' : 'default'}
                            size="sm"
                          >
                            {getDifficultyTranslation(translatedDestination.difficulty)}
                          </Badge>
                        </div>
                      </ScrollAnimation>
                      
                      <ScrollAnimation animation="slide-right" delay={550}>
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Icon name="location_on" size="sm" className="text-primary" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('destinationDetail.region')}</span>
                          </div>
                          <span className="font-semibold text-sm">{translatedDestination.region}</span>
                        </div>
                      </ScrollAnimation>

                      <ScrollAnimation animation="slide-right" delay={600}>
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Icon name="category" size="sm" className="text-primary" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Catégorie</span>
                          </div>
                          <span className="font-semibold text-sm">{translatedDestination.category}</span>
                        </div>
                      </ScrollAnimation>
                    </div>

                    <div className="flex-grow flex flex-col justify-end">
                      <div className="space-y-3">
                        <ScrollAnimation animation="scale" delay={650}>
                          <Link href={`/booking?destination=${encodeURIComponent(destination.name)}&region=${encodeURIComponent(destination.region)}&category=${encodeURIComponent(destination.category)}&duration=${encodeURIComponent(destination.duration)}&difficulty=${encodeURIComponent(destination.difficulty)}&bestTime=${encodeURIComponent(destination.bestTime)}`}>
                            <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold transition-all text-sm sm:text-base flex items-center justify-center gap-2">
                              <Icon name="favorite" size="sm" />
                              {t('destinationDetail.interested')}
                            </button>
                          </Link>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animation="scale" delay={700}>
                          <Link href="/tours">
                            <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-bold transition-all text-sm sm:text-base flex items-center justify-center gap-2">
                              <Icon name="explore" size="sm" />
                              {t('destinationDetail.viewAllTours')}
                            </button>
                          </Link>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* Back to destinations */}
            <ScrollAnimation animation="fade" delay={400}>
              <div className="mt-12 text-center">
                <Link href="/destinations">
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm sm:text-base hover:scale-105 transition-all">
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
    </>
  )
}