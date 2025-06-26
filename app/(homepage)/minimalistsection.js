// app/components/MinimalistSection.tsx

import Image from 'next/image';

const MinimalistSection = () => {
  return (
    <section className="py-20 flex md:flex-row-reverse flex-col-reverse max-w-7xl mx-auto gap-12 items-center">
      {/* Left Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden md:flex-1">
        <Image
          src="/images/bg.jpg" // Replace with actual image
          alt="Modern Minimalist Interior"
          fill
          className="object-cover"
        />
        <span className="absolute top-4 left-4 bg-white text-xs px-3 py-1 rounded-full shadow">
          Georgian Interior
        </span>
      </div>

      {/* Right Content */}
      <div className='md:flex-1 text-black/50'>
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
          Modern Minimalist
        </h2>
        <div className="grid grid-cols-2 gap-y-6 text-center">
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm ">Proizvoda</p>
          </div>
          <div>
            <p className="text-3xl font-bold">20+</p>
            <p className="text-sm ">Projekata</p>
          </div>
          <div>
            <p className="text-3xl font-bold">100+</p>
            <p className="text-sm ">Zadovoljnih klijenata</p>
          </div>
          <div>
            <p className="text-3xl font-bold">1<sup>st</sup></p>
            <p className="text-sm ">Najbolji u Kraljevu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistSection;
