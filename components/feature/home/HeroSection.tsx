import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'

const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8VHBkgzovwDJZEz89KI_gBKX_tigJq_53mA5Ydanxj0xato6pS5m7yCrtBKYeei8JP0EhwKIjkM54bTD1aYcoRqOTfyjsWdry5-X_Rao5ppl6qQ1dW5y5CWQMjpXmPuBD57HwUrChfvYDOSjcdr1GBuVgGy2d61lSf8pvFqd-nD7tZ1RFwl6MNmWaZH5lpVbEx5oxmpGulpOCyekMg81_PVA8kAcJqFFRZZZiYkUgHfZQcdA-BjBhN-_35RjhCjN5PpGeU7oNy8Ga'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${HERO_IMAGE}')`,
        }}
        aria-label="Beautiful baobab trees landscape at sunset in Madagascar"
      />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Badge variant="primary" size="md" className="mb-6 backdrop-blur-md">
          The Pearl of the Indian Ocean
        </Badge>
        
        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
          Welcome to ELMADAGASCAR Tours: Turn your dreams into discovery
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience the unique biodiversity and breathtaking landscapes of Madagascar with the island's premier expert local guides.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
            BOOK YOUR TRIP
          </Button>
          <Button variant="secondary" size="lg" fullWidth className="sm:w-auto">
            EXPLORE DESTINATIONS
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="expand_more" size="xl" className="text-white" />
      </div>
    </section>
  )
}