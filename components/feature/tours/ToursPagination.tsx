import { Icon } from '@/components/ui/Icon'

export default function ToursPagination() {
  return (
    <section className="py-12 px-6 md:px-20">
      <div className="flex justify-center gap-2">
        <button className="size-10 flex items-center justify-center rounded-lg bg-white dark:bg-background-dark border border-[#f0f4f0] dark:border-white/10 text-primary hover:bg-primary/10 transition-colors">
          <Icon name="chevron_left" />
        </button>
        
        <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-[#111811] font-bold">
          1
        </button>
        
        <button className="size-10 flex items-center justify-center rounded-lg bg-white dark:bg-background-dark border border-[#f0f4f0] dark:border-white/10 hover:bg-primary/10 transition-colors">
          2
        </button>
        
        <button className="size-10 flex items-center justify-center rounded-lg bg-white dark:bg-background-dark border border-[#f0f4f0] dark:border-white/10 hover:bg-primary/10 transition-colors">
          3
        </button>
        
        <button className="size-10 flex items-center justify-center rounded-lg bg-white dark:bg-background-dark border border-[#f0f4f0] dark:border-white/10 text-primary hover:bg-primary/10 transition-colors">
          <Icon name="chevron_right" />
        </button>
      </div>
    </section>
  )
}