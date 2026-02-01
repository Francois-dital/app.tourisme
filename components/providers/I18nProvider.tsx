'use client'

import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'

interface I18nProviderProps {
  children: React.ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Load saved language from localStorage only on client side
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      i18n.changeLanguage(savedLanguage)
    }
    setIsInitialized(true)
  }, [])

  // Always render the same structure to prevent hydration mismatch
  return (
    <I18nextProvider i18n={i18n}>
      <div style={{ visibility: isInitialized ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </I18nextProvider>
  )
}