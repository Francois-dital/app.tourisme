'use client'

import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Icon } from '@/components/ui/Icon'

// Composants de drapeaux SVG
function USFlag() {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm border border-gray-300">
      <defs>
        <pattern id="stars" x="0" y="0" width="4" height="3" patternUnits="userSpaceOnUse">
          <rect width="4" height="3" fill="#002868"/>
          <circle cx="2" cy="1.5" r="0.3" fill="white"/>
        </pattern>
      </defs>
      <rect width="20" height="15" fill="#BF0A30"/>
      <rect width="20" height="1.15" y="0" fill="white"/>
      <rect width="20" height="1.15" y="2.31" fill="white"/>
      <rect width="20" height="1.15" y="4.62" fill="white"/>
      <rect width="20" height="1.15" y="6.92" fill="white"/>
      <rect width="20" height="1.15" y="9.23" fill="white"/>
      <rect width="20" height="1.15" y="11.54" fill="white"/>
      <rect width="20" height="1.15" y="13.85" fill="white"/>
      <rect width="8" height="8" fill="#002868"/>
      <rect width="8" height="8" fill="url(#stars)"/>
    </svg>
  )
}

function FrenchFlag() {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm border border-gray-300">
      <rect width="6.67" height="15" fill="#002395"/>
      <rect x="6.67" width="6.67" height="15" fill="white"/>
      <rect x="13.33" width="6.67" height="15" fill="#ED2939"/>
    </svg>
  )
}

// Composant pour afficher les drapeaux
function FlagIcon({ country }: { country: 'us' | 'fr' }) {
  return country === 'us' ? <USFlag /> : <FrenchFlag />
}

export default function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', country: 'us' as const },
    { code: 'fr', name: 'Français', country: 'fr' as const }
  ]

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/10 transition-colors"
      >
        <FlagIcon country={currentLang.country} />
        <span className="text-sm font-medium">{currentLang.code.toUpperCase()}</span>
        <Icon 
          name={isOpen ? "expand_less" : "expand_more"} 
          size="sm" 
          className="transition-transform"
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[60]" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-[70] min-w-[120px]">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  changeLanguage(language.code as 'en' | 'fr')
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  currentLanguage === language.code 
                    ? 'text-primary font-medium' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <FlagIcon country={language.country} />
                <span>{language.name}</span>
                {currentLanguage === language.code && (
                  <Icon name="check" size="sm" className="ml-auto text-primary" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}