import TourDetails from '@/components/feature/tours/TourDetails'
import { getAllTours, getTourBySlug } from '@/data/tours'

export async function generateStaticParams() {
  const tours = getAllTours()
  
  return tours.map((tour) => ({
    slug: tour.slug,
  }))
}

interface TourDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    return <TourDetails tour={null} />
  }

  return <TourDetails tour={tour} />
}