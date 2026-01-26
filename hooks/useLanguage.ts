'use client'

import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'

export function useLanguage() {
  const { i18n } = useTranslation()

  const changeLanguage = useCallback((language: 'en' | 'fr') => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }, [i18n])

  const currentLanguage = i18n.language as 'en' | 'fr'

  return {
    currentLanguage,
    changeLanguage,
    isEnglish: currentLanguage === 'en',
    isFrench: currentLanguage === 'fr'
  }
}