import Link from 'next/link'
import TourCard from '@/components/ui/TourCard'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { TourData } from '@/data/tours'
import { useTranslation } from 'react-i18next'
import { translateTourData } from '@/utils/translation.utils'

interface ToursGridProps {
  tours: TourData[]
}

export default function ToursGrid({ tours }: ToursGridProps) {
  const { t } = useTranslation()
  const translatedTours = tours.map(tour => translateTourData(tour, t))

  // Structured Data pour la liste de tours
  const toursStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": translatedTours.map((tour, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristTrip",
        "name": tour.title,
        "description": tour.description,
        "url": `https://elmadagascar.com/tours/${tour.slug}`,
        "duration": tour.duration,
        "offers": {
          "@type": "Offer",
          "price": tour.price.group.replace('€', ''),
          "priceCurrency": "EUR"
        }
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toursStructuredData)
        }}
      />
      
      <section className="py-8" aria-label="Liste des circuits disponibles">
        <div className="w-full text-center mb-12">
          <ScrollAnimation animation="fade" delay={100}>
            <h1 className="text-2xl font-bold mb-4">{t('tours.title')}</h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade" delay={200}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('tours.subtitle')}
            </p>
          </ScrollAnimation>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {translatedTours.map((tour, index) => (
            <ScrollAnimation 
              key={tour.id}
              animation="card" 
              delay={300 + (index * 150)}
            >
              <TourCard
                title={tour.title}
                days={tour.duration}
                region={tour.region}
                price={tour.price.group}
                description={tour.description}
                image={tour.image}
                label={tour.label}
                labelColor={tour.labelColor}
                slug={tour.slug}
                aria-label={`Circuit ${tour.title} - ${tour.duration} - ${tour.price.group}`}
              />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="scale" delay={300 + (tours.length * 150)}>
          <div className="w-full bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6">
                <Icon name="map" size="lg" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t('tours.customItinerary.title')}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                {t('tours.customItinerary.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Icon name="check_circle" size="sm" className="text-primary" />
                  {t('tours.customItinerary.features.personalized')}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Icon name="check_circle" size="sm" className="text-primary" />
                  {t('tours.customItinerary.features.flexible')}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Icon name="check_circle" size="sm" className="text-primary" />
                  {t('tours.customItinerary.features.interests')}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" aria-label="Demander un circuit personnalisé">
                  <Button variant="outline" size="lg" className="px-8">
                    <Icon name="phone" size="sm" className="mr-2" />
                    {t('tours.customItinerary.cta')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        {tours.length === 0 && (
          <ScrollAnimation animation="fade" delay={200}>
            <div className="w-full text-center py-12">
              <Icon name="search_off" size="xl" className="text-gray-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('tours.noToursFound.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('tours.noToursFound.description')}
              </p>
            </div>
          </ScrollAnimation>
        )}
      </section>
    </>
  )
}