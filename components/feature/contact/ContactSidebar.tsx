import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

const contactInfo = [
  {
    icon: 'location_on',
    title: 'Antsirabe Office',
    content: 'IVH 45 Bis Ankorondrano,\nAntananarivo, Madagascar'
  },
  {
    icon: 'call',
    title: 'Call Us Direct',
    content: '+261 34 31 416 49\n+261 20 44 555 66'
  },
  {
    icon: 'mail',
    title: 'Email Support',
    content: 'contact@elmadagascar-tours.mg'
  }
]

export default function ContactSidebar() {
  return (
    <div className="space-y-8">
      {/* Contact Card */}
      <ScrollAnimation animation="card" delay={200}>
        <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-100 dark:border-white/10 p-8">
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <ScrollAnimation key={info.title} animation="slide-right" delay={250 + (index * 100)}>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Icon name={info.icon} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">{info.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScrollAnimation animation="scale" delay={550}>
              <Link
                href="https://wa.me/261343141649"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </Link>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scale" delay={600}>
              <Link
                href="tel:+261343141649"
                className="flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-700 text-white py-3 rounded-lg font-bold hover:bg-opacity-80 transition-all"
              >
                <Icon name="call" size="sm" />
                Call Agent
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>

      {/* Map Section */}
      <ScrollAnimation animation="card" delay={300}>
        <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-100 dark:border-white/10 p-2 overflow-hidden">
          <div className="h-[300px] w-full rounded-lg overflow-hidden relative">
            {/* Google Maps Embed */}
            <iframe
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120760.33408013233!2d47.4587843!3d-18.8791902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e155c6563bb%3A0xc0747443f1146747!2sAntananarivo!5e0!3m2!1sen!2smg!4v1620000000000!5m2!1sen!2smg"
              style={{ border: 0 }}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold shadow-sm">
              IVH 45 Bis Ankorondrano, Antananarivo
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Trust Badge */}
      <ScrollAnimation animation="scale" delay={400}>
        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
          <div className="flex items-center gap-4">
            <Icon name="verified" className="text-4xl text-primary" />
            <div>
              <p className="font-bold text-sm">Certified Local Guide</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Official license issued by the Ministry of Tourism Madagascar. Your safety and satisfaction are our priorities.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}