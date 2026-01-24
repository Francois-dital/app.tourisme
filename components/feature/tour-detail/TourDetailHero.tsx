import { Badge } from '@/components/ui/Badge'
import { TourData } from '@/data/tours'

interface TourDetailHeroProps {
  tour: TourData
}

export default function TourDetailHero({ tour }: TourDetailHeroProps) {
  return (
    <div className="px-6 md:px-20">
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-12 lg:px-12"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("${tour.image}")`
          }}
          aria-label={`${tour.title} landscape`}
        >
          <div className="flex flex-col gap-3 text-left max-w-2xl">
            {tour.label && (
              <Badge variant="primary" className="bg-primary/90 text-[#111811] w-fit">
                {tour.label}
              </Badge>
            )}
            <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
              {tour.title}: {tour.subtitle}
            </h1>
            <p className="text-white/90 text-base lg:text-lg font-normal leading-relaxed">
              {tour.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}