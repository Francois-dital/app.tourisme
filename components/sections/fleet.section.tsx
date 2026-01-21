import Image from "next/image";
import { MaterialIcon } from "../ui/material.icon";
import { ToursService } from "@/services/tours.service";

export default function FleetSection() {
  const vehicles = ToursService.getAllVehicles();

  return (
    <section className="py-20 px-4 md:px-20 bg-accent/30 dark:bg-[#1a2e20]/20" id="fleet">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-primary font-bold uppercase text-sm tracking-widest mb-4">
          Our Adventure Fleet
        </h2>
        <h1 className="text-4xl md:text-5xl font-black mb-6">
          Notre Flotte de Véhicules
        </h1>
        <p className="max-w-[700px] mx-auto text-lg opacity-70">
          Explore Madagascar in comfort with our specialized 4WD fleet, meticulously maintained for the island&apos;s diverse terrains.
        </p>
      </div>
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white dark:bg-[#1a2e20] rounded-3xl p-6 shadow-xl border border-[#dbe6df] dark:border-[#2a3a2e] flex flex-col group">
            <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-gray-100 dark:bg-[#0d1b11]">
              <Image
                src={vehicle.image}
                alt={vehicle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 bg-secondary text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase shadow-lg">
                Included in all circuits
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{vehicle.title}</h3>
            
            <div className="space-y-3 mb-8">
              {vehicle.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm opacity-80">
                  <MaterialIcon name={feature.icon} className="text-primary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-6 border-t border-[#dbe6df] dark:border-[#2a3a2e] flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {vehicle.category}
              </span>
              <MaterialIcon name="verified" className="text-primary" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}