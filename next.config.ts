import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Images optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net', // CDN de Facebook pour les images
      },
      {
        protocol: 'https',
        hostname: '**.facebook.com', // Tous les sous-domaines de Facebook
      },
      {
        protocol: 'https',
        hostname: '**.instagram.com', // Pour les images Instagram si besoin
      },
    ],
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Ajout des headers CSP pour Facebook
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "img-src 'self' data: https://*.fbcdn.net https://*.facebook.com https://*.googleusercontent.com https://images.unsplash.com",
              "script-src 'self' 'unsafe-inline' https://connect.facebook.net",
              "frame-src https://www.facebook.com",
              "style-src 'self' 'unsafe-inline'",
              "connect-src 'self' https://www.facebook.com"
            ].join('; ')
          }
        ],
      },
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/circuits',
        destination: '/tours',
        permanent: true,
      },
    ]
  },
  
  // React Strict Mode
  reactStrictMode: true,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://elmadagascar.com',
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '',
  },
  
  // Pour éviter les problèmes de CORS avec Facebook
  async rewrites() {
    return [
      {
        source: '/facebook/:path*',
        destination: 'https://www.facebook.com/:path*',
      }
    ]
  }
}

export default nextConfig