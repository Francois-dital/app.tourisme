'use client'

import { Icon } from '@/components/ui/Icon'
import { Badge } from '@/components/ui/Badge'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { useTranslation } from 'react-i18next'

interface FleetItem {
  name: string
  description: string
  image: string
  badge: string
  features: Array<{
    icon: string
    text: string
  }>
  reverse?: boolean
}

export default function FleetSection() {
  const { t } = useTranslation()

  const fleetItems: FleetItem[] = [
    {
      name: t('about.fleet.landCruiser.name'),
      description: t('about.fleet.landCruiser.description'),
      image: '/images/4x4-1.jpeg',
      badge: t('about.fleet.landCruiser.badge'),
      features: [
        { icon: 'ac_unit', text: 'Full Air Conditioning' },
        { icon: 'groups', text: 'Up to 5 Passengers' },
        { icon: 'battery_charging_full', text: 'Charging Ports' },
        { icon: 'construction', text: 'Rescue Equipment' }
      ]
    },
    {
      name: t('about.fleet.pajero.name'),
      description: t('about.fleet.pajero.description'),
      image: '/images/4x4-3.jpeg',
      badge: t('about.fleet.pajero.badge'),
      features: [
        { icon: 'auto_fix_high', text: 'Smooth Suspension' },
        { icon: 'luggage', text: 'Spacious Cargo' },
        { icon: 'visibility', text: 'Panoramic Views' },
        { icon: 'rule', text: 'Regular Inspection' }
      ],
      reverse: true
    }
  ]

  return (
    <section className="bg-background-dark text-white py-24 px-6 md:px-20 lg:px-24 xl:px-32">
      <div className="w-full">
        <ScrollAnimation animation="fade" delay={100}>
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4">{t('about.fleet.title')}</h2>
            <p className="text-white/70 text-lg max-w-[700px]">
              {t('about.fleet.subtitle')}
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="flex flex-col gap-12">
          {fleetItems.map((item, index) => (
            <ScrollAnimation 
              key={index}
              animation="fade" 
              delay={200 + (index * 200)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={`rounded-2xl overflow-hidden aspect-video relative shadow-2xl group ${item.reverse ? 'order-1 lg:order-2' : ''}`}>
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className={`absolute bottom-4 ${item.reverse ? 'right-4' : 'left-4'}`}>
                    <Badge variant="primary" className="bg-primary text-[#111811] px-4 py-1 text-xs font-bold uppercase tracking-wider">
                      {item.badge}
                    </Badge>
                  </div>
                </div>
                
                <div className={`flex flex-col gap-6 ${item.reverse ? 'order-2 lg:order-1 text-right lg:items-end' : ''}`}>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                    <p className="text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className={`grid grid-cols-2 gap-4 ${item.reverse ? 'justify-items-end' : ''}`}>
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-center gap-3 ${item.reverse ? 'flex-row-reverse' : ''}`}>
                        {!item.reverse && <Icon name={feature.icon} className="text-primary" />}
                        <span className="text-sm">{feature.text}</span>
                        {item.reverse && <Icon name={feature.icon} className="text-primary" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}