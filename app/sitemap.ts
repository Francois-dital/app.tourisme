import { MetadataRoute } from 'next'

async function getToursData() {
  return [
    { slug: 'circuit-sud-madagascar' },
    { slug: 'aventure-nord' },
    { slug: 'decouverte-est' },
  ]
}

async function getDestinationsData() {
  return [
    { slug: 'allee-des-baobabs' },
    { slug: 'parc-national-isalo' },
    { slug: 'nosy-be' },
    { slug: 'tsingy-de-bemaraha' },
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://elmadagascar-tours.com'
  
  const toursData = await getToursData()
  const destinationsData = await getDestinationsData()
  
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
  
  const tourRoutes: MetadataRoute.Sitemap = toursData.map(tour => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  const destinationRoutes: MetadataRoute.Sitemap = destinationsData.map(destination => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [...staticRoutes, ...tourRoutes, ...destinationRoutes]
}