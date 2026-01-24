import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { TourData } from '@/data/tours'

interface TourDetailContentProps {
  tour: TourData
}

export default function TourDetailContent({ tour }: TourDetailContentProps) {
  return (
<<<<<<< HEAD
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 md:px-20 mt-6">
=======
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 md:px-20 lg:px-24 xl:px-32 mt-6">
      {/* Left Side: Itinerary Timeline */}
>>>>>>> fix/ajustement
      <div className="lg:col-span-2 flex flex-col">
        <ScrollAnimation animation="fade" delay={100}>
          <h3 className="text-[#111811] dark:text-white text-2xl font-bold mb-8">Detailed Itinerary</h3>
        </ScrollAnimation>
        
        <div className="relative space-y-12">
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-primary/20" />
          
          {tour.itinerary.map((item, index) => (
            <ScrollAnimation key={index} animation="card" delay={200 + (index * 100)}>
              <div className="relative pl-14">
                <div className="absolute left-0 top-1 size-10 rounded-full bg-primary flex items-center justify-center text-black z-10 border-4 border-white dark:border-background-dark">
                  <Icon name={item.icon} />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-primary">
                    Day {item.dayRange || `0${item.day}`}: {item.title}
                  </h4>
                  <p className="text-[#4b634b] dark:text-[#c0d0c0] leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.accommodation && (
                    <div className="mt-3 p-4 bg-white dark:bg-white/5 rounded-lg border border-dashed border-[#ccc] dark:border-white/20 flex items-center gap-4 hover:shadow-lg transition-all">
                      <img 
                        className="w-16 h-16 rounded object-cover shadow-sm" 
                        src={item.accommodation.image}
                        alt={item.accommodation.name}
                      />
                      <div>
                        <p className="text-xs uppercase text-primary font-bold">Overnight</p>
                        <p className="font-bold">{item.accommodation.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="scale" delay={200 + (tour.itinerary.length * 100)}>
          <div className="mt-12 p-6 bg-primary/10 rounded-xl border border-primary/30 flex gap-4 hover:shadow-lg transition-all">
            <Icon name="magic_button" className="text-primary text-3xl" />
            <div>
              <h4 className="text-lg font-bold mb-1">Make it yours</h4>
              <p className="text-sm opacity-90">
                Please note that the itinerary can be fully customized according to your needs. Want to spend more time at specific locations? Prefer luxury over mid-range lodges? Just let us know and we'll tailor the journey to your exact preferences.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          <ScrollAnimation animation="scale" delay={150}>
            <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-[#f0f4f0] dark:border-white/10 shadow-sm hover:shadow-xl transition-all">
              <div className="flex flex-col gap-1 mb-6">
                <p className="text-sm text-[#618961] dark:text-[#a0c0a0] font-medium">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black">{tour.price.group}</span>
                  <span className="text-sm opacity-70">per person</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                <ScrollAnimation animation="slide-right" delay={200}>
                  <div className="flex justify-between items-center py-2 border-b border-[#f0f4f0] dark:border-white/10">
                    <span className="text-sm">Solo Traveler</span>
                    <span className="font-bold">{tour.price.solo}</span>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slide-right" delay={250}>
                  <div className="flex justify-between items-center py-2 border-b border-[#f0f4f0] dark:border-white/10">
                    <span className="text-sm">Group (2+ people)</span>
                    <span className="font-bold text-primary">{tour.price.group}</span>
                  </div>
                </ScrollAnimation>
              </div>
              
              <ScrollAnimation animation="scale" delay={300}>
                <p className="text-center text-xs text-[#618961] dark:text-[#a0c0a0] mt-4">
                  Secure your spot with 20% deposit
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scale" delay={350}>
            <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-[#f0f4f0] dark:border-white/10 shadow-sm hover:shadow-xl transition-all">
              <h5 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="check_circle" className="text-primary" />
                Included
              </h5>
              <ul className="space-y-3 mb-8">
                {tour.included.map((item, index) => (
                  <ScrollAnimation key={index} animation="slide-right" delay={400 + (index * 50)}>
                    <li className="flex items-start gap-3 text-sm">
                      <Icon name="check" className="text-primary text-sm mt-0.5" />
                      {item}
                    </li>
                  </ScrollAnimation>
                ))}
              </ul>

              <h5 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="cancel" className="text-red-400" />
                Not Included
              </h5>
              <ul className="space-y-3">
                {tour.excluded.map((item, index) => (
                  <ScrollAnimation key={index} animation="slide-right" delay={400 + (tour.included.length * 50) + (index * 50)}>
                    <li className="flex items-start gap-3 text-sm opacity-70">
                      <Icon name="close" className="text-sm mt-0.5" />
                      {item}
                    </li>
                  </ScrollAnimation>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scale" delay={500}>
            <div className="p-6 bg-[#111811] dark:bg-[#081108] text-white rounded-xl text-center hover:shadow-xl transition-all">
              <p className="text-sm mb-2 opacity-80">Need more info?</p>
              <p className="font-bold text-lg mb-4">+261 34 31 416 49</p>
              <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10 hover:scale-105 transition-all">
                Speak to an expert
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}