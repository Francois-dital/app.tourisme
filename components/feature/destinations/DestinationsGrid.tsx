import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { Destination } from '@/data/destinations'
import Link from 'next/link'

interface DestinationsGridProps {
  destinations: Destination[]
}

export default function DestinationsGrid({ destinations }: DestinationsGridProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'Challenging': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Rainforest': return 'nature_people'
      case 'Coastal': return 'beach_access'
      case 'Adventure': return 'forest'
      case 'Cultural': return 'apartment'
      default: return 'place'
    }
  }

  return (
    <section className="py-8 px-6 md:px-20 lg:px-24 xl:px-32">
      {destinations.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <ScrollAnimation 
              key={destination.id}
              animation="card" 
              delay={100 + (index * 100)}
            >
              <Link href={`/destinations/${destination.slug}`}>
                <div className="group cursor-pointer h-full">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 shadow-md">
                    <div className="absolute inset-0 bg-black/60 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${destination.image}')` }}
                    ></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase text-white">
                        {destination.category}
                      </span>
                    </div>
                    
                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(destination.difficulty)}`}>
                        {destination.difficulty}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-sm text-gray-300 mb-3">{destination.subtitle}</p>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <Icon name="schedule" size="sm" />
                          <span>{destination.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="wb_sunny" size="sm" />
                          <span>{destination.bestTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="px-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {destination.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Highlights:</h4>
                      <ul className="space-y-1">
                        {destination.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <Icon name="check_circle" size="sm" className="text-primary flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                        {destination.highlights.length > 2 && (
                          <li className="text-xs text-primary font-medium">
                            +{destination.highlights.length - 2} more highlights
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      ) : (
        <ScrollAnimation animation="fade" delay={200}>
          <div className="w-full text-center py-12">
            <Icon name="search_off" size="xl" className="text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">No destinations found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters to see more results.
            </p>
          </div>
        </ScrollAnimation>
      )}
      
      {/* Call to Action */}
      {destinations.length > 0 && (
        <ScrollAnimation animation="scale" delay={300 + (destinations.length * 100)}>
          <div className="w-full mt-16 text-center">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6">
                  <Icon name="explore" size="lg" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Explore Madagascar?
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                  Let our local experts create the perfect itinerary combining multiple destinations 
                  for your ultimate Madagascar adventure.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/tours">
                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
                      <Icon name="map" size="sm" />
                      View All Tours
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      )}
    </section>
  )
}