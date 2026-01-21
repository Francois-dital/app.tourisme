import Link from "next/link";
import Image from "next/image";
import { MaterialIcon } from "../ui/material.icon";
import { ToursService } from "@/services/tours.service";

export default function ToursSection() {
  const tours = ToursService.getAllTours();

  return (
    <section className="py-20 bg-background-light dark:bg-[#0a150d] px-4 md:px-20" id="tours">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-primary font-bold uppercase text-sm tracking-widest">
              Adventure Awaits
            </h2>
            <h1 className="text-4xl font-black">Featured Tour Circuits</h1>
          </div>
          <Link href="#" className="text-primary font-bold hover:underline hidden sm:block">
            View All Tours →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="group bg-white dark:bg-[#1a2e20] rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-primary/50 transition-all">
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-[#111813] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {tour.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{tour.title}</h3>
                  <span className="text-secondary font-black text-lg">{tour.price}</span>
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs opacity-60">
                  <span className="flex items-center gap-1">
                    <MaterialIcon name="schedule" className="text-sm" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MaterialIcon name="group" className="text-sm" />
                    {tour.maxGuests}
                  </span>
                </div>
                <p className="text-sm opacity-80 mb-6">{tour.description}</p>
                <Link 
                  href="#booking"
                  className="block w-full text-center py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
                >
                  Select Dates
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}