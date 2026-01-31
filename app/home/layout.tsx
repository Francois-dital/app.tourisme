import type { Metadata } from 'next'
import { generatePageMetadata } from '@/utils/server-translations'

export function generateMetadata(): Metadata {
  return generatePageMetadata('home')
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}