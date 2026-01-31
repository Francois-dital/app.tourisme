'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import Link from 'next/link'

const HERO_IMAGES = [
  {
    src: '/images/hero-background-1.jpg',
    alt: 'Paysage de l\'Allée des Baobabs à Madagascar au coucher du soleil'
  },
  {
    src: '/images/hero-background-2.jpg',
    alt: 'Circuit 4x4 dans les paysages arides du Sud de Madagascar'
  },
  {
    src: '/images/hero-background-3.jpg',
    alt: 'Plage paradisiaque de Nosy Be avec cocotiers et eau turquoise'
  },
  {
    src: '/images/hero-background-4.jpg',
    alt: 'Forêt tropicale humide avec lémuriens dans le parc national'
  },
  {
    src: '/images/hero-background-5.jpg',
    alt: 'Vue aérienne des rizières en terrasse des Hautes Terres de Madagascar'
  },
]

export default function HeroSection() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length)
      setIsTransitioning(false)
    }, 500)
  }, [])

  const prevSlide = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
      setIsTransitioning(false)
    }, 500)
  }, [])

  const goToSlide = useCallback((index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsTransitioning(false)
      }, 500)
    }
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {HERO_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={index !== currentIndex}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={85}
            sizes="100vw"
            className={`object-cover transition-transform duration-[10000ms] ${isTransitioning && index === currentIndex ? 'scale-105' : 'scale-100'}`}
          />
        </div>
      ))}
      
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <ScrollAnimation animation="fade" delay={100}>
          <Badge variant="primary" size="md" className="mb-6 backdrop-blur-md" aria-label="Certification de qualité">
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
            <Link href="/booking" aria-label="Réserver un circuit 4x4 à Madagascar">
              <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
                {t('hero.bookTrip')}
              </Button>
            </Link>
            <Link href="/destinations" aria-label="Explorer les destinations de Madagascar">
              <Button variant="secondary" size="lg" fullWidth className="sm:w-auto">
                {t('hero.exploreDestinations')}
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      <nav aria-label="Navigation du carousel">
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
          aria-label="Image précédente"
        >
          <Icon name="chevron_left" size="lg" className="text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
          aria-label="Image suivante"
        >
          <Icon name="chevron_right" size="lg" className="text-white group-hover:scale-110 transition-transform" />
        </button>
      </nav>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3" role="tablist" aria-label="Indicateurs de slides">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Aller à l'image ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20" aria-hidden="true">
        <Icon name="expand_more" size="xl" className="text-white" />
      </div>
    </section>
  )
}