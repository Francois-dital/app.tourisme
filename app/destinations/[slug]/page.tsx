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
        <main className="max-w-7xl mx-auto py-20 px-6 text-center">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${destination.image}')` }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
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

      <main className="max-w-7xl mx-auto py-20 px-6">
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
                  <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-background-dark rounded-lg border border-gray-100 dark:border-white/10">
                    <Icon name="check_circle" size="sm" className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimation animation="scale" delay={300}>
              <div className="bg-white dark:bg-background-dark rounded-2xl p-6 border border-gray-100 dark:border-white/10 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Plan Your Visit</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Duration</span>
                    <span className="font-semibold">{destination.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Best Time</span>
                    <span className="font-semibold">{destination.bestTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${getDifficultyColor(destination.difficulty)}`}>
                      {destination.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Region</span>
                    <span className="font-semibold">{destination.region}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/tours">
                    <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold transition-all">
                      View Related Tours
                    </button>
                  </Link>
                  <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-bold transition-all">
                    Custom Itinerary
                  </button>
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