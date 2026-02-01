import type { Metadata } from 'next'
import { generatePageMetadata } from '@/utils/server-translations'

export function generateMetadata(): Metadata {
  return generatePageMetadata('about')
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}