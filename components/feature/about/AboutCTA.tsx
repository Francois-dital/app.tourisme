import { Button } from '@/components/ui/Button'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

export default function AboutCTA() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-full bg-primary">
      <div className="max-w-7xl mx-auto text-center flex flex-col gap-8 items-center">
        <ScrollAnimation animation="fade" delay={100}>
          <h2 className="text-[#111811] text-3xl md:text-5xl font-black leading-tight">
            Ready for your Malagasy journey?
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade" delay={200}>
          <p className="text-[#111811]/80 text-lg md:text-xl font-medium">
            Join us for an unforgettable experience with the best guides and vehicles on the island.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animation="scale" delay={300}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-[#111811] text-white px-10 py-4 rounded-full hover:bg-[#111811]/90 shadow-xl"
            >
              Book a Tour
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-[#111811] text-[#111811] px-10 py-4 rounded-full hover:bg-[#111811] hover:text-white"
            >
              Contact Us
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}