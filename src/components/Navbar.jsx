import { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex space-x-6 text-white text-sm">
      <a href="#about" className="hover:text-gray-400 transition">About</a>
      <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
      <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
    </nav>
  );
};

export default Navbar;
