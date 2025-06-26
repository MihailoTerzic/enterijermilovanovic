// app/components/CollectionGrid.tsx


import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const collections = [
  { title: 'Mondrian', image: '/images/bg.jpg' },
  { title: 'Nirnia', image: '/images/bg.jpg' },
  { title: 'Artex', image: '/images/bg.jpg' },
  { title: 'Brera', image: '/images/bg.jpg' },
  { title: 'Alea Pro', image: '/images/bg.jpg' },
  { title: 'Nirnia', image: '/images/bg.jpg' },
];

const CollectionGrid = () => {
  return (
    <section className="px-6 md:px-16 py-20 max-w-8xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <h2 className="text-5xl font-semibold text-black/50">Istrazite Nasu Kolekciju</h2>
          <p className="text-gray-600 mt-2 max-w-xl">
           lorem ispum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <button className="bg-black text-white text-sm px-6 py-3 rounded-full">View More</button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden group shadow-md">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-[250px] object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div className="absolute bottom-4 right-4 inline-flex gap-4 items-center justify-end w-full text-white text-lg font-medium">
              {item.title}
               <div className=" bg-white text-black p-2 rounded-full -rotate-45">
              <ArrowRight size={16} className='' />
            </div>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionGrid;
