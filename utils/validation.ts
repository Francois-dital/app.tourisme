export interface ValidationError {
  field: string
  message: string
}

export interface FormData {
  fullName: string
  email: string
  phone: string
  nationality: string
  selectionType: string
  selectedCircuit: string
  selectedDestination: string
  travelDates: string
  numberOfTravelers: string
  message: string
}

export const validateForm = (data: FormData): ValidationError[] => {
  const errors: ValidationError[] = []

  // Validation du nom complet
  if (!data.fullName.trim()) {
    errors.push({ field: 'fullName', message: 'Le nom complet est requis' })
  } else if (data.fullName.trim().length < 2) {
    errors.push({ field: 'fullName', message: 'Le nom doit contenir au moins 2 caractères' })
  } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.fullName.trim())) {
    errors.push({ field: 'fullName', message: 'Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets' })
  }

  // Validation de l'email
  if (!data.email.trim()) {
    errors.push({ field: 'email', message: 'L\'adresse email est requise' })
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email.trim())) {
      errors.push({ field: 'email', message: 'Veuillez saisir une adresse email valide' })
    }
  }

  // Validation du téléphone (optionnel mais si rempli, doit être valide)
  if (data.phone.trim()) {
    // Format plus flexible : +XXX suivi de chiffres, espaces et tirets autorisés
    const phoneRegex = /^\+\d{1,4}[\s\-]?[\d\s\-]{6,15}$/
    if (!phoneRegex.test(data.phone.trim())) {
      errors.push({ field: 'phone', message: 'Veuillez saisir un numéro de téléphone valide avec l\'indicatif international (ex: +261 34 00 000 00)' })
    }
  }

  // Validation de la nationalité (optionnel mais si rempli, doit être valide)
  if (data.nationality.trim()) {
    if (data.nationality.trim().length < 2) {
      errors.push({ field: 'nationality', message: 'La nationalité doit contenir au moins 2 caractères' })
    } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.nationality.trim())) {
      errors.push({ field: 'nationality', message: 'La nationalité ne peut contenir que des lettres, espaces, apostrophes et tirets' })
    }
  }

  // Validation du type de sélection
  if (!data.selectionType) {
    errors.push({ field: 'selectionType', message: 'Veuillez choisir un type (Tours ou Destinations)' })
  }

  // Validation de la sélection (circuit ou destination)
  if (data.selectionType === 'tours' && !data.selectedCircuit) {
    errors.push({ field: 'selectedCircuit', message: 'Veuillez sélectionner un circuit' })
  }
  if (data.selectionType === 'destinations' && !data.selectedDestination) {
    errors.push({ field: 'selectedDestination', message: 'Veuillez sélectionner une destination' })
  }

  // Validation des dates de voyage
  if (!data.travelDates.trim()) {
    errors.push({ field: 'travelDates', message: 'Les dates de voyage sont requises' })
  } else {
    const selectedDate = new Date(data.travelDates)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (selectedDate < today) {
      errors.push({ field: 'travelDates', message: 'La date de voyage ne peut pas être dans le passé' })
    }
  }

  // Validation du nombre de voyageurs
  if (!data.numberOfTravelers.trim()) {
    errors.push({ field: 'numberOfTravelers', message: 'Le nombre de voyageurs est requis' })
  } else {
    const travelers = parseInt(data.numberOfTravelers)
    if (isNaN(travelers) || travelers < 1) {
      errors.push({ field: 'numberOfTravelers', message: 'Le nombre de voyageurs doit être au moins 1' })
    } else if (travelers > 20) {
      errors.push({ field: 'numberOfTravelers', message: 'Pour plus de 20 voyageurs, veuillez nous contacter directement' })
    }
  }

  return errors
}

export const getFieldError = (errors: ValidationError[], fieldName: string): string | undefined => {
  const error = errors.find(err => err.field === fieldName)
  return error?.message
}