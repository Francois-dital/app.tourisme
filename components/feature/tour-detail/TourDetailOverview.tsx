import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { TourData } from '@/data/tours'

interface TourDetailOverviewProps {
  tour: TourData
}

export default function TourDetailOverview({ tour }: TourDetailOverviewProps) {
  return (
    <div className="flex flex-wrap justify-between items-end gap-6 px-6 md:px-20 py-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-[#111811] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
          Tour Overview
        </h2>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-1.5 text-[#618961] dark:text-[#a0c0a0] text-sm font-semibold">
            <Icon name="schedule" />
            {tour.duration} / {parseInt(tour.duration.split(' ')[0]) - 1} Nights
          </span>
          <span className="flex items-center gap-1.5 text-[#618961] dark:text-[#a0c0a0] text-sm font-semibold">
            <Icon name="nature_people" />
            {tour.category}
          </span>
          <span className="flex items-center gap-1.5 text-[#618961] dark:text-[#a0c0a0] text-sm font-semibold">
            <Icon name="edit_note" />
            100% Customizable
          </span>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        className="flex items-center gap-2 h-12 px-6 bg-[#f0f4f0] dark:bg-white/10 hover:bg-primary hover:text-[#111811]"
      >
        <Icon name="download" />
        <span>Download PDF Itinerary</span>
      </Button>
    </div>
  )
}