import HeaderApp from "@/components/layout/header.app";
import FooterApp from "@/components/layout/footer.app";
import HeroSection from "@/components/sections/hero.section";
import AboutSection from "@/components/sections/about.section";
import ToursSection from "@/components/sections/tours.section";
import BookingSection from "@/components/sections/booking.section";
import FleetSection from "@/components/sections/fleet.section";
import ContactSection from "@/components/sections/contact.section";
import WhatsAppButton from "@/components/ui/whatsapp.button";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300">
      <HeaderApp />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ToursSection />
        <BookingSection />
        <FleetSection />
        <ContactSection />
      </main>
      <FooterApp />
      <WhatsAppButton />
    </div>
  );
}