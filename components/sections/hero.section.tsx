import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKeqdvq3uvFaOmbI17dnFmOQgINV1gmzkfPzJ7lpvsMjFIQSWowUWtxUNS19AJqZZI3xeVVhZEqwW4KIeuMPjNyNMSbqmFbVwQV9SRMymb65MWYUPfqb-anfI5HlhfxV5N-qMae8u4xLBktZH06n9qr7nTWoqj1toKBuVvcEwaLXIeJ9KpVajWXjaLSPAz81WQLHPOWHeLl7kBDAalukzDbuNdisDEmD5c_pF36koY5TInd93zvbHW2CXzd8-_szS1qq9P7bAm6Q")`
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight max-w-[900px]">
          Experience the Magic of <span className="text-primary">Madagascar</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl mt-6 max-w-[600px]">
          From the Avenue of Baobabs to unique lemurs, explore the world&apos;s eighth continent with expert local guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link 
            href="#tours"
            className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary text-[#111813] text-lg font-bold hover:scale-105 transition-transform"
          >
            Explore Our Tours
          </Link>
          <Link 
            href="#about"
            className="flex items-center justify-center rounded-lg h-14 px-8 glass-effect text-white text-lg font-bold hover:bg-white/20 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}