import TourCard from '@/components/ui/TourCard'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface Tour {
  id: number
  title: string
  days: string
  region: string
  price: string
  description: string
  image: string
  label?: string
}

const tours: Tour[] = [
  {
    id: 1,
    title: "The Baobab Quest",
    days: "12 Days",
    region: "West Coast",
    price: "$1,850",
    description: "Discover the majestic Avenue of Baobabs and the sharp limestone pinnacles of Tsingy de Bemaraha.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg6pHjXm7ymUldnL9NrWKxzsUoh0Sx2P1yhbd0-LFyfFPnVmrrO1kkGOhRAOFbLJKQg75evbD2M8q54YTJf-fWyXK4BIF3Mrf3Q_S3MsaESZKvT_K4XpXRdecCKaCiXh0503HjJ2S36ekhpmDg2fMNV_bmexTqJ00veMqQS5yQhNNVaUcBeSYifEL6GBiHbxu_PIyjuSK5L6CAmyBlmBh1lLiToYi1K4scTEdaDuMksoxRl-YmoMaZ5dO6lXSSl8BMi1oc3CFTEzym",
    label: "Best Seller",
  },
  {
    id: 2,
    title: "Lemur & Rainforest Expedition",
    days: "10 Days",
    region: "East Coast",
    price: "$1,520",
    description: "Journey into the humid rainforests of Andasibe to hear the haunting call of the Indri Indri lemur.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA92Tqps5f9E518s-IjHpoCqOryhpkbGis6UWQ8pZNsharJS5x_4RL1w9qMAEy4JSNnSIyVk83mnNrFsOMdBvX16rCM-y-o6Bn-NBOpuaZVyVXM30f4m7CYuChKrwYN6gs_p0K4wa5oA0UY7L7i3R_EEoNo8lkG4t1g0jQHlgrtQxdcBFulNrsTchwnUWHqVgiUVx06aLwAkFmgRdCh39f_5b-MWGAAWVYs6-Icn_aHi3aTFFTSYswC4fA1bjWquZjp8djDz7JxzWRp",
  },
  {
    id: 3,
    title: "Nosy Be Beach Escape",
    days: "8 Days",
    region: "North Coast",
    price: "$1,250",
    description: "Relax on world-class beaches, swim with sea turtles, and explore the aromatic spice plantations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOVL5NyX_mob7zJSOHN51TdL7le98hJmLn5pTBn9tTtObPMUs5QMDLlj0xJ8rplW-H9OD9qOqwyDeuEHdN0YJgG7XPRTX5_dG06XwP6Ln5wgRk76pVIcNyyd8yRjmReCBiXfGQx6Oe0nHTYNozRGoz-wjKJe4tUtSmjdlgtm-G11aMuT20twJBej2PRmR_nZBIvFX4GTBTQ4xDKmRlbirutL6NSepr21d9Y0gZcMYxmYLVfZCTotgPGcQkSSOQfh32mk3XXKsYlGw3",
  },
]

export default function TopTours() {
  return (
    <section className="bg-background-light dark:bg-white/5 py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Our Most Loved Adventures</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hand-picked experiences that capture the true essence of Madagascar's spirit and wild beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              title={tour.title}
              days={tour.days}
              region={tour.region}
              price={tour.price}
              description={tour.description}
              image={tour.image}
              label={tour.label}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="ghost" className="inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest border-b-2 border-primary pb-1">
            See All Tour Packages
            <Icon name="arrow_forward" />
          </Button>
        </div>
      </div>
    </section>
  )
}