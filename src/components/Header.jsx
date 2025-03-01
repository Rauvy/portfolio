import Navbar from "./Navbar";

const Header = ({ showHeader }) => {
  if (!showHeader) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#222831] backdrop-blur-md h-14 flex items-center justify-between px-6 border-b border-gray-600">
      <a href="/" className="flex items-center">
        <p>REHINA</p>
      </a>

      <Navbar />

      <a href="#contact" className="bg-white text-black px-4 py-1 rounded-lg text-sm hover:bg-gray-200 transition">
        Hire Me
      </a>
    </header>
  );
};

export default Header;
