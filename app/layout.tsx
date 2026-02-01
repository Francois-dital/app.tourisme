import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import I18nProvider from '@/components/providers/I18nProvider'
import Image from 'next/image'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#111811',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://elmadagascar-tours.com'),
  title: {
    default: 'Accueil | ELMADAGASCAR',
    template: '%s | ELMADAGASCAR'
  },
  description: 'Explorez Madagascar avec nos circuits 4x4 aventure. Guides locaux, véhicules équipés, expériences authentiques. Réservez votre aventure dès maintenant!',
  keywords: [
    'Madagascar', 
    'tourisme Madagascar', 
    'circuit 4x4 Madagascar', 
    'voyage aventure', 
    'guide local Madagascar',
    'baobabs', 
    'lémuriens'
  ],
  authors: [{ name: 'ELMADAGASCAR' }],
  robots: 'index, follow',
  
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'ELMADAGASCAR - Circuits Authentiques',
    description: 'Explorez Madagascar avec nos circuits 4x4 aventure. Guides locaux, véhicules équipés, expériences authentiques.',
    siteName: 'ELMADAGASCAR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ELMADAGASCAR - Circuit 4x4',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'ELMADAGASCAR - Circuits Authentiques',
    description: 'Explorez Madagascar avec nos circuits 4x4 aventure.',
    images: ['/og-image.jpg'],
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  manifest: '/site.webmanifest',
}

// Structured Data pour l'agence
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  'name': 'ELMADAGASCAR',
  'description': 'Agence de voyage spécialisée dans les circuits 4x4 à Madagascar avec guides locaux francophones.',
  'url': 'https://elmadagascar-tours.com',
  'logo': 'https://elmadagascar-tours.com/logo.png',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Antananarivo',
    'addressRegion': 'Analamanga',
    'addressCountry': 'MG'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+261-34-31-416-49',
    'contactType': 'customer service',
    'availableLanguage': ['French', 'English']
  },
  'sameAs': [
    'https://www.facebook.com/61587278189321',
    // 'https://www.instagram.com/elmadagascar',
  ],
  'priceRange': '€€',
  'currenciesAccepted': 'EUR, USD, MGA'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="light">
      <head>
        {/* Preconnect for critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        
        {/* Material Symbols - Optimized */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        
        <meta name="theme-color" content="#111811" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        {/* Google Analytics - Optimized loading */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
        
        {/* Facebook Pixel - Optimized loading */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f.fbq)f.fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body 
        className={`${plusJakartaSans.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        
        {/* Facebook Pixel noscript fallback */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <noscript>
            <Image
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}