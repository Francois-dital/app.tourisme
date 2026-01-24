'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
]

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
      >
        <Icon name="language" />
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        <Icon name="keyboard_arrow_down" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10 rounded-lg shadow-lg py-2 min-w-[120px] z-[70]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrentLang(lang)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-white/10 flex items-center gap-3 ${
                currentLang.code === lang.code ? 'text-primary' : ''
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}