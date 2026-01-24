import Link from 'next/link'
import TourCard from '@/components/ui/TourCard'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { ToursService } from '@/services/tours.service'
import { Tour } from '@/types/tour.types'

export default function TopTours() {
  // Récupérer les 3 premiers tours les plus populaires
  const tours: Tour[] = ToursService.getAllTours().slice(0, 3)

  return (
    <section className="bg-background-light dark:bg-white/5 py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Featured Experiences
          </h3>
          <h2 className="text-3xl md:text-5xl font-black mb-4">Our Most Loved Adventures</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hand-picked experiences that capture the true essence of Madagascar's spirit and wild beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour: Tour) => (
            <TourCard
              key={tour.id}
              title={tour.title}
              days={tour.duration}
              region={tour.category}
              price={tour.price}
              description={tour.description}
              image={tour.image}
              label={tour.id === 1 ? "Best Seller" : undefined}
              slug={tour.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/tours">
            <Button variant="ghost" className="inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest border-b-2 border-primary pb-1">
              See All Tour Packages
              <Icon name="arrow_forward" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}