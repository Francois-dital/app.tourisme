import DestinationDetailPage from '@/components/feature/destinations/Destination'
import { getAllDestinations, getDestinationBySlug } from '@/data/destinations'

export function generateStaticParams() {
  const destinations = getAllDestinations()

  return destinations.map((destination) => ({
    slug: destination.slug,
  }))
}

export default function DestinationPage({
  params,
}: {
  params: { slug: string }
}) {
  const destination = getDestinationBySlug(params.slug)

  return <DestinationDetailPage destination={destination} />
}
