import { FeatureCard } from '@/components/ui/FeatureCard'

const features = [
  {
    icon: 'person_pin_circle',
    title: 'Expert Local Guides',
    description: 'Our certified guides know every hidden trail, lemur habitat, and secret beach on the Big Island.'
  },
  {
    icon: 'edit_calendar',
    title: 'Tailor-made Journeys',
    description: 'Whether you\'re a photographer, trekker, or looking for luxury, we craft itineraries to your rhythm.'
  },
  {
    icon: 'eco',
    title: 'Sustainable Tourism',
    description: 'We are committed to protecting our island\'s unique flora and fauna through responsible travel practices.'
  }
]

export default function AboutsUs() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="max-w-2xl">
          <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Authentic Experiences
          </h3>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Why Choose Our Agency?
          </h2>
          <div className="h-1.5 w-24 bg-primary mt-6 rounded-full" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-md text-lg italic">
          "We don't just show you Madagascar; we let you live it through the eyes of those who call it home."
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}