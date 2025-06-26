// app/components/TimelessCharm.tsx

import Image from 'next/image';

const TimelessCharm = () => {
  return (
    <section className="px-6 md:px-16 py-20 flex md:flex-row flex-col-reverse max-w-7xl mx-auto gap-12 items-center">
      {/* Left Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          src="/images/bg.jpg" // Replace with actual image
          alt="Modern Style"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className=''>
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          Elegance • Timeless
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-black/50 mb-4 leading-snug">
          Moderni Stil<br />Vanvremenskog Šarma
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Lorem ispum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="bg-black text-white text-sm px-6 py-3 rounded-full">
          About Us
        </button>
      </div>
    </section>
  );
};

export default TimelessCharm;
