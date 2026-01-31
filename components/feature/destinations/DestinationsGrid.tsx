'use client'

import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { Destination } from '@/data/destinations'
import { translateDestinationData } from '@/utils/translation.utils'
import Link from 'next/link'
import Image from 'next/image'

interface DestinationsGridProps {
  destinations: Destination[]
}

export default function DestinationsGrid({ destinations }: DestinationsGridProps) {
  const { t } = useTranslation()
  const translatedDestinations = destinations.map(destination => translateDestinationData(destination, t))

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'Challenging': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getDifficultyTranslation = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return t('destinations.grid.difficulty.easy')
      case 'Moderate': return t('destinations.grid.difficulty.moderate')
      case 'Challenging': return t('destinations.grid.difficulty.challenging')
      default: return difficulty
    }
  }

  // Structured Data pour les destinations
  const destinationsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Destinations touristiques Madagascar",
    "description": "Sites incontournables à visiter à Madagascar",
    "itemListElement": translatedDestinations.map((dest, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristAttraction",
        "name": dest.name,
        "description": dest.description,
        "url": `https://madagascar-4x4-tours.com/destinations/${dest.slug}`,
        "address": {
          "@type": "Place",
          "name": dest.region
        }
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(destinationsStructuredData)
        }}
      />
      
      <section className="py-8 px-6 md:px-20 lg:px-24 xl:px-32" aria-label="Destinations touristiques de Madagascar">
        {translatedDestinations.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translatedDestinations.map((destination, index) => (
              <ScrollAnimation 
                key={destination.id}
                animation="card" 
                delay={100 + (index * 100)}
              >
                <article className="group cursor-pointer h-full">
                  <Link href={`/destinations/${destination.slug}`} className="block h-full">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 shadow-md">
                      <div className="absolute inset-0 bg-black/60 opacity-60 group-hover:opacity-80 transition-opacity" aria-hidden="true"></div>
                      
                      <Image
                        src={destination.image}
                        alt={`${destination.name} - ${destination.subtitle} - Madagascar`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute top-4 left-4">
                        <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase text-white">
                          {destination.category}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(destination.difficulty)}`}>
                          {getDifficultyTranslation(destination.difficulty)}
                        </span>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                        <p className="text-sm text-gray-300 mb-3">{destination.subtitle}</p>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1">
                            <Icon name="schedule" size="sm" aria-hidden="true" />
                            <span>{destination.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="wb_sunny" size="sm" aria-hidden="true" />
                            <span>{destination.bestTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-2">
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {destination.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                          {t('destinations.grid.highlights')}
                        </h4>
                        <ul className="space-y-1">
                          {destination.highlights.slice(0, 2).map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <Icon name="check_circle" size="sm" className="text-primary flex-shrink-0" aria-hidden="true" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                          {destination.highlights.length > 2 && (
                            <li className="text-xs text-primary font-medium">
                              +{destination.highlights.length - 2} {t('destinations.grid.moreHighlights')}
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </Link>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        ) : (
          <ScrollAnimation animation="fade" delay={200}>
            <div className="w-full text-center py-12">
              <Icon name="search_off" size="xl" className="text-gray-400 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2">{t('destinations.grid.noResults.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('destinations.grid.noResults.description')}
              </p>
            </div>
          </ScrollAnimation>
        )}

        {translatedDestinations.length > 0 && (
          <ScrollAnimation animation="scale" delay={300 + (translatedDestinations.length * 100)}>
            <div className="w-full mt-16 text-center">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-12 border border-primary/10">
                <div className="max-w-2xl mx-auto">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6">
                    <Icon name="explore" size="lg" aria-hidden="true" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {t('destinations.grid.cta.title')}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                    {t('destinations.grid.cta.description')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/tours" aria-label="Voir tous nos circuits 4x4">
                      <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
                        <Icon name="map" size="sm" aria-hidden="true" />
                        {t('destinations.grid.cta.viewTours')}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        )}
      </section>
    </>
  )
}