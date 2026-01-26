'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import Link from 'next/link'

const HERO_IMAGES = [
  '/images/hero-background-1.jpg',
  '/images/hero-background-2.jpg',
  '/images/hero-background-3.jpg',
  '/images/hero-background-4.jpg',
  '/images/hero-background-5.jpg',
]

export default function HeroSection() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Fonction pour passer à l'image suivante
  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length)
      setIsTransitioning(false)
    }, 500) // Durée de la transition de fondu
  }, [])

  // Fonction pour passer à l'image précédente
  const prevSlide = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
      setIsTransitioning(false)
    }, 500)
  }, [])

  // Fonction pour aller à une image spécifique
  const goToSlide = useCallback((index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsTransitioning(false)
      }, 500)
    }
  }, [currentIndex])

  // Auto-play du carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000) // Change d'image toutes les 6 secondes

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden">
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Images du carousel */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${isTransitioning && index === currentIndex ? 'scale-105' : 'scale-100'} transition-transform duration-[10000ms]`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
          aria-label={`Madagascar landscape ${index + 1}`}
        />
      ))}
      
      {/* Contenu du hero */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <ScrollAnimation animation="fade" delay={100}>
          <Badge variant="primary" size="md" className="mb-6 backdrop-blur-md">
            {t('hero.badge')}
          </Badge>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade" delay={200}>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            {t('hero.title')}
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade" delay={300}>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animation="scale" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact">
              <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
                {t('hero.bookTrip')}
              </Button>
            </Link>
            <Link href="/destinations">
              <Button variant="secondary" size="lg" fullWidth className="sm:w-auto">
                {t('hero.exploreDestinations')}
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label={t('hero.navigation.previous')}
      >
        <Icon name="chevron_left" size="lg" className="text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label={t('hero.navigation.next')}
      >
        <Icon name="chevron_right" size="lg" className="text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Indicateurs de pagination */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={t('hero.navigation.goToSlide', { number: index + 1 })}
          />
        ))}
      </div>
      
      {/* Flèche de défilement */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <Icon name="expand_more" size="xl" className="text-white" />
      </div>
    </section>
  )
}
