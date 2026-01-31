import type { Metadata } from 'next'
import { generatePageMetadata } from '@/utils/server-translations'

export function generateMetadata(): Metadata {
  return generatePageMetadata('destinationDetail')
}

export default function DestinationDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}