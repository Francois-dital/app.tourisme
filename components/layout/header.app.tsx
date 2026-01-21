"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeaderApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-[#dbe6df] dark:border-[#2a3a2e] px-4 md:px-20 py-3">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#111813] dark:text-white">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight">MadaTours</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#tours" className="text-sm font-medium hover:text-primary transition-colors">
            Tours
          </Link>
          <Link href="#fleet" className="text-sm font-medium hover:text-primary transition-colors">
            Our Fleet
          </Link>
          <Link href="#booking" className="text-sm font-medium hover:text-primary transition-colors">
            Booking
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="#booking"
            className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-[#111813] text-sm font-bold hover:brightness-110 transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}