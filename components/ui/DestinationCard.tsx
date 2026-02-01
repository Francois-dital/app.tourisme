'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface DestinationCardProps {
  title: string
  duration: string
  region: string
  description: string
  image: string
  label?: string
  labelColor?: 'primary' | 'secondary' | 'success'
  slug: string
}

export default function DestinationCard({ title, duration, region, description, image, label, labelColor = 'primary', slug }: DestinationCardProps) {
  const { t } = useTranslation()

  const getLabelStyles = () => {
    switch (labelColor) {
      case 'secondary':
        return 'bg-blue-500 text-white'
      case 'success':
        return 'bg-green-500 text-white'
      default:
        return 'bg-primary text-[#111811]'
    }
  }

  return (
    <Card padding="none" className="group bg-white dark:bg-background-dark overflow-hidden shadow-lg border-transparent hover:border-primary flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur text-[#111811] px-3 py-1 rounded-lg text-sm font-bold shadow-sm">
            {duration}
          </span>
        </div>
        
        {label && (
          <div className="absolute top-4 right-4 z-10">
            <span className={`px-3 py-1 rounded-lg text-sm font-bold ${getLabelStyles()}`}>
              {label}
            </span>
          </div>
        )}
        
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {region && (
            <div className="flex justify-between items-center mb-2 text-primary font-bold text-sm uppercase">
              <span>{region}</span>
            </div>
          )}
          <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-1">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-end pt-4 border-t border-gray-100 dark:border-white/10 mt-auto">
          <Link href={`/destinations/${slug}`}>
            <Button variant="ghost" size="sm" className="bg-[#f0f4f0] dark:bg-white/10 hover:bg-primary hover:text-[#111811]">
              {t('topDestinations.viewDetails')}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
