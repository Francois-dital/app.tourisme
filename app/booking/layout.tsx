import type { Metadata } from 'next'
import { generatePageMetadata } from '@/utils/server-translations'

export function generateMetadata(): Metadata {
  return generatePageMetadata('booking')
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}