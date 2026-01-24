'use client'

import { useParams } from 'next/navigation'
import HeaderApp from '@/components/layout/HeaderApp'
import FooterApp from '@/components/layout/FooterApp'
import { getDestinationBySlug } from '@/data/destinations'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import Link from 'next/link'

export default function DestinationDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
        <HeaderApp />
        <main className="w-full py-20 px-6 md:px-20 lg:px-24 xl:px-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The destination you're looking for doesn't exist.
          </p>
          <Link href="/destinations">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold">
              Back to Destinations
            </button>
          </Link>
        </main>
        <FooterApp />
      </div>
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'Challenging': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${destination.image}')` }}
        ></div>
        <div className="relative z-20 w-full px-6 md:px-20 lg:px-24 xl:px-32 h-full flex flex-col justify-center">
          <ScrollAnimation animation="fade" delay={100}>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary px-4 py-2 rounded-full text-sm font-bold text-white">
                {destination.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(destination.difficulty)}`}>
                {destination.difficulty}
              </span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade" delay={200}>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              {destination.name}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade" delay={300}>
            <p className="text-gray-200 text-xl mb-6 max-w-2xl">
              {destination.subtitle}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade" delay={400}>
            <div className="flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Icon name="schedule" size="sm" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="wb_sunny" size="sm" />
                <span>{destination.bestTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="location_on" size="sm" />
                <span>{destination.region}</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <main className="w-full py-20 px-6 md:px-20 lg:px-24 xl:px-32">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ScrollAnimation animation="fade" delay={100}>
              <h2 className="text-3xl font-bold mb-6">About {destination.name}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {destination.description}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade" delay={200}>
              <h3 className="text-2xl font-bold mb-6">Highlights & Experiences</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <ScrollAnimation key={index} animation="card" delay={250 + (index * 100)}>
                    <div className="flex items-start gap-3 p-4 bg-white dark:bg-background-dark rounded-lg border border-gray-100 dark:border-white/10 hover:border-primary/20 transition-all hover:shadow-lg">
                      <Icon name="check_circle" size="sm" className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimation animation="scale" delay={300}>
              <div className="bg-white dark:bg-background-dark rounded-2xl p-6 border border-gray-100 dark:border-white/10 sticky top-24 hover:shadow-xl transition-all">
                <ScrollAnimation animation="fade" delay={350}>
                  <h3 className="text-xl font-bold mb-6">Plan Your Visit</h3>
                </ScrollAnimation>
                
                <div className="space-y-4 mb-6">
                  <ScrollAnimation animation="slide-right" delay={400}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Duration</span>
                      <span className="font-semibold">{destination.duration}</span>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="slide-right" delay={450}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Best Time</span>
                      <span className="font-semibold">{destination.bestTime}</span>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="slide-right" delay={500}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
                      <span className={`px-2 py-1 rounded text-sm font-medium ${getDifficultyColor(destination.difficulty)}`}>
                        {destination.difficulty}
                      </span>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="slide-right" delay={550}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Region</span>
                      <span className="font-semibold">{destination.region}</span>
                    </div>
                  </ScrollAnimation>
                </div>

                <div className="space-y-3">
                  <ScrollAnimation animation="scale" delay={600}>
                    <Link href="/tours">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold transition-all hover:scale-105">
                        View Related Tours
                      </button>
                    </Link>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale" delay={650}>
                    <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-bold transition-all hover:scale-105">
                      Custom Itinerary
                    </button>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Back to Destinations */}
        <ScrollAnimation animation="fade" delay={400}>
          <div className="mt-16 text-center">
            <Link href="/destinations">
              <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold">
                <Icon name="arrow_back" size="sm" />
                Back to All Destinations
              </button>
            </Link>
          </div>
        </ScrollAnimation>
      </main>
      
      <FooterApp />
    </div>
  )
}