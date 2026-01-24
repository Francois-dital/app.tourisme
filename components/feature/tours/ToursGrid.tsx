import TourCard from '@/components/ui/TourCard'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface Tour {
  id: number
  title: string
  description: string
  duration: string
  price: string
  image: string
  label?: string
  labelColor?: 'primary' | 'secondary' | 'success'
}

const tours: Tour[] = [
  {
    id: 1,
    title: 'East Madagascar Tour',
    description: 'Traverse through the verdant rainforests of Andasibe, discover rare orchid species, and spot the iconic Indri lemurs in their natural habitat.',
    duration: '11 Days',
    price: '1.500 €',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcNreVX7MOlfHFW3qmvh1p0to3EUkyThdufxpx9DuId__F8VFhIe3If3cv1bMYiqBHY3QYbC5iOMJcQ9kStcnpVsHfMiTxvvLp1c7w2ZSqxvT9_YMoMu4mYX_xbfcvD8T2wn5x9RAxS0nx3L_nmP1rbT51ylApDsRinGX407DTEc4DXh5Z9aNIsvI6du3i-ie9Fgb0p-9bjRxsI3jpwzZUfb9TBhxM6zruCe02UVabI5_w3TfiAkC7yOYf2BaSv-_rliGZSGRLtVJr',
    label: 'Best Seller',
    labelColor: 'primary'
  },
  {
    id: 2,
    title: 'South Madagascar Tour',
    description: 'A diverse journey from the high plateaus to the dry south. Explore Isalo National Park\'s canyons and the unique spiny forests of Tulear.',
    duration: '9 Days',
    price: '1.250 €',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWW3OGALvDoZ7ZNL2Vdm9uIywxOwy2aWpyrPxOoSI4UwNN5dXgvmvQ1hTINB2QbZuuW9k-_-B4BYa7wV-Ju9oVwF1OO2TqIn7dlU4pNfNkCNhcWBF-PXxwtp0xq1DAesD7lnYPj77QIxIJjDPKcNzj-IkRb9Y_8-04hntBAR-7hXqmOCYlEIqhwHU52qA1_HQ7h6h_kwKGfeDAOKtGP7TJMvqu4aZWR3Jw2vZs-4AV4vy9peCr7aeNgZ6kuCIGfLI8PvP7aqAPhm8l'
  },
  {
    id: 3,
    title: 'The Baobab & Tsingy Route',
    description: 'A photographer\'s dream. Witness the Avenue of Baobabs at sunset and hike the surreal limestone labyrinths of Tsingy de Bemaraha.',
    duration: '9 Days',
    price: '1.680 €',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRXtTarNBZ8RkfHrMq0zeeLTFvD4o8d6yyGb4XohGvkiYQarCP_oqHJ2BFY2idO8Ok1ltiOJaQ8RKG6iSba3JatukELqgPGw7IzSByz-X-dmR7L1gY1wmt3LUYW4WVRLdFgg9qTBWwGFckDGoVgXpDaChi0Q_5zp75mdfTcwlohODzeXHtsyA7mxHMJyIoxwmGGJjmvPnFHlIQ8X0aCz9bygIfwUgrB3gGNFICKjgio8QEnbj6hKPSmakpLipkQ2KSqttt3rXcI0jx',
    label: 'Adventure',
    labelColor: 'secondary'
  },
  {
    id: 4,
    title: 'Nosy Be Beach Getaway',
    description: 'Relax on the white sand beaches of Nosy Be. Snorkel in turquoise waters and visit the fragrant ylang-ylang plantations.',
    duration: '7 Days',
    price: '990 €',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVRLXIEipOiOcZM_z4kT35IF5O29isnro5_eM3iyAsL_kd0H4TSuKTqv_ejQ_SkRV5OuntLvHs-RMgtmCZ8_xn-j54CvQGBt-gjfo-IF09_u_SwaEJH05YNT4455orV1bwGQC9nX1XJUMC40zrnojbKZLSIE9sVk9OoQ3mOKdbbrjmsOoHXKjyBc599fkONUTK1gUO9EbTqEoxyCsZsTo8kXhK8RmHQkEzmtLYbGA7_-n49StsHVgE_osxWW3XfJrY13A8F9NKY9S4'
  },
  {
    id: 5,
    title: 'Northern Explorer Circuit',
    description: 'Venture to the remote north. Discover the Emerald Sea, the Amber Mountain, and the unique Red Tsingy formations.',
    duration: '14 Days',
    price: '1.850 €',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYsQ3-mtXuWdHS0tOSxHAvR-XfSQ9Xugk_toceeFw6zcgLx21LjPnlPrd1O-7rwPBE84zJEMYR8fKKSuNr5k2--GaFI31vcgv2ics8OpI4gIkrdoo2-32u3A2hldLCS5Yo7_s4ErWtfAwfOthGvi_yd3Z86hqGCPRm6VHytGN6LWTZ0j_hLxl1kkgmyt5khBGHEY1ul8oO-d-iyKgdYy1H7DoTg9fQrRGtphLassRcdDz_gUGx7XOandQln5jYAcIWny6LgSGJkMs4'
  }
]

export default function ToursGrid() {
  return (
    <section className="py-8 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            title={tour.title}
            days={tour.duration}
            region=""
            price={tour.price}
            description={tour.description}
            image={tour.image}
            label={tour.label}
          />
        ))}
        
        {/* Custom Itinerary Card */}
        <div className="group flex flex-col bg-white dark:bg-background-dark rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-primary transition-all">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-green-800/80 flex items-center justify-center p-6 text-center">
              <div>
                <Icon name="map" size="xl" className="text-white text-5xl mb-2" />
                <p className="text-white font-bold text-lg">More Circuits Coming Soon</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-1 items-center justify-center text-center">
            <h4 className="text-xl font-bold mb-2">Custom Itinerary</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Can't find what you're looking for? Let us design a tailor-made Madagascar experience just for you.
            </p>
            <Button variant="primary" className="w-full">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}