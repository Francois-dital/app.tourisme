'use client'

import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import { Badge } from '@/components/ui/Badge'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { Destination, getTypeVariant } from '@/data/destinations'
import { translateDestinationData } from '@/utils/translation.utils'
import Link from 'next/link'
import Image from 'next/image'

interface DestinationsGridProps {
  destinations: Destination[]
}

export default function DestinationsGrid({ destinations }: DestinationsGridProps) {
  const { t } = useTranslation()
  const translatedDestinations = destinations.map(destination => translateDestinationData(destination, t))

  const getDifficultyTranslation = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return t('destinations.grid.difficulty.easy')
      case 'Moderate': return t('destinations.grid.difficulty.moderate')
      case 'Challenging': return t('destinations.grid.difficulty.challenging')
      default: return difficulty
    }
  }

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
        "url": `https://elmadagascar-tours.com/destinations/${dest.slug}`,
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
                      <Image
                        src={destination.image}
                        alt={`${destination.name} - ${destination.subtitle} - Madagascar`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" aria-hidden="true"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" aria-hidden="true"></div>

                      <div className="absolute top-4 left-4">
                        <div className="flex gap-1 mb-1">
                          {destination.types.slice(0, 2).map((type, idx) => (
                            <Badge 
                              key={idx}
                              variant={getTypeVariant(type)}
                              size="sm"
                              className="capitalize shadow-lg"
                            >
                              {type}
                            </Badge>
                          ))}
                        </div>
                        {destination.types.length > 2 && (
                          <div className="relative">
                            <Badge 
                              variant="default" 
                              size="sm" 
                              className="backdrop-blur-sm bg-white/95 dark:bg-black/95 cursor-help peer shadow-lg"
                            >
                              +{destination.types.length - 2}
                            </Badge>
                            
                            <div className="absolute left-0 top-full mt-2 p-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 peer-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 border border-gray-200/20 dark:border-gray-600/20">
                              <div className="flex flex-wrap gap-1 max-w-[150px]">
                                {destination.types.slice(2).map((type, idx) => (
                                  <Badge 
                                    key={idx}
                                    variant={getTypeVariant(type)}
                                    size="sm"
                                    className="capitalize text-xs"
                                  >
                                    {type}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-4 right-4">
                        <Badge 
                          variant={destination.difficulty === 'Easy' ? 'success' : destination.difficulty === 'Moderate' ? 'warning' : 'default'}
                          size="sm"
                          className="backdrop-blur-sm bg-white/95 dark:bg-black/95 shadow-lg"
                        >
                          {getDifficultyTranslation(destination.difficulty)}
                        </Badge>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-xl font-bold mb-1 drop-shadow-lg text-shadow">{destination.name}</h3>
                        <p className="text-sm text-gray-100 mb-3 drop-shadow-md">{destination.subtitle}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-200">
                          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                            <Icon name="schedule" size="sm" aria-hidden="true" />
                            <span>{destination.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
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