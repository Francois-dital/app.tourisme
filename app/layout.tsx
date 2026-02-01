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
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111811" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
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
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        
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