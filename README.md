# ELMADAGASCAR - Plateforme de Tourisme Madagascar

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://reactjs.org/)

Une plateforme web moderne et multilingue pour une agence de tourisme spécialisée dans les voyages à Madagascar. Développée avec Next.js 16, TypeScript et Tailwind CSS v4.

## 📋 Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Architecture](#architecture)
- [Configuration](#configuration)
- [Déploiement](#déploiement)
- [Contribution](#contribution)
- [Support](#support)

## 🌟 Aperçu

ELMADAGASCAR est une plateforme de réservation de voyages qui permet aux utilisateurs de découvrir et réserver des circuits touristiques à Madagascar. La plateforme offre une expérience utilisateur optimisée avec support multilingue, design responsive et fonctionnalités de réservation avancées.

### Démonstration

🔗 **[Voir la démo en direct](https://votre-domaine.com)** *(remplacer par l'URL réelle)*

## ✨ Fonctionnalités

### 🌍 Fonctionnalités Principales
- **Catalogue de destinations** - Exploration des destinations touristiques de Madagascar
- **Système de réservation** - Réservation en ligne avec calendrier interactif
- **Support multilingue** - Interface disponible en français et anglais
- **Galerie de circuits** - Présentation détaillée des tours disponibles
- **Contact intégré** - Formulaire de contact avec intégration email

### 🎨 Expérience Utilisateur
- **Design responsive** - Optimisé pour mobile, tablette et desktop
- **Animations fluides** - Transitions et effets visuels modernes
- **Navigation intuitive** - Interface utilisateur claire et accessible
- **Performance optimisée** - Chargement rapide et SEO-friendly

### 🔧 Fonctionnalités Techniques
- **Rendu côté serveur (SSR)** - Performance et SEO optimisés
- **Optimisation d'images** - Compression et lazy loading automatiques
- **Bundle analyzer** - Analyse de la taille des bundles
- **Linting automatique** - Code quality avec ESLint et TypeScript

## 🛠 Technologies

### Frontend
- **[Next.js 16.1.4](https://nextjs.org/)** - Framework React avec App Router
- **[React 19.2.3](https://reactjs.org/)** - Bibliothèque UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitaire

### Internationalisation
- **[i18next 25.8.0](https://www.i18next.com/)** - Framework d'internationalisation
- **[react-i18next 16.5.3](https://react.i18next.com/)** - Intégration React pour i18next

### Outils de Développement
- **[ESLint](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)** - Analyse des bundles
- **[Nodemailer](https://nodemailer.com/)** - Envoi d'emails

### Utilitaires
- **[clsx](https://github.com/lukeed/clsx)** - Gestion conditionnelle des classes CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Fusion intelligente des classes Tailwind

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 ou **yarn** >= 1.22.0
- **Git** pour le contrôle de version

## 🚀 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/Francois-dital/app.tourisme.git
cd elmadagascar
```

### 2. Installer les dépendances

```bash
npm install
# ou
yarn install
```

### 3. Configuration de l'environnement

Créer un fichier `.env.local` à la racine du projet :

```env
# Configuration email (optionnel)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password

# Configuration Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Démarrer le serveur de développement

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 💻 Utilisation

### Scripts disponibles

```bash
# Développement
npm run dev          # Démarrer le serveur de développement

# Production
npm run build        # Construire l'application pour la production
npm run start        # Démarrer le serveur de production

# Qualité du code
npm run lint         # Vérifier le code avec ESLint

# Analyse
npm run analyze      # Analyser la taille des bundles (si configuré)
```

### Structure des URLs

- `/` - Page d'accueil
- `/about` - À propos de l'agence
- `/destinations` - Catalogue des destinations
- `/destinations/[slug]` - Détail d'une destination
- `/tours/[slug]` - Détail d'un circuit
- `/booking` - Page de réservation

## 🏗 Architecture

### Structure du projet

```
elmadagascar/
├── app/                          # App Router Next.js
│   ├── (routes)/                 # Routes groupées
│   │   ├── about/               # Page à propos
│   │   ├── destinations/        # Pages destinations
│   │   ├── tours/               # Pages circuits
│   │   └── booking/             # Page réservation
│   ├── api/                     # API Routes
│   ├── globals.css              # Styles globaux
│   ├── layout.tsx               # Layout racine
│   └── page.tsx                 # Page d'accueil
├── components/                   # Composants réutilisables
│   ├── feature/                 # Composants métier
│   │   ├── about/              # Composants page à propos
│   │   ├── booking/            # Composants réservation
│   │   ├── destinations/       # Composants destinations
│   │   └── home/               # Composants page d'accueil
│   ├── layout/                  # Composants de layout
│   │   ├── HeaderApp.tsx       # En-tête navigation
│   │   └── FooterApp.tsx       # Pied de page
│   ├── providers/               # Providers React
│   └── ui/                      # Composants UI génériques
├── data/                        # Données statiques
├── hooks/                       # Hooks personnalisés
├── lib/                         # Bibliothèques et configurations
├── services/                    # Services et API
├── types/                       # Types TypeScript
├── utils/                       # Fonctions utilitaires
└── public/                      # Assets statiques
```

### Conventions de nommage

- **Composants** : PascalCase (`HeaderApp.tsx`)
- **Hooks** : camelCase avec préfixe `use` (`usePageTitle.ts`)
- **Utilitaires** : camelCase avec suffixe `.utils` (`metadata.utils.ts`)
- **Types** : PascalCase avec suffixe `Type` ou `Interface`
- **Constantes** : UPPER_SNAKE_CASE

## ⚙️ Configuration

### Tailwind CSS

La configuration Tailwind est dans `tailwind.config.ts` avec :
- Thème personnalisé pour Madagascar
- Variables CSS pour le mode sombre
- Breakpoints responsive optimisés

### Internationalisation

Configuration i18n dans `lib/i18n.ts` :
- Support français/anglais
- Détection automatique de la langue
- Traductions organisées par namespace

### TypeScript

Configuration stricte dans `tsconfig.json` :
- Mode strict activé
- Path mapping configuré
- Types Next.js inclus

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### Build manuel

```bash
# Construire l'application
npm run build

# Les fichiers de production sont dans le dossier .next/
```

### Variables d'environnement de production

Configurer les variables suivantes sur votre plateforme de déploiement :

```env
NEXT_PUBLIC_SITE_URL=https://elmadagascar-tours.com/
SMTP_HOST=your-production-smtp
SMTP_USER=your-production-email
SMTP_PASS=your-production-password
```

## 🤝 Contribution

### Workflow de contribution

1. **Fork** le projet
2. **Créer** une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commit** les changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. **Push** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Ouvrir** une Pull Request

### Standards de code

- Utiliser TypeScript pour tous les nouveaux fichiers
- Suivre les règles ESLint configurées
- Ajouter des tests pour les nouvelles fonctionnalités
- Documenter les composants complexes

### Commits conventionnels

```
feat: ajout d'une nouvelle fonctionnalité
fix: correction d'un bug
docs: mise à jour de la documentation
style: changements de formatage
refactor: refactorisation du code
test: ajout ou modification de tests
```

## 📞 Support

### Problèmes courants

**Erreur de build TypeScript**
```bash
# Nettoyer le cache TypeScript
rm -rf .next
npm run build
```

**Problèmes de dépendances**
```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

### Contact

- **Email** : [email]@elmadagascar1@gmail.com
- **Issues** : [GitHub Issues](https://github.com/Francois-dital/app.tourisme/issues)
- **Documentation** : [Wiki du projet](https://github.com/Francois-dital/app.tourisme/wiki)

---

## 📄 Licence

Ce projet est la propriété de **ELMADAGASCAR**. Tous droits réservés.

---

<div align="center">

**[⬆ Retour en haut](#elmadagascar---plateforme-de-tourisme-madagascar)**

Développé avec ❤️ pour Madagascar

</div>