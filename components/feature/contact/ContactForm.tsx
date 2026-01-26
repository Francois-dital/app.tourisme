'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

export default function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    selectedCircuit: '',
    travelDates: '',
    numberOfTravelers: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-100 dark:border-white/10 p-8">
      <ScrollAnimation animation="fade" delay={100}>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Icon name="edit_document" className="text-primary" />
          {t('contact.form.title')}
        </h2>
      </ScrollAnimation>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollAnimation animation="slide-right" delay={150}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.name')}</span>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t('contact.form.namePlaceholder')}
                type="text"
                required
              />
            </label>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slide-right" delay={200}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.email')}</span>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t('contact.form.emailPlaceholder')}
                type="email"
                required
              />
            </label>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollAnimation animation="slide-right" delay={250}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.phone')}</span>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t('contact.form.phonePlaceholder')}
                type="tel"
              />
            </label>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slide-right" delay={300}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.nationality')}</span>
              <input
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t('contact.form.nationalityPlaceholder')}
                type="text"
              />
            </label>
          </ScrollAnimation>
        </div>

        <div className="border-t border-gray-100 dark:border-white/10 pt-6 space-y-6">
          <ScrollAnimation animation="slide-right" delay={350}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.selectedCircuit')}</span>
              <select
                name="selectedCircuit"
                value={formData.selectedCircuit}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">{t('contact.form.circuitPlaceholder')}</option>
                <option value="east">{t('contact.form.circuitOptions.east')}</option>
                <option value="south">{t('contact.form.circuitOptions.south')}</option>
                <option value="west">{t('contact.form.circuitOptions.west')}</option>
                <option value="north">{t('contact.form.circuitOptions.north')}</option>
                <option value="custom">{t('contact.form.circuitOptions.custom')}</option>
              </select>
            </label>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimation animation="slide-right" delay={400}>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">{t('contact.form.travelDates')}</span>
                <div className="relative">
                  <input
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark h-12 px-4 pl-10 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={t('contact.form.travelDatesPlaceholder')}
                    type="text"
                  />
                  <Icon name="calendar_month" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size="sm" />
                </div>
              </label>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-right" delay={450}>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">{t('contact.form.numberOfTravelers')}</span>
                <input
                  name="numberOfTravelers"
                  value={formData.numberOfTravelers}
                  onChange={handleInputChange}
                  className="rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  min="1"
                  placeholder={t('contact.form.numberOfTravelersPlaceholder')}
                  type="number"
                />
              </label>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slide-right" delay={500}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold">{t('contact.form.message')}</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
                rows={4}
              />
            </label>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade" delay={550}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <Icon name="verified_user" className="text-primary" />
              <span>{t('contact.form.guarantee')}</span>
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] py-4 px-8 text-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              {t('contact.form.send')}
              <Icon name="send" size="sm" />
            </Button>
          </div>
        </ScrollAnimation>
      </form>
    </div>
  )
}