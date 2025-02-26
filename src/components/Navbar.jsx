import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col items-start space-y-2 text-white text-lg">
      
      {/* Desktop Navbar (Column Layout) */}
      <div className="hidden md:flex flex-col space-y-3">
        <a href="#about" className="hover:text-gray-400 transition">About</a>
        <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg mt-2" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-rounded text-white text-3xl">
          {isMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Dropdown Menu (Column Layout) */}
      {isMenuOpen && (
        <div className="w-full bg-zinc-900 p-5 flex flex-col items-start space-y-3 md:hidden mt-2">
          <a href="#about" className="block text-white text-lg py-2 hover:text-gray-400 transition">About</a>
          <a href="#projects" className="block text-white text-lg py-2 hover:text-gray-400 transition">Projects</a>
          <a href="#contact" className="block text-white text-lg py-2 hover:text-gray-400 transition">Contact</a>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
