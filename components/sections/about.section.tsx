import { MaterialIcon } from "../ui/material.icon";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-20 max-w-[1200px] mx-auto" id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">
            Why Travel With Us
          </h2>
          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            Authentic Journeys Across the Red Island
          </h1>
          <p className="text-lg opacity-80 leading-relaxed">
            MadaTours specializes in bespoke travel experiences. We pride ourselves on showing you the hidden gems of Madagascar while ensuring your comfort and safety every step of the way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4 p-4 rounded-xl border border-[#dbe6df] dark:border-[#2a3a2e] bg-white dark:bg-[#1a2e20]">
              <MaterialIcon name="interpreter_mode" className="text-primary text-3xl" />
              <div>
                <h3 className="font-bold">Bilingual Guides</h3>
                <p className="text-sm opacity-70">Expert English & French speakers.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-[#dbe6df] dark:border-[#2a3a2e] bg-white dark:bg-[#1a2e20]">
              <MaterialIcon name="airport_shuttle" className="text-primary text-3xl" />
              <div>
                <h3 className="font-bold">4WD Fleet</h3>
                <p className="text-sm opacity-70">Top-tier off-road vehicles for comfort.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div 
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBngE__fhx7sk9xmejKdNgFo6HibXxlXolo1z0CsYn9FRPF-P4F0FRpiU3dL6SGXBHzPpOQy1xbMLvyXCMTRjp4TM-oNQTjyrOTqx3lqMg2b0bSq3b-Xosqkx9UGJsV-2bBoga0NL8mwRhQxCwfzzg6J7lGftbN79pG4bgKZudTvYyttgmf-Zte4VqQ2BK0I8SckVimM53QtIYNYEicPz-4d46V10LhjQ41Ewa5pgPMJQrL6OGsYgvla4JTjWCCAaqa9yzFk7b7eg")`
            }}
          />
        </div>
      </div>
    </section>
  );
}