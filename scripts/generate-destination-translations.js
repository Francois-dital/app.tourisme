// Script pour générer les clés de traduction manquantes pour les destinations
// Exécuter avec: node scripts/generate-destination-translations.js

const fs = require('fs')
const path = require('path')

// Importer les données des destinations (simulé)
const destinationsData = [
  // Ici on pourrait importer les vraies données, mais pour l'exemple on les simule
]

function generateTranslationKeys() {
  const englishTranslations = {}
  const frenchTranslations = {}
  
  destinationsData.forEach(destination => {
    const key = destination.slug
    
    // Générer les clés anglaises (données originales)
    englishTranslations[key] = {
      name: destination.name,
      subtitle: destination.subtitle,
      description: destination.description,
      highlights: destination.highlights
    }
    
    // Pour le français, on pourrait utiliser une API de traduction ou laisser des placeholders
    frenchTranslations[key] = {
      name: `[FR] ${destination.name}`,
      subtitle: `[FR] ${destination.subtitle}`,
      description: `[FR] ${destination.description}`,
      highlights: destination.highlights.map(h => `[FR] ${h}`)
    }
  })
  
  console.log('English translations:')
  console.log(JSON.stringify(englishTranslations, null, 2))
  
  console.log('\nFrench translations (to be translated):')
  console.log(JSON.stringify(frenchTranslations, null, 2))
}

// generateTranslationKeys()
console.log('Script ready - uncomment the last line to generate translations')