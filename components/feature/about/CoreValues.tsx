import { FeatureCard } from '@/components/ui/FeatureCard'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

const coreValues = [
  {
    icon: 'eco',
    title: 'Authenticity',
    description: 'Genuine connections with local communities and hidden gems that only locals know.'
  },
  {
    icon: 'verified_user',
    title: 'Safety First',
    description: 'Rigorous vehicle maintenance and experienced drivers for absolute peace of mind on rough roads.'
  },
  {
    icon: 'travel_explore',
    title: 'Local Expertise',
    description: 'Deep knowledge of Malagasy culture, flora, and endemic fauna from guides born on the island.'
  }
]

export default function CoreValues() {
  return (
    <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32">
      <ScrollAnimation animation="fade" delay={100}>
        <div className="flex flex-col gap-4 text-center md:text-left mb-16">
          <h2 className="text-[#111811] dark:text-white tracking-light text-3xl font-bold leading-tight md:text-4xl md:font-black">
            The ELMADAGASCAR Difference
          </h2>
          <p className="text-[#618961] dark:text-white/70 text-lg font-normal leading-normal max-w-[720px]">
            We prioritize your experience through three main pillars that define every journey we curate.
          </p>
        </div>
      </ScrollAnimation>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coreValues.map((value, index) => (
          <ScrollAnimation 
            key={index}
            animation="card" 
            delay={200 + (index * 100)}
          >
            <FeatureCard
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}