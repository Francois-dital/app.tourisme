'use client'

import DestinationCard from '@/components/ui/DestinationCard'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import Link from 'next/link'
import { destinationsData } from '@/data/destinations'

// Sélectionner les 3 destinations les plus populaires (premières de la liste)
const featuredDestinations = destinationsData.slice(0, 3)

export default function TopDestinations() {
  return (
    <section className="bg-background-light dark:bg-white/5 py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Our Most Loved Adventures</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hand-picked experiences that capture the true essence of Madagascar&apos;s spirit and wild beauty.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredDestinations.map((destination, index) => (
            <ScrollAnimation 
              key={destination.id}
              animation="scale" 
              delay={300 + (index * 100)}
            >
              <DestinationCard
                title={destination.name}
                duration={destination.duration}
                region={destination.region}
                description={destination.description}
                image={destination.image}
                slug={destination.slug}
                label={index === 0 ? 'Best Seller' : undefined}
              />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade" delay={600}>
          <div className="mt-16 text-center">
            <Link href="/destinations">
              <Button variant="ghost" className="inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest border-b-2 border-primary pb-1">
                See All Destinations
                <Icon name="arrow_forward" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
