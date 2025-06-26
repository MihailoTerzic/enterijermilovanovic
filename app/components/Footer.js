// app/components/Footer.tsx


import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-20 pb-12">
      {/* Engage Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl lg:text-6xl font-semibold mb-4">
            Zapocnimo Saradnju.
          </h2>
          <p className="text-gray-400 max-w-xl">
            Svaki prostor ima svoju priču — naš zadatak je da je ispričamo kroz dizajn, funkcionalnost i kvalitetnu izradu. 
            Otvoreni smo za saradnju i nove ideje koje pomeraju granice enterijera.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
          <Image
            src="/images/bg.jpg" // Replace with actual image
            alt="Conversation Room"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm border-t border-gray-700 pt-10">
        {/* About */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">About</h3>
          <p className="text-gray-400">Our Story</p>
          <p className="text-gray-400">Store Locator</p>
          <p className="text-gray-400">Sustainability</p>
          <p className="text-gray-400">Careers</p>
          <p className="text-gray-400">Contact</p>
        </div>

        {/* Customer Service */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">Customer Service</h3>
          <p className="text-gray-400">Prices and Payments</p>
          <p className="text-gray-400">Shipping</p>
          <p className="text-gray-400">Return Policy</p>
          <p className="text-gray-400">Terms of Service</p>
          <p className="text-gray-400">Privacy Policy</p>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">Social Media</h3>
          <p className="text-gray-400">Instagram</p>
          <p className="text-gray-400">Facebook</p>
          <p className="text-gray-400">LinkedIn</p>
        </div>
      </div>

      {/* Brand at Bottom */}
      <div className="mt-12 text-center text-white font-semibold text-lg">
        Enterijer Centar Milovanovic
      </div>
    </footer>
  );
};

export default Footer;
