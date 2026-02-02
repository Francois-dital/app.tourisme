import { getAllDestinations, getDestinationBySlug } from '@/data/destinations'
import DestinationDetails from '@/components/feature/destinations/DestinationDetails'

export async function generateStaticParams() {
  const destinations = getAllDestinations()
  
  return destinations.map((destination) => ({
    slug: destination.slug,
  }))
}

interface DestinationDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    return <DestinationDetails destination={null} />
  }

  return <DestinationDetails destination={destination} />
}