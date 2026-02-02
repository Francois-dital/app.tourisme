'use client'

import { FeatureCard } from '@/components/ui/FeatureCard'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function CoreValues() {
  const { t } = useTranslation()

  const coreValues = [
    {
      icon: 'eco',
      title: t('about.coreValues.authenticity.title'),
      description: t('about.coreValues.authenticity.description')
    },
    {
      icon: 'verified_user',
      title: t('about.coreValues.safety.title'),
      description: t('about.coreValues.safety.description')
    },
    {
      icon: 'travel_explore',
      title: t('about.coreValues.expertise.title'),
      description: t('about.coreValues.expertise.description')
    }
  ]

  return (
    <>
      <section
        className="relative h-[75vh] min-h-[550px] flex items-center justify-center text-center px-6 md:px-20 bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: "url('/images/about/about-image.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-20" />

        <div className="relative z-10 max-w-4xl">

          <ScrollAnimation animation="fade" delay={50}>
            <span className="inline-block mb-6 px-4 py-2 text-sm font-semibold tracking-wide uppercase bg-white/10 text-white backdrop-blur-md rounded-full border border-white/20">
              {t('about.hero.badge')}
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade" delay={100}>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {t('about.hero.title')}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade" delay={200}>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              {t('about.hero.subtitle')}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale" delay={300}>
            <Link
              href="/destinations"
              className="inline-block px-8 py-4 text-lg font-semibold bg-white/20 text-white backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {t('about.hero.cta')}
            </Link>
          </ScrollAnimation>

        </div>
      </section>

      <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 animate-pulse" />
        
        <ScrollAnimation animation="fade" delay={100}>
          <div className="flex flex-col gap-4 text-center md:text-left mb-16 relative z-10">
            <h2 className="text-[#111811] dark:text-white text-3xl font-bold md:text-4xl transform transition-all duration-700">
              {t('about.coreValues.title')}
            </h2>
            <p className="text-[#618961] dark:text-white/70 text-lg max-w-[720px] transform transition-all duration-700 delay-100">
              {t('about.coreValues.subtitle')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 equal-height-grid">
          {coreValues.map((value, index) => (
            <ScrollAnimation 
              key={index}
              animation="card"
              delay={200 + (index * 150)}
              className="flex"
            >
              <div className="transform transition-all duration-700 hover:scale-105 w-full">
                <FeatureCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </>
  )
}
