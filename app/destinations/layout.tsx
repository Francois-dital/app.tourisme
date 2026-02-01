import type { Metadata } from 'next'
import { generatePageMetadata } from '@/utils/server-translations'

export function generateMetadata(): Metadata {
  return generatePageMetadata('destinations')
}

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}