'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import LanguageSelector from '@/components/ui/LanguageSelector'

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Tours', href: '/tours' },
  { name: 'Destinations', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function HeaderApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="w-full bg-[#111811] text-white py-2 px-6 md:px-20 flex justify-between items-center text-xs md:text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Icon name="call" className="text-primary" />
            <span>+261 34 31 416 49</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Icon name="mail" className="text-primary" />
            <span>contact@elmadagascar-tours.mg</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#dbe6db] dark:border-white/10 px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-background-dark">
              <Icon name="terrain" size="xl" className="font-bold" />
            </div>
            <h2 className="text-xl font-extrabold tracking-tighter uppercase">
              ELMADAGASCAR <span className="text-primary">Tours</span>
            </h2>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold text-sm transition-colors ${
                  pathname === item.href 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Inquire Now
            </Button>
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="menu" size="xl" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}