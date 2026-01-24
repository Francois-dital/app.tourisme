import TourCard from '@/components/ui/TourCard'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { TourData } from '@/data/tours'

interface ToursGridProps {
  tours: TourData[]
}

export default function ToursGrid({ tours }: ToursGridProps) {
  return (
    <section className="py-8 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour, index) => (
          <ScrollAnimation 
            key={tour.id}
            animation="card" 
            delay={100 + (index * 100)}
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
            />
          </ScrollAnimation>
        ))}
        
        {/* Custom Itinerary Card */}
        <ScrollAnimation animation="card" delay={100 + (tours.length * 100)}>
          <div className="group flex flex-col bg-white dark:bg-background-dark rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-primary transition-all">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-green-800/80 flex items-center justify-center p-6 text-center">
                <div>
                  <Icon name="map" size="xl" className="text-white text-5xl mb-2" />
                  <p className="text-white font-bold text-lg">More Circuits Coming Soon</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1 items-center justify-center text-center">
              <h4 className="text-xl font-bold mb-2">Custom Itinerary</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                Can't find what you're looking for? Let us design a tailor-made Madagascar experience just for you.
              </p>
              <Button variant="primary" className="w-full">
                Request a Quote
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      
      {tours.length === 0 && (
        <ScrollAnimation animation="fade" delay={200}>
          <div className="text-center py-12">
            <Icon name="search_off" size="xl" className="text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">No tours found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters to see more results.
            </p>
          </div>
        </ScrollAnimation>
      )}
    </section>
  )
}