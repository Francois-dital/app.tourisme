"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function FooterApp() {
  const { t } = useTranslation()
  const [isQROpen, setIsQROpen] = useState(false)

  const quickLinks = [
    { name: t('about.title'), href: '/about' },
    { name: t('nav.tours'), href: '/tours' },
    { name: t('nav.destinations'), href: '/destinations' },
    { name: 'Travel Tips', href: '#' },
    { name: 'Eco-responsibility', href: '#' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  return (
    <>
      <footer className="bg-[#111811] text-white pt-20 pb-10 px-6 md:px-20 lg:px-24 xl:px-32">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <ScrollAnimation animation="fade" delay={100}>
            <div>
              <Link href="/home" className="flex items-center mb-6 hover:scale-105 transition-transform inline-block">
                <Image 
                  src="/logo.png" 
                  alt="ELMADAGASCAR Logo" 
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t('footer.company.description')}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <Image 
                    src="/images/qr-code.jpeg" 
                    alt="QR Code - Contact ELMADAGASCAR" 
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded border border-white/20 cursor-pointer"
                    onClick={() => setIsQROpen(true)}
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <ScrollAnimation animation="scale" delay={200}>
                    <Link
                      href="https://www.facebook.com/61587278189321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all"
                      aria-label="Facebook"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </Link>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade" delay={150}>
            <div>
              <h5 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h5>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <ScrollAnimation animation="slide-right" delay={200 + (index * 50)}>
                      <Link href={link.href} className="hover:text-primary hover:translate-x-2 transition-all inline-block">
                        {link.name}
                      </Link>
                    </ScrollAnimation>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade" delay={200}>
            <div>
              <h5 className="text-lg font-bold mb-6">{t('footer.contact')}</h5>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li>
                  <ScrollAnimation animation="slide-right" delay={250}>
                    <div className="flex items-center gap-3">
                      <Icon name="location_on" className="text-primary" />
                      <span>Antsirabe, Madagascar</span>
                    </div>
                  </ScrollAnimation>
                </li>
                <li>
                  <ScrollAnimation animation="slide-right" delay={300}>
                    <div className="flex items-center gap-3">
                      <Icon name="phone_iphone" className="text-primary" />
                      <span>+261 34 31 416 49</span>
                    </div>
                  </ScrollAnimation>
                </li>
                <li>
                  <ScrollAnimation animation="slide-right" delay={350}>
                    <div className="flex items-center gap-3">
                      <Icon name="alternate_email" className="text-primary" />
                      <span>elmadagascar1@gmail.com</span>
                    </div>
                  </ScrollAnimation>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade" delay={250}>
            <div>
              <h5 className="text-lg font-bold mb-6">{t('footer.newsletter.title')}</h5>
              <p className="text-gray-400 text-sm mb-4">
                {t('footer.newsletter.description')}
              </p>
              <ScrollAnimation animation="fade" delay={300}>
                <div className="relative hover:scale-105 transition-transform">
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary focus:outline-none text-white text-sm hover:border-primary transition-colors"
                    placeholder={t('footer.newsletter.placeholder')}
                    type="email"
                  />
                  <Button
                    size="sm"
                    className="absolute right-2 top-2 px-4 py-1 text-xs uppercase hover:scale-105 transition-transform"
                  >
                    {t('footer.newsletter.subscribe')}
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade" delay={400}>
          <div className="pt-10 border-t border-white/5 text-center text-gray-500 text-xs">
            <p>{t('footer.copyright')}</p>
          </div>
        </ScrollAnimation>
      </footer>

      {isQROpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
            <h3 className="text-2xl font-bold mb-4">Scan QR Code</h3>
            <Image
              src="/images/qr-code.jpeg"
              alt="QR Code - Contact ELMADAGASCAR"
              width={256}
              height={256}
              className="w-64 h-64 mx-auto"
            />
            <Button
              variant="primary"
              className="mt-6"
              onClick={() => setIsQROpen(false)}
            >
              Fermer
            </Button>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-0 z-[60] px-6 md:px-20 lg:px-24 xl:px-32">
        <div className="w-full flex justify-end">
          <Link
            href="https://wa.me/261343141649"
            target="_blank"
            className="size-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}