import type { Metadata } from 'next'
import { generatePageMetadata } from '@/utils/server-translations'

export function generateMetadata(): Metadata {
  return generatePageMetadata('tourDetail')
}

export default function TourDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}