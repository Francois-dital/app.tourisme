'use client'

import HeaderApp from '@/components/layout/HeaderApp'
import ContactForm from '@/components/feature/contact/ContactForm'
import ContactSidebar from '@/components/feature/contact/ContactSidebar'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import FooterApp from '@/components/layout/FooterApp'

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      
      <main className="max-w-7xl mx-auto px-6 md:px-20 py-12">
        {/* Hero Heading Section */}
        <div className="mb-12">
          <ScrollAnimation animation="fade" delay={100}>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              Start Your Journey with <span className="text-primary">ELMADAGASCAR</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade" delay={200}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Fill out the form below to plan your personalized Malagasy adventure. Our destination experts usually respond within 24 hours with a custom itinerary.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Booking Form */}
          <div className="lg:col-span-7">
            <ScrollAnimation animation="card" delay={300}>
              <ContactForm />
            </ScrollAnimation>
          </div>

          {/* Right: Contact Sidebar */}
          <div className="lg:col-span-5">
            <ContactSidebar />
          </div>
        </div>
      </main>
      
      <FooterApp />
    </div>
  )
}