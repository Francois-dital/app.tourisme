import { Icon } from '@/components/ui/Icon'
import { Badge } from '@/components/ui/Badge'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

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

const fleetItems: FleetItem[] = [
  {
    name: 'Toyota Land Cruiser 4x4',
    description: 'The king of Malagasy roads. Known for its unbreakable chassis and supreme comfort on long bumpy drives. Perfectly suited for groups of 4-5 adventurers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsboWDtlMVl5Cht08fQiDWfb80nhAc4nGYktF5pPLlaeQLHORbg4NVO1aYqrLOXZZEz2tBm9r5OkEnLi0cjn9cR1fiVgiG_HQnZ6rqmy-LWsgekHQNcn75LWoDdV-xxsG1a1OLpOMGTTo-1_qiTwrOr9RRpCyW4Ah1enPoI4kQ0iM1hl4HeexZd-pEVPDMMZjR2PZJ_xrXtznKyriYJ5cr9jCeIBaQZUDSOh9efNS_2mfRl_2KctvZPf2lYzxHwJNkMwE_rWc5sIAE',
    badge: 'Most Reliable',
    features: [
      { icon: 'ac_unit', text: 'Full Air Conditioning' },
      { icon: 'groups', text: 'Up to 5 Passengers' },
      { icon: 'battery_charging_full', text: 'Charging Ports' },
      { icon: 'construction', text: 'Rescue Equipment' }
    ]
  },
  {
    name: 'Mitsubishi Pajero',
    description: 'Agile and comfortable, perfect for the highland routes and visiting National Parks. Offers excellent visibility for photography through large panoramic windows.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjVsCxnv28a25fRORRa9IS9va_8ABs1qu-z3vXMoEERVIT91onR6ZRVfwurJyFO7p8-1ctoECLGiWFdsgYgssLFVgFa9N681Ds2QRAVhooID90IowoFq8XWpHNny5SIDZAwm-bdehCQV8t0WA0xjuWZNhDd5tTVygHG1oZm4fNVo2aEi7SPlH7yg8iLDnCF-jGuCqnCV-T4Xauk57D6cqxQ-yr0J_eFES5SfGl7bWViBkdMjk-zZFCOaOjDt9Y5tJqC0LHMJMw5Wdz',
    badge: 'Premium Comfort',
    features: [
      { icon: 'auto_fix_high', text: 'Smooth Suspension' },
      { icon: 'luggage', text: 'Spacious Cargo' },
      { icon: 'visibility', text: 'Panoramic Views' },
      { icon: 'rule', text: 'Regular Inspection' }
    ],
    reverse: true
  }
]

export default function FleetSection() {
  return (
    <section className="bg-background-dark text-white py-24 px-6 md:px-20 max-w-full">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade" delay={100}>
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4">Our Rugged Fleet</h2>
            <p className="text-white/70 text-lg max-w-[700px]">
              Specially selected and maintained to handle Madagascar's diverse terrains, from smooth paved routes to the most challenging off-road mud tracks.
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