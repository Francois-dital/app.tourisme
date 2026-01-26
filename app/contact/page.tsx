'use client'

import { useTranslation } from 'react-i18next'
import HeaderApp from '@/components/layout/HeaderApp'
import ContactForm from '@/components/feature/contact/ContactForm'
import ContactSidebar from '@/components/feature/contact/ContactSidebar'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import FooterApp from '@/components/layout/FooterApp'

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <HeaderApp />
      
      <main className="w-full py-8 sm:py-12 flex-grow px-6 md:px-20 lg:px-24 xl:px-32">
        <div className="w-full mb-8 sm:mb-12">
          <ScrollAnimation animation="fade" delay={100}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4">
              {t('contact.title')}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade" delay={200}>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {t('contact.subtitle')}
            </p>
          </ScrollAnimation>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
          <div className="lg:col-span-7">
            <ScrollAnimation animation="card" delay={300}>
              <ContactForm />
            </ScrollAnimation>
          </div>

          <div className="lg:col-span-5">
            <ContactSidebar />
          </div>
        </div>
      </main>
      
      <FooterApp />
    </div>
  )
}