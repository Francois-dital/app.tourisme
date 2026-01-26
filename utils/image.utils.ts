/**
 * Utilitaires pour la gestion des images
 */

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * Configuration des images du site
 */
export const IMAGES = {
  hero: {
    src: "/images/hero-background-1.jpg",
    alt: "Madagascar landscape with baobab trees",
    width: 1920,
    height: 1080,
    priority: true
  },
  about: {
    src: "/images/about-image.jpg",
    alt: "Madagascar tour guide with 4x4 vehicle",
    width: 800,
    height: 800
  },
  tours: {
    baobab: {
      src: "/images/tour-baobab.jpg",
      alt: "Avenue of Baobabs and Tsingy formations",
      width: 600,
      height: 400
    },
    nosyBe: {
      src: "/images/tour-nosy-be.jpg",
      alt: "Nosy Be turquoise waters and beaches",
      width: 600,
      height: 400
    },
    isalo: {
      src: "/images/tour-isalo.jpg",
      alt: "Isalo National Park landscapes",
      width: 600,
      height: 400
    }
  }
} as const;

/**
 * Génère les props optimisées pour le composant Next.js Image
 */
export function getImageProps(config: ImageConfig) {
  return {
    src: config.src,
    alt: config.alt,
    width: config.width,
    height: config.height,
    priority: config.priority || false,
    className: "object-cover",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  };
}