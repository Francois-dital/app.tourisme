import { Badge } from '@/components/ui/Badge'
import { TourData } from '@/data/tours'
import Image from 'next/image'

interface TourDetailHeroProps {
  tour: TourData
}

export default function TourDetailHero({ tour }: TourDetailHeroProps) {
  return (
    <div className="px-6 md:px-20 lg:px-24 xl:px-32">
      <div className="relative overflow-hidden rounded-xl" itemScope itemType="https://schema.org/TouristAttraction">
        <meta itemProp="name" content={tour.title} />
        <meta itemProp="description" content={tour.description} />
        
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
        <div 
          className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-12 lg:px-12 relative z-10"
          style={{ backgroundImage: `url("${tour.image}")` }}
          aria-label={`${tour.title} - Paysage du circuit`}
        >
          <div className="flex flex-col gap-3 text-left max-w-2xl">
            {tour.label && (
              <Badge variant="primary" className="bg-primary/90 text-[#111811] w-fit">
                {tour.label}
              </Badge>
            )}
            <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
              {tour.title}: <span className="text-primary">{tour.subtitle}</span>
            </h1>
            <p className="text-white/90 text-base lg:text-lg font-normal leading-relaxed">
              {tour.description}
            </p>
            
            {/* Structured Data pour le tour */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "TouristTrip",
                  "name": tour.title,
                  "description": tour.description,
                  "url": `https://elmadagascar.com/tours/${tour.slug}`,
                  "duration": tour.duration,
                  "offers": {
                    "@type": "Offer",
                    "price": tour.price.group.replace('€', ''),
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock"
                  },
                  "itinerary": {
                    "@type": "ItemList",
                    "numberOfItems": tour.itinerary.length,
                    "itemListElement": tour.itinerary.map((item, index) => ({
                      "@type": "ListItem",
                      "position": index + 1,
                      "name": item.title
                    }))
                  }
                })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}