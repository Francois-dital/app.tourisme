# MadaTours - Madagascar Tourism Landing Page

Une landing page moderne et responsive pour une agence de tourisme à Madagascar, construite avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Technologies Utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS utilitaire
- **Material Icons** - Icônes Google Material
- **Plus Jakarta Sans** - Police Google Fonts

## 📁 Architecture du Projet

```
app.tourisme/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil
│   └── globals.css              # Styles globaux
├── components/                   # Composants réutilisables
│   ├── layout/                  # Composants de layout
│   │   ├── header.app.tsx       # En-tête de navigation
│   │   └── footer.app.tsx       # Pied de page
│   ├── sections/                # Sections de la page
│   │   ├── hero.section.tsx     # Section héro
│   │   ├── about.section.tsx    # Section à propos
│   │   ├── tours.section.tsx    # Section circuits
│   │   ├── booking.section.tsx  # Section réservation
│   │   ├── fleet.section.tsx    # Section flotte
│   │   └── contact.section.tsx  # Section contact
│   └── ui/                      # Composants UI
│       ├── material.icon.tsx    # Composant icône Material
│       └── whatsapp.button.tsx  # Bouton WhatsApp flottant
├── hooks/                       # Hooks personnalisés
│   └── use.calendar.ts          # Hook pour le calendrier
├── services/                    # Services et logique métier
│   └── tours.service.ts         # Service pour les données tours
├── types/                       # Types TypeScript
│   └── tour.types.ts            # Types pour les tours et véhicules
├── utils/                       # Utilitaires
│   └── image.utils.ts           # Utilitaires pour les images
├── public/images/               # Images locales
│   ├── hero-background.jpg      # Image de fond héro
│   ├── about-image.jpg          # Image section à propos
│   ├── tour-baobab.jpg          # Circuit Baobab
│   ├── tour-nosy-be.jpg         # Circuit Nosy Be
│   └── tour-isalo.jpg           # Circuit Isalo
└── tailwind.config.ts           # Configuration Tailwind
```

## 🎨 Nomenclature des Fichiers

Le projet suit une nomenclature stricte en minuscules :

- **Composants** : `nom.type.tsx` (ex: `header.app.tsx`, `hero.section.tsx`)
- **Hooks** : `use.nom.ts` (ex: `use.calendar.ts`)
- **Services** : `nom.service.ts` (ex: `tours.service.ts`)
- **Types** : `nom.types.ts` (ex: `tour.types.ts`)
- **Utilitaires** : `nom.utils.ts` (ex: `image.utils.ts`)

## 🖼️ Images

Toutes les images sont stockées localement dans `public/images/` pour de meilleures performances :

- `hero-background.jpg` - Image de fond de la section héro
- `about-image.jpg` - Image de la section à propos
- `tour-baobab.jpg` - Circuit Baobab Quest
- `tour-nosy-be.jpg` - Circuit Turquoise Waters
- `tour-isalo.jpg` - Circuit Great South

### Optimisation des Images
- Utilisation du composant `next/image` pour l'optimisation automatique
- Images responsive avec `sizes` appropriées
- Lazy loading par défaut (sauf image héro avec `priority`)

## 🌟 Fonctionnalités

### Sections Principales
- **Hero** - Image de fond avec call-to-action
- **About** - Présentation de l'agence avec avantages
- **Tours** - Circuits touristiques avec prix et détails
- **Booking** - Calendrier interactif et formulaire de réservation
- **Fleet** - Présentation de la flotte de véhicules 4x4
- **Contact** - Informations de contact avec carte intégrée

### Fonctionnalités Techniques
- **Responsive Design** - Optimisé pour mobile, tablette et desktop
- **Dark Mode** - Support du mode sombre
- **Animations** - Transitions fluides et effets hover
- **SEO Optimized** - Métadonnées et structure sémantique
- **Performance** - Images optimisées avec Next.js Image
- **Accessibilité** - Respect des standards WCAG

## 🚀 Installation et Démarrage

```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev

# Build de production
npm run build

# Démarrage en production
npm start
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.ts` et `globals.css` :

```css
:root {
  --primary: #0df259;      /* Vert principal */
  --secondary: #ff9800;    /* Orange secondaire */
  --accent: #f5f5dc;       /* Beige accent */
  --background-light: #f5f8f6;  /* Fond clair */
  --background-dark: #102216;   /* Fond sombre */
}
```

### Données
Les données des tours et véhicules sont centralisées dans `services/tours.service.ts` pour faciliter la maintenance.

## 📱 Responsive Breakpoints

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🔧 Scripts Disponibles

- `npm run dev` - Démarrage en mode développement
- `npm run build` - Build de production
- `npm run start` - Démarrage du serveur de production
- `npm run lint` - Vérification du code avec ESLint

## 📄 Licence

Ce projet est développé pour MadaTours Madagascar.