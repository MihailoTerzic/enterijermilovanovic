'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-16 py-6 flex justify-between items-center relative z-50 bg-white text-black">
      <div className="text-2xl font-semibold uppercase tracking-wider">Milovanović</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
        <a href="#">Početna</a>
        <a href="#">Usluge</a>
        <a href="#">Projekti</a>
        <a href="#">Kontakt</a>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-black z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 h-full
          text-black text-xl font-medium z-40 transition-all duration-500
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}
      >
        <a href="#" onClick={() => setIsOpen(false)}>Početna</a>
        <a href="#" onClick={() => setIsOpen(false)}>Usluge</a>
        <a href="#" onClick={() => setIsOpen(false)}>Projekti</a>
        <a href="#" onClick={() => setIsOpen(false)}>Kontakt</a>
      </div>
    </header>
  );
};

export default Navbar;
