import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { generateMetadata } from '@/utils/metadata.utils'
import I18nProvider from '@/components/providers/I18nProvider'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = generateMetadata(
  'Discover Madagascar',
  'Experience the Magic of Madagascar with expert local guides. From the Avenue of Baobabs to unique lemurs, explore the world\'s eighth continent.'
)

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
