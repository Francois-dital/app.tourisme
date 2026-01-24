import Link from 'next/link'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

interface TourDetailBreadcrumbProps {
  tourTitle: string
}

export default function TourDetailBreadcrumb({ tourTitle }: TourDetailBreadcrumbProps) {
  return (
    <ScrollAnimation animation="fade" delay={50}>
      <div className="flex flex-wrap gap-2 px-6 md:px-20 lg:px-24 xl:px-32 py-4">
        <Link href="/tours" className="text-[#618961] dark:text-[#a0c0a0] text-sm font-medium hover:text-primary transition-colors">
          Tours
        </Link>
        <span className="text-[#618961] dark:text-[#a0c0a0] text-sm font-medium">/</span>
        <span className="text-[#111811] dark:text-white text-sm font-medium">{tourTitle}</span>
      </div>
    </ScrollAnimation>
  )
}