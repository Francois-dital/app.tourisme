export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Initialisation côté serveur
    console.log('Server instrumentation registered')
    
    // Vous pouvez ajouter vos propres outils de monitoring ici
    // Exemple: initialiser un logger personnalisé
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Initialisation côté edge
    console.log('Edge instrumentation registered')
  }
}

// Optionnel: exporter des fonctions d'erreur
export function onRequestError(error: Error) {
  console.error('Request error:', error)
}

export function onPageError(error: Error, url: string) {
  console.error(`Page error for ${url}:`, error)
}