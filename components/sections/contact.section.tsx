import { MaterialIcon } from "../ui/material.icon";

const contactInfo = [
  {
    icon: "call",
    title: "Phone / WhatsApp",
    details: "+261 34 00 000 00"
  },
  {
    icon: "mail",
    title: "Email",
    details: "contact@madatours.mg"
  },
  {
    icon: "location_on",
    title: "Headquarters",
    details: "Lot 123 Bis, Antananarivo, Madagascar"
  }
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#f0f5f1] dark:bg-background-dark px-4 md:px-20" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-black mb-4">Get in Touch</h1>
              <p className="opacity-70">
                We are based in Antananarivo and operate nationwide. Reach out via any of these channels.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <MaterialIcon name={contact.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold">{contact.title}</h4>
                    <p className="opacity-70">{contact.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-[#1a2e20]">
            <div className="w-full h-[400px] bg-gray-300 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120760.33408013233!2d47.4587843!3d-18.8791902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e155c6563bb%3A0xc0747443f1146747!2sAntananarivo!5e0!3m2!1sen!2smg!4v1620000000000!5m2!1sen!2smg"
                className="w-full h-full grayscale"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}