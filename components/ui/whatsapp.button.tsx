import Link from "next/link";
import { MaterialIcon } from "./material.icon";
import { CONTACT_INFO } from "@/constants/contact.constants";

export default function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
      className="fixed bottom-6 right-6 z-50 size-14 bg-primary text-[#111813] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MaterialIcon name="chat" className="text-3xl" />
    </Link>
  );
}