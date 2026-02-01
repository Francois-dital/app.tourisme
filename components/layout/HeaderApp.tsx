import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import LanguageSelector from '@/components/ui/LanguageSelector'

export default function HeaderApp() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.tours'), href: '/tours' },
    { name: t('nav.destinations'), href: '/destinations' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '/home'
    }
    if (href === '/tours') {
      return pathname === '/tours' || pathname.startsWith('/tours/')
    }
    if (href === '/destinations') {
      return pathname === '/destinations' || pathname.startsWith('/destinations/')
    }
    return pathname === href
  }

  return (
    <>
      <div className="w-full bg-[#111811] text-white py-2 px-6 md:px-20 lg:px-24 xl:px-32 flex justify-between items-center text-xs md:text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform">
            <Icon name="call" className="text-primary" />
            <span>+261 34 31 416 49</span>
          </div>
          <div className="hidden md:flex items-center gap-2 hover:scale-105 transition-transform">
            <Icon name="mail" className="text-primary" />
            <span>elmadagascar1@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#dbe6db] dark:border-white/10 px-6 md:px-20 lg:px-24 xl:px-32 py-4">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <Image 
              src="/logo.png" 
              alt="ELMADAGASCAR Logo" 
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
              sizes="40px"
            />
            <h2 className="text-xl font-extrabold tracking-tighter uppercase hidden md:inline">
              <span>ELMADAGASCAR</span>
            </h2>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold text-sm transition-all hover:scale-105 ${
                  isActive(item.href) 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/booking">
              <Button 
                variant={pathname === '/booking' ? 'primary' : 'outline'}
                size="sm" 
                className={`hidden md:flex hover:scale-105 transition-all ${
                  pathname === '/booking' 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white'
                }`}
              >
                {t('nav.booking')}
              </Button>
            </Link>
            <button 
              className="lg:hidden hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={isMenuOpen}
              type="button"
            >
              <Icon name="menu" size="xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-white/10 pt-4">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-semibold text-sm transition-all ${
                    isActive(item.href) 
                      ? 'text-primary' 
                      : 'hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="primary"
                  size="sm" 
                  className="w-full"
                >
                  {t('nav.booking')}
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
