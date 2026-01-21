import type { Metadata } from "next";

export const siteConfig = {
  name: "MadaTours",
  description: "Experience the Magic of Madagascar with expert local guides. From the Avenue of Baobabs to unique lemurs, explore the world's eighth continent.",
  url: "https://madatours.mg",
  ogImage: "/images/hero-background.jpg",
  keywords: [
    "Madagascar",
    "Tourism",
    "Tours",
    "Baobab",
    "Lemurs",
    "Travel",
    "Adventure",
    "4x4",
    "Nosy Be",
    "Isalo",
    "Tsingy"
  ]
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string
): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: "MadaTours Team" }],
    creator: "MadaTours",
    publisher: "MadaTours",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1920,
          height: 1080,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
      creator: "@madatours",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}