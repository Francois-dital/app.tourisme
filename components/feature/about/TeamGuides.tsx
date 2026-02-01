'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { useTranslation } from 'react-i18next'

interface Guide {
  name: string
  role: string
  image: string
  languages: Array<{ name: string; color: 'primary' | 'secondary' }>
}

export default function TeamGuides() {
  const { t } = useTranslation()

  const guides: Guide[] = [
    {
      name: 'Elie',
      role: t('about.teamGuides.roles.senior'),
      image: '/images/about/guide-elie.jpeg',
      languages: [
        { name: 'French', color: 'primary' },
        { name: 'English', color: 'secondary' }
      ]
    },
    {
      name: 'Fabrice',
      role: t('about.teamGuides.roles.wildlife'),
      image: '/images/about/guide-fabrice.jpeg',
      languages: [
        { name: 'French', color: 'primary' },
        { name: 'English', color: 'secondary' }
      ]
    }
  ]

  return (
    <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32">
      <ScrollAnimation animation="fade" delay={100}>
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-[#111811] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
            {t('about.teamGuides.title')}
          </h2>
          <span className="hidden md:block text-primary font-medium">
            {t('about.teamGuides.subtitle')}
          </span>
        </div>
      </ScrollAnimation>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {guides.map((guide, index) => (
          <ScrollAnimation 
            key={index}
            animation="card" 
            delay={200 + (index * 100)}
          >
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-200 shadow-sm relative">
                <Image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={guide.image}
                  alt={`Portrait of ${guide.name}`}
                  width={300}
                  height={375}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 flex gap-1">
                  {guide.languages.map((lang, langIndex) => (
                    <Badge
                      key={langIndex}
                      variant={lang.color}
                      size="sm"
                      className="text-[10px] px-2 py-0.5"
                    >
                      {lang.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold">{guide.name}</h4>
                <p className="text-sm text-[#618961] dark:text-white/60">{guide.role}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}