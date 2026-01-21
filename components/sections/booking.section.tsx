"use client";

import { useState } from "react";
import { MaterialIcon } from "../ui/material.icon";

export default function BookingSection() {
  const [selectedDates, setSelectedDates] = useState<number[]>([10, 11, 12, 13, 14, 15, 16, 17]);

  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const emptyDays = 6; // September 2024 starts on Sunday, so 6 empty days

  return (
    <section className="py-24 px-4 md:px-20 bg-white dark:bg-background-dark" id="booking">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase text-sm tracking-widest mb-4">
            Plan Your Adventure
          </h2>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Check Availability & Book
          </h1>
          <p className="max-w-[600px] mx-auto text-lg opacity-70">
            Select your preferred dates and tour package to get started on your journey through Madagascar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calendar */}
          <div className="lg:col-span-7 bg-background-light dark:bg-[#1a2e20] p-8 rounded-3xl border border-[#dbe6df] dark:border-[#2a3a2e] shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MaterialIcon name="calendar_month" className="text-primary" />
                September 2024
              </h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-[#dbe6df] dark:border-[#2a3a2e] hover:bg-white dark:hover:bg-[#0d1b11] transition-all">
                  <MaterialIcon name="arrow_back_ios_new" className="text-sm" />
                </button>
                <button className="p-2 rounded-full border border-[#dbe6df] dark:border-[#2a3a2e] hover:bg-white dark:hover:bg-[#0d1b11] transition-all">
                  <MaterialIcon name="arrow_forward_ios" className="text-sm" />
                </button>
              </div>
            </div>
            
            <div className="calendar-grid mb-2">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <div key={day} className="text-center text-xs font-bold opacity-40 py-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="calendar-grid">
              {Array.from({ length: emptyDays }).map((_, i) => (
                <div key={`empty-${i}`} className="calendar-day empty" />
              ))}
              {calendarDays.map((day) => (
                <div
                  key={day}
                  className={`calendar-day ${
                    day <= 3 ? 'disabled' : ''
                  } ${selectedDates.includes(day) ? 'selected' : ''}`}
                >
                  {day}
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 text-xs font-medium border-t border-[#dbe6df] dark:border-[#2a3a2e] pt-6">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-sm bg-primary" />
                <span>Selected Dates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-sm bg-[#dbe6df] dark:bg-[#2a3a2e]" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-sm bg-secondary" />
                <span>Fully Booked</span>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-primary/10 dark:bg-primary/5 p-8 rounded-3xl border border-primary/20">
              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-70">Tour Itinerary</label>
                  <select className="w-full rounded-xl border-[#dbe6df] dark:bg-[#0d1b11] dark:border-[#2a3a2e] focus:ring-primary focus:border-primary py-3">
                    <option>The Baobab Quest (Western Circuit)</option>
                    <option>Turquoise Waters (Northern Paradise)</option>
                    <option>The Great South (Southern Trail)</option>
                    <option>Custom Expedition</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold opacity-70">Participants</label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      defaultValue="2"
                      className="w-full rounded-xl border-[#dbe6df] dark:bg-[#0d1b11] dark:border-[#2a3a2e] focus:ring-primary focus:border-primary py-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold opacity-70">Vehicle Type</label>
                    <select className="w-full rounded-xl border-[#dbe6df] dark:bg-[#0d1b11] dark:border-[#2a3a2e] focus:ring-primary focus:border-primary py-3">
                      <option>Land Cruiser</option>
                      <option>Hilux Pickup</option>
                      <option>Safari Wagon</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-70">Contact Email</label>
                  <input
                    type="email"
                    placeholder="explorer@email.com"
                    className="w-full rounded-xl border-[#dbe6df] dark:bg-[#0d1b11] dark:border-[#2a3a2e] focus:ring-primary focus:border-primary py-3"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-[#111813] font-black py-4 rounded-xl hover:shadow-lg transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                >
                  <MaterialIcon name="verified" />
                  Request Booking
                </button>
                
                <p className="text-[10px] text-center opacity-60 font-medium uppercase tracking-widest">
                  Instant confirmation for groups under 4
                </p>
              </form>
            </div>
            
            <div className="bg-white dark:bg-[#1a2e20] p-6 rounded-2xl border border-[#dbe6df] dark:border-[#2a3a2e] flex items-center gap-4">
              <div className="size-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <MaterialIcon name="help" />
              </div>
              <div>
                <h4 className="font-bold">Need a custom date?</h4>
                <p className="text-sm opacity-70">
                  Our team can arrange private departures anytime of the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}