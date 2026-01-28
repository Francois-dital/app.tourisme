'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { toursData } from '@/data/tours'
import { destinationsData } from '@/data/destinations'
import { validateForm, getFieldError, type ValidationError, type FormData } from '@/utils/validation'

interface BookingFormProps {
  prefilledTour?: string
  tourPrice?: string
  tourDuration?: string
  isBooking?: boolean
  prefilledDestination?: string
  destinationRegion?: string
  destinationCategory?: string
  destinationDuration?: string
  destinationDifficulty?: string
  destinationBestTime?: string
}

export default function BookingForm({ 
  prefilledTour, 
  tourPrice, 
  tourDuration, 
  isBooking = false,
  prefilledDestination,
  destinationRegion,
  destinationCategory,
  destinationDuration,
  destinationDifficulty,
  destinationBestTime
}: BookingFormProps) {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    selectionType: prefilledTour ? 'tours' : prefilledDestination ? 'destinations' : '',
    selectedCircuit: prefilledTour || '',
    selectedDestination: prefilledDestination || '',
    travelDates: '',
    numberOfTravelers: '',
    message: ''
  })

  useEffect(() => {
    if (prefilledTour) {
      setFormData(prev => ({
        ...prev,
        selectionType: 'tours',
        selectedCircuit: prefilledTour,
        message: `Je souhaite réserver le circuit "${prefilledTour}"${tourPrice ? ` au prix de ${tourPrice}` : ''}${tourDuration ? ` d'une durée de ${tourDuration}` : ''}.\n\nMerci de me contacter pour finaliser ma réservation.`
      }))
    } else if (prefilledDestination) {
      setFormData(prev => ({
        ...prev,
        selectionType: 'destinations',
        selectedDestination: prefilledDestination,
        message: `Je suis intéressé(e) par la destination "${prefilledDestination}"${destinationRegion ? ` (${destinationRegion})` : ''}.\n\nDétails de la destination :\n${destinationCategory ? `- Catégorie : ${destinationCategory}\n` : ''}${destinationDuration ? `- Durée recommandée : ${destinationDuration}\n` : ''}${destinationDifficulty ? `- Difficulté : ${destinationDifficulty}\n` : ''}${destinationBestTime ? `- Meilleure période : ${destinationBestTime}\n` : ''}\nMerci de me proposer des circuits incluant cette destination.`
      }))
    }
  }, [prefilledTour, tourPrice, tourDuration, prefilledDestination, destinationRegion, destinationCategory, destinationDuration, destinationDifficulty, destinationBestTime])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Restrictions de saisie en temps réel
    let filteredValue = value
    
    if (name === 'fullName' || name === 'nationality') {
      // Autoriser seulement lettres, espaces, apostrophes et tirets
      filteredValue = value.replace(/[^a-zA-ZÀ-ÿ\s'-]/g, '')
    } else if (name === 'phone') {
      // Autoriser seulement +, chiffres, espaces et tirets
      filteredValue = value.replace(/[^+\d\s-]/g, '')
    } else if (name === 'numberOfTravelers') {
      // Autoriser seulement les chiffres
      filteredValue = value.replace(/[^0-9]/g, '')
      // Limiter à 20 maximum
      if (parseInt(filteredValue) > 20) {
        filteredValue = '20'
      }
    }
    
    setFormData(prev => {
      const newData = { ...prev, [name]: filteredValue }
      
      // Reset selection when type changes
      if (name === 'selectionType') {
        newData.selectedCircuit = ''
        newData.selectedDestination = ''
      }
      
      return newData
    })
    
    // Clear validation errors for this field
    if (validationErrors.length > 0) {
      setValidationErrors(prev => prev.filter(error => error.field !== name))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation du formulaire
    const errors = validateForm(formData)
    if (errors.length > 0) {
      setValidationErrors(errors)
      setSubmitStatus('error')
      setSubmitMessage('Veuillez corriger les erreurs dans le formulaire')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')
    setValidationErrors([])

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tourPrice,
          tourDuration,
          type: isBooking ? 'booking' : 'contact'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(
          isBooking 
            ? 'Votre demande de réservation a été envoyée avec succès ! Nous vous contacterons dans les 24 heures.'
            : 'Votre message a été envoyé avec succès ! Nous vous contacterons dans les 24 heures.'
        )
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            nationality: '',
            selectionType: prefilledTour ? 'tours' : prefilledDestination ? 'destinations' : '',
            selectedCircuit: prefilledTour || '',
            selectedDestination: prefilledDestination || '',
            travelDates: '',
            numberOfTravelers: '',
            message: prefilledTour 
              ? `Je souhaite réserver le circuit "${prefilledTour}"${tourPrice ? ` au prix de ${tourPrice}` : ''}${tourDuration ? ` d'une durée de ${tourDuration}` : ''}.\n\nMerci de me contacter pour finaliser ma réservation.`
              : prefilledDestination
              ? `Je suis intéressé(e) par la destination "${prefilledDestination}"${destinationRegion ? ` (${destinationRegion})` : ''}.\n\nDétails de la destination :\n${destinationCategory ? `- Catégorie : ${destinationCategory}\n` : ''}${destinationDuration ? `- Durée recommandée : ${destinationDuration}\n` : ''}${destinationDifficulty ? `- Difficulté : ${destinationDifficulty}\n` : ''}${destinationBestTime ? `- Meilleure période : ${destinationBestTime}\n` : ''}\nMerci de me proposer des circuits incluant cette destination.`
              : ''
          })
          setSubmitStatus('idle')
          setSubmitMessage('')
          setValidationErrors([])
        }, 5000)
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-100 dark:border-white/10 p-8">
      <ScrollAnimation animation="fade" delay={100}>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Icon name={isBooking ? "confirmation_number" : "edit_document"} className="text-primary" />
          {isBooking ? t('booking.form.title') : t('contact.form.title')}
        </h2>
      </ScrollAnimation>

      {(prefilledTour || prefilledDestination) && (
        <ScrollAnimation animation="fade" delay={150}>
          <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
            <h3 className="font-bold text-primary mb-2">
              {prefilledTour ? t('booking.form.tourSelected') : t('contact.form.selectedDestination')}
            </h3>
            <p className="font-semibold">{prefilledTour || prefilledDestination}</p>
            {prefilledTour && tourPrice && <p className="text-sm text-gray-600 dark:text-gray-400">Prix: {tourPrice}</p>}
            {prefilledTour && tourDuration && <p className="text-sm text-gray-600 dark:text-gray-400">Durée: {tourDuration}</p>}
            {prefilledDestination && destinationRegion && <p className="text-sm text-gray-600 dark:text-gray-400">Région: {destinationRegion}</p>}
            {prefilledDestination && destinationCategory && <p className="text-sm text-gray-600 dark:text-gray-400">Catégorie: {destinationCategory}</p>}
          </div>
        </ScrollAnimation>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollAnimation animation="slide-right" delay={200}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.name')} *</span>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`rounded-lg border ${getFieldError(validationErrors, 'fullName') ? 'border-red-500' : 'border-gray-200 dark:border-white/20'} bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                placeholder={t('contact.form.namePlaceholder')}
                type="text"
                pattern="[a-zA-ZÀ-ÿ\s'-]+"
                title="Seules les lettres, espaces, apostrophes et tirets sont autorisés"
                required
              />
              {getFieldError(validationErrors, 'fullName') && (
                <span className="text-red-500 text-xs flex items-center gap-1">
                  <Icon name="error" size="sm" />
                  {getFieldError(validationErrors, 'fullName')}
                </span>
              )}
            </label>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slide-right" delay={250}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.email')} *</span>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`rounded-lg border ${getFieldError(validationErrors, 'email') ? 'border-red-500' : 'border-gray-200 dark:border-white/20'} bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                placeholder={t('contact.form.emailPlaceholder')}
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Veuillez saisir une adresse email valide"
                required
              />
              {getFieldError(validationErrors, 'email') && (
                <span className="text-red-500 text-xs flex items-center gap-1">
                  <Icon name="error" size="sm" />
                  {getFieldError(validationErrors, 'email')}
                </span>
              )}
            </label>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollAnimation animation="slide-right" delay={300}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.phone')}</span>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`rounded-lg border ${getFieldError(validationErrors, 'phone') ? 'border-red-500' : 'border-gray-200 dark:border-white/20'} bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                placeholder={t('contact.form.phonePlaceholder')}
                type="tel"
                pattern="^\+\d{1,4}[\s\-]?[\d\s\-]{6,15}$"
                title="Format: +XXX XXXXXXXXX (avec indicatif international)"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {t('contact.form.phoneHelper')}
              </span>
              {getFieldError(validationErrors, 'phone') && (
                <span className="text-red-500 text-xs flex items-center gap-1">
                  <Icon name="error" size="sm" />
                  {getFieldError(validationErrors, 'phone')}
                </span>
              )}
            </label>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slide-right" delay={350}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.nationality')}</span>
              <input
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className={`rounded-lg border ${getFieldError(validationErrors, 'nationality') ? 'border-red-500' : 'border-gray-200 dark:border-white/20'} bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                placeholder={t('contact.form.nationalityPlaceholder')}
                type="text"
                pattern="[a-zA-ZÀ-ÿ\s'-]+"
                title="Seules les lettres, espaces, apostrophes et tirets sont autorisés"
              />
              {getFieldError(validationErrors, 'nationality') && (
                <span className="text-red-500 text-xs flex items-center gap-1">
                  <Icon name="error" size="sm" />
                  {getFieldError(validationErrors, 'nationality')}
                </span>
              )}
            </label>
          </ScrollAnimation>
        </div>

        <div className="border-t border-gray-100 dark:border-white/10 pt-6 space-y-6">
          {!prefilledTour && !prefilledDestination && (
            <ScrollAnimation animation="slide-right" delay={400}>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">{t('contact.form.selectionType')} *</span>
                <select
                  name="selectionType"
                  value={formData.selectionType}
                  onChange={handleInputChange}
                  className={`rounded-lg border ${getFieldError(validationErrors, 'selectionType') ? 'border-red-500' : 'border-gray-200 dark:border-white/20'} bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  required
                >
                  <option value="">{t('contact.form.selectionTypePlaceholder')}</option>
                  <option value="tours">{t('contact.form.selectionTypeOptions.tours')}</option>
                  <option value="destinations">{t('contact.form.selectionTypeOptions.destinations')}</option>
                </select>
                {getFieldError(validationErrors, 'selectionType') && (
                  <span className="text-red-500 text-xs flex items-center gap-1">
                    <Icon name="error" size="sm" />
                    {getFieldError(validationErrors, 'selectionType')}
                  </span>
                )}
              </label>
            </ScrollAnimation>
          )}

          {(formData.selectionType || prefilledTour || prefilledDestination) && (
            <ScrollAnimation animation="slide-right" delay={420}>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">
                  {formData.selectionType === 'tours' 
                    ? t('contact.form.selectedCircuit') 
                    : t('contact.form.selectedDestination')
                  } *
                </span>
                <select
                  name={formData.selectionType === 'tours' ? 'selectedCircuit' : 'selectedDestination'}
                  value={formData.selectionType === 'tours' ? formData.selectedCircuit : formData.selectedDestination}
                  onChange={handleInputChange}
                  className={`rounded-lg border ${getFieldError(validationErrors, formData.selectionType === 'tours' ? 'selectedCircuit' : 'selectedDestination') ? 'border-red-500' : 'border-gray-200 dark:border-white/20'} bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  required
                  disabled={!!(prefilledTour || prefilledDestination)}
                >
                  <option value="">
                    {formData.selectionType === 'tours' 
                      ? t('contact.form.circuitPlaceholder') 
                      : t('contact.form.destinationPlaceholder')
                    }
                  </option>
                  {formData.selectionType === 'tours' 
                    ? toursData.map(tour => (
                        <option key={tour.id} value={tour.title}>
                          {tour.title} ({tour.duration})
                        </option>
                      ))
                    : destinationsData.map(destination => (
                        <option key={destination.id} value={destination.name}>
                          {destination.name} ({destination.region})
                        </option>
                      ))
                  }
                </select>
                {getFieldError(validationErrors, formData.selectionType === 'tours' ? 'selectedCircuit' : 'selectedDestination') && (
                  <span className="text-red-500 text-xs flex items-center gap-1">
                    <Icon name="error" size="sm" />
                    {getFieldError(validationErrors, formData.selectionType === 'tours' ? 'selectedCircuit' : 'selectedDestination')}
                  </span>
                )}
              </label>
            </ScrollAnimation>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimation animation="slide-right" delay={450}>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">{t('contact.form.travelDates')} *</span>
                <div className="relative">
                  <input
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg border ${getFieldError(validationErrors, 'travelDates') ? 'border-red-500' : 'border-gray-200 dark:border-white/20'} bg-white dark:bg-background-dark h-12 px-4 pl-10 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    placeholder="YYYY-MM-DD"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    title="La date ne peut pas être dans le passé"
                    required
                  />
                  <Icon name="calendar_month" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size="sm" />
                </div>
                {getFieldError(validationErrors, 'travelDates') && (
                  <span className="text-red-500 text-xs flex items-center gap-1">
                    <Icon name="error" size="sm" />
                    {getFieldError(validationErrors, 'travelDates')}
                  </span>
                )}
              </label>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-right" delay={500}>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">{t('contact.form.numberOfTravelers')} *</span>
                <input
                  name="numberOfTravelers"
                  value={formData.numberOfTravelers}
                  onChange={handleInputChange}
                  className={`rounded-lg border ${getFieldError(validationErrors, 'numberOfTravelers') ? 'border-red-500' : 'border-gray-200 dark:border-white/20'} bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  min="1"
                  max="20"
                  placeholder={t('contact.form.numberOfTravelersPlaceholder')}
                  type="number"
                  pattern="[1-9]|1[0-9]|20"
                  title="Nombre entre 1 et 20"
                  required
                />
                {getFieldError(validationErrors, 'numberOfTravelers') && (
                  <span className="text-red-500 text-xs flex items-center gap-1">
                    <Icon name="error" size="sm" />
                    {getFieldError(validationErrors, 'numberOfTravelers')}
                  </span>
                )}
              </label>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slide-right" delay={550}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.message')}</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
                rows={6}
              />
            </label>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade" delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <Icon name="verified_user" className="text-primary" />
              <span>{t('contact.form.guarantee')}</span>
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[200px] py-4 px-8 text-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Icon name="hourglass_empty" size="sm" className="animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  {isBooking ? t('booking.form.send') : t('contact.form.send')}
                  <Icon name="send" size="sm" />
                </>
              )}
            </Button>
          </div>
        </ScrollAnimation>

        {/* Message de statut */}
        {submitStatus !== 'idle' && (
          <ScrollAnimation animation="fade" delay={100}>
            <div className={`mt-6 p-4 rounded-lg border ${
              submitStatus === 'success' 
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
            }`}>
              <div className="flex items-center gap-2">
                <Icon 
                  name={submitStatus === 'success' ? 'check_circle' : 'error'} 
                  className={submitStatus === 'success' ? 'text-green-600' : 'text-red-600'} 
                />
                <p className="text-sm font-medium">{submitMessage}</p>
              </div>
            </div>
          </ScrollAnimation>
        )}
      </form>
    </div>
  )
}