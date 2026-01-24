import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tours & Circuits Overview | ELMADAGASCAR Tours',
  description: 'Discover Madagascar through our curated tours and expertly led circuits. From rainforests to beaches, explore the island\'s unique biodiversity.',
}

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}