'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bg.jpg"
        alt="Hero background"
        fill
        className="object-cover brightness-50 "
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="md:text-center flex flex-col gap-4 max-w-3xl">
          <h1 className="text-white text-4xl sm:text-6xl lg:text-8xl font-semibold leading-tight">
            Enterijer Centar Milovanović
          </h1>
          <p className="text-white text-base md:hidden leading-snug max-w-md">
             Kompletno uređenje enterijera — svi proizvodi i usluge na jednom mestu.
          </p>
        </div>
      </div>

      {/* Floating Card (Desktop only) */}
      <div className="absolute bottom-6 left-6 z-30 hidden md:flex bg-white/90 p-4 rounded-xl items-center space-x-4 shadow-md max-w-md">
        <div className="w-24 h-16 relative rounded overflow-hidden">
          <Image src="/images/bg.jpg" alt="Mini preview" fill className="object-cover" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Dizajn · Proizvodi · Usluge</p>
          <p className="text-sm font-medium">Svi proizvodi i usluge na jednom mestu.</p>
        </div>
        <button className="ml-auto px-4 py-2 text-sm bg-black text-white rounded-full">
          Pogledaj Usluge
        </button>
      </div>
    </section>
  );
};

export default Hero;
