import { MetadataRoute } from "next";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://elmadagascar-tours.com`,
      lastModified: new Date(),
    },
    {
      url: `https://elmadagascar-tours.com/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://elmadagascar-tours.com/rendez-vous`,
      lastModified: new Date(),
    }
  ];
}